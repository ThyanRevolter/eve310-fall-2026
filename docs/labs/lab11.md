---
layout: page
title: Lab 11 · Comparing regression models
parent: Labs
nav_order: 11
permalink: /labs/lab11/
description: Fit a line with the normal equation and with LinearRegression, score models on the testing rows with MSE, MAE and R², fit a random forest and spot overfitting, and let one new column beat it.
---

# Lab 11 · Comparing regression models
{: .no_toc }

**Module 2**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab11-dairy-farm-challenge" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Which model predicts best on data it has not seen, and can you say why? The tutorial fits three models to a year of a Texas city's peak electricity demand against the day's temperature and scores all three on the same testing days. The straight line is fitted twice, with the normal equation from lecture in NumPy and with `LinearRegression`, which finds exactly the same betas. Two new scores join R²: the mean squared error and the mean absolute error. A random forest follows the curve that the line misses but overfits its training days, and a squared-temperature column turns the line into a curve that beats the forest. The activity does the same on 10,000 dairy farms: a linear model and a forest on ten columns, scored on the testing farms, and then one new column built from the units of two others.

## Learning objectives

1. Compute least-squares betas with the normal equation in NumPy; show `LinearRegression` agrees
2. Score a model on testing rows with MSE, MAE and R²: what each measures, in which units
3. Fit a random forest and spot overfitting from its training vs testing error
4. Build a column from existing ones; judge whether a simple model with the right column beats a more complex one

## Notebooks

**`lab11-tutorial.ipynb`** — Tutorial, typed along in lab

{% include notebook.html path="labs/lab11-dairy-farm-challenge/notebooks/lab11-tutorial.ipynb" %}

**`lab11-activity.ipynb`** — Three questions on 10,000 dairy farms: fit a linear model and a random forest on ten columns, score both on the testing farms and check the forest for overfitting, then add nitrogen per kg of milk as a new column and refit

{% include notebook.html path="labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb" %}

## Least-squares explorer

Drag a straight line through the tutorial's training days and watch the residuals and the sum of squared errors (SSE). The equation under the plot shows the betas as they change. One button jumps to the normal-equation line, the one `LinearRegression` finds. Switch to the curve and to the testing days to see which model predicts best on days it has not seen; the table also lists the tutorial's forest. Open it beside the tutorial.

[Open the least-squares explorer]({{ '/labs/lab11-least-squares-explorer.html' | relative_url }}){: .btn .btn-purple target="_blank" rel="noopener"}

## Data

- `data/power_demand.csv` — 365 days of a Texas city (synthetic): `temp_f` (the day's average temperature, °F) and `demand_mw` (the day's peak electricity demand, MW)
- `data/Dairy-Farm-Dataset.csv` — 10,000 dairy farms (synthetic): ten practice and efficiency columns and `Carbon_footprint` (kg CO₂e per kg of fat-and-protein-corrected milk); the activity lists every column with its units

{: .note }
The setup cell downloads both files into `DATA_DIR`. Keep `random_state=25` in the activity's split and `random_state=0` in every `RandomForestRegressor` so that everyone's numbers are identical.

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab11-activity.ipynb` with the two fitted models, the labeled betas and the two-practice change, the four MAEs (both models, the forest on its training farms, and the know-nothing baseline), the copies with `N_per_kg_milk`, the refitted model, its beta and its testing MAE, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas. This is the graded item.

Lab slides are posted on Canvas.
