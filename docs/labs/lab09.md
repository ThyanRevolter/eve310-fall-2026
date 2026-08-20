---
layout: page
title: Lab 09 · Batch processing
parent: Labs
nav_order: 9
permalink: /labs/lab09/
description: Loop the same plotting workflow over many campus water files.
---

# Lab 09 · Batch processing many files
{: .no_toc }

**Module 3** · Thursday 22 October 2026
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab09-batch-processing" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

The same outlier-clean + monthly box plot workflow, first on one campus building water file, then inside a for loop over every CSV in `data/`.

## Learning objectives

1. Parse datetimes and drop 3-sigma outliers
2. Save a labeled monthly box plot
3. Loop over all CSVs in a folder

## Notebooks

**`lab09-single-file.ipynb`** — One building (DCP)

{% include notebook.html path="labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb" %}

**`lab09-multiple-files.ipynb`** — All `water_*.csv` files

{% include notebook.html path="labs/lab09-batch-processing/notebooks/lab09-multiple-files.ipynb" %}

## Data

- `data/water_*.csv` — campus building water series

{: .note }
This lab ships many CSV files. Run it locally with `uv` rather than Colab unless you clone the repository into the runtime.

## How to run locally

```bash
uv sync
uv run jupyter lab labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb
```

## Deliverables

- Figures in `figures/` for each building
- Lab quiz on Canvas
