---
layout: page
title: Lab 04 · Plotting and EDA
parent: Labs
nav_order: 4
permalink: /labs/lab04/
description: Time series, histograms, box plots, and descriptive statistics.
---

# Lab 04 · Plotting and EDA
{: .no_toc }

**Module 1** · Thursday 17 September 2026
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab04-exploratory-data-analysis" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Convert dates, draw time series / histograms / box plots, save figures, and compute mean, median, trimmed mean, variance, standard deviation, and IQR.

## Learning objectives

1. Plot a datetime series with labeled axes
2. Create histograms and box plots
3. Save figures and compute descriptive statistics

## Notebooks

**`lab04-tutorial.ipynb`** — Tutorial

{% include notebook.html path="labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb" %}

**`lab04-activity.ipynb`** — In-lab activity

{% include notebook.html path="labs/lab04-exploratory-data-analysis/notebooks/lab04-activity.ipynb" %}

**`debugging_exercise.py`** — Short debugging script (intentional bugs)

[GitHub](https://github.com/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab04-exploratory-data-analysis/notebooks/debugging_exercise.py){: .btn .btn-outline }

## Data

- `data/JES_Water_Lab4_Tutorial.csv` — tutorial extract
- `data/JES_Water_Lab4_Activity.csv` — activity extract

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb
```

## Deliverables

- Activity notebook plus saved histogram
- Debugging script fixed
- Lab quiz on Canvas
