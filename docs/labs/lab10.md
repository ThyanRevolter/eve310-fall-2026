---
layout: page
title: Lab 10 · Clustering
parent: Labs
nav_order: 10
permalink: /labs/lab10/
description: Fit k-means with scikit-learn, score a clustering with the SSE and the silhouette, choose k with a loop, and standardize the columns first.
---

# Lab 10 · Clustering with k-means
{: .no_toc }

**Module 4**
{: .fs-6 .fw-300 }

{% include lab_folder.html path="labs/lab10-clustering" %}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Overview

The first unsupervised method of the course. There is no answer column: the question is whether the rows of a table fall into groups. The tutorial fits k-means to the lecture's 19 two-column points with scikit-learn, reads the two results (a label per point and a centroid per cluster), scores the clustering with the SSE (`inertia_`) and the silhouette score, and chooses the number of clusters with a for loop over k: the elbow curve, then the silhouette curve. The activity clusters 300 smart-metered households by daily use and night-time flow. k-means on the raw columns groups by gallons per day alone; standardizing the columns first (Lab 6's z-score) finds the small group with a continuous leak, and the centroids are converted back to gallons so the clusters can be named. Another short lab, by design.

## Learning objectives

1. Fit a k-means model with scikit-learn and read its two results: a cluster label for every point and a centroid for every cluster
2. Measure a clustering with the SSE and the silhouette score, and say what each one rewards
3. Choose the number of clusters with a for loop over k: the elbow curve and the silhouette curve
4. Standardize the columns before clustering, and turn the centroids back into real units to describe the clusters (the activity)

## Notebooks

**`lab10-tutorial.ipynb`** — Tutorial, typed along in lab

{% include notebook.html path="labs/lab10-clustering/notebooks/lab10-tutorial.ipynb" %}

**`lab10-activity.ipynb`** — Three questions on 300 households: standardize the two columns and fit k = 3, choose k from the elbow and silhouette curves, convert the centroids back to gallons and find the leak cluster

{% include notebook.html path="labs/lab10-clustering/notebooks/lab10-activity.ipynb" %}

## Data

- `data/lecture_points.csv` — the 19 points from the k-means lecture slides: `x1`, `x2`
- `data/household_water.csv` — 300 smart-metered households (synthetic): `household`, `gallons_per_day` (average daily use), `night_flow_gph` (the smallest flow between 2 and 4 am, in gallons per hour; a steady night flow is the classic sign of a leak)

{: .note }
The setup cell downloads both files into `DATA_DIR`. Keep `random_state=0, n_init=10` in every `KMeans` call so that everyone's clusters are identical.

## Run it

1. Click **Open in Colab** on a notebook above
2. Click **Copy to Drive** *before you type anything*
3. Run the setup cell at the top, then work down the notebook
4. When you finish the activity: **File > Download > Download .ipynb**, then upload that file to Gradescope (optional, for feedback)

[Full lab workflow]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

## Deliverables

- `lab10-activity.ipynb` with the standardized columns and the k = 3 fit, the elbow and silhouette arrays and `best_k`, the centroids in gallons, the leak cluster and its size, and the two figures, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded)
- Lab quiz on Canvas. This is the graded item.

Lab slides are posted on Canvas.
