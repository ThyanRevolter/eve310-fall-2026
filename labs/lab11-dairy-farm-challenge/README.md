# Lab 11 - Dairy-farm carbon footprint

**Module:** 2
**Lab date:** 11/05/2026 (Thursday)

## Overview

Team challenge: predict farm-level carbon footprint from feed, land, manure, and energy metrics. Compare a 3-variable linear model, a full linear model, and random forests on a 70/30 split (`random_state=25`).

## Learning objectives

1. Fit `reg3` and `regAll` linear models and print coefficients
2. Report test R², MSE, MAE and predicted-vs-true plots
3. Repeat with a random forest

## What to bring / install

- Laptop with the course environment set up (`uv sync`, see [`docs/setup.md`](../../docs/setup.md))

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab11-activity.ipynb` | Challenge notebook |
| `data/Dairy-Farm-Dataset.csv` | 10,000-row synthetic farm table |

## How to run

```bash
uv sync
uv run jupyter lab labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb
```

## Deliverables

- Working notebook or `.py` uploaded to Canvas with the competition header (team names and EIDs). Each team may win at most one challenge.

## References

- Labs 5–6 (sklearn regression metrics and train/test splits)
