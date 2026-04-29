---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layouts: home
---

#### Join Among the Rubble's Campaign to evacuate a family from Gaza while the border is open. We are at 68% of the goal. Help us reach 100%! <a href="https://chuffed.org/project/gaza-city-evacuation">DONATE TODAY</a>
<p></p>
<ul>
  {% for post in site.posts %}
    <section>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>posted on {{ post.date | date: '%B %d, %Y' }}</p>
      <p>  {{post.excerpt}} </p>
    </section>
  {% endfor %}
</ul>