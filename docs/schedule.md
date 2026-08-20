---
layout: page
title: Schedule
nav_order: 4
description: The weekly event schedule.
---

# Weekly Schedule

Lectures Tue & Thu 12:30–2:00 pm. Lab Thursday 2:00–3:00 pm. Instructor office hours Monday 3:00–3:50 pm (room TBD). TA office hours Wednesday 3:00–4:30 pm in EER 4.704 (EER 5.702 on Nov 18 and Dec 2).

{% for schedule in site.schedules %}
{{ schedule }}
{% endfor %}
