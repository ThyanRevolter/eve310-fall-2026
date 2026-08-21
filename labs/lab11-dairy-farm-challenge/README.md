# Lab 11 - Dairy-farm carbon footprint

**Module:** 2

## Overview

Team challenge: predict farm-level carbon footprint from feed, land, manure, and energy metrics. Compare a 3-variable linear model, a full linear model, and random forests on a 70/30 split (`random_state=25`).

## Learning objectives

1. Fit `reg3` and `regAll` linear models and print coefficients
2. Report test R², MSE, MAE and predicted-vs-true plots
3. Repeat with a random forest

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab11-activity.ipynb` | Challenge notebook |
| `data/Dairy-Farm-Dataset.csv` | 10,000-row synthetic farm table |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab11-activity.ipynb` with the competition header (team names and EIDs), downloaded as `.ipynb` and uploaded to Gradescope. Each team may win at most one challenge.

## References

- Labs 5–6 (sklearn regression metrics and train/test splits)
