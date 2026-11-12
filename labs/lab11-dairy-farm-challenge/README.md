# Lab 11 - Comparing regression models

**Module:** 2

## Overview

Which model predicts best on data it has not seen, and can you say why? The tutorial fits three models to a year of a Texas city's peak electricity demand against the day's temperature, all on the same training days and scored on the same testing days: a straight line computed twice, with the normal equation from lecture in NumPy and with `LinearRegression` (the same betas); a random forest, which follows the curve the line misses but overfits its training days; and the line again with a squared-temperature column, which beats the forest. MSE and MAE join R² as scores. The activity repeats the comparison on 10,000 dairy farms (the 2025 dairy-farm challenge data): a linear model and a forest on ten columns, scored on the testing farms, and then one new column, nitrogen per kg of milk, built from the units of two others.

## Learning objectives

1. Compute least-squares betas with the normal equation in NumPy; show `LinearRegression` agrees
2. Score a model on testing rows with MSE, MAE and R²: what each measures, in which units
3. Fit a random forest and spot overfitting from its training vs testing error
4. Build a column from existing ones; judge whether a simple model with the right column beats a more complex one

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab11-tutorial.ipynb` | Tutorial (typed along in lab): the normal equation and `LinearRegression`, MSE, MAE and R² on the testing days, a random forest and overfitting, a squared-temperature column, two new days |
| `notebooks/lab11-activity.ipynb` | Three questions on 10,000 dairy farms: fit a linear model and a forest on ten columns, score both against a know-nothing baseline and check the forest for overfitting, add nitrogen per kg of milk and refit |
| [Least-squares explorer](https://thyanrevolter.github.io/eve310-fall-2026/labs/lab11-least-squares-explorer.html) | Interactive page: drag a line through the tutorial's training days and watch the residuals and the SSE, jump to the normal-equation line, and compare the line, the curve and the forest on the training and testing days (source in `docs/labs/`) |
| `data/power_demand.csv` | 365 days of a Texas city (synthetic): `temp_f` (average temperature, °F), `demand_mw` (peak electricity demand, MW) |
| `data/Dairy-Farm-Dataset.csv` | 10,000 dairy farms (synthetic): ten practice and efficiency columns and `Carbon_footprint` (kg CO₂e per kg of fat-and-protein-corrected milk) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope (optional, for feedback)

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab11-activity.ipynb` with `lm_all`, `betas`, `cut_both`, `rf`, `mae_lm`, `mae_rf`, `mae_train_rf`, `mae_flat`, `x_train_n`, `x_test_n`, `lm_n`, `beta_n` and `mae_n`, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded); lab quiz on Canvas

The Gradescope submission is optional and does not count toward your grade. The lab quiz on
Canvas is the graded item.

## References

- Lab slides are posted on Canvas.
- Lab 5 (`train_test_split`, `LinearRegression`, `r2_score`), Lab 6 (a new column built from old ones, betas read in units), Lab 10 (a model created and fitted in one line, `random_state`), and the multivariate regression lecture notebook (the normal equation with `np.c_`, `np.dot` and `np.linalg.inv`)
