---
title: Assignment 3 · setup cell for Problem 4
week: 9
date: 2026-10-22
---

Problem 4 of Assignment 3 asks for a Jupyter notebook that uses `WeatherStationABIA.csv`. You
do **not** need to upload the CSV to Colab by hand. Open a new notebook in
[Colab](https://colab.research.google.com/){:target="_blank" rel="noopener"}, paste the cell
below as the **first code cell**, and run it. It downloads the data into a `data` folder in your
session and creates a `figures` folder for your plots, exactly like the lab setup cell.

```python
# EVE 310 Assignment 3, Problem 4 setup - run this cell first, every time you open this notebook.
# It downloads WeatherStationABIA.csv into a "data" folder in your Colab session.
import pathlib
import urllib.request

ASSIGNMENT = "assignment03-regression"
DATA_FILES = ["WeatherStationABIA.csv"]

DATA_DIR = pathlib.Path("data")
FIGURES_DIR = pathlib.Path("figures")
DATA_DIR.mkdir(exist_ok=True)
FIGURES_DIR.mkdir(exist_ok=True)

BASE_URL = f"https://raw.githubusercontent.com/ThyanRevolter/eve310-fall-2026/main/assignments/{ASSIGNMENT}/data"
for name in DATA_FILES:
    if not (DATA_DIR / name).exists():
        urllib.request.urlretrieve(f"{BASE_URL}/{name}", DATA_DIR / name)

print(f"Ready. {len(DATA_FILES)} data file(s) in {DATA_DIR.resolve()}")
```

Then load the data with

```python
import pandas as pd
weather = pd.read_csv(DATA_DIR / "WeatherStationABIA.csv")
```

and save every figure as a PDF with `plt.savefig(FIGURES_DIR / "name.pdf")`, as the handout
requires. Files in the Colab session vanish when the runtime shuts down, so download your PDFs
from the **Files** pane before closing the tab.

Three reminders from the handout:

1. The notebook starts with the `# Assignment: / # Problem: / # Student(s) name: / # Student(s) eid:` header block.
1. Comment your code and label every plot (title and both axes).
1. The CSV is part of the zip you upload to Canvas, since the handout asks for every source file needed to run your code.

The data file and these instructions also live in the repository under
[`assignments/assignment03-regression`](https://github.com/ThyanRevolter/eve310-fall-2026/tree/main/assignments/assignment03-regression){:target="_blank" rel="noopener"}.
Questions go to the Canvas discussion board or TA office hours (Wed 3:00–4:00 pm, EER 4.704).
