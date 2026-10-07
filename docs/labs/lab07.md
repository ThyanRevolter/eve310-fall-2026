---
layout: page
title: Lab 07 · Control flow
parent: Labs
nav_order: 7
permalink: /labs/lab07/
description: If statements and for loops over array indices.
---

# Lab 07 · If statements and for loops
{: .no_toc }

**Module 3**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab07-control-flow" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

Logical operators, `if`/`elif`/`else`, and `for` loops over array indices, ending with the loop-plus-if pattern (largest so far, a count, a running total). These are the tools used next week to sweep a classification threshold. A short lab, by design.

## Learning objectives

1. Write logical comparisons, combine them with `and` / `or`, and write if/elif/else blocks
2. Iterate with `for i in range(len(...))`
3. Combine a loop and a conditional to find a minimum, add values up, and count values past a threshold

## Notebooks

**`lab07-tutorial.ipynb`** — Tutorial

{% include notebook.html path="labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb" %}

**`lab07-activity.ipynb`** — Three short loops: minimum and its index, sum and mean, outlier counts

{% include notebook.html path="labs/lab07-control-flow/notebooks/lab07-activity.ipynb" %}

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab07-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas. This is the graded item.

Lab slides are posted on Canvas.
