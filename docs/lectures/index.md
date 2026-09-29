---
layout: page
title: Lecture notebooks
nav_order: 4
permalink: /lectures/
description: Notebooks to run alongside the lecture, in Google Colab.
---

# Lecture notebooks
{: .no_toc }

These are the notebooks shown in lecture. Open the one for that day in
[Google Colab](https://colab.research.google.com/){:target="_blank" rel="noopener"} and run each
cell as it comes up, so the output on your screen matches the one in lecture. The code is
complete: there is nothing to fill in and nothing to submit.

[Lecture notebooks on GitHub](https://github.com/{{ site.github_repo }}/tree/{{ site.github_branch }}/lectures){: .btn .btn-outline }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

{: .important }
> **Every lecture notebook:** open the Colab link → click **Copy to Drive** *before you type
> anything* → run one cell at a time with **Shift + Enter**, top to bottom, as it comes up in
> lecture. Do not use **Run all**: a notebook can have cells that stop with an error on purpose.

## Notebook list

| Notebook | Module | What it covers | Colab |
| --- | --- | --- | --- |
| [Linear algebra review](#linear-algebra-review) | 2 | Vectors and matrices in NumPy, `reshape`, dot and element-wise products | [open](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/lectures/notebooks/linear-algebra-review.ipynb){:target="_blank" rel="noopener"} |
| [Linear regression traffic example](#traffic-example) | 2 | `np.polyfit`, scikit-learn `LinearRegression`, R², residual plot | [open](https://colab.research.google.com/github/{{ site.github_repo }}/blob/{{ site.github_branch }}/lectures/notebooks/linear-regression-traffic-example.ipynb){:target="_blank" rel="noopener"} |

## Follow along in lecture

1. Before class, sign in to [Colab](https://colab.research.google.com/){:target="_blank" rel="noopener"} with your **UT Google account**
2. Click **Open in Colab** on the notebook for that day
3. Click **Copy to Drive** *before you type anything*. The copy that opens is yours, and it is saved in `Colab Notebooks` in your Google Drive
4. Run one cell at a time: click the cell and press **Shift + Enter**. Keep to the order, top to bottom
5. To keep notes next to the code, click **+ Text** and type them into the new cell

[Colab basics, step by step]({{ '/setup/' | relative_url }}){: .btn .btn-outline }

A lecture notebook is not a lab notebook:

- **No setup cell.** These notebooks have no data files, so the first code cell only imports the libraries.
- **Nothing to fill in.** Every cell is complete, and the code is the code on the screen in lecture.
- **Errors on purpose.** A cell marked **Expect an error** stops with an error to show you what the message looks like. Read it, then go on to the next cell.
- **Nothing to submit.** There is no Gradescope upload for a lecture notebook.

## Linear algebra review
{: #linear-algebra-review }

**Module 2** · `linear-algebra-review.ipynb`

NumPy vectors and matrices, and what their dimensions do to addition, subtraction, and
multiplication: 1-D arrays and column vectors, `.reshape(-1, 1)`, scalar multiplication, the
inner (dot) product with `np.dot`, and the element-wise product with `np.multiply`.

- Two cells stop with a `ValueError` on purpose: adding a 2 × 2 matrix to a 3 × 2 matrix, and `np.dot` on two column vectors.
- One cell runs without an error and still returns the wrong size: a 3 × 1 column minus a 1-D array comes back 3 × 3.

{% include notebook.html path="lectures/notebooks/linear-algebra-review.ipynb" %}

## Linear regression traffic example
{: #traffic-example }

**Module 2** · `linear-regression-traffic-example.ipynb`

The traffic example from Lecture 10: people per household and average daily trips for 15
households. The notebook fits the same line with `np.polyfit` and with scikit-learn
`LinearRegression`, computes R², and plots predicted vs observed values and the residuals.

- Keep to the order. The scikit-learn cell reshapes `x` and `y` to 2-D. To run a NumPy cell again after it, run the cell that creates the two arrays first.
- [Lab 05]({{ '/labs/lab05/' | relative_url }}) used the same data with a 70% / 30% train/test split. This notebook fits all 15 households, so its intercept, slope, and R² differ from the lab's.

{% include notebook.html path="lectures/notebooks/linear-regression-traffic-example.ipynb" %}

## If something goes wrong

| Symptom | Fix |
| --- | --- |
| `NameError: name 'np' is not defined` (or `x`, `plt`, ...) | A cell was skipped, or the runtime restarted. Run the cells again from the top, one at a time. |
| `ValueError` in the linear algebra review | Expected, if the cell is marked **Expect an error**. Go on to the next cell. |
| `TypeError: expected 1D vector for x` in the traffic example | A NumPy cell ran after the scikit-learn cell. Run the cell that creates the two arrays, then the NumPy cell. |
| Your changes are gone | The notebook was never copied to Drive. Click **Copy to Drive** first next time, and look in `Colab Notebooks` in your Drive for the copy. |
| Colab opened on the wrong account | Sign out of all Google accounts, sign back in with your UT EID account, and reopen the link. |
