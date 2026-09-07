---
layout: page
title: Lab 02 · Python fundamentals
parent: Labs
nav_order: 2
permalink: /labs/lab02/
description: Lists vs arrays, indexing, CSV import, and NaN-aware statistics.
---

# Lab 02 · Python fundamentals
{: .no_toc }

**Module 1**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab02-python-fundamentals" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Lists vs arrays, zero-based indexing, importing a CSV, and why NaN-aware statistics matter for real sensor data. The dataset is daily water use at Jester Hall.

## Learning objectives

1. Index 1D and 2D NumPy arrays
2. Load a CSV with pandas and extract a column as an array
3. Use `nanmin` / `nanmax` / `nanmean` when data contain missing values

## Notebooks

**`lab02-tutorial.ipynb`** — Tutorial

{% include notebook.html path="labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb" %}

**`lab02-activity.ipynb`** — In-lab activity

{% include notebook.html path="labs/lab02-python-fundamentals/notebooks/lab02-activity.ipynb" %}

## Data

- `data/JES_Water.csv` — Jester Hall water, 2009–2017

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab02-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas (have `water_con` ready). This is the graded item.

The Gradescope autograder reports feedback out of 100 points, one item per variable the
exercises ask you to define, but the submission is optional and does not count toward your
grade. The lab quiz on Canvas is the graded item. The autograder re-runs your notebook from a clean session, so use
**Runtime > Restart session and run all** and confirm everything works top to bottom before
you submit. Keep the variable names exactly as the starter cells give them, and replace every
`--` placeholder. You can submit as many times as you like before the deadline.

Lab slides are posted on Canvas.
