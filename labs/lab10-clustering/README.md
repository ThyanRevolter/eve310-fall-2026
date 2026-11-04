# Lab 10 - Clustering with k-means

**Module:** 4

## Overview

The first unsupervised method of the course. There is no answer column: the question is whether the rows of a table fall into groups. The tutorial fits k-means to the lecture's 19 two-column points with scikit-learn, reads the two results (a label per point and a centroid per cluster), scores the clustering with the SSE (`inertia_`) and the silhouette score, and chooses the number of clusters with a for loop over k (the elbow curve, then the silhouette curve). The activity clusters 300 smart-metered households by daily use and night-time flow: k-means on the raw columns groups by gallons per day alone, standardizing the columns first (Lab 6's z-score) finds the small group with a continuous leak, and the centroids are converted back to gallons so the clusters can be named. Another short lab, by design.

## Learning objectives

1. Fit a k-means model with scikit-learn and read its two results: a cluster label for every point and a centroid for every cluster
2. Measure a clustering with the SSE and the silhouette score, and say what each one rewards
3. Choose the number of clusters with a for loop over k: the elbow curve and the silhouette curve
4. Standardize the columns before clustering, and turn the centroids back into real units to describe the clusters (the activity)

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab10-tutorial.ipynb` | Tutorial (typed along in lab): the 19 lecture points, `KMeans` with k = 3, labels and centroids, SSE and silhouette, the loop over k |
| `notebooks/lab10-activity.ipynb` | Three questions on 300 households: standardize and fit k = 3, choose k from the elbow and silhouette curves, convert the centroids back to gallons and find the leak cluster |
| `data/lecture_points.csv` | The 19 points from the k-means lecture slides: `x1`, `x2` |
| `data/household_water.csv` | 300 smart-metered households (synthetic): `household`, `gallons_per_day` (average daily use), `night_flow_gph` (smallest flow between 2 and 4 am, gallons per hour) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope (optional, for feedback)

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab10-activity.ipynb` with `X_scaled`, `labels`, `centroids_scaled`, `sizes`, `sse_array`, `sc_array`, `best_k`, `centroids_gallons`, `centroids_night`, `leak_cluster`, `n_leak` and the two figures, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded); lab quiz on Canvas

The Gradescope submission is optional and does not count toward your grade. The lab quiz on
Canvas is the graded item.

## References

- Lab slides are posted on Canvas.
- Lab 6 (z-scores with `ddof=1`, and back to real units), Lab 7 (`np.random.seed`, the fixed random draw), Lab 8 (the sweep: a grid, `np.zeros`, a result stored per pass), Lab 9 (a variable assigned inside a loop holds only the last pass)
