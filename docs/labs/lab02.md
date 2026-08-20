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

**Module 1** · Thursday 3 September 2026
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

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb
```

## Deliverables

- Completed activity notebook
- Lab quiz on Canvas (have `water_con` ready)
