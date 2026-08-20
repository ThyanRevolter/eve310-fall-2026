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


Lab 10 is reserved (no Fall 2025 source). Original 2025 files remain in `Labs_2025/` for reference.

## Running labs in Google Colab

The Colab badge above opens the notebook in the browser, with no local install. Because this
repository is private, Colab has to be granted GitHub access once: open
[colab.research.google.com](https://colab.research.google.com/), choose **File > Open notebook

> GitHub**, click *Authorize with GitHub*, and tick *Include private repositories*. Students
> need read access to the repository for the badge to resolve.

Colab starts from a clean machine, so anything the repository provides is missing there. A lab
that imports the course helpers needs this cell first:

```python
!pip install -q "git+https://github.com/ThyanRevolter/eve310-fall-2026.git"
```

Relative `../data/` paths will not resolve on Colab unless you upload the CSV files or clone
the repo in the runtime. Prefer running locally with `uv` when a lab ships data.

Colab also discards all changes when the runtime ends, so save your work with
**File > Save a copy in Drive**.

## Folder layout

```
labs/lab04-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # lab notebook(s)
├── slides/            # lab presentation
├── data/              # small datasets specific to this lab
└── figures/           # generated figures
```

