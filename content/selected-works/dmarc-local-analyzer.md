---
title: DMARC Local Analyzer (WIP)
subtitle: Human-readable DMARC report parser and email authentication validator.

sourceCodeUrl: 'https://github.com/marchewadm/DMARC-Local-Analyzer'

image: portfolio/selected-works/dmarc-local-analyzer-1
alt: Screenshot of Postman sending a request to a demo endpoint

description: DMARC Local Analyzer is a tool that converts complex XML reports into clear, human-readable insights. It validates domain configurations including DMARC policies, DKIM, and SPF records to ensure compliance and improve deliverability. The application supports automatic periodic fetching and manual uploads, offers a demo mode without database storage, and enables historical report tracking for long-term monitoring.

technologies:
    - name: PHP
      homepageUrl: https://www.php.net/
    - name: JavaScript
      homepageUrl: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
    - name: TypeScript
      homepageUrl: https://www.typescriptlang.org/
    - name: Vue.js
      homepageUrl: https://vuejs.org/
    - name: Laravel
      homepageUrl: https://laravel.com/
    - name: Tailwind CSS
      homepageUrl: https://tailwindcss.com/
    - name: Pinia
      homepageUrl: https://pinia.vuejs.org/
    - name: MySQL
      homepageUrl: https://www.mysql.com/
    - name: Docker
      homepageUrl: https://www.docker.com/

createdAt: 2025-05-01
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

At some point, I really had enough of Google's services. You know, I stopped using YouTube directly and instead switched to alternatives like Odysee or YouTube wrappers (like FreeTube). I stopped using Google search and even earlier I had already switched exclusively to Firefox. Yes, I know there are "better" versions of Chrome, but at the end of the day, it's still Chromium-based and I wanted to support other initiatives a bit, so Firefox was the obvious choice. Following up, I decided to stop using Gmail. Weeeeeeeell, that's where the real struggle began - what email provider was I supposed to use instead?

## Looking for an Email Provider

About 10 years ago, I occasionally used ProtonMail, but it left a bad impression on me, it carried a kind of "wannabe hacker" vibe for me and that wasn't really the image I wanted. Plus, I'd be using this new email address publicly, and for the reasons mentioned earlier, ProtonMail didn't really feel like the right fit. Eventually, I stumbled across Fastmail, which I now use. I won't go into details about why I chose them over others, as this isn't the place for it - maybe I'll write a blog post about it sometime.

My address ends with @fastmail.com - nothing wrong with that, I still sometimes use it, but I also wanted to have my own domain. That way, I'd have my own email address and if at some point Fastmail no longer suited me, I could easily migrate to another provider without having to change my email address across dozens of accounts on random websites. It's a time-saver and just much more convenient.

## Okay, Cool... But What Does This Story Have to Do With the App?

Well, once you buy your own domain and want to configure your email service, things look a bit different compared to using a provider like Gmail or Fastmail. They take care of all the configuration for you - your emails just get delivered and spam ends up where it should be... in the spam folder.

But if you're running your own email, let's say **@example.com**, suddenly you need to set up SPF records so mail servers know which services are allowed to send emails from your domain. On top of that, you'll need to configure DKIM to ensure that the email really comes from you and wasn't altered with along the way. And finally, you need a DMARC policy to tell other mail servers what to do with emails that fail those checks (SPF and DKIM) - whether to reject them or maybe just mark them as spam?

Sounds complicated? For some people, maybe, and that's totally fine.

## Everything Works... Until It Doesn't

You might think it's as simple as copy-pasting a few DNS records from your provider's documentation (Fastmail in my case), and boom, problem solved. In reality, though, different services might be sending emails on behalf of your domain, and that's when things can get tricky.

Or you start receiving DMARC reports in the form of giant XML files which, let's be honest, are not exactly human-friendly to read. That's why tools like my parser exist. Sometimes, you won't even realize something is wrong until someone tells you, "hey, your email landed in my spam folder"!

## The Idea Behind DMARC Parsers

There are lots of DMARC parsers out there - some free, some paid, some running locally, and others as online services (where instead of DMARC reports being sent to your inbox, they go straight to the service provider).

I built my parser for two main reasons. First, I wanted to really understand how DMARC works under the hood and how to configure it properly. Second, I wanted to get better at PHP and Laravel. My only experience with PHP was back in school, and to be honest, I didn't like it much - mostly because my teacher wasn't exactly teaching us best practices. Well, sometimes that's just how it goes. :smiley:

## What Does My Parser Actually Do?

While it's not fully finished yet, it allows you to link multiple domains to a single user (and there can be multiple users in the app). Users can either manually upload reports or set up the app to automatically fetch them from an email account where the reports are sent. The parsed results are stored in a database, allowing users to review their report history over time. The app accepts reports in XML or ZIP format, parses them, and presents the data in an easy to understand format. It clearly shows who, when, and in what context emails were sent from your domain.

It helps assess whether your DMARC, SPF and DKIM policies are correctly configured and enables trend tracking over time.

## Practical Benefits

Thanks to this tool, I can easily check if someone is trying to spoof my domain, make sure all integrations are properly configured, and most importantly, switch email providers in the future without worrying that something might silently break along the way.

In short - I have control over my own email.

::article-footer-portfolio{:sourceCodeUrl="sourceCodeUrl"}