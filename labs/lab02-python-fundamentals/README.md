# Lab 02 - Python fundamentals

**Module:** 1
**Lab date:** 09/03/2026 (Thursday)

## Overview

Lists vs arrays, zero-based indexing, importing a CSV, and why NaN-aware statistics matter for real sensor data. The dataset is daily water use at Jester Hall.

## Learning objectives

1. Index 1D and 2D NumPy arrays
2. Load a CSV with pandas and extract a column as an array
3. Use `nanmin` / `nanmax` / `nanmean` when data contain missing values

## What to bring / install

- Laptop with the course environment set up (`uv sync`, see [`docs/setup.md`](../../docs/setup.md))

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab02-tutorial.ipynb` | Tutorial |
| `notebooks/lab02-activity.ipynb` | In-lab activity |
| `data/JES_Water.csv` | Jester Hall water, 2009–2017 |
| `slides/` | Lab slides, NumPy cheat sheet, plotting handout |

## How to run

```bash
uv sync
uv run jupyter lab labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb
```

## Deliverables

- Completed activity notebook; lab quiz on Canvas (have `water_con` ready)

## References

- NumPy cheat sheet in `slides/`
