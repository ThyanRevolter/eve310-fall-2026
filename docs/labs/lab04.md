---
layout: page
title: Lab 04 · Plotting and Exploratory Data Analysis
parent: Labs
nav_order: 4
permalink: /labs/lab04/
description: Time series, histograms, box plots, and descriptive statistics.
---

# Lab 04 · Plotting and Exploratory Data Analysis
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

**`lab04-debugging.ipynb`** — Debugging exercise: one cell with intentional bugs to fix

{% include notebook.html path="labs/lab04-exploratory-data-analysis/notebooks/lab04-debugging.ipynb" %}

## Data

- `data/JES_Water_Lab4_Tutorial.csv` — tutorial extract
- `data/JES_Water_Lab4_Activity.csv` — activity extract

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope for feedback

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- Lab quiz on Canvas (have `water_df`, the three figures, and the Part F statistics ready). This is the graded item.
- `lab04-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope. **This submission is
  not graded** and does not count toward your final grade.
- The debugging notebook is worked in lab and not submitted.

The Gradescope autograder is there for feedback only. It re-runs your notebook from a clean
session and reports, part by part, whether the dataframe, each figure, the saved PDF, and each
statistic are right, so use **Runtime > Restart session and run all** and confirm everything works
top to bottom before you download. Keep the variable names exactly as the starter cells give them
(`fig1`, `fig2`, `fig3`, `water_iqr`, ...), and replace every `--` placeholder. You can submit as
many times as you like. The Canvas quiz asks about the values and plots you produce in the
activity, so finish it before you take the quiz.

Lab slides are posted on Canvas.
