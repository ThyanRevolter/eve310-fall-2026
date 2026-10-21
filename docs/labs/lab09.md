---
layout: page
title: Lab 09 · Batch processing
parent: Labs
nav_order: 9
permalink: /labs/lab09/
description: List the files in a folder and run the same cleaning-and-plotting analysis on every one with a for loop.
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

Every lab so far analyzed one file. Today's job is 24 files of daily water consumption, one per campus building, and the same analysis wanted for each: Lab 6's outlier rule and a box plot by month. The tutorial writes the analysis for one file so that only the file name would change, lists the folder with `os.listdir`, keeps the CSV names in a list with a loop and `append`, and then runs the analysis once per file name with one for loop, saving one figure per building. The activity runs the same loop to collect one number per building into a table, then finds the top building and draws one bar per building. Nothing new from lecture; another short lab, by design.

## Learning objectives

1. Read one data file, name it from its file name, and run a cleaning-and-plotting analysis on it
2. List every file in a folder and keep only the CSV files, with a loop that builds a list
3. Repeat the same analysis on every file with one for loop, saving one figure per file
4. Collect one number per file into a table and read the table back (the activity)

## Notebooks

**`lab09-tutorial.ipynb`** — Tutorial, typed along in lab

{% include notebook.html path="labs/lab09-batch-processing/notebooks/lab09-tutorial.ipynb" %}

**`lab09-activity.ipynb`** — Three questions on the same 24 files: the CSV filter loop, a loop that collects each building's removed days and cleaned mean into a table, and the building with the highest cleaned mean with a bar chart

{% include notebook.html path="labs/lab09-batch-processing/notebooks/lab09-activity.ipynb" %}

## Data

- `data/water_XXX.csv` — 24 campus buildings, 2009 to 2017: `DateTime` (one row per day) and `Water ( Gallons )`
- `data/water_notes.txt` — a notes file, not a CSV, so the loop has something to skip

{: .note }
The setup cell downloads all 25 files into `DATA_DIR`, so `os.listdir(DATA_DIR)` works in Colab exactly as it does on a laptop.

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab09-activity.ipynb` with the CSV list, the summary table, the top building, the total of removed days and the bar chart, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas. This is the graded item.

Lab slides are posted on Canvas.
