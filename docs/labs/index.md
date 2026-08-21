---
layout: page
title: Labs
nav_order: 2
has_children: true
has_toc: false
permalink: /labs/
description: Weekly lab notebooks, run in Google Colab.
---

# Labs
{: .no_toc }

Labs meet Thursdays, 2:00–3:00 pm. Every lab runs in [Google Colab](https://colab.research.google.com/){:target="_blank" rel="noopener"} —
nothing to install. Each lab has a tutorial notebook we work through together and an activity
notebook you complete and submit.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .important }
> **Every lab, every time:** open the Colab link → click **Copy to Drive** *before you type
> anything* → run the setup cell → work down the notebook → **File > Download > Download
> .ipynb** → upload the activity to Gradescope.
>
> [Full walkthrough]({{ '/setup/' | relative_url }}){: .btn .btn-purple }

## Lab list

Lab dates and deadlines are on [Canvas](https://utexas.instructure.com/courses/1450736).
Notebooks are published the week of the lab.

| Lab | Module | Topic | Notebooks |
| --- | --- | --- | --- |
| [01]({{ '/labs/lab01/' | relative_url }}) | 1 | Python intro | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab01-python-intro/notebooks/lab01-activity.ipynb){:target="_blank" rel="noopener"} |
| [02]({{ '/labs/lab02/' | relative_url }}) | 1 | Python fundamentals | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab02-python-fundamentals/notebooks/lab02-activity.ipynb){:target="_blank" rel="noopener"} |
| [03]({{ '/labs/lab03/' | relative_url }}) | 1 | pandas dataframes | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab03-pandas-dataframes/notebooks/lab03-activity.ipynb){:target="_blank" rel="noopener"} |
| [04]({{ '/labs/lab04/' | relative_url }}) | 1 | Plotting and EDA | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab04-exploratory-data-analysis/notebooks/lab04-activity.ipynb){:target="_blank" rel="noopener"} |
| [05]({{ '/labs/lab05/' | relative_url }}) | 2 | Linear regression | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab05-linear-regression/notebooks/lab05-activity.ipynb){:target="_blank" rel="noopener"} |
| [06]({{ '/labs/lab06/' | relative_url }}) | 2 | Regression features | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab06-regression-features/notebooks/lab06-activity.ipynb){:target="_blank" rel="noopener"} |
| [07]({{ '/labs/lab07/' | relative_url }}) | 3 | If statements and for loops | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb){:target="_blank" rel="noopener"} · [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab07-control-flow/notebooks/lab07-activity.ipynb){:target="_blank" rel="noopener"} |
| [08]({{ '/labs/lab08/' | relative_url }}) | 3 | Classification thresholds | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb){:target="_blank" rel="noopener"} |
| [09]({{ '/labs/lab09/' | relative_url }}) | 3 | Batch processing many files | [single file](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb){:target="_blank" rel="noopener"} · [many files](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab09-batch-processing/notebooks/lab09-multiple-files.ipynb){:target="_blank" rel="noopener"} |
| [10]({{ '/labs/lab10/' | relative_url }}) | — | Reserved | — |
| [11]({{ '/labs/lab11/' | relative_url }}) | 2 | Dairy-farm carbon footprint | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb){:target="_blank" rel="noopener"} |

## What the setup cell does

The first code cell of every lab notebook looks like this:

```python
# EVE 310 setup — run this cell first.
import pathlib, urllib.request

LAB = "lab03-pandas-dataframes"
DATA_FILES = ["JES_Water.csv", "JES_Water_Lab3.csv"]
...
DATA_DIR, FIGURES_DIR = pathlib.Path("data"), pathlib.Path("figures")
```

It downloads that lab's data into your Colab session and gives you two folders to work with:

- `DATA_DIR` — read data with `pd.read_csv(DATA_DIR / "JES_Water.csv")`
- `FIGURES_DIR` — save plots with `fig.savefig(FIGURES_DIR / "myplot.png")`

Never use a relative path like `"../data/file.csv"`. There is no `../data` in Colab.

## If you lose your work

Colab wipes the runtime when it disconnects. Work survives only in the **Drive copy** you made
in Step 3 of the [walkthrough]({{ '/setup/' | relative_url }}) — look in `Colab Notebooks` in
your Google Drive. Files written to `data/` or `figures/` inside the session are *not* saved;
re-run the notebook to regenerate them.

## Folder layout on GitHub

Each lab folder holds the notebooks, slides, and data used that week:

```
labs/lab04-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # tutorial and activity notebooks
├── slides/            # lab presentation
├── data/              # datasets, downloaded by the setup cell
└── figures/           # generated figures
```
