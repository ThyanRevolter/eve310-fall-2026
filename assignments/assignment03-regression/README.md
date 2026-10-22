# Assignment 3 · Intro to data analysis and regression

The handout, due date, and submission instructions are on
[Canvas](https://utexas.instructure.com/courses/1450736). This folder only holds the data
file that Problem 4 needs, so the notebook can download it the same way the lab notebooks do.

| Problem | Needs this folder? | Data file                 |
| ------- | ------------------ | ------------------------- |
| 1–3     | No                 | —                         |
| 4       | Yes                | `data/WeatherStationABIA.csv` |

`WeatherStationABIA.csv` has 8,687 hourly rows from the Austin-Bergstrom International Airport
weather station, three columns, no missing values:

| Column        | Units | Meaning                     |
| ------------- | ----- | --------------------------- |
| `wind`        | mph   | wind speed                  |
| `temperature` | °F    | air temperature (target)    |
| `dew point`   | °F    | dew point temperature       |

## The setup cell

Paste this as the **first code cell** of your Problem 4 notebook and run it every time you open
the notebook. It downloads the CSV into a `data` folder in your Colab session and creates a
`figures` folder for your plots.

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

Then load the data and save figures exactly as in the labs:

```python
import pandas as pd
import matplotlib.pyplot as plt

weather = pd.read_csv(DATA_DIR / "WeatherStationABIA.csv")
weather.head()

# ... make a plot ...
plt.savefig(FIGURES_DIR / "problem4_boxplots.pdf")   # the handout asks for PDF figures
```

Files in the Colab session disappear when the runtime shuts down. Download your PDFs from the
**Files** pane (folder icon on the left) before you close the tab, and keep the notebook itself
saved in Drive.

## Staff notes

- The setup cell reads from `main` on `raw.githubusercontent.com`, so the repository must stay
  public and the CSV must be pushed before students need it (same constraints as the labs, see
  [`labs/README.md`](../../labs/README.md)).
- The handout PDF is not tracked here. Edit it on Box and upload to Canvas.
