---
title: Recommendation System (WIP)
subtitle: A movie recommendation system using NLP and cosine similarity.

sourceCodeUrl: 'https://github.com/marchewadm/movie-recommendation-model'

image: portfolio/selected-works/recommendation-system-1
alt: Screenshot of the FastAPI OpenAPI docs

description: A movie recommendation system built using NLP and cosine similarity. It analyzes user preferences and movie features from the MovieLens dataset to generate personalized recommendations. The trained model is served through a FastAPI backend exposing an API, while Laravel manages users, role-based access control (RBAC), watched movies, generates insights, and integrates with the TMDB API, using Redis for caching. Finally, Nuxt.js provides an intuitive interface to explore recommendations, view interactive charts, and track viewing history and preferences over time.

technologies:
    - name: Python
      homepageUrl: https://www.python.org/
    - name: PHP
      homepageUrl: https://www.php.net/
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: TypeScript
      homepageUrl: https://www.typescriptlang.org/
    - name: FastAPI
      homepageUrl: https://fastapi.tiangolo.com/
    - name: Laravel
      homepageUrl: https://laravel.com/
    - name: Nuxt.js
      homepageUrl: https://nuxt.com/
    - name: Pandas
      homepageUrl: https://pandas.pydata.org/
    - name: Scikit-learn
      homepageUrl: https://scikit-learn.org/
    - name: Matplotlib
      homepageUrl: https://matplotlib.org/
    - name: NumPy
      homepageUrl: https://numpy.org/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: Tailwind CSS
      homepageUrl: https://tailwindcss.com/
    - name: MySQL
      homepageUrl: https://www.mysql.com/
    - name: Redis
      homepageUrl: https://redis.io/
    - name: AWS
      homepageUrl: https://aws.amazon.com/
    - name: TMDB API
      homepageUrl: https://developer.themoviedb.org/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2025-06-12
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

Everyone has faced that late night dilemma: what should I watch? It's a terrible feeling and a huge waste of time. You're preparing your dinner, want to watch something, so you start searching. But sometimes, picky people exist. So you search and search... and your dinner gets cold. You try websites with recommendations, but either the genres don't fit, or the movies that look interesting have already been seen. And just like that, your dinner is cold.

## Why?

I always wanted to try my hand at machine learning. Okay, fine, I'm not good at it. But so what? I still wanted to give it a shot. I could have taken shortcut and connected to an API from some LLM provider. Or even better, I could have asked the LLM directly. But that doesn't sound as fun, does it? So I decided to learn something new.

## How?

I downloaded the MovieLens dataset, which contained various information about movies, such as titles, genres, user ratings, tags used to search for a particular movie, and so on. Then I started creating the first repository in this project, which deals solely with the model. I know what the structure of a typical web application should look like, but I didn't know what the folder structure of an application that processes this data from the dataset, trains, and predicts could look like - for this purpose, I used the directory structure proposed by :prose-a{text="Cookiecutter Data Science" title="Open the Cookiecutter Data Science website in a new tab" target="_blank" href="https://cookiecutter-data-science.drivendata.org/#directory-structure"}.

My first step was exploring the data in Jupyter Notebook, creating charts to understand it better. Then I cleaned the data, removing unnecessary information. I combined tags for each movie - for example, if a movie had tags like **funny** and **animation**, they would be merged into a single string **funny animation** in a new tags column. Next, I merged grouped tags with TMDB IDs, added rating statistics (average rating and rating counts), weighted genres to reflect their importance in text-based similarity, and finally created movie profiles - a single textual representation per movie combining title, weighted genres and tags.

## Feature Engineering and Similarity

Using these movie profiles, I applied TF-IDF vectorization and cosine similarity to numerically represent movies and measure similarity.

::code-block
```python
from sklearn.feature_extraction.text import TfidfVectorizer


tfidf_vectorizer = TfidfVectorizer(ngram_range=(1, 2), min_df=3)
tfidf_matrix = tfidf_vectorizer.fit_transform(movies_df["movie_profile"])
```
::

Then, I computed the cosine similarity:

::code-block
```python
from sklearn.metrics.pairwise import cosine_similarity


cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
```
::

I also created a mapping from movie titles to DataFrame indices to allow quick lookup:

::code-block
```python
movie_id_to_index = pd.Series(movies_df.index.values, index=movies_df["movieId"])
```
::

## Recommendation Algorithm

The core recommendation function finds movies similar to a given movie, applying optional filters like genres, tags and minimum rating counts to improve relevance.

::code-block
```python
import numpy as np


def find_movie_recommendations(
    movie_id: int,
    movie_index_map: pd.Series,
    movies_dataframe: pd.DataFrame,
    similarity_matrix: np.ndarray,
    n_recommendations: int = 10,
    target_genres: list[str] = None,
    target_tags: list[str] = None,
    min_rating_count: int = 50,
) -> pd.DataFrame:
    """Recommends movies similar to the given movie based on cosine similarity.

    The function uses a precomputed cosine similarity matrix to find movies most
    similar to the one specified by `movie_id`. Results can be filtered by genre,
    tag, and minimum number of ratings.

    Args:
        movie_id (int):
            The ID of the movie to find recommendations for.
        movie_index_map (pd.Series):
            A mapping from movieId to the corresponding row index in the similarity matrix and movies DataFrame.
        movies_dataframe (pd.DataFrame):
            The DataFrame containing movie metadata, such as title, genres, tags, average ratings, and rating count.
        similarity_matrix (np.ndarray):
            Matrix of cosine similarity scores between movies.
        n_recommendations (int):
            Number of recommendations to return.
            Defaults to 10.
        target_genres (list[str] | None):
            List of genres to filter recommendations by.
            If provided, only movies that share at least one of the specified genres will be returned.
        target_tags (list[str] | None):
            List of tags to filter recommendations by.
            If provided, only movies that share at least one of the specified tags will be returned.
        min_rating_count (int):
            Minimum number of ratings a recommended movie must have.
            This helps filter out obscure movies with unreliable averages.
            Defaults to 50.

    Returns:
        pd.DataFrame:
            A DataFrame containing recommended movies.
    """

    if movie_id not in movie_index_map:
        raise ValueError(f"Movie ID {movie_id} not found in the dataset.")

    recommendations = []

    target_genres_lower = (
        [genre.strip().lower() for genre in target_genres] if target_genres else []
    )
    target_tags_lower = (
        [tag.strip().lower() for tag in target_tags] if target_tags else []
    )

    movie_index = movie_index_map[movie_id]

    similarity_scores = list(enumerate(similarity_matrix[movie_index]))
    similarity_scores = sorted(similarity_scores, key=lambda x: x[1], reverse=True)[
        1:
    ]  # Remove the first row, as it always is the movie provided by the user.

    for similar_movie_index, similarity_score in similarity_scores:
        movie = movies_dataframe.iloc[similar_movie_index].copy()

        genres = (
            [genre.strip().lower() for genre in movie["genres"].split("|") if genre]
            if pd.notna(movie["genres"])
            else []
        )

        tags = (
            [tag.strip().lower() for tag in movie["tags"].split() if tag]
            if pd.notna(movie["tags"])
            else []
        )

        if target_genres_lower and not any(
            genre in genres for genre in target_genres_lower
        ):
            continue
        if target_tags_lower and not any(tag in tags for tag in target_tags_lower):
            continue
        if movie["rating_count"] < min_rating_count:
            continue

        movie["similarity_score"] = similarity_score
        recommendations.append(movie)

        if len(recommendations) >= n_recommendations:
            break

    if not recommendations:
        raise LookupError(f"No recommendations found for movie ID {movie_id}.")

    recommendations_df = pd.DataFrame(recommendations).sort_values(
        by=["similarity_score", "average_rating"], ascending=[False, False]
    )

    return recommendations_df
```
::

For example, if you choose Pulp Fiction (1994), the algorithm generates a list of relevant recommendations based on textual similarity and metadata. To make things a bit easier, let's set a limit of 3 recommendations.

::code-block
```python
# 680 is the ID for Pulp Fiction (1994)
movie_recommendations = find_movie_recommendations(
    680, movie_id_to_index, movies_df, cosine_sim, 3
)
```
::

And for Pulp Fiction, we get the following recommendations:

::code-block
```json
{
  "recommendations": [
    {
      "tmdbId": 115,
      "similarityScore": 0.35814
    },
    {
      "tmdbId": 101,
      "similarityScore": 0.27574
    },
    {
      "tmdbId": 550,
      "similarityScore": 0.26478
    }
  ]
}
```
::

The **tmdbId** values correspond to the following movies: **The Big Lebowski (1998)**, **Léon: The Professional (1994)**, and **Fight Club (1999)**.

## What About the Web App?

To serve the model, I used FastAPI. When the server starts, it loads the model into memory, so it doesn't have to reload it every time someone queries the API - that would be a waste of resources. Currently, the model is stored in the **models/** folder, but in the near future, I plan to integrate AWS services for this purpose.

The backend is handled with Laravel, using Sanctum for authentication and role-based access. Users can store watched movies, view their activity, track genre preferences over time, and access data enriched with the TMDB API. API calls are cached using Redis, and MySQL stores all data.

And finally, Nuxt.js provides a user interface to explore recommendations, view interactive charts and track their viewing history. The frontend handles UI only. All the "heavy lifting" is done by Laravel, which communicates with the model served by FastAPI.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}