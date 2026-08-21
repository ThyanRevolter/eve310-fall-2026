---
layout: page
title: About
nav_order: 6
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

Lab notebooks live in the [GitHub repository](https://github.com/{{ site.github_repo }}) and open directly in Google Colab. This website is the student-facing index for labs, schedule, and the lab workflow. Assignments, due dates, quizzes, and grades are on [Canvas](https://utexas.instructure.com/courses/1450736), which is the source of truth for anything with a deadline.

## Meetings

- **Lectures:** Tuesday and Thursday, 12:30–2:00 pm, location TBD
- **Labs:** Thursday, 2:00–3:00 pm, location TBD
- **Instructor office hours:** Monday 3:00–3:50 pm, location TBD, and by appointment
- **TA office hours:** Wednesday 3:00–4:30 pm, EER 4.704 (EER 5.702 on Nov 18 and Dec 2)

## Course material policy

Per the syllabus, course materials may not be shared outside the class without the instructor's written permission. Keep the repository private, or restrict it to enrolled students, and do not repost material elsewhere.

{: .warning }
A GitHub Pages site is public on the web even if the repository is private. Colab opens notebooks straight from the repository, so the repository has to stay public for the lab links and the notebooks' data downloads to work for students.

## Resources

- [Canvas](https://utexas.instructure.com/courses/1450736) — assignments, due dates, quizzes, grades, and announcements
- [Gradescope](https://www.gradescope.com/) — where completed lab activity notebooks are uploaded
- [Lab workflow]({{ '/setup/' | relative_url }}) — Colab, Copy to Drive, and submitting a `.ipynb`
- [Course repository](https://github.com/{{ site.github_repo }}) — lab notebooks, data, and slides

## Local preview of this site

The website sources live in `docs/` and use the [Just the Class](https://github.com/kevinlin1/just-the-class) template (Just the Docs theme).

```bash
cd docs
bundle install
bundle exec jekyll serve
```

Then open [http://localhost:4000/eve310-fall-2026/](http://localhost:4000/eve310-fall-2026/).
