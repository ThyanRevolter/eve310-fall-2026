---
layout: page
title: Lab 08 · Classification thresholds
parent: Labs
nav_order: 8
permalink: /labs/lab08/
description: Turn probabilities into labels with a threshold, count the four outcomes, and sweep the threshold with a for loop.
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

Last week's loops get their first real job: a classification model gives each well a probability, a threshold turns it into a yes/no label, and a for loop tries every threshold. The tutorial counts the four outcomes (true and false positives, true and false negatives) with a loop and an if, computes precision and recall from the counts, checks them against scikit-learn, and sweeps a grid of thresholds to plot precision and recall. The activity does the same for all 643 wells of the Long Island TCE study from lecture and chooses a threshold from a stated requirement. Another short lab, by design.

## Learning objectives

1. Turn a model's predicted probabilities into labels with a threshold
2. Count the four classification outcomes with a loop and an if, and compute precision and recall from them
3. Sweep a grid of thresholds with a for loop and plot precision and recall against the threshold
4. Choose a threshold from what each kind of mistake costs

## Notebooks

**`lab08-tutorial.ipynb`** — Tutorial, typed along in lab

{% include notebook.html path="labs/lab08-classification-thresholds/notebooks/lab08-tutorial.ipynb" %}

**`lab08-activity.ipynb`** — Three questions on the 643 wells: the four counts at a threshold of 0.3, a 21-threshold sweep with its plot, and the threshold that meets a recall requirement

{% include notebook.html path="labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb" %}

## Threshold explorer

Slide a threshold over the Long Island wells and watch the four outcomes, the scores (precision, recall, accuracy, F1, false positive rate) and the ROC curve change. Open it beside the tutorial.

[Open the threshold explorer]({{ '/labs/lab08-threshold-explorer.html' | relative_url }}){: .btn .btn-purple target="_blank" rel="noopener"}


## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab08-activity.ipynb` with the four counts, precision and recall, the sweep arrays and figure, and the chosen threshold, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas. This is the graded item.

Lab slides are posted on Canvas.
