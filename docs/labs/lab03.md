---
layout: page
title: Lab 03 · pandas dataframes
parent: Labs
nav_order: 3
permalink: /labs/lab03/
description: Inspect, reshape, and index pandas dataframes.
---

# Lab 03 · pandas dataframes
{: .no_toc }

**Module 1** · Thursday 10 September 2026
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab03-pandas-dataframes" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

pandas dataframes are the default table type for the rest of the course. Inspect size and types, rename/drop/add columns, and select with loc/iloc.

## Learning objectives

1. Use `head`, `shape`, `describe`, and `info`
2. Rename, drop, and add columns
3. Index with `loc` and `iloc`

## Notebooks

**`lab03-tutorial.ipynb`** — Tutorial

{% include notebook.html path="labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb" %}

**`lab03-additional-examples.ipynb`** — Adding columns from scratch

{% include notebook.html path="labs/lab03-pandas-dataframes/notebooks/lab03-additional-examples.ipynb" %}

**`lab03-activity.ipynb`** — In-lab activity

{% include notebook.html path="labs/lab03-pandas-dataframes/notebooks/lab03-activity.ipynb" %}

## Data

- `data/JES_Water.csv` — full Jester Hall series
- `data/JES_Water_Lab3.csv` — shorter extract for the activity

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb
```

## Deliverables

- Completed activity notebook
- Lab quiz on Canvas
