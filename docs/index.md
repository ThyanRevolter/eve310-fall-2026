---
layout: home
title: Home
nav_order: 1
description: EVE 310 Sustainable Systems Engineering, Fall 2026.
permalink: /
seo:
  type: Course
  name: EVE 310
---

# EVE 310 · Sustainable Systems Engineering
{: .fs-9 }

Fall 2026 · The University of Texas at Austin
{: .fs-6 .fw-300 }

Introduction to data logging, analysis, and optimization — regression, classification,
clustering, and linear optimization — implemented in Python.

[View labs]({% link labs/index.md %}){: .btn .btn-purple }
[Set up your computer]({% link setup.md %}){: .btn .btn-outline }
[Weekly schedule]({% link schedule.md %}){: .btn .btn-outline }

---

| | |
| --- | --- |
| **Instructor** | Dr. Greg Hendrickson ([greg.hendrickson@utexas.edu](mailto:greg.hendrickson@utexas.edu)) |
| **TA** | Adhithyan Sakthivelu ([adhiths@utexas.edu](mailto:adhiths@utexas.edu)) |
| **Lectures** | Tue & Thu, 12:30–2:00 pm, TBD |
| **Labs** | Thu, 2:00–3:00 pm, TBD |
| **Office hours** | Mon 3:00–3:50 pm, and by appointment |
| **Canvas** | [canvas.utexas.edu](https://canvas.utexas.edu/) |
| **Repository** | [ThyanRevolter/eve310-fall-2026](https://github.com/ThyanRevolter/eve310-fall-2026) |

## Course modules

| Module | Topic | Tools |
| --- | --- | --- |
| 1 | Introduction to data collection | Tinkercad, ELEGOO UNO, Arduino IDE, `pyserial` |
| 2 | Introduction to regression | `pandas`, `matplotlib`, `seaborn`, `scikit-learn` |
| 3 | Introduction to classification | `scikit-learn`, `statsmodels` |
| 4 | Introduction to clustering | `scikit-learn` |
| 5 | Introduction to optimization | `scipy.optimize`, `pulp`, `gurobipy`, `pymoo` |

Each module has one homework assignment, lecture and lab quizzes, and in-class examples.

## Latest announcements

{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements limit: 3 %}
{{ announcement }}
{% endfor %}

[All announcements]({% link announcements.md %}){: .btn .btn-outline }
