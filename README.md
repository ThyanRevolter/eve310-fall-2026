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




## Quick start (students)

Labs run entirely in [Google Colab](https://colab.research.google.com/). There is nothing to
install — no Python, no Anaconda, no Git.

1. Open the lab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/)
2. Click **Copy to Drive** before you type anything
3. Run the setup cell at the top, then work down the notebook
4. **File > Download > Download .ipynb** and upload the activity to Gradescope

The full walkthrough, with screenshots of each menu, is in
[docs/setup.md](docs/setup.md).

## Quick start (staff)

```bash
git clone https://github.com/ThyanRevolter/eve310-fall-2026.git
cd eve310-fall-2026
uv sync
```

`uv` is for authoring and testing notebooks locally. Students never touch it. Note that lab
notebooks are deliberately standalone — they do not import `eve310`, so they run in a bare
Colab runtime.

## Course modules


| Module | Topic                           | Tools                                             |
| ------ | ------------------------------- | ------------------------------------------------- |
| 1      | Introduction to data collection | Tinkercad, ELEGOO UNO, Arduino IDE, `pyserial`    |
| 2      | Introduction to regression      | `pandas`, `matplotlib`, `seaborn`, `scikit-learn` |
| 3      | Introduction to classification  | `scikit-learn`, `statsmodels`                     |
| 4      | Introduction to clustering      | `scikit-learn`                                    |
| 5      | Introduction to optimization    | `scipy.optimize`, `pulp`, `gurobipy`, `pymoo`     |


Each module has one homework assignment, lecture and lab quizzes, and in-class examples.
Assignment handouts, due dates, and grades live on
[Canvas](https://utexas.instructure.com/courses/1450736), which is the source of truth for
anything with a deadline. This repository holds lab material only.

## Repository layout

```
.
├── labs/                 # one folder per weekly lab (notebooks + slides + data)
│   ├── README.md         # lab list, the Colab setup cell, how to add a lab
│   └── _template/        # walkthrough template for a new lab
├── src/eve310/           # helpers for authoring/checking notebooks (staff only)
├── docs/                 # GitHub Pages course website (Just the Class) + lab workflow
└── pyproject.toml        # dependencies for local authoring, managed by uv
```



## For students

Read [docs/setup.md](docs/setup.md) once before the first lab, then open each week's lab from
the [course website](https://thyanrevolter.github.io/eve310-fall-2026/labs/). Labs are
published before each Thursday session.

The one thing that loses work: forgetting **Copy to Drive**. Do it before you type anything.
Colab discards an uncopied notebook when the runtime ends.

## Course material policy

Per the syllabus, course materials may not be shared outside the class without the
instructor's written permission. Do not repost material elsewhere.

Note that this repository has to stay **public**: Colab opens notebooks straight from it, and
each notebook's setup cell downloads its data from `raw.githubusercontent.com`. Making the
repository private breaks every lab link and every data download.
