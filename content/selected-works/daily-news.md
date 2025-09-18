---
title: Daily News Mobile App
subtitle: A mobile application for reading news articles from various sources.

sourceCodeUrl: 'https://github.com/marchewadm/dailynews'

image: portfolio/selected-works/daily-news-1
alt: Screenshot of the latest articles

description: Daily News is a mobile application written in TypeScript using the Ionic Framework and Vue.js, designed for browsing the latest news articles from various sources. It uses Firebase for user data storage, authentication, and saving selected articles. Building it gave me a hands-on look at how modern mobile apps are structured and allowed me to deepen my knowledge of TypeScript and Vue.js. The app is available on both Android and iOS.

technologies:
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: TypeScript
      homepageUrl: https://www.typescriptlang.org/
    - name: Ionic Framework
      homepageUrl: https://ionicframework.com/
    - name: Vue.js
      homepageUrl: https://vuejs.org/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: VeeValidate
      homepageUrl: https://vee-validate.logaretm.com/v4/
    - name: Zod
      homepageUrl: https://zod.dev/
    - name: Firebase
      homepageUrl: https://firebase.google.com/
    - name: News API
      homepageUrl: https://newsapi.org/

createdAt: 2025-06-26
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

I wanted to learn a framework that could be used to build mobile applications. I decided to go with the Ionic Framework and gave myself five calm evenings to complete the task. I thought it would be a good idea to use some API and a database, but nothing too fancy.

So, I kept brainstorming what I could build. A few more interesting project ideas came to mind, and I'm still keeping them safe in my head for the future. :wink: But this article isn't about those projects - maybe one day I'll get to them.

## So What's My Project About?

To keep things simple, I chose to use News API and Firebase. The app itself isn't particularly groundbreaking - it fetches the latest world news, and a logged-in user can read articles and save them for later, in case they want to come back to them, let's say, when catching up on politics.

## Why Ionic?

Mostly because I feel most comfortable working with Vue.js. Yes, I know I could have gone with Quasar or even other solutions like NativeScript. But at that moment, Ionic seemed like the simplest and fastest to pick up.

Was it really the easiest? I don't know, since I haven't tried the alternatives. But I do remember that at times I wanted to throw the project away because I constantly felt like Ionic wasn't really listening to me and was doing its own thing. By the time I'm writing this article, three months have passed since I built the app, so I don't remember all the details, but I do know those issues were there… maybe something with element positioning? :thinking:

::article-image-caption{src="portfolio/selected-works/daily-news-2" alt="Screenshot of the user's saved articles" caption="Screenshot of the user's saved articles"}
::

## Was It Worth It?

I still consider it a good learning experience because I also got to use Firebase - before this, I hadn't spent more than five minutes with it. And at least now I know that Vue.js is capable of powering some sort of mobile applications... though in the future I might give Quasar or React Native a try.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}