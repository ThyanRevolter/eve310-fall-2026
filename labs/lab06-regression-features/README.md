# Lab 06 - Regression features

**Module:** 2
**Lab date:** 10/01/2026 (Thursday)

## Overview

Build a more realistic energy-use model: drop 3-sigma outliers, add an interaction, scale numeric columns, dummy-code season/day type/class session, then plot predictions on a two-month window.

## Learning objectives

1. Remove statistical outliers
2. Create interaction terms and scale features
3. Dummy-code categoricals with `get_dummies` and fit a linear model

## What to bring / install

- Laptop with the course environment set up (`uv sync`, see [`docs/setup.md`](../../docs/setup.md))

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab06-tutorial.ipynb` | Jester East energy, min-max normalization |
| `notebooks/lab06-activity.ipynb` | ECJ energy, z-score standardization |
| `data/JES_Energy_Lab6Tutorial.csv` | Tutorial data |
| `data/ECJ_Energy_Lab6Activity.csv` | Activity data |
| `slides/` | Lab slides and tutorial PDF |

## How to run

```bash
uv sync
uv run jupyter lab labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb
```

## Deliverables

- Completed activity notebook with train and test R²; lab quiz

## References

- Lab 5 (sklearn regression) and Lab 4 (plotting)
