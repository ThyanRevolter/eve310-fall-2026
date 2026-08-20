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
| [01]({{ '/labs/lab01/' | relative_url }}) | 08/27/2026 | 1 | Python intro | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab01-python-intro/notebooks/lab01-tutorial.ipynb) |
| [02]({{ '/labs/lab02/' | relative_url }}) | 09/03/2026 | 1 | Python fundamentals | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab02-python-fundamentals/notebooks/lab02-tutorial.ipynb) |
| [03]({{ '/labs/lab03/' | relative_url }}) | 09/10/2026 | 1 | pandas dataframes | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab03-pandas-dataframes/notebooks/lab03-tutorial.ipynb) |
| [04]({{ '/labs/lab04/' | relative_url }}) | 09/17/2026 | 1 | Plotting and EDA | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab04-exploratory-data-analysis/notebooks/lab04-tutorial.ipynb) |
| [05]({{ '/labs/lab05/' | relative_url }}) | 09/24/2026 | 2 | Linear regression | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab05-linear-regression/notebooks/lab05-tutorial.ipynb) |
| [06]({{ '/labs/lab06/' | relative_url }}) | 10/01/2026 | 2 | Regression features | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab06-regression-features/notebooks/lab06-tutorial.ipynb) |
| [07]({{ '/labs/lab07/' | relative_url }}) | 10/08/2026 | 3 | If statements and for loops | [tutorial](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab07-control-flow/notebooks/lab07-tutorial.ipynb) |
| [08]({{ '/labs/lab08/' | relative_url }}) | 10/15/2026 | 3 | Classification thresholds | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab08-classification-thresholds/notebooks/lab08-activity.ipynb) |
| [09]({{ '/labs/lab09/' | relative_url }}) | 10/22/2026 | 3 | Batch processing many files | [single file](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab09-batch-processing/notebooks/lab09-single-file.ipynb) |
| [10]({{ '/labs/lab10/' | relative_url }}) | 10/29/2026 | — | Reserved | — |
| [11]({{ '/labs/lab11/' | relative_url }}) | 11/05/2026 | 2 | Dairy-farm carbon footprint | [activity](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/labs/lab11-dairy-farm-challenge/notebooks/lab11-activity.ipynb) |

## Running labs

Start from the [setup guide]({{ '/setup/' | relative_url }}), then each Thursday:

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
