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

**Module 1**
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

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab03-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope
- Lab quiz on Canvas
