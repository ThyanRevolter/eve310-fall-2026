# Lab 09 - Batch processing many files

**Module:** 3
**Lab date:** 10/22/2026 (Thursday)

## Overview

The same outlier-clean + monthly box plot workflow, first on one campus building water file, then inside a for loop over every CSV in `data/`.

## Learning objectives

1. Parse datetimes and drop 3-sigma outliers
2. Save a labeled monthly box plot
3. Loop over all CSVs in a folder

## What to bring / install

- Laptop with the course environment set up (`uv sync`, see [`docs/setup.md`](../../docs/setup.md))

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab09-single-file.ipynb` | One building (DCP) |
| `notebooks/lab09-multiple-files.ipynb` | All `water_*.csv` files |
| `data/water_*.csv` | Campus building water series |
| `slides/` | Lab slides |

## How to run

```bash
uv sync
uv run jupyter lab labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb
```

## Deliverables

- Figures in `figures/` for each building; lab quiz on Canvas

## References

- Labs 4–6 (plotting, outliers, datetime handling)
