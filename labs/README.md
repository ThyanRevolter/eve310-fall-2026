# Labs

The [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/) lists every lab
with its Colab links.

Labs meet Thursdays and run entirely in **Google Colab** — students install nothing. Each lab
folder is self-contained: notebooks, slides, data, and figures. Folders are published the week
of the lab, so a folder that is not listed as released simply does not exist on `main` yet.

Dates and deadlines live on Canvas, not here.

## Lab list

| Lab | Module | Topic                       | Status       | Tutorial                                                                                                                                                          | Activity                                                                                                                                                          |
| --- | ------ | --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 01  | 1      | Python intro                | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb)                  | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab01-python-intro/notebooks/lab01-activity.ipynb)                  |
| 02  | 1      | Python fundamentals         | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb)           | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab02-python-fundamentals/notebooks/lab02-activity.ipynb)           |
| 03  | 1      | pandas dataframes           | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb)             | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab03-pandas-dataframes/notebooks/lab03-activity.ipynb)             |
| 04  | 1      | Plotting and EDA            | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb)     | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab04-exploratory-data-analysis/notebooks/lab04-activity.ipynb)     |
| 05  | 2      | Linear regression           | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb)             | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab05-linear-regression/notebooks/lab05-activity.ipynb)             |
| 06  | 2      | Regression features         | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb)           | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab06-regression-features/notebooks/lab06-activity.ipynb)           |
| 07  | 3      | If statements and for loops | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb)                  | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab07-control-flow/notebooks/lab07-activity.ipynb)                  |
| 08  | 3      | Classification thresholds   | not released | —                                                                                                                                                                    | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb)     |
| 09  | 3      | Batch processing many files | not released | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb)           | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab09-batch-processing/notebooks/lab09-multiple-files.ipynb)        |
| 11  | 2      | Dairy-farm carbon footprint | not released | —                                                                                                                                                                    | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb)          |

Lab 10 is reserved (no Fall 2025 source).

## The student workflow

Every lab, every week, the same five steps — written out in full in
[`docs/setup.md`](../docs/setup.md):

1. Open the lab's **Open in Colab** link from the course website
2. **Copy to Drive** before touching anything, or the work is lost when the runtime ends
3. Run the setup cell at the top of the notebook
4. Work down the notebook; **Runtime > Restart session and run all** at the end
5. **File > Download > Download .ipynb** and upload the activity to Gradescope

## The setup cell

Every lab notebook opens with a standalone setup cell. It has no dependency on this
repository being cloned, on `uv`, or on the `eve310` package:

```python
# EVE 310 setup - run this cell first, every time you open this notebook.
# It downloads this lab's data files into a "data" folder in your Colab session.
import pathlib
import urllib.request

LAB = "lab03-pandas-dataframes"
DATA_FILES = ["JES_Water.csv", "JES_Water_Lab3.csv"]

DATA_DIR = pathlib.Path("data")
FIGURES_DIR = pathlib.Path("figures")
DATA_DIR.mkdir(exist_ok=True)
FIGURES_DIR.mkdir(exist_ok=True)

BASE_URL = f"https://raw.githubusercontent.com/ThyanRevolter/eve310-fall-2026/main/labs/{LAB}/data"
for name in DATA_FILES:
    if not (DATA_DIR / name).exists():
        urllib.request.urlretrieve(f"{BASE_URL}/{name}", DATA_DIR / name)

print(f"Ready. {len(DATA_FILES)} data file(s) in {DATA_DIR.resolve()}")
```

Notebooks therefore read data with `pd.read_csv(DATA_DIR / 'file.csv')` and save figures to
`FIGURES_DIR`. A relative `../data/` path never resolves in Colab.

Two consequences worth knowing:

- **The repository must stay public.** `raw.githubusercontent.com` needs no token for a public
  repo. Making it private breaks the data download in every lab, and data would have to be
  distributed through Canvas instead.
- **Data must be pushed to `main` before the lab session.** The setup cell reads from `main`,
  so an unpushed CSV does not exist as far as students are concerned.

## Adding a new lab

Copy `_template/` and follow the staff notes in
[`_template/README.md`](_template/README.md): replace `{{LAB_ID}}`, `{{LAB_NUMBER}}`,
`{{LAB_TITLE}}`, and `{{MODULE}}`, list the lab's data files in `DATA_FILES`, push the data,
and add the lab to `docs/labs/`.

## Folder layout

```
labs/lab04-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # tutorial and activity notebooks
├── slides/            # lab presentation
├── data/              # datasets, downloaded by the setup cell
└── figures/           # figures generated by the notebook
```
