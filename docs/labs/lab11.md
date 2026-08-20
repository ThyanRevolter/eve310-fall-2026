---
layout: page
title: Lab 11 · Dairy-farm challenge
parent: Labs
nav_order: 11
permalink: /labs/lab11/
description: Team challenge predicting farm-level carbon footprint.
---

# Lab 11 · Dairy-farm carbon footprint
{: .no_toc }

**Module 2** · Thursday 5 November 2026
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab11-dairy-farm-challenge" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Team challenge: predict farm-level carbon footprint from feed, land, manure, and energy metrics. Compare a 3-variable linear model, a full linear model, and random forests on a 70/30 split (`random_state=25`).

## Learning objectives

1. Fit `reg3` and `regAll` linear models and print coefficients
2. Report test R², MSE, MAE and predicted-vs-true plots
3. Repeat with a random forest

## Notebooks

**`lab11-activity.ipynb`** — Challenge notebook

{% include notebook.html path="labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb" %}

## Data

- `data/Dairy-Farm-Dataset.csv` — 10,000-row synthetic farm table

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb
```

## Deliverables

- Working notebook or `.py` uploaded to Canvas with the competition header (team names and EIDs)
- Each team may win at most one challenge
