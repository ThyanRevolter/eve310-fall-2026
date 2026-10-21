# Lab 09 - Batch processing many files

**Module:** 3

## Overview

Every lab so far analyzed one file. Today's job is 24 files of daily water consumption, one per campus building, and the same analysis wanted for each: Lab 6's outlier rule and a box plot by month. The tutorial writes the analysis for one file so that only the file name would change, lists the folder with `os.listdir`, keeps the CSV names in a list with a loop and `append`, and then runs the analysis once per file name with one for loop, saving one figure per building. The activity runs the same loop to collect one number per building (the mean after cleaning, and the days removed) into a table, then finds the top building and draws one bar per building. Nothing new from lecture; another short lab, by design.

## Learning objectives

1. Read one data file, name it from its file name, and run a cleaning-and-plotting analysis on it
2. List every file in a folder and keep only the CSV files, with a loop that builds a list
3. Repeat the same analysis on every file with one for loop, saving one figure per file
4. Collect one number per file into a table and read the table back (the activity)

## What to bring

- A laptop and a browser, signed in to [Colab](https://colab.research.google.com/) with your UT Google account

## Contents

| Path | Description |
| --- | --- |
| `notebooks/lab09-tutorial.ipynb` | Tutorial (typed along in lab): one building (DCP) from file name to saved box plot, then `os.listdir`, the CSV filter loop, and the loop over all 24 files |
| `notebooks/lab09-activity.ipynb` | Three questions on the same 24 files: the filter loop, a loop that appends each building's code, removed days and cleaned mean to lists and builds `summary_df`, and the building with the highest cleaned mean plus a bar chart |
| `data/water_XXX.csv` | 24 campus buildings, 2009 to 2017: `DateTime` (one row per day) and `Water ( Gallons )` |
| `data/water_notes.txt` | A notes file, not a CSV, so the loop has something to skip |

## How to run

Labs are Colab-only — nothing to install.

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before typing anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb**, then upload the activity to Gradescope (optional, for feedback)

Full walkthrough: [`docs/setup.md`](../../docs/setup.md).

## Deliverables

- `lab09-activity.ipynb` with `csv_files`, `n_files`, `summary_df`, `top_building`, `top_mean`, `total_removed` and the figure, downloaded as `.ipynb` and uploaded to Gradescope (optional, not graded); lab quiz on Canvas

The Gradescope submission is optional and does not count toward your grade. The lab quiz on
Canvas is the graded item.

## References

- Lab slides are posted on Canvas.
- Lab 4 (`pd.to_datetime`, box plots), Lab 6 (the 3 standard deviation rule), Labs 7 and 8 (for loops with an if, a value stored per pass)
