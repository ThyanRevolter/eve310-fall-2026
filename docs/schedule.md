---
layout: page
title: Schedule
nav_order: 4
description: The weekly event schedule.
---

# Weekly Schedule

Lectures Tue & Thu 12:30–2:00 pm in CPE 2.210. Lab Thursday 2:00–3:00 pm in EER 1.504. Instructor office hours Tuesday 2:00–2:50 pm in ECJ 4.710. TA office hours Wednesday 5:00–6:00 pm in EER 4.704.

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
