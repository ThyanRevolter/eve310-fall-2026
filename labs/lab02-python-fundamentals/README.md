# Lab 02 - Python fundamentals

**Module:** 1

## Overview

Lists vs arrays, zero-based indexing, importing a CSV, and why NaN-aware statistics matter for real sensor data. The dataset is daily water use at Jester Hall.

## Learning objectives

1. Index 1D and 2D NumPy arrays
2. Load a CSV with pandas and extract a column as an array
3. Use `nanmin` / `nanmax` / `nanmean` when data contain missing values

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab02-tutorial.ipynb` | Tutorial |
| `notebooks/lab02-activity.ipynb` | In-lab activity |
| `data/JES_Water.csv` | Jester Hall water, 2009–2017 |
| `slides/` | NumPy cheat sheet, plotting handout |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope (optional, for feedback)

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab02-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded); lab quiz on Canvas (have `water_con` ready)

The Gradescope autograder reports feedback out of 100 points, one item per
variable the exercises ask you to define, but the submission is optional and does
not count toward your grade. The lab quiz on Canvas is the graded item. The autograder re-runs your notebook
from a clean session, so use **Runtime > Restart session and run all** and confirm
everything works top to bottom before you submit. Keep the variable names exactly
as given in the starter cells, and replace every `--` placeholder — a leftover
`--` makes the whole cell fail. You can submit as many times as you like before
the deadline.

## References

- Lab slides are posted on Canvas.
- NumPy cheat sheet in `slides/`
