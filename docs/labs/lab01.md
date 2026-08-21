---
layout: page
title: Lab 01 · Python intro
parent: Labs
nav_order: 1
permalink: /labs/lab01/
description: Types, arithmetic, NumPy, and a reverse-osmosis cost activity.
---

# Lab 01 · Python intro
{: .no_toc }

**Module 1**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab01-python-intro" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

First Jupyter session: types, arithmetic, and NumPy, then a short reverse-osmosis cost calculation so the syntax is used on an environmental-engineering problem.

## Learning objectives

1. Use variables, arithmetic, and print in a Jupyter notebook
2. Call common NumPy math functions
3. Complete the RO plant cost activity

## Notebooks

**`lab01-tutorial.ipynb`** — Worked Python/NumPy tutorial

{% include notebook.html path="labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb" %}

**`lab01-activity.ipynb`** — RO treatment-plant calculations

{% include notebook.html path="labs/lab01-python-intro/notebooks/lab01-activity.ipynb" %}

**`python_tutorial_commands.py`** — Longer command reference (optional)

[GitHub](https://github.com/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab01-python-intro/notebooks/python_tutorial_commands.py){: .btn .btn-outline }

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab01-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope
- Lab quiz on Canvas

The activity notebook is auto-graded out of 100 points, one graded item per variable the
exercises ask you to define. The autograder re-runs your notebook from a clean session, so use
**Runtime > Restart session and run all** and confirm everything works top to bottom before
you submit. Keep the variable names exactly as the starter cells give them. You can submit as
many times as you like before the deadline.
