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

**Module 1** · Thursday 27 August 2026
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

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb
```

Bring a laptop with the course environment set up. See the [setup guide]({% link setup.md %}).

## Deliverables

- Completed `lab01-activity.ipynb`
- Lab quiz on Canvas
