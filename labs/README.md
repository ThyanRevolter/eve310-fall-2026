# Labs

Labs meet Thursdays. Each lab folder is self-contained: notebook, slides, data, and figures.
Folders are published the week of the lab, so a folder that is not listed as released yet
simply does not exist on `main`.

## Schedule (Fall 2026)

Dates are placeholders until the academic calendar is confirmed.


| Lab | Date       | Module | Topic                                    | Status       | Run online                                                                                                                                                                            |
| --- | ---------- | ------ | ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | 08/27/2026 | 1      | Course tools: Python, `uv`, Jupyter, Git | not released | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/labs/lab01-python-basics/PythonTutorial_notebook.ipynb) |



## Running labs in Google Colab

The Colab badge above opens the notebook in the browser, with no local install. Because this
repository is private, Colab has to be granted GitHub access once: open
[colab.research.google.com](https://colab.research.google.com/), choose **File > Open notebook
> GitHub**, click *Authorize with GitHub*, and tick *Include private repositories*. Students
need read access to the repository for the badge to resolve.

Colab starts from a clean machine, so anything the repository provides is missing there. A lab
that imports the course helpers needs this cell first:

```python
!pip install -q "git+https://github.com/ThyanRevolter/eve310-fall-2026.git"
```

Colab also discards all changes when the runtime ends, so save your work with
**File > Save a copy in Drive**.

## Folder layout

```
labs/lab05-exploratory-data-analysis/
├── README.md          # objectives, instructions, deliverables
├── notebooks/         # lab notebook(s)
├── slides/            # lab presentation
├── data/              # small datasets specific to this lab
└── figures/           # generated figures
```

