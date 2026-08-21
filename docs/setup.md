---
layout: page
title: Lab workflow
nav_order: 3
description: How to open, run, and submit every EVE 310 lab in Google Colab.
permalink: /setup/
---

# How a lab works
{: .no_toc }

Every lab in this course runs in [Google Colab](https://colab.research.google.com/) in your
browser. There is nothing to install — no Python, no Anaconda, no Git. All you need is a
laptop, a browser, and your UT Google account.

The same five steps apply to every lab, every week. Follow them in order.
{: .fs-5 .fw-300 }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Step 1 · Sign in to Google

Go to [colab.research.google.com](https://colab.research.google.com/) and sign in with your
**UT Google account** (your EID address). Do this once, before the first lab, so a Colab tab
does not open on a personal account you are not signed into during class.

## Step 2 · Open the lab notebook

Open the [lab page]({{ '/labs/' | relative_url }}) for that week and click **Open in Colab**.
The notebook opens in a read-only view of the course copy.

{: .warning }
> Do not start typing yet. What opens is the course's copy, not yours. Step 3 first.

## Step 3 · Copy to Drive — before you do anything else

In the Colab toolbar, click **Copy to Drive**.

A new tab opens titled `Copy of lab03-tutorial.ipynb`. **That tab is your notebook.** It is
saved in your own Google Drive, in a folder called `Colab Notebooks`, and Colab saves it
automatically as you work. Close the original tab so you do not mix them up.

Skip this step and your work lives nowhere. Colab discards an uncopied notebook the moment
the runtime ends, and there is no way to get it back.

## Step 4 · Run the setup cell, then work down the notebook

The first code cell of every lab notebook is the setup cell. Run it before anything else —
click into it and press **Shift + Enter**. It creates `DATA_DIR` and `FIGURES_DIR` and
downloads that lab's data files into your session, so `pd.read_csv(DATA_DIR / "file.csv")`
just works.

Then work down the notebook in order. Cells marked **Your turn** are the ones you complete.
Each lab has two notebooks:

| Notebook | What it is | Submitted? |
| --- | --- | --- |
| `labNN-tutorial.ipynb` | Worked examples we go through together in lab | No |
| `labNN-activity.ipynb` | The exercises you complete | Yes — to Gradescope |

Before you submit, run **Runtime > Restart session and run all**. Your notebook has to run
top to bottom from a clean start, because that is exactly how it gets graded.

## Step 5 · Download the activity and upload it to Gradescope

In your copy of the **activity** notebook:

1. **File > Download > Download .ipynb**
2. The file lands in your Downloads folder as `Copy of labNN-activity.ipynb`
3. Go to Gradescope, open the lab assignment, and upload that `.ipynb` file

The name of the downloaded file does not matter. What matters is that it is the `.ipynb`, not
a PDF and not a link to your Drive.

{: .note }
> The activity notebook is auto-graded. Keep the variable names exactly as the starter cells
> give them, and you can submit as many times as you like before the deadline.

---

## Frequently hit problems

| Symptom | Fix |
| --- | --- |
| `NameError: DATA_DIR is not defined` | Run the setup cell at the top of the notebook first. |
| `FileNotFoundError` on a CSV | Same fix — the setup cell downloads the data. Load with `pd.read_csv(DATA_DIR / "file.csv")`, never `"../data/file.csv"`. |
| Work disappeared between sessions | The notebook was never copied to Drive. Redo Step 3 next time, and check `Colab Notebooks` in your Drive for the copy. |
| Variables "forgot" their values | The runtime disconnected after idle time. Run **Runtime > Restart session and run all**. |
| Cell runs forever | Click the stop button in the cell, then **Runtime > Restart session**. |
| Gradescope rejects the upload | You uploaded a PDF or a `.py`. Use **File > Download > Download .ipynb**. |
| Colab opened on the wrong account | Sign out of all Google accounts, sign back in with your UT EID account, and reopen the lab link. |

## Working offline (optional)

Nothing in this course requires it, and no lab assumes it. If you would rather run Jupyter on
your own machine, download the notebook and its data from the lab's GitHub folder and run it
in any Python environment with `pandas`, `numpy`, `matplotlib`, `seaborn`, and
`scikit-learn`. You are then on your own for setup — office hours cover Colab.

## Arduino hardware (Module 1)

The Arduino portion of Module 1 is hands-on, not Colab work:

- Install the [Arduino IDE](https://www.arduino.cc/en/software)
- Create a free account at [tinkercad.com](https://www.tinkercad.com/)
- Bring your ELEGOO UNO kit to lab

Reading the board over USB needs software on your own laptop, so that part is done in the lab
room with the kit in front of you. Details come with that lab.
