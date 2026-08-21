# Lab 09 - Batch processing many files

**Module:** 3

## Overview

The same outlier-clean + monthly box plot workflow, first on one campus building water file, then inside a for loop over every CSV in `data/`.

## Learning objectives

1. Parse datetimes and drop 3-sigma outliers
2. Save a labeled monthly box plot
3. Loop over all CSVs in a folder

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab09-single-file.ipynb` | One building (DCP) |
| `notebooks/lab09-multiple-files.ipynb` | All `water_*.csv` files |
| `data/water_*.csv` | Campus building water series |
| `slides/` | Lab slides |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab09-multiple-files.ipynb` showing a figure written for each building, downloaded as `.ipynb` and uploaded to Gradescope; lab quiz on Canvas

## References

- Labs 4–6 (plotting, outliers, datetime handling)
