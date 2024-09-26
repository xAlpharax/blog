+++
title = "Some cool stuff"
date = 2024-03-02T00:00:00+03:00
draft = false

[taxonomies]
tags = ["test"]

[extra]
disable_comments = true
toc = true
+++

Let's test manual anchor link declaration:

# Heading 1 {#h1}

## Heading 2

Nice, let's test internal linking now: [my link](@/posts/typography.md#h1)

---

Nice! Now let's test shortcodes with a youtube iframe embed video:

{{ youtube(id="dCKeXuVHl1o") }}

---

{{ youtube(id="dCKeXuVHl1o", autoplay=true) }}

---

{{ youtube(id="9h2Z0I2jxRU", autoplay=true) }}

Cool! All these features should be plenty enough for now. I will add some others as we go.
