# EVE 310 - Sustainable Systems Engineering (Fall 2026)

Code, lab notebooks, and presentations for EVE 310 at The University of Texas at Austin.

Introduction to data logging, analysis, and optimization - regression, classification,
clustering, and linear optimization - implemented in Python.


|                  |                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------- |
| **Instructor**   | Dr. Greg Hendrickson ([greg.hendrickson@utexas.edu](mailto:greg.hendrickson@utexas.edu)) |
| **TA**           | Adhithyan Sakthivelu ([adhiths@utexas.edu](mailto:adhiths@utexas.edu))                   |
| **Lectures**     | Tue & Thu, 12:30-2:00 pm, TBD                                                            |
| **Labs**         | Thu, 2:00-3:00 pm, TBD                                                                   |
| **Instructor office hours** | Mon 3:00-3:50 pm, TBD, and by appointment |
| **TA office hours** | Wed 3:00-4:30 pm, EER 4.704 (EER 5.702 on Nov 18 and Dec 2) |
| **Canvas**       | [https://utexas.instructure.com/courses/1450736](https://utexas.instructure.com/courses/1450736)                                 |
| **Course site**  | [https://thyanrevolter.github.io/eve310-fall-2026/](https://thyanrevolter.github.io/eve310-fall-2026/) |




## Quick start

```bash
git clone https://github.com/ThyanRevolter/eve310-fall-2026.git
cd eve310-fall-2026
uv sync
```

That is the whole setup. This course uses `[uv](https://docs.astral.sh/uv/)` instead of
Anaconda: `uv sync` installs Python 3.12 and every package at the exact version used in
class, so all students run an identical environment. Full instructions, including how to
install `uv` on Windows, macOS, and Linux, are in `[docs/setup.md](docs/setup.md)`.

## Course modules


| Module | Topic                           | Tools                                             |
| ------ | ------------------------------- | ------------------------------------------------- |
| 1      | Introduction to data collection | Tinkercad, ELEGOO UNO, Arduino IDE, `pyserial`    |
| 2      | Introduction to regression      | `pandas`, `matplotlib`, `seaborn`, `scikit-learn` |
| 3      | Introduction to classification  | `scikit-learn`, `statsmodels`                     |
| 4      | Introduction to clustering      | `scikit-learn`                                    |
| 5      | Introduction to optimization    | `scipy.optimize`, `pulp`, `gurobipy`, `pymoo`     |


Each module has one homework assignment, lecture and lab quizzes, and in-class examples.

## Repository layout

```
.
├── labs/                 # one folder per weekly lab (notebook + slides + data)
│   ├── README.md         # lab schedule and status
├── assignments/          # five homework assignments, one per module
├── src/eve310/           # shared helpers importable from any notebook
├── docs/                 # GitHub Pages course website (Just the Class) + setup guide
└── pyproject.toml        # dependencies, managed by uv
```



## For students

If this is your first time refer to the [setup guide](docs/setup.md) to get started.
The [course website](https://thyanrevolter.github.io/eve310-fall-2026/) lists every lab with Colab and GitHub links.

Labs are published before each Thursday session. To get the newest material:

```bash
git pull
uv sync        # only necessary when a lab adds new packages
```

Then open the lab folder listed in [labs/README.md](labs/README.md) and start with its
`README.md`. Shared helpers are available in every notebook:

```python
from eve310 import set_plot_style

set_plot_style()
```

## Course material policy

Per the syllabus, course materials may not be shared outside the class without the
instructor's written permission. Keep this repository private, or restrict it to enrolled
students, and do not repost material elsewhere.
