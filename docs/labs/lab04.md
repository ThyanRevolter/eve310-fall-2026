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

**Module 1**
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

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab04-activity.ipynb` with the saved histogram, downloaded as `.ipynb` and uploaded to Gradescope
- Debugging script fixed
- Lab quiz on Canvas
