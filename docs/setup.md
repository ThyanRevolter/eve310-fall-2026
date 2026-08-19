# Setting up your computer

This course uses [uv](https://docs.astral.sh/uv/) to manage Python and all packages.
You do **not** need Anaconda. If you already have Anaconda installed you can leave it alone;
`uv` creates its own isolated environment inside this repository.

Everything below is a one-time setup, except `uv sync`, which you re-run whenever new
packages are added for a lab.

## 1. Install Git

- **Windows:** [git-scm.com/download/win](https://git-scm.com/download/win)
- **macOS:** `xcode-select --install`
- **Linux:** `sudo apt install git`

Then set your identity once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@utexas.edu"
```

## 2. Install uv

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

**macOS / Linux:**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Close and reopen your terminal, then check the install:

```bash
uv --version
```

## 3. Get the course repository

```bash
git clone <REPO_URL> eve310-fall-2026
cd eve310-fall-2026
```

## 4. Create the environment

```bash
uv sync
```

This reads `pyproject.toml` and `uv.lock`, downloads Python 3.12 if you do not have it,
creates a `.venv/` folder, and installs the exact package versions used in class. Everyone
in the course therefore runs identical versions.

## 5. Launch JupyterLab

```bash
uv run jupyter lab
```

`uv run` executes a command inside the project environment, so you never need to
"activate" anything. To run a script directly:

```bash
uv run python my_script.py
```

If you prefer VS Code or Spyder, point the interpreter at `.venv/bin/python`
(`.venv\Scripts\python.exe` on Windows).

## 6. Pull each week's lab

New labs are published before the Thursday session:

```bash
git pull
uv sync   # only needed if the lab added new packages
```

## 7. Arduino (Module 1 only)

- Install the [Arduino IDE](https://www.arduino.cc/en/software).
- Create a free account at [tinkercad.com](https://www.tinkercad.com/).
- Bring your ELEGOO UNO kit to lab.

## Common issues


| Symptom                          | Fix                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------- |
| `uv: command not found`          | Reopen the terminal; the installer edits your PATH.                                      |
| `ModuleNotFoundError: eve310`    | Run `uv sync` from the repository root, and start Jupyter with `uv run`.                 |
| Wrong kernel in JupyterLab       | Select the kernel named after this project, or restart Jupyter via `uv run jupyter lab`. |
| Serial port not found (Arduino)  | Close the Arduino IDE's Serial Monitor before reading the port from Python.              |
| `git pull` reports local changes | Commit or stash your work first: `git stash`, `git pull`, `git stash pop`.               |


