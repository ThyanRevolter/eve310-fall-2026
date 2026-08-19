# Labs

Labs meet Thursdays. Each lab folder is self-contained: notebook, slides, data, and figures.
Folders are published the week of the lab, so a folder that is not listed as released yet
simply does not exist on `main`.

## Schedule (Fall 2026)

Dates are placeholders until the academic calendar is confirmed.


| Lab | Date | Module | Topic                                          | Status       |
| --- | ---- | ------ | ---------------------------------------------- | ------------ |
| 01  | TBD  | 1      | Course tools: Python, `uv`, Jupyter, Git       | not released |
| 02  | TBD  | 1      | Circuits and Tinkercad simulation              | not released |
| 03  | TBD  | 1      | Arduino UNO: sensors and data logging          | not released |
| 04  | TBD  | 2      | Data wrangling with `pandas`                   | not released |
| 05  | TBD  | 2      | Exploratory data analysis and visualization    | not released |
| 06  | TBD  | 2      | Linear regression                              | not released |
| 07  | TBD  | 3      | Logistic regression and classification metrics | not released |
| 08  | TBD  | 3      | Model selection and validation                 | not released |
| 09  | TBD  | 4      | k-means clustering                             | not released |
| 10  | TBD  | 4      | Clustering applied to sensor data              | not released |
| 11  | TBD  | 5      | Linear programming formulation                 | not released |
| 12  | TBD  | 5      | Solving LPs in Python (`pulp` / `gurobipy`)    | not released |
| 13  | TBD  | 5      | Multi-objective optimization                   | not released |
| 14  | TBD  | -      | Final project work session                     | not released |




## Creating a new lab

```bash
cp -r labs/_template labs/lab05-exploratory-data-analysis
```

Then rename `notebooks/template.ipynb` to `notebooks/lab05.ipynb` and fill in the
`{{LAB_NUMBER}}`, `{{LAB_TITLE}}`, `{{MODULE}}`, and `{{DATE}}` placeholders.

## Folder layout

```
labs/lab05-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # lab notebook(s)
├── slides/            # lab presentation
├── data/              # small datasets specific to this lab
└── figures/           # generated figures
```

