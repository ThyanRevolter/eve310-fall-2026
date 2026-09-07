# Lab 03 - Working with dataframes

**Module:** 1

## Overview

pandas dataframes are the default table type for the rest of the course. Inspect size and types, rename/drop/add columns, and select with loc/iloc.

## Learning objectives

1. Use `head`, `size`, `shape`, `describe`, and `info`
2. Rename, drop, and add columns
3. Index with `loc` and `iloc`

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab03-tutorial.ipynb` | Tutorial |
| `notebooks/lab03-additional-examples.ipynb` | Adding columns from scratch |
| `notebooks/lab03-activity.ipynb` | In-lab activity |
| `data/JES_Water.csv` | Full Jester Hall series |
| `data/JES_Water_Lab3.csv` | Shorter extract for the activity |
| `slides/` | pandas cheat sheet |
| `autograder/` | Gradescope autograder (staff only, not committed) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope for feedback

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- Lab quiz on Canvas (have `water_df` and `water_col` ready). This is the graded item.
- `lab03-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope. **This submission
  is not graded** and does not count toward your final grade.

The Gradescope autograder is there for feedback: it re-runs your notebook from a clean session
and reports, variable by variable, whether each part of the activity is right. Use
**Runtime > Restart session and run all** before you download, keep the variable names exactly
as given in the starter cells, and replace every `--` placeholder — a leftover `--` makes the
whole cell fail. You can submit as many times as you like. The Canvas quiz asks about the
values you compute in the activity, so finish it before you take the quiz.

## References

- pandas cheat sheet in `slides/`
- Lab slides are posted on Canvas
