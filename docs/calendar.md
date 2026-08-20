---
layout: page
title: Calendar
nav_order: 3
description: Listing of course modules and weekly lab topics.
---

# Calendar

Weekly lecture and lab topics. Lab dates follow [Labs]({{ '/labs/' | relative_url }}) and are placeholders until the academic calendar is confirmed.

{% for module in site.modules %}
{{ module }}
{% endfor %}
