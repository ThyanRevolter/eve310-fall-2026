# Lab 08 - Classification thresholds

**Module:** 3

## Overview

Last week's loops get their first real job: a classification model gives each well a probability, a threshold turns it into a yes/no label, and a for loop tries every threshold. The tutorial counts the four outcomes (true and false positives, true and false negatives) with a loop and an if, computes precision and recall from the counts, checks them against scikit-learn, and sweeps a grid of thresholds to plot precision and recall. The activity does the same for all 643 wells of the Long Island TCE study from lecture and chooses a threshold from a stated requirement. Another short lab, by design.

## Learning objectives

1. Turn a model's predicted probabilities into labels with a threshold
2. Count the four classification outcomes with a loop and an if, and compute precision and recall from them
3. Sweep a grid of thresholds with a for loop and plot precision and recall against the threshold
4. Choose a threshold from what each kind of mistake costs

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab08-tutorial.ipynb` | Tutorial (typed along in lab): the ten testing wells from lecture, threshold 0.5, the four counts, precision and recall, the sweep and its plot |
| `notebooks/lab08-activity.ipynb` | Three questions on the 643 wells: the four counts at a threshold of 0.3, a 21-threshold sweep with its plot, and the threshold that keeps recall at 0.8 or more with the highest precision |
| `data/TCE_LongIsland.csv` | 643 wells: `density` (persons per acre near the well), `detect` (1 if TCE above 3 ppb was measured), `prob` (the lecture model's probability of a detection, rounded to 3 decimals) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope (optional, for feedback)

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab08-activity.ipynb` with `tp`, `fp`, `fn`, `tn`, `precision_hand`, `recall_hand`, the `precision` and `recall` arrays, the figure, `chosen_threshold` and `n_flagged`, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded); lab quiz on Canvas

The Gradescope submission is optional and does not count toward your grade. The lab quiz on
Canvas is the graded item.

## References

- Lab slides are posted on Canvas.
- Lecture 16 (logistic regression, the confusion matrix, precision and recall, selecting the threshold) and Lab 7 (if statements and for loops)
- Data: trichloroethylene detections in shallow groundwater on Long Island, NY, against population density (Eckhardt et al., 1989), as tabulated in Helsel and Hirsch, *Statistical Methods in Water Resources*, example 15.1, and used in Lecture 16. The `prob` column is the lecture's logistic regression (scikit-learn, no penalty) evaluated on the same wells.
