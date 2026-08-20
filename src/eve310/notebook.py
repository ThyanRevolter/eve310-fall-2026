"""Locate course files from a notebook, on a laptop or in Google Colab.

Every lab and assignment notebook starts with::

    from eve310 import setup_notebook

    DATA_DIR, FIGURES_DIR = setup_notebook("lab04-exploratory-data-analysis")

Locally the repository is already on disk, so this only resolves paths. In Colab
the runtime starts empty, and the notebook's setup cell clones the repository to
``/content/eve310`` before importing this module.
"""

from __future__ import annotations

import os
import subprocess
import sys
from pathlib import Path

REPO_URL = "https://github.com/ThyanRevolter/eve310-fall-2026.git"
COLAB_ROOT = Path("/content/eve310")
UNIT_PARENTS = ("labs", "assignments")

__all__ = ["in_colab", "repo_root", "setup_notebook", "unit_dir"]


def in_colab() -> bool:
    """True when running inside a Google Colab runtime."""
    return "google.colab" in sys.modules


def _looks_like_repo(path: Path | None) -> bool:
    return bool(path) and (path / "labs").is_dir() and (path / "pyproject.toml").is_file()


def _clone_into_colab() -> Path:
    if COLAB_ROOT.exists():
        return COLAB_ROOT
    token = os.environ.get("EVE310_TOKEN", "")
    url = REPO_URL.replace("https://", f"https://{token}@") if token else REPO_URL
    result = subprocess.run(
        ["git", "clone", "--depth", "1", url, str(COLAB_ROOT)],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode != 0:
        raise RuntimeError(
            "Could not download the course files.\n"
            "If the repository is private, open the notebook from GitHub with Colab's\n"
            "GitHub integration and ask the TA for repository access, or download the\n"
            "lab's data folder from Canvas and upload it to this runtime.\n\n"
            f"git said: {result.stderr.strip()}"
        )
    return COLAB_ROOT


def repo_root() -> Path:
    """Return the course repository root, downloading it in Colab if needed."""
    override = os.environ.get("EVE310_ROOT")
    if override and _looks_like_repo(Path(override)):
        return Path(override).resolve()

    # `uv sync` installs this package editable, and the Colab setup cell adds the
    # clone to sys.path, so in both cases the source tree sits inside the repo.
    installed_root = Path(__file__).resolve().parents[2]
    if _looks_like_repo(installed_root):
        return installed_root

    for candidate in [Path.cwd(), *Path.cwd().parents]:
        if _looks_like_repo(candidate):
            return candidate

    if _looks_like_repo(COLAB_ROOT):
        return COLAB_ROOT
    if in_colab():
        return _clone_into_colab()

    raise RuntimeError(
        "Could not find the EVE 310 repository. Launch this notebook from inside the\n"
        "repository with `uv run jupyter lab`, or set the EVE310_ROOT environment\n"
        "variable to its location."
    )


def unit_dir(unit: str) -> Path:
    """Return the folder for a lab or assignment, e.g. ``lab04-exploratory-data-analysis``."""
    root = repo_root()
    for parent in UNIT_PARENTS:
        candidate = root / parent / unit
        if candidate.is_dir():
            return candidate
    available = sorted(
        p.name for parent in UNIT_PARENTS for p in (root / parent).glob("*") if p.is_dir()
    )
    raise FileNotFoundError(
        f"No lab or assignment named {unit!r} in {root}. Available: {', '.join(available)}"
    )


def setup_notebook(unit: str, *, style: bool = True, quiet: bool = False) -> tuple[Path, Path]:
    """Prepare the notebook environment and return ``(DATA_DIR, FIGURES_DIR)``.

    ``unit`` is the lab or assignment folder name, such as ``"lab09-batch-processing"``.
    Figures are written to the returned folder, which is created if it is missing.
    """
    folder = unit_dir(unit)
    data = folder / "data"
    figures = folder / "figures"
    figures.mkdir(parents=True, exist_ok=True)

    if style:
        from eve310.plotting import set_plot_style

        set_plot_style()

    if not quiet:
        where = "Google Colab" if in_colab() else "this computer"
        print(f"EVE 310 ready on {where} - {unit}")
        print(f"  data:    {data}")
        print(f"  figures: {figures}")

    return data, figures
