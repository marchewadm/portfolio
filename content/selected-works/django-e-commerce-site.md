---
title: Django E-commerce Site
subtitle: Simple e-commerce website built with Django where users can browse products, add them to cart, and place orders.

sourceCodeUrl: 'https://github.com/marchewadm/floresta'

image: portfolio/selected-works/floresta-1
alt: Screenshot of the subpage featuring easy-care plants

description: This project was developed as part of an assignment for the Advanced Python Programming Techniques course at my university. It is one of the tasks required for the course, where the goal was to create a simple e-commerce website using Django, allowing users to browse products, add them to their cart, and place orders.

technologies:
    - name: Python
      homepageUrl: https://www.python.org/
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: SCSS
      homepageUrl: https://sass-lang.com/
    - name: SQLite
      homepageUrl: https://sqlite.org/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2023-11-02
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

This was the project where I could finally use Python for something other than automating my daily tasks or doing web scraping. It's a relatively simple project, but it still laid down some solid foundations for my path into web development.

The main idea was to build an online store where users could browse products, add them to their carts, and place orders. On the other side, the administrator could add products to the catalog and manage ongoing orders.

## How I Built It

The project was built entirely with Django, from backend to frontend, using the Django template engine. On the frontend, I used JavaScript to integrate Swiper.js for showcasing new arrivals, add small animations (for example showing success or error states), handle cart interactions, implement lazy loading for images, and embed a map with Leaflet. Styling was done with SCSS.

Later on, I revisited this project and decided to add a Dockerfile so it can run inside a Docker container.

::article-image-caption{src="portfolio/selected-works/floresta-2" alt="Screenshot of the homepage" caption="Screenshot of the homepage"}
::

## Final Words

A very simple project, but one that gave me the first real foundations of how web applications can be structured. Looking back, I see how basic it is - but that's exactly what makes it important in my learning path.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}