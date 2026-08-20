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

**Module 3** · Thursday 15 October 2026
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

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb
```

## Deliverables

- Completed notebook with the precision/recall figure
- Lab quiz on Canvas
