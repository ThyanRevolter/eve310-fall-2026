# Lecture notebooks

The [course website](https://thyanrevolter.github.io/eve310-fall-2026/lectures/) lists every
lecture notebook with its Colab link.

These are the notebooks shown in lecture. Students open them in **Google Colab** and run each
cell as it comes up. The code is complete: there is nothing to fill in and nothing to submit.

## Notebook list

| Notebook | Module | What it covers | Colab |
| --- | --- | --- | --- |
| `notebooks/linear-algebra-review.ipynb` | 2 | Vectors and matrices in NumPy, `reshape`, dot and element-wise products | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/lectures/notebooks/linear-algebra-review.ipynb) |
| `notebooks/linear-regression-traffic-example.ipynb` | 2 | `np.polyfit`, scikit-learn `LinearRegression`, R², residual plot | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/lectures/notebooks/linear-regression-traffic-example.ipynb) |
| `notebooks/multivariate-linear-regression.ipynb` | 2 | Normal equations in NumPy with three features, prediction, residual plot, R² from SSE and SST | [Colab](https://colab.research.google.com/github/ThyanRevolter/eve310-fall-2026/blob/main/lectures/notebooks/multivariate-linear-regression.ipynb) |

## Following along

1. Open the notebook in Colab from the [course website](https://thyanrevolter.github.io/eve310-fall-2026/lectures/)
2. Click **Copy to Drive** before typing anything
3. Run one cell at a time with **Shift + Enter**, top to bottom, as it comes up in lecture
4. Do not use **Run all**. A cell marked **Expect an error** stops with an error on purpose, and Run all stops there

## Adding a lecture notebook

1. Copy the notebook into `notebooks/` under a lowercase name with hyphens and no spaces. The
   name is part of the Colab link.
2. Clear the outputs, so students produce them by running the cells.
3. Add the header cell: title, Colab badge, learning objectives, and **Before you start**. Copy
   it from a notebook in this folder and change the badge link.
4. Leave the code cells as the instructor wrote them, so what students run is what is on the
   screen. Put notes in markdown cells, and mark a cell that fails on purpose with
   **Expect an error**.
5. Add a row and a section to [`docs/lectures/index.md`](../docs/lectures/index.md), and a row
   to the table above.
6. Push to `main` before the lecture. Colab opens the notebook from `main`.

A notebook that reads data needs a first cell that downloads it, as the lab setup cell does
(see [`labs/README.md`](../labs/README.md)). A relative path like `../data/` never resolves in
Colab.
