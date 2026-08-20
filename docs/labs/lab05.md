---
layout: page
title: Lab 05 · Linear regression
parent: Labs
nav_order: 5
permalink: /labs/lab05/
description: sklearn LinearRegression, R², residuals, and one-hot encoding.
---

# Lab 05 · Linear regression
{: .no_toc }

**Module 2** · Thursday 24 September 2026
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab05-linear-regression" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Train/test splits, scikit-learn `LinearRegression`, R² and adjusted R², residual plots, and one-hot encoding of a categorical predictor (work status) on the lecture traffic example.

## Learning objectives

1. Fit univariate and multivariate linear models with sklearn
2. Report coefficients, R², and adjusted R² on train and test
3. One-hot encode a categorical variable

## Notebooks

**`lab05-tutorial.ipynb`** — Worked sklearn tutorial

{% include notebook.html path="labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb" %}

**`lab05-traffic-example.ipynb`** — Same data with NumPy and seaborn

{% include notebook.html path="labs/lab05-linear-regression/notebooks/lab05-traffic-example.ipynb" %}

**`lab05-activity.ipynb`** — Coefficient / split / random_state questions

{% include notebook.html path="labs/lab05-linear-regression/notebooks/lab05-activity.ipynb" %}

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb
```

## Deliverables

- Answers to the activity questions in the notebook
- Lab quiz on Canvas
