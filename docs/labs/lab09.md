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

**Module 3**
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
This lab uses 24 building files. The setup cell downloads all of them into `DATA_DIR`, so the
for-loop over `DATA_DIR.iterdir()` works in Colab exactly as it does on a laptop.

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab09-multiple-files.ipynb` showing a figure written for each building, downloaded as `.ipynb` and uploaded to Gradescope
- Lab quiz on Canvas
