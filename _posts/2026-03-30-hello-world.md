---
layout: post
title: "Hello, World!"
tags: [meta]
unlisted: true
permalink: /preview/a20aebe9/hello-world
sitemap: false
---

![Hello World](/assets/img/hello-world.png)

First post on this blog. Mostly a place to dump thoughts on software engineering, architecture patterns, and the occasional rant about LLMs pretending they know what SOLID means.

## Why a blog on a static site?

Because WordPress is for people who enjoy updating plugins at 2am. Jekyll + GitHub Pages gives me:

- Markdown files in a git repo
- Zero infrastructure to manage
- Deploy on push
- No database, no cookies, no drama

## Mermaid works too

Here's an architecture diagram just because I can:

```mermaid
graph LR
    A[Markdown] --> B[Jekyll]
    B --> C[GitHub Pages]
    C --> D[www.seesharp.ch]
    D --> E[Your browser]
```

That's it. Ship it.
