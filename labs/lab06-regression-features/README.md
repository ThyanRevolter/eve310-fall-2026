# Lab 06 - Regression features

**Module:** 2

## Overview

Build a more realistic energy-use model: drop 3-sigma outliers, add an interaction, scale numeric columns, dummy-code season/day type/class session, then plot predictions on a two-month window.

## Learning objectives

1. Remove statistical outliers
2. Create interaction terms and scale features
3. Dummy-code categoricals with `get_dummies` and fit a linear model

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab06-tutorial.ipynb` | Jester East energy, min-max normalization |
| `notebooks/lab06-activity.ipynb` | ECJ energy, z-score standardization |
| `data/JES_Energy_Lab6Tutorial.csv` | Tutorial data |
| `data/ECJ_Energy_Lab6Activity.csv` | Activity data |
| `slides/` | Lab slides and tutorial PDF |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab06-activity.ipynb` with train and test R², downloaded as `.ipynb` and uploaded to Gradescope; lab quiz

## References

- Lab 5 (sklearn regression) and Lab 4 (plotting)
