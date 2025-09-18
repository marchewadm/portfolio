---
title: Chat Roulette
subtitle: A chat roulette system with category-based matching and optional accounts.

sourceCodeUrl: 'https://github.com/marchewadm/chat-roulette'

image: portfolio/selected-works/chat-roulette-1
alt: Screenshot of the Chat Roulette app registration form

description: A web application inspired by the chat roulette concept, allowing users to connect based on selected categories. Account creation is optional but provides extra features such as profile personalization and friend management for continuing conversations. This was my first larger project built with Vue.js. Looking back, I can see many aspects I would approach differently today, but I believe every developer should go through such an experience - after all, we learn best from our mistakes. Nonetheless, I am fine with this project as it is, as it reminds me of my early days in web development.

technologies:
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: Node.js
      homepageUrl: https://nodejs.org/
    - name: Express.js
      homepageUrl: https://expressjs.com/
    - name: Vue.js
      homepageUrl: https://vuejs.org/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: VueUse
      homepageUrl: https://vueuse.org/
    - name: VeeValidate
      homepageUrl: https://vee-validate.logaretm.com/v4/
    - name: Yup
      homepageUrl: https://github.com/jquense/yup/
    - name: Tailwind CSS
      homepageUrl: https://tailwindcss.com/
    - name: Socket.io
      homepageUrl: https://socket.io/
    - name: PostgreSQL
      homepageUrl: https://www.postgresql.org/
    - name: Azure
      homepageUrl: https://azure.microsoft.com/
    - name: SendGrid API
      homepageUrl: https://sendgrid.com/en-us/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2023-12-17
---

::article-button-exit{buttonType="selectedWorks"}
::

# {{ $doc.title }}

::article-subtitle
{{ $doc.subtitle }}
::

::article-tech-stack{:technologies="technologies"}
::

::article-image-caption{:src="image" :alt="alt" :caption="alt"}
::

At some point, I decided it was time to learn a frontend framework. I tried React first, because, well, it's the most popular one, so it must be good, right? Of course, I don't want to start any "framework wars" here - everyone has their own preferences. Personally, React didn't really click with me. I wouldn't mind working with it daily if I had to, but since I had some reservations, I started looking for alternatives. And that's how I ended up discovering Vue.js.

This project was where I took my very first steps with Vue. To be honest, it's far from ideal - not even halfway decent. It's full of bad practices, from file and folder structure decisions to questionable code choices, and even Git usage. There aren't even any migrations here, despite the fact that the app uses a database! I remember manually creating tables and columns in PostgreSQL, as if I was living in the Stone Age. But hey - everyone has to start somewhere, huh? Oh, and maybe today I wouldn't choose Express.js for this type of project either. :roll_eyes:

## More About the Project

The idea behind the app was to act as a chat roulette. Users could see the total number of people online to check whether it was even worth trying to find someone to talk to (**hint**: it wasn't!). They could either create an account or stay "anonymous". Without an account, though, they had no profile personalization and no ability to send friend requests.

I knew that on some chat roulette platforms, people love filtering their matches by categories, so I implemented that feature here as well.

For the backend, I used Express.js with Socket.IO, and for the database, PostgreSQL. The frontend was built with Vue.js. At the time, I didn't use TypeScript because I hadn't learned it yet - I wanted to get comfortable with plain JavaScript first. I did return to this project later with the idea of migrating it to TypeScript, but honestly, once I saw the state of the code, I thought: better to rewrite it from scratch than try to refactor this mess. Maybe one day.

I also styled everything with Tailwind CSS, building all components from scratch instead of relying on any UI libraries.

::article-image-caption{src="portfolio/selected-works/chat-roulette-2" alt="Screenshot of the chat" caption="Screenshot of the chat"}
::

## Final Words

Everyone starts somewhere - some better, some worse. Today we have plenty of tools that make development so much easier, but how are beginners supposed to use them if they don't even know what problems those tools are solving?

I think that's the perfect way to describe this project: back then, I didn't know about most of these tools. And even if I had heard of them, I didn't know how to actually use them.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}