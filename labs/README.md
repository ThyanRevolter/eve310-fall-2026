# Labs

The [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/) lists every lab with Colab and GitHub links.

Labs meet Thursdays. Each lab folder is self-contained: notebook, slides, data, and figures.
Folders are published the week of the lab, so a folder that is not listed as released yet
simply does not exist on `main`.

## Schedule (Fall 2026)

Dates are placeholders until the academic calendar is confirmed.


| Lab | Date       | Module | Topic                       | Status       | Run online                                                                                                                                                             |
| --- | ---------- | ------ | --------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | 08/27/2026 | 1      | Python intro                | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb)             |
| 02  | 09/03/2026 | 1      | Python fundamentals         | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb)       |
| 03  | 09/10/2026 | 1      | pandas dataframes           | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb)         |
| 04  | 09/17/2026 | 1      | Plotting and EDA            | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb) |
| 05  | 09/24/2026 | 2      | Linear regression           | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb)         |
| 06  | 10/01/2026 | 2      | Regression features         | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb)       |
| 07  | 10/08/2026 | 3      | If statements and for loops | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb)              |
| 08  | 10/15/2026 | 3      | Classification thresholds   | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb) |
| 09  | 10/22/2026 | 3      | Batch processing many files | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb)       |
| 11  | 11/05/2026 | 2      | Dairy-farm carbon footprint | not released | [Open In Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb)      |


Lab 10 is reserved (no Fall 2025 source).

## Running labs in Google Colab

Running locally with `uv` is the supported path, and Module 1 requires it because Colab cannot
read the Arduino's USB serial port. Colab is the fallback for a laptop that will not cooperate.

The Colab badge above opens the notebook in the browser with no local install. Every lab
notebook starts with a setup cell that works in both places:

```python
LAB = "lab04-exploratory-data-analysis"
try:
    from eve310 import setup_notebook
except ModuleNotFoundError:
    !test -d /content/eve310 || git clone -q --depth 1 https://github.com/ThyanRevolter/eve310-fall-2026.git /content/eve310
    import sys
    sys.path.insert(0, "/content/eve310/src")
    from eve310 import setup_notebook

DATA_DIR, FIGURES_DIR = setup_notebook(LAB)
```

On a laptop the `try` succeeds and nothing is downloaded. On Colab the clone brings down the
course helpers *and* the lab data, so `DATA_DIR` and `FIGURES_DIR` point at real folders in
both environments. Notebooks therefore use `pd.read_csv(DATA_DIR / 'file.csv')` rather than a
relative `../data/` path, which never resolves on Colab.

Two things to know when running in Colab:

- The clone only works while this repository is public. If it is made private, students need
  repository access and a GitHub token set as `EVE310_TOKEN`, or the lab data has to be
  distributed through Canvas instead.
- Colab discards everything when the runtime ends. Click **Copy to Drive** *before* working,
  not after.

To add a new lab, copy `_template/notebooks/template.ipynb` and replace `{{LAB_ID}}` with the
lab folder name. Nothing else needs to change for Colab to work.

## Folder layout

```
labs/lab04-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # lab notebook(s)
├── slides/            # lab presentation
├── data/              # small datasets specific to this lab
└── figures/           # generated figures
```

