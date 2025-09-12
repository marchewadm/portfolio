---
title: marchewa.dev
subtitle: A personal portfolio website showcasing my projects and skills.

demoUrl: 'https://marchewa.dev'
sourceCodeUrl: 'https://github.com/marchewadm/portfolio'

image: /img/work-1.jpg
alt: The project's photo sample

description: A personal portfolio website, designed in Figma with mobile-first principles, developed using Nuxt.js and styled with Tailwind CSS. It features a blog section powered by Nuxt Content, where I share articles on web development, programming and computer science in general. The site also showcases a selection of my projects, each with detailed descriptions, technologies used and links to repositories containing the source code.

technologies:
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: TypeScript
      homepageUrl: https://www.typescriptlang.org/
    - name: Nuxt.js
      homepageUrl: https://nuxt.com/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: VueUse
      homepageUrl: https://vueuse.org/
    - name: VeeValidate
      homepageUrl: https://vee-validate.logaretm.com/v4/
    - name: Radix Vue
      homepageUrl: https://www.radix-vue.com/
    - name: Zod
      homepageUrl: https://zod.dev/
    - name: Tailwind CSS
      homepageUrl: https://tailwindcss.com/
    - name: Netlify
      homepageUrl: https://www.netlify.com/
    - name: Cloudinary
      homepageUrl: https://cloudinary.com/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2024-12-05
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

I finally decided to build my own portfolio… and after half a year I can proudly say the website is finished. Sure, it could have been done faster, or even slower - but that doesn't matter. What matters is the final result, and I'm happy with it. Well, almost happy... there's always something that could be improved. And I'm sure some people would say that basically everything here needs to be improved! :smile:

It was definitely a challenging path - a lot of learning (mainly design), some refactoring... even my Figma draft was created from scratch at least three times. I remember how I really liked my very first design, but once I applied it to HTML and CSS I was disappointed. That's when I decided to go for more muted colors. So if anyone ever wondered why I picked the current color palette - there's your answer.

Instead of Vue.js, I decided to go one step further and use Nuxt.js, which definitely makes life easier and, most importantly, saves me from having to deal with tons of imports at the beginning of every file. On top of that, thanks to Nuxt Content, I can conveniently write articles in Markdown - and I really appreciate this feature.

## What's Next?

Hmm, hard to say. I've already seen some other designs that I'd like to borrow ideas from, so maybe I'll tweak the navigation a bit in the future. For now, I'm fine with the current one, but you know how it is - once something new catches your eye, you just keep chasing after it.

::article-image-caption{src="/img/blog-article-2.jpg" :alt="alt" caption="Photo taken from my personal collection"}
::

Oh, and of course… now that I finally have a place to showcase my projects, you can bet I'll be sharing them here! :wink:

::article-footer-portfolio{:demoUrl="demoUrl" :sourceCodeUrl="sourceCodeUrl"}