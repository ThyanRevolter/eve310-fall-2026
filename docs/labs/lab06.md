---
layout: page
title: Lab 06 · Regression features
parent: Labs
nav_order: 6
permalink: /labs/lab06/
description: Outliers, interactions, scaling, and dummy-coded energy models.
---

# Lab 06 · Regression features
{: .no_toc }

**Module 2**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab06-regression-features" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Build a more realistic energy-use model: drop 3-sigma outliers, add an interaction, scale numeric columns, dummy-code season/day type/class session, then plot predictions on a two-month window.

## Learning objectives

1. Remove statistical outliers
2. Create interaction terms and scale features
3. Dummy-code categoricals with `get_dummies` and fit a linear model

## Notebooks

**`lab06-tutorial.ipynb`** — Jester East energy, min-max normalization

{% include notebook.html path="labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb" %}

**`lab06-activity.ipynb`** — ECJ energy, z-score standardization

{% include notebook.html path="labs/lab06-regression-features/notebooks/lab06-activity.ipynb" %}

## Data

- `data/JES_Energy_Lab6Tutorial.csv` — tutorial data
- `data/ECJ_Energy_Lab6Activity.csv` — activity data

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab06-activity.ipynb` with train and test R², downloaded as `.ipynb` and uploaded to Gradescope
- Lab quiz on Canvas
