---
layout: page
title: Labs
nav_order: 2
has_children: true
has_toc: false
permalink: /labs/
description: Weekly lab notebooks, data, and Colab links.
---

# Labs
{: .no_toc }

Labs meet Thursdays, 2:00–3:00 pm. Each lab folder is self-contained: notebook, slides, data, and figures.
Folders are published the week of the lab.

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .note }
Lab dates are placeholders until the academic calendar is confirmed.

## Schedule

| Lab | Date | Module | Topic | Notebooks |
| --- | --- | --- | --- | --- |
| [01]({% link labs/lab01.md %}) | 08/27/2026 | 1 | Python intro | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb) |
| [02]({% link labs/lab02.md %}) | 09/03/2026 | 1 | Python fundamentals | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb) |
| [03]({% link labs/lab03.md %}) | 09/10/2026 | 1 | pandas dataframes | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb) |
| [04]({% link labs/lab04.md %}) | 09/17/2026 | 1 | Plotting and EDA | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb) |
| [05]({% link labs/lab05.md %}) | 09/24/2026 | 2 | Linear regression | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb) |
| [06]({% link labs/lab06.md %}) | 10/01/2026 | 2 | Regression features | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb) |
| [07]({% link labs/lab07.md %}) | 10/08/2026 | 3 | If statements and for loops | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb) |
| [08]({% link labs/lab08.md %}) | 10/15/2026 | 3 | Classification thresholds | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb) |
| [09]({% link labs/lab09.md %}) | 10/22/2026 | 3 | Batch processing many files | [single file](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb) |
| [10]({% link labs/lab10.md %}) | 10/29/2026 | — | Reserved | — |
| [11]({% link labs/lab11.md %}) | 11/05/2026 | 2 | Dairy-farm carbon footprint | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb) |

## Running labs

Start from the [setup guide]({% link setup.md %}), then each Thursday:

```bash
git pull
uv sync        # only if the lab added new packages
uv run jupyter lab
```

Open the lab folder listed above and start with its `README.md`. Shared helpers are available in every notebook:

```python
from eve310 import set_plot_style

set_plot_style()
```

### Google Colab

Colab badges on each lab page open the notebook in the browser. Because the repository is private, grant Colab GitHub access once: open [colab.research.google.com](https://colab.research.google.com/), choose **File > Open notebook > GitHub**, click *Authorize with GitHub*, and tick *Include private repositories*.

Colab starts from a clean machine. A lab that imports the course helpers needs this cell first:

```python
!pip install -q "git+https://github.com/{{ site.github_repo }}.git"
```

Relative `../data/` paths will not resolve on Colab unless you upload the CSV files or clone the repo in the runtime. Prefer running locally with `uv` when a lab ships data. Save your work with **File > Save a copy in Drive** — Colab discards changes when the runtime ends.

## Folder layout

```
labs/lab04-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # lab notebook(s)
├── slides/            # lab presentation
├── data/              # small datasets specific to this lab
└── figures/           # generated figures
```
