---
layout: page
title: Lab 08 · Classification thresholds
parent: Labs
nav_order: 8
permalink: /labs/lab08/
description: Sweep a decision threshold and plot precision vs recall.
---

# Lab 08 · Classification thresholds
{: .no_toc }

**Module 3**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab08-classification-thresholds" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Apply last week's loops to logistic-regression probabilities from lecture: sweep the decision threshold and plot precision vs recall.

## Learning objectives

1. Convert probabilities to labels with a threshold
2. Loop over a grid of thresholds
3. Plot precision and recall against threshold

## Notebooks

**`lab08-activity.ipynb`** — Threshold sweep (tutorial + activity)

{% include notebook.html path="labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb" %}

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab08-activity.ipynb` with the precision/recall figure, downloaded as `.ipynb` and uploaded to Gradescope
- Lab quiz on Canvas
