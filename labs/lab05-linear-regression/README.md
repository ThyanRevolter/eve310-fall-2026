# Lab 05 - Linear regression

**Module:** 2

## Overview

Train/test splits, scikit-learn `LinearRegression`, R² and adjusted R², residual plots, and one-hot encoding of a categorical predictor (work status) on the lecture traffic example.

## Learning objectives

1. Fit univariate and multivariate linear models with sklearn
2. Report coefficients, R², and adjusted R² on train and test
3. One-hot encode a categorical variable

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab05-tutorial.ipynb` | Worked sklearn tutorial |
| `notebooks/lab05-traffic-example.ipynb` | Same data with NumPy and seaborn |
| `notebooks/lab05-activity.ipynb` | In-lab activity: coefficients, a 60/40 split, and `random_state` |
| `figures/Image.png` | Adjusted-R² slide image from 2025 |
| `autograder/` | Gradescope autograder (staff only, not committed) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope for feedback

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- Lab quiz on Canvas (have the activity's models fit and Questions 1–4 run). This is the graded item.
- `lab05-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope. **This submission
  is not graded** and does not count toward your final grade.

The Gradescope autograder is there for feedback: it re-runs your notebook from a clean session
and reports, question by question, whether the intercepts, slopes, betas, R² values, and test
sets are right. Use **Runtime > Restart session and run all** before you download, keep the
variable names exactly as given in the starter cells (`intercept_uni`, `betas_cat`,
`r2_test_adj_60`, `slopes_no_seed`, ...), and replace every `--` placeholder — a leftover `--`
makes the whole cell fail. You can submit as many times as you like. The Canvas quiz asks about
the values you compute in the activity, so finish it before you take the quiz.

## References

- Lab slides are posted on Canvas.
- Lecture linear-regression notes; `lab05-traffic-example.ipynb`
