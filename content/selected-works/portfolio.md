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
    - name: AWS
      homepageUrl: https://aws.amazon.com/
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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat duis aute irure dolor in.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat.

## Nihil molestiae consequatur, vel illum qui dolorem?

Sed ut perspiciatis unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut  odit aut fugit, sed quia consequuntur magni dolores eos qui ratione  voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam  eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat  voluptatem.

::article-image-caption{src="/img/blog-article-2.jpg" :alt="alt" caption="Photo taken from my personal collection"}
::

Et harum quidem rerum facilis est et expedita distinctio. Nam libero  tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo  minus id quod maxime placeat facere possimus, omnis voluptas assumenda  est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates  repudiandae sint et molestiae non recusandae.

Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis  voluptatibus maiores alias consequatur aut perferendis doloribus  asperiores repellat.

::article-footer-portfolio{:demoUrl="demoUrl" :sourceCodeUrl="sourceCodeUrl"}