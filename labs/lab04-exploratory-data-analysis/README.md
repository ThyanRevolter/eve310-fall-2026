# Lab 04 - Plotting and exploratory data analysis

**Module:** 1

## Overview

Convert dates, draw time series / histograms / box plots, save figures, and compute mean, median, trimmed mean, variance, standard deviation, and IQR.

## Learning objectives

1. Plot a datetime series with labeled axes
2. Create histograms and box plots
3. Save figures and compute descriptive statistics

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab04-tutorial.ipynb` | Tutorial |
| `notebooks/lab04-activity.ipynb` | In-lab activity |
| `notebooks/lab04-debugging.ipynb` | Debugging exercise: one cell with intentional bugs to fix in Colab |
| `data/JES_Water_Lab4_Tutorial.csv` | Tutorial extract |
| `data/JES_Water_Lab4_Activity.csv` | Activity extract |
| `slides/` | matplotlib/SciPy cheat sheets |
| `autograder/` | Gradescope autograder (staff only, not committed) |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope for feedback

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- Lab quiz on Canvas (have `water_df`, the three figures, and the Part F statistics ready). This is the graded item.
- `lab04-activity.ipynb`, downloaded as `.ipynb` and uploaded to Gradescope. **This submission
  is not graded** and does not count toward your final grade.
- The debugging notebook is worked in lab and not submitted.

The Gradescope autograder is there for feedback: it re-runs your notebook from a clean session
and reports, part by part, whether the dataframe, each figure, the saved PDF, and each statistic
are right. Use **Runtime > Restart session and run all** before you download, keep the variable
names exactly as given in the starter cells (`fig1`, `fig2`, `fig3`, `water_iqr`, ...), and
replace every `--` placeholder — a leftover `--` makes the whole cell fail. You can submit as
many times as you like. The Canvas quiz asks about the values and plots you produce in the
activity, so finish it before you take the quiz.

## References

- Lab slides are posted on Canvas.
- Matplotlib and SciPy cheat sheets in `slides/`
