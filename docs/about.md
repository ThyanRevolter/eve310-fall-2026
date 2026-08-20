---
layout: page
title: About
nav_order: 8
description: Course policies and information.
---

# About
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Course

**EVE 310 · Sustainable Systems Engineering** is an undergraduate course at The University of Texas at Austin. Students learn data logging, analysis, and optimization — regression, classification, clustering, and linear optimization — in Python.

Course materials live in the [GitHub repository](https://github.com/{{ site.github_repo }}). This website is the student-facing index for labs, schedule, and setup.

## Meetings

- **Lectures:** Tuesday and Thursday, 12:30–2:00 pm, location TBD
- **Labs:** Thursday, 2:00–3:00 pm, location TBD
- **Office hours:** Monday 3:00–3:50 pm, and by appointment

## Course material policy

Per the syllabus, course materials may not be shared outside the class without the instructor's written permission. Keep the repository private, or restrict it to enrolled students, and do not repost material elsewhere.

{: .warning }
A GitHub Pages site is public on the web even if the repository is private. This site lists schedule and lab descriptions; notebooks and data stay in the private repo.

## Resources

- [Canvas](https://canvas.utexas.edu/) — quizzes, grades, and announcements
- [Course repository](https://github.com/{{ site.github_repo }}) — labs, assignments, and shared Python helpers
- [Setup guide]({% link setup.md %}) — Git, `uv`, and JupyterLab

## Local preview of this site

The website sources live in `docs/` and use the [Just the Class](https://github.com/kevinlin1/just-the-class) template (Just the Docs theme).

```bash
cd docs
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000/eve310-fall-2026/](http://localhost:4000/eve310-fall-2026/).
