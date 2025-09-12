---
title: LLM API Aggregator
subtitle: Simplifying access to multiple LLM APIs in one place.

sourceCodeUrl: 'https://github.com/marchewadm/llm-api-aggregator-backend'

image: /img/work-1.jpg
alt: The project's photo sample

description: LLM API Aggregator is a tool that allows users to store and manage chats from various LLMs in one place, making them easier to organize and access. While similar concepts already existed, I decided to build my own version as a way to learn and practice FastAPI and SQLAlchemy. The application follows a layered architecture with controllers, services and the repository pattern. It was also my first larger project written in TypeScript, where I focused on applying good coding practices, while at the same time improving my Vue.js skills. Additionally, I integrated AWS, using S3 (via the Python AWS SDK, Boto3) and took my first steps in working with Redis. As of now, the application supports both the OpenAI API and the Gemini API.

technologies:
    - name: Python
      homepageUrl: https://www.python.org/
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: TypeScript
      homepageUrl: https://www.typescriptlang.org/
    - name: FastAPI
      homepageUrl: https://fastapi.tiangolo.com/
    - name: Pydantic
      homepageUrl: https://docs.pydantic.dev/latest/
    - name: SQLAlchemy
      homepageUrl: https://www.sqlalchemy.org/
    - name: Alembic
      homepageUrl: https://alembic.sqlalchemy.org/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: VueUse
      homepageUrl: https://vueuse.org/
    - name: VeeValidate
      homepageUrl: https://vee-validate.logaretm.com/v4/
    - name: shadcn-vue
      homepageUrl: https://www.shadcn-vue.com/
    - name: Zod
      homepageUrl: https://zod.dev/
    - name: Tailwind CSS
      homepageUrl: https://tailwindcss.com/
    - name: Cypress
      homepageUrl: https://www.cypress.io/
    - name: PostgreSQL
      homepageUrl: https://www.postgresql.org/
    - name: Redis
      homepageUrl: https://redis.io/
    - name: AWS
      homepageUrl: https://aws.amazon.com/
    - name: OpenAI API
      homepageUrl: https://openai.com/api/
    - name: Gemini API
      homepageUrl: https://ai.google.dev/gemini-api/docs/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2024-04-17
---

::article-button-exit{buttonType="selectedWorks"}
::

# {{ $doc.title }}

::article-subtitle
{{ $doc.subtitle }}
::

::article-tech-stack{:technologies="technologies"}
::

::article-image-caption{:src="image" :alt="alt" caption="Photo taken from my personal collection"}
::

Times are changing, people adapt, but some things remain problematic. That's exactly how I felt when I had to use multiple LLMs at the same time - juggling several tabs with ChatGPT, Gemini, maybe even Claude. And it wasn't always about using the ready-made products... I also wanted to experiment with their APIs. That's when the idea of building an aggregator for different LLMs came to my mind.

Sure, I know similar solutions already existed (though fewer than today), but I wanted to have my own version - something I could learn from while building.

And indeed, I learned a lot. I had already played with Python before, had some basic knowledge of TypeScript and Vue.js, but this was the project where I finally felt comfortable - you know that feeling when you're not blindly following tutorials anymore, but actually know what you're doing?

## What I Learned from This Project

I rebuilt this project a few times, even over something as basic as backend folder structure. That's the "freedom" you get with frameworks like FastAPI - it doesn't force an opinionated structure. A valuable lesson for me, because it made me appreciate batteries-included frameworks like Django or Laravel.

That said, FastAPI is still an amazing choice for many projects. As the name suggests, it's fast - like really fast. You can spin up an API in under 5 minutes and most of the time goes into downloading dependencies rather than writing the API itself. Plus, it's Python, which brings both simplicity and flexibility.

But was FastAPI the right choice for this project? Probably not. I only realized that once the project grew larger, and I started missing the ready-made solutions that other frameworks provide out of the box.

## Architecture and Patterns

I thought it might be worth splitting responsibilities a bit and following a structure with repositories, services, and controllers. In FastAPI, controllers are basically routers.

For example, let's take a look at some controller:

```python
from fastapi import APIRouter


router = APIRouter(prefix="/user", tags=["user"])


@router.patch("/update-password", response_model=UserUpdatePasswordResponse)
async def update_user_password(
    auth: AuthDependency,
    user_service: UserServiceDependency,
    payload: UserUpdatePasswordRequest,
):
    """
    Update the user's password by user ID.
    """

    return user_service.update_user_password(auth.user_id, payload)
```

In the service layer, I handled the business logic - for example, verifying the current password before calling the repository to update it.

I also split hashing logic into a separate utility (HashUtil), where I used Bcrypt to handle create_hash and verify_hash, while Pydantic models provided responses with default messages.

```python
def update_user_password(
    self, user_id: int, payload: UserUpdatePasswordRequest
) -> UserUpdatePasswordResponse:
    """
    Update a user's password by ID.

    Args:
        user_id (int): The ID of the user to update.
        payload (UserUpdatePasswordRequest): The payload containing the current and new password.

    Raises:
        HTTPException: Raised with status code 400 if the current password is incorrect.
        HTTPException: Raised with status code 404 if the user is not found.

    Returns:
        UserUpdatePasswordResponse: The response containing a message if the operation is successful.
            Message can be customized, but defaults to the one in the schema.
    """

    user = self.repository.get_one_with_selected_attributes_by_condition(
        ["password"], "id", user_id
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="User not found."
        )
    if not hash_util.verify_hash(
        payload.current_password.get_secret_value(), user.password
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Please check your credentials and try again.",
        )

    hashed_new_password = hash_util.create_hash(
        payload.new_password.get_secret_value()
    )

    self.repository.update_password_by_id(user_id, hashed_new_password)
    return UserUpdatePasswordResponse()
```

A repository method might look like this:

```python
def update_password_by_id(
    self, user_id: int, hashed_new_password: str
) -> None:
    """
    Update the user's password by user id.

    Args:
        user_id (int): User id.
        hashed_new_password (str): Hashed new password.

    Returns:
        None
    """

    self.db.execute(
        update(self.model)
        .where(self.model.id == user_id)
        .values({self.model.password: hashed_new_password})
    )
    self.db.commit()
```

## Pydantic

An absolutely fantastic tool. Really. I used it in this project as often as I could - for request validation, response serialization and even application settings (src/core/config.py). It made my code much more reliable and readable.

::article-image-caption{src="/img/blog-article-2.jpg" :alt="alt" caption="Photo taken from my personal collection"}
::

## Working with AWS

Initially, I had bigger plans (like hosting the whole app), but AWS costs would have been too much. Still, AWS turned out to be useful. I especially liked working with S3, which I integrated through Boto3 (AWS SDK for Python).

I created an S3Service responsible for file management (uploading, downloading, deleting). The idea was that a user might want to send a file to their LLM for analysis and later revisit that chat. S3 made this possible - simple and effective. Cool.

## Frontend Side of Things

As I mentioned earlier, this was my first web dev project where I finally felt comfortable while coding. Sure, I had to read documentation and watch few tutorials, but that's exactly the magic of programming in my opinion - adapting to a new environment.

I had some basic Vue.js experience before, but only on a very basic level. It was here that I finally started using different libraries - for form animations, for UI components and for customizing them. This was also where I finally got to use TypeScript the way the docs recommend and I really started to understand why people appreciate it so much. Even if I return to this project after some time, I'll still be able to tell what's going on in the code.

That's also when I started following conventions like conventional commits and managing multiple Git branches effectively.

## Final Thoughts

So, was it worth building this project? I think so. Apart from improving my Python, Vue and TypeScript skills, I also improved my PostgreSQL knowledge, got to work with SQLAlchemy and Redis for caching, learned migrations and Alembic, practiced integrating multiple services, started using a logger, learned how to connect several APIs at once, and tested my application properly. That's actually quite a lot of knowledge packed into a single project.

If anyone's interested in the project, you can check it out on my GitHub. There's also a direct link to the repo below.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}