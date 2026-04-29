---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layouts: home
---

<ul>
  {% for post in site.posts %}
    <section>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>posted on {{ post.date | date: '%B %d, %Y' }}</p>
      <p>  {{post.excerpt}} </p>
    </section>
  {% endfor %}
</ul>