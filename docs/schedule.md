---
layout: page
title: Schedule
nav_order: 4
description: The weekly event schedule.
---

# Weekly Schedule

Lectures Tue & Thu 12:30–2:00 pm. Lab Thursday 2:00–3:00 pm. Office hours Monday 3:00–3:50 pm. Rooms are TBD.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
