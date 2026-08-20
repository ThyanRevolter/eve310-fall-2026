# Lab 05 - Linear regression

**Module:** 2
**Lab date:** 09/24/2026 (Thursday)

## Overview

Train/test splits, scikit-learn `LinearRegression`, R² and adjusted R², residual plots, and one-hot encoding of a categorical predictor (work status) on the lecture traffic example.

## Learning objectives

1. Fit univariate and multivariate linear models with sklearn
2. Report coefficients, R², and adjusted R² on train and test
3. One-hot encode a categorical variable

## What to bring / install

- Laptop with the course environment set up (`uv sync`, see [`docs/setup.md`](../../docs/setup.md))

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab05-tutorial.ipynb` | Worked sklearn tutorial |
| `notebooks/lab05-traffic-example.ipynb` | Same data with NumPy and seaborn |
| `notebooks/lab05-activity.ipynb` | Coefficient / split / random_state questions |
| `slides/` | Lab slides |
| `figures/Image.png` | Adjusted-R² slide image from 2025 |

## How to run

```bash
uv sync
uv run jupyter lab labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb
```

## Deliverables

- Answers to the activity questions in the notebook; lab quiz on Canvas

## References

- Lecture linear-regression notes; `lab05-traffic-example.ipynb`
