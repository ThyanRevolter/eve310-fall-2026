# CLAUDE.md - EVE 310 Fall 2026 context handoff

This file carries the project context that is not derivable from the code or the git
history, so that a fresh Claude Code session (or a new account) can pick the work up
without re-deriving it. Read it before touching anything. Update it when a decision
below changes.

The repository is **public** (students load notebooks and data from it), so this file
must never contain activity answers, quiz answers or autograder key values. Those live
in gitignored folders named below.

---

## Goal

Build and maintain the Fall 2026 course material for EVE 310 (Sustainable Systems
Engineering, UT Austin): one Colab lab per week with a live-coded tutorial, a short
graded-by-quiz activity, a slide deck, a Canvas quiz plus self-assessment, and a
Gradescope autograder; plus the course website, lecture follow-along notebooks,
assignment data files, and occasional TA-taught lectures.

## Background / context

**People and roles**

- Instructor: Dr. Greg Hendrickson (greg.hendrickson@utexas.edu). Owns lectures,
  assignments, Canvas, syllabus. Commits lecture notebooks straight to `main`.
- TA: Adhithyan Sakthivelu (adhiths@utexas.edu, GitHub `ThyanRevolter`). The user of
  this repo. Owns labs, lab quizzes, autograders, decks, the website, and taught
  Lecture 17 on 2026-10-27 while Greg was away (2026-10-23 to 2026-11-01).
- About 52 to 56 students. Lecture Tue/Thu 12:30-2:00 pm CPE 2.210; lab Thu 2:00-3:00 pm
  EER 1.504; TA office hours Wed 3:00-4:00 pm EER 4.704.
- Canvas: https://utexas.instructure.com/courses/1450736 (source of truth for deadlines).
  Site: https://thyanrevolter.github.io/eve310-fall-2026/ (GitHub Pages from `docs/`).

**Hard constraints**

- Labs are Colab-only. Students install nothing. Every notebook opens with a standalone
  setup cell that downloads its data from `raw.githubusercontent.com/.../main/labs/<lab>/data`.
  Therefore the repo must stay public and **data must be pushed to `main` before the
  session**. Notebooks read `DATA_DIR / 'file.csv'`, never `../data/`.
- Student notebooks never import `src/eve310`; that package is staff-only.
- The Gradescope activity submission is worth **0 points** (feedback only). The **Canvas
  lab quiz is the only graded lab item**, due the Wednesday after the lab at 11:59 pm.
- Course materials may not be reposted outside the class (syllabus).
- Always `git fetch` / rebase before pushing: Greg pushes to `main` directly.
- Commit messages use Conventional Commits with a scope: `feat(lab09): ...`,
  `fix(lab08): ...`, `docs(announcements): ...`, `refactor(lectures): ...`.
  Commit only when the user asks.

**Student feedback that shaped the design (do not undo)**

- Lab 5 (2026-09-24) was "a lot". From Lab 7 on, labs are short: three one-loop
  questions, a handful of graded variables, boilerplate prewritten, a check line at the
  end of each question so students know when they are done. Activity should take about
  30 to 35 minutes of the hour.
- Students asked (2026-10-07) to type the tutorial along with the instructor rather than
  watch slides. Tutorials are **live-coded**: each typed cell is missing one or two lines
  marked `--`, a **Type it:** line in the markdown above says what to type, and a
  collapsed `<details><summary>Show the finished cell</summary>` markdown cell below holds
  the full code. Budget about 2 minutes per typed cell; keep 7 to 8 typed cells.
  Boilerplate cells say **Run as is**. A tutorial with `--` fails Run all; the
  "Before you start" notes say so.
- Activities and quizzes must test understanding, not copying: no question whose answer
  the tutorial prints or whose code is tutorial code with renamed variables. Transfer
  questions (same method, new input) go in the Canvas quiz, not into more activity parts.
- Never reuse a scalar's name for an array in the same notebook (Lab 8 confusion);
  suffix arrays `_array` and say why in the text.
- Before writing "as in lecture" or "recall", check the topic was taught before the lab
  date. 2026 lecture numbering differs from the 2025 decks in `work/lectures/`; read the
  PDF's own title and date. Lab 8 taught precision/recall from scratch because the metrics
  lecture was the same morning; Lab 9 depends on no lecture.

## What we've decided so far (conventions, locked in)

**Per-lab deliverables and where they live**

| Piece | Location | Tracked? |
| --- | --- | --- |
| Tutorial + activity notebooks | `labs/labNN-slug/notebooks/labNN-{tutorial,activity}.ipynb` | yes |
| Data | `labs/labNN-slug/data/` | yes (CSV, txt) |
| Lab README | `labs/labNN-slug/README.md` | yes |
| Site page | `docs/labs/labNN.md` + row in `docs/labs/index.md` and `labs/README.md` | yes |
| Notebook generator | `work/lab_NN/make_notebooks.py`, `work/lab_NN/run_filled.py` | no (`work/` gitignored) |
| Deck | `work/presentation/LabN_AS_2026.pptx`, built by `work/lab_NN/deck_build/` | no |
| Quiz + self-assessment markdown | `work/labNN_quiz_canvas.md`, `work/labNN_self_assessment_canvas.md` | no |
| Canvas QTI zips | `work/qti/build_labNN_qti.py` -> `work/qti/labNN_*_qti.zip` (shared `canvas_qti.py`) | no |
| Autograder (holds the answer key) | `labs/labNN-slug/autograder/` | no (gitignored) |

Everything under `work/` and `labs/*/autograder/` is gitignored and **does not travel
with a clone**. Copy those folders by hand when moving machines.

**Notebook format**

- nbformat 4.5, cell ids are content hashes (`make_notebooks.py`), kernelspec Python 3,
  outputs empty. Header cell: title `EVE 310 - Lab NN: Title`, `**Module M | MM/DD/YYYY**`,
  Colab badge, learning objectives, "Before you start" list. Section `## 0. Setup` with the
  standard setup cell (`LAB`, `DATA_FILES`, `DATA_DIR`, `FIGURES_DIR`, `BASE_URL`).
- Activity: `## Your turn`, **Question N** markdown with the graded variable names in a
  bullet list, a code cell with `--` blanks and a `print(... == ...)` check line, three
  written questions, a quiz scratch cell at the end. Graded variable names are stable
  once the autograder is built.
- `work/lab_NN/run_filled.py tutorial|activity` executes a notebook with its blanks filled
  (tutorial from the `<details>` cells, activity from a `FILLS` list) to verify numbers
  before deck, quiz and autograder are built.

**Autograder pattern** (copy the previous lab's folder; Lab 10 is the latest)

- Standard library only in the grader: `grader/spec.py` derives every expected value from
  the lab CSVs (or holds typed constants when NumPy randomness is involved), lists
  `CHECKS` with points, hints and `mistakes` (wrong value, explanation) pairs;
  `grader/checks.py` compares with 0.1% relative tolerance (0.0005 absolute floor), kinds
  include number, text, text_sequence, dataframe (`column_equals`, `column_text_equals`),
  figure (bar heights, series, labels, box-plot median), choice, file, and since Lab 10
  `unordered` (sorted values or rows), `partition` (labels compared up to a renumbering),
  `cluster_mean` (a column averaged over the student's own label) and `scatter`; when the
  key needs scikit-learn (k-means), `spec.py` holds typed constants that `selftest.py`
  recomputes with sklearn; `grader/notebook.py`
  runs code cells one at a time in a shared namespace (magics stripped, Agg backend, 60 s
  cap, `input()` raises); a leftover `--` is a SyntaxError that skips the cell.
- `selftest.py` fills the real starter notebook's `--` at run time (`FILLS`), so a starter
  edit that drifts from the key fails the test; also rejects any `mistakes` value that
  would pass as the answer, and checks `quiz value` lines against the quiz markdown.
  Run it with the repo venv: `.venv/bin/python selftest.py`. System `python3` lacks sklearn.
- `build.py` writes `autograder.zip` (data bundled; `setup.sh` and `run_autograder` at zip
  root). `make_solution.py` writes `labNN-activity-solution.ipynb` for Gradescope's
  Test Autograder. `results.json` carries a `leaderboard` Score entry.
- Hints and mistake explanations never reveal the expected value (unlimited resubmission).
- Gradescope assignment: Programming Assignment, 0 points, default Ubuntu 22.04 image.
- Rerun `selftest.py` after any edit to a starter notebook; the user hand-edits notebooks.

**Quiz pattern**

- Graded quiz: 9 questions x 6 points = 54, one attempt, shuffle answers, due the
  following Wednesday 11:59 pm. Self-assessment: 5 x 1 point, unlimited attempts, ungraded.
- Markdown format: `## N. Multiple Choice · 6 points`, stem, a `Hint:` line (method,
  never the answer), answers with `**[CORRECT]**` marker and an indented `  - ` feedback
  line per answer, an italic `*Skill: ...*` note with slide and tutorial references.
  Code lines in a stem become a `<pre>` block. Parser: `parse` in
  `work/qti/build_lab07_qti.py`, imported by the Lab 8 to 10 builders.
- Questions 5 to 7 reuse the activity's questions with new inputs; everything else is
  code-reading or transfer. Canvas instruction text is hard-coded in the builder.
- Canvas uses **New Quizzes** for lab quizzes. Import the zip from the New Quizzes build
  page; feedback shows only with "Show custom feedback with results" on and, under "Hide
  results from students", Show feedback on, responses after the last attempt with
  Show on = due date. Anonymous surveys exist only in Classic Quizzes (import via
  Settings > Import Course Content > QTI .zip, "Import existing quizzes as New Quizzes"
  unchecked).

**Deck pipeline** (`work/lab_NN/deck_build/`, Lab 10 is the latest)

- `render.py` draws Colab-looking code cells, outputs and tables with Pillow + Pygments;
  `make_images.py` runs the tutorial's code cells (reads finished code from the
  `<details>` cells, stages data in a temp folder) and writes `img/`; `build_deck.py`
  assembles slides with python-pptx using `work/presentation/Lab3_AS_2026.pptx` for theme
  and shape styles (title bar BF5700, callouts, red arrows), takes an optional output path;
  `preview.py` renders wireframe PNGs (no PowerPoint or LibreOffice on this machine);
  `compare.py` diffs two decks shape by shape (text, geometry, run sizes, image hashes).
- **The user hand-edits decks in PowerPoint.** Before any rebuild: build to a scratch
  path, run `compare.py` against the current deck, port hand edits into `build_deck.py`
  (mark them `hand edit`), rebuild, compare until it prints nothing, then add new slides.
  Inserting a slide shifts every later slide number quoted in the quiz markdowns and the
  deck README.
- From Lab 10 on draw the blank live-coded cell at 85 to 90% of the finished cell's
  width (Lab 10's `stack()` in `build_deck.py` does it at 87%); the half-size `pair()`
  cell of Labs 7 to 9 was too small to read from the room.
- Each deck has a quiz-review slide for the previous lab's quiz built from the Canvas
  item analysis the user pastes: concepts and the missed questions only, no statistics,
  no bare answers.
- Planned lab flow: 2:00 announcements, quiz review, objectives, type-along until about
  2:30 to 2:35, activity until 2:58, quiz reminder.
- python-pptx is deliberately not a project dependency. Use the scratch venv
  `/tmp/pptxenv` (python-pptx, pillow, pygments, lxml, pypdf, pypdfium2, python-docx);
  recreate with `python3 -m venv /tmp/pptxenv && /tmp/pptxenv/bin/pip install ...`.
- Local pandas is 3.x while Colab runs 2.2; `make_images.py` rewrites `info()` dtypes
  to match what students see.

**Instructor decks (Greg's .pptx)**

- python-pptx skips `mc:AlternateContent` shapes (inline Office Math), so dumps miss
  formulas and whole text boxes. Scan raw slide XML for `m:t`; edit `m:t` directly. The
  fallback picture stays stale until PowerPoint re-saves the file.
- A plain python-pptx save of Greg's deck produced a file PowerPoint could not open
  (dropped `Target="NULL"` rels, reused rIds, rewritten `.bin`/`.tmp` content types).
  Splice edited slide parts into the original zip instead; reference implementation
  `work/lectures_2026/build_lecture17.py` (`edited_slides`, `notes_additions`, `splice`).

**Website**

- Jekyll, Just the Docs 0.12 remote theme (Just the Class layout), `liquid: error_mode:
  strict`. Nav: Home 1, Lab workflow 2, Labs 3, Lecture notebooks 4, Schedule 5, Staff 6,
  About 7. Announcements are `docs/_announcements/*.md` with `week:` and `date:`.
- Local build: the repo `docs/Gemfile` (github-pages) cannot install under brew Ruby
  4.0.6. Copy `docs/` to scratch, swap in a Gemfile with `jekyll ~> 4.4`,
  `just-the-docs 0.12.0`, `jekyll-seo-tag`, `jekyll-include-cache`, `webrick`,
  `bigdecimal`, `csv`, `base64`, `logger`; change `remote_theme:` to `theme: just-the-docs`;
  put symlinks `gcc`/`g++` -> brew `gcc-16`/`g++-16` first on PATH; `bundle install` and
  `bundle exec jekyll build` with `BUNDLE_PATH` in scratch. Production is
  `actions/jekyll-build-pages`, so this checks syntax and links, not byte output.
- Lecture follow-along notebooks: `lectures/notebooks/*.ipynb` (hyphenated names),
  listed in `docs/lectures/index.md` and `lectures/README.md`. Instructor code cells stay
  byte-identical; notes go in markdown; deliberate failures are marked **Expect an error**.
- Interactive pages: `docs/labs/lab08-threshold-explorer.html` (vanilla JS + inline SVG,
  slider, confusion matrix, precision/recall/F1/FPR, ROC), `docs/labs/lab10-kmeans-explorer.html`
  (k-means one step at a time on the 19 lecture points: assign/move stepper, draggable
  centroids, k = 1 to 4, a bad start, ten random starts; text kept short on purpose) and
  `docs/lectures/lecture17/` (three pages sharing `lecture17.css` / `lecture17.js`). Pages
  without front matter are copied to the site as they are; link them from the lab page with
  a `relative_url` button and add a row to the lab README.

**Environment on this machine (WSL2, Debian)**

- Repo venv `.venv` (Python 3.12, numpy, pandas 3.x, sklearn, matplotlib, nbformat,
  nbclient, pypdf). `uv` is at `~/miniconda3/bin/uv`, not on PATH.
- No PowerPoint, LibreOffice, pandoc, Docker, pdftotext or pdftoppm. Read PDFs with pypdf
  (text) or pypdfium2 (page images) from `/tmp/pptxenv`.
- Windows Chrome (`/mnt/c/Program Files/Google/Chrome/Application/chrome.exe`) runs
  headless from WSL for page screenshots and `--dump-dom` checks; the page must sit on a
  Windows path (copy it under `C:\Users\as239965\AppData\Local\Temp`). Windows is in dark
  mode, so pages render dark unless the root gets `data-theme="light"`.
- Box Drive is readable only through
  `/mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe -NoProfile -Command`
  with `Get-ChildItem -LiteralPath` / `Copy-Item` (the `/mnt/c/.../Box` mount gives I/O
  errors). Course material: `Box\EV310 Fall 2026\Labs\{Labs_2023,Labs_2025,Labs_2026}`;
  old in-class quizzes in `Labs_2023\In-person Quiz\Quiz 1..3`.
- Claude Code auto-memory for this repo: `~/.claude/projects/-home-as239965-git-repos-eve310-fall-2026/memory/`
  (21 files, index `MEMORY.md`). Copy it along with `work/` when moving accounts or
  machines; this file is the condensed version.

## Repository map

```
.
├── labs/                      # lab01..lab11, quiz01-in-class, _template
│   └── labNN-slug/{README.md, notebooks/, data/, figures/.gitkeep, slides/.gitkeep, autograder/ (gitignored)}
├── lectures/notebooks/        # 4 follow-along notebooks (linear algebra, traffic regression, multivariate, logistic)
├── assignments/assignment03-regression/   # Problem 4 data + README with setup cell (handout stays on Canvas)
├── docs/                      # Jekyll site: labs/, lectures/, _announcements/, setup.md, schedule.md
├── src/eve310/                # staff helpers: setup_notebook, repo_root, set_plot_style (CI imports it)
├── .github/workflows/         # ci.yml (uv sync + setup_notebook on every lab), pages.yml (Jekyll to Pages)
└── work/                      # GITIGNORED staff workspace
    ├── lab_04 .. lab_10/      # deck_build/ per lab; lab_08 to lab_10 also make_notebooks.py, run_filled.py, make_data.py
    ├── presentation/          # Lab3..Lab10_AS_2026.pptx (generated decks, hand-edited by the user)
    ├── labNN_quiz_canvas.md, labNN_self_assessment_canvas.md   # Labs 2 to 10
    ├── qti/                   # canvas_qti.py, build_labNN_qti.py, build_midcourse_survey_qti.py, zips
    ├── quiz_01/               # in-class Quiz 1 notebook, data, quiz-mode autograder, REPORT.md
    ├── survey/                # mid-course survey draft (md, docx builder, Canvas announcement)
    ├── lectures_2026/         # Lecture 17 build (Greg's deck, build_lecture17.py, notes, review, Menti guide, companion)
    ├── lectures/              # 2025 lecture decks and PDFs, folder numbers are 2025 numbering
    ├── previous_lab/{2023,2025}/   # source labs being converted
    ├── assignment_3/, Assignment 4/, zip_extract/   # handouts, old solutions, 2025 quiz
    └── CONVERSION_SPEC.md     # older spec for converting 2025 assignment PDFs into assignments/ (not currently followed)
```

## Latest state (as of 2026-11-04)

**Labs**

- Labs 1 to 4 (Module 1: Python, pandas, plotting/EDA), Labs 5 and 6 (Module 2:
  regression, features) exist in the earlier, denser style. Autograders exist for all
  of Labs 1 to 9; quiz markdowns for Labs 2 to 9; self-assessments for Labs 3 to 9.
- Lab 7 (2026-10-08, control flow): first short, live-coded lab. Pushed `8318675`,
  `53309c2`, `a1831a9`.
- Lab 8 (2026-10-15, classification thresholds): `TCE_LongIsland.csv` (643 wells)
  generated by `work/lab_08/make_data.py`; 32-slide deck with a four-slide Lab 7 quiz
  recap; threshold explorer page. Pushed `d970c49`, `e9daa99`, `c496ac7`, `f47eb44`.
- Lab 9 (2026-10-22, batch processing): 24 `water_XXX.csv` files plus `water_notes.txt`;
  27-slide deck with a Lab 8 quiz review on slide 5; 55 selftests pass. Pushed `0a2fda1`,
  `b580f4a`. Quiz was due 2026-10-28.
- Week 10 (2026-10-29) had no lab (Greg away, Thursday lecture on Zoom; see
  `docs/_announcements/week10-schedule.md`).
- Lab 10 (2026-11-05, clustering with k-means, Module 4): built 2026-11-04 in the Lab 9
  pipeline, Greg's instruction was "focus on clustering". Tutorial on the lecture's 19
  two-column points (`lecture_points.csv`, Lina Sela's k-means example reused in the 2023
  Lab 11, the only clustering lab in `work/previous_lab/2023`): `KMeans(n_clusters=k,
  random_state=0, n_init=10)`, `labels_` / `cluster_centers_`, `inertia_` and the by-hand
  SSE, `silhouette_score`, the elbow loop and a Your-turn silhouette loop with `np.argmax`,
  `predict`. Activity on `household_water.csv` (300 synthetic households, `gallons_per_day`
  and `night_flow_gph`, three planted groups, `work/lab_10/make_data.py`, seed 310): the
  run-as-is raw fit splits by gallons only, Q1 standardizes with the given `ddof=1` means
  and stds and fits k = 3 (sizes 79/172/49), Q2 sweeps k = 2 to 8 (best_k 3), Q3 converts
  the centroids back to gallons and finds the leak cluster (49 households, 296.7 gpd,
  17.8 gph). Deck `Lab10_AS_2026.pptx`, 26 slides (slide 5 is a placeholder Lab 9 quiz
  review, no item analysis yet); 54-point quiz due 2026-11-11 and self-assessment with
  QTI zips; autograder with 13 checks, 133 selftests. Four review agents checked the
  notebooks before the build; every "as in Lab N" claim was verified against the earlier
  notebooks. Pushed `dfdb373`. The k-means explorer page (`docs/labs/lab10-kmeans-explorer.html`,
  linked from `docs/labs/lab10.md` and the lab README) was added the same day; its default
  k = 3 start ends on the tutorial's labels and SSE, and it shows no activity numbers.
- Lab 11 (dairy-farm carbon footprint, Module 2 team challenge) exists only as the 2025
  conversion: `labs/lab11-dairy-farm-challenge/` with one activity notebook and the CSV.
  Not yet rebuilt in the Lab 7+ pattern; no deck, quiz or autograder.
- Lab quiz results so far: Lab 8 quiz mean 97% (56 students). Lab 9 item analysis not
  yet pasted (needed for the Lab 10 deck's slide 5).

**Other**

- In-class Quiz 1 (2026-10-08, 15 points: 12 autograded + 3 hand-graded) released as
  `labs/quiz01-in-class/` (`fcf1c25`); quiz-mode autograder in `work/quiz_01/`.
- Assignment 3 (due 2026-11-02/03): Problem 4 data published with a setup cell
  (`b9a8386`), site announcement posted. Handout PDF names the script
  `assignment2_problem4_...` (typo, flagged to the user, not fixed).
- Mid-course survey: final 10 questions (8 choice, 2 essay) in
  `work/qti/build_midcourse_survey_qti.py`, zip is an anonymous Classic ungraded survey;
  Canvas announcement draft says it closes Wednesday 2026-11-04.
- Lecture 17 (2026-10-27, TA-taught): reviewed and fixed Greg's deck
  (`Lecture17_AS_2026{,_notes}.pptx` via zip splice), three companion site pages
  (`4ebcfa0`, `7fef14f`, `da9fae7`, `5b31911`), Menti guide.
- `dev` branch is stale (6 early commits); all work is on `main`.

## What I need next (open items)

Items known to be open when this file was written. Confirm with the user which are done;
Gradescope and Canvas steps are done by hand through the user's logins.

1. Gradescope 0-point assignments and `autograder.zip` uploads for Labs 7, 8, 9 (and
   whether the Canvas QTI zips for those labs were imported).
2. Mid-course survey: import `work/qti/midcourse_survey_qti.zip` into Canvas as a Classic
   survey, post the announcement, summarize results after 2026-11-04.
3. Lecture 17 leftovers: Menti code on slides 10 and 24, PowerPoint re-save of the
   no-notes deck (Office Math fallback), Canvas upload, confirm the two added
   announcement bullets with Greg.
4. Lab 10 (built 2026-11-04 and pushed as `dfdb373`, lab is Thursday 2026-11-05): push
   the k-means explorer page and its two links if not yet pushed; create the 0-point
   Gradescope assignment and upload
   `labs/lab10-clustering/autograder/autograder.zip`, test with
   `lab10-activity-solution.ipynb`; import `work/qti/lab10_quiz_qti.zip` (due Wednesday
   2026-11-11, 11:59 pm) and `lab10_self_assessment_qti.zip` into New Quizzes; replace the
   placeholder slide 5 with the missed Lab 9 quiz questions once the item analysis is
   pasted (add cells to `work/lab_10/deck_build/make_images.py`, keep 26 slides so the
   quiz markdowns' slide numbers hold); open the deck in PowerPoint and check slides 13,
   14, 16, 21 and 24 (DejaVu wireframes only here). Any rebuild goes to a scratch path and
   through `compare.py` first.
5. Fix the Assignment 3 handout filename typo on Box/Canvas if Greg agrees.

Replace this section with the specific ask when handing the project to a new session.
