---
layouts: page
title: Among The Rubble Collective
permalink: /among-the-rubble
---

{% assign posts = site.posts | where_exp: "post", "post.categories contains 'among_the_rubble'" %}
{% for post in posts %}
  <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
  <p>posted on {{ post.date | date: '%B %d, %Y' }}</p>
  <p>{{ post.excerpt }}</p>
{% endfor %}
<button><a href='https://chuffed.org/project/gaza-city-evacuation' target='_blank'>Visit the Campaign</a></button>