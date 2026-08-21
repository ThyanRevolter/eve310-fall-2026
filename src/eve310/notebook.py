"""Locate course files when authoring or checking a lab notebook locally.

Student notebooks do **not** import this package. Labs run in Google Colab, where each
notebook opens with a standalone setup cell that downloads its own data (see
``labs/README.md``). These helpers exist for staff working in the repository::

    from eve310 import setup_notebook

    DATA_DIR, FIGURES_DIR = setup_notebook("lab04-exploratory-data-analysis")
"""

from __future__ import annotations

import os
from pathlib import Path

LAB_PARENT = "labs"

__all__ = ["repo_root", "setup_notebook", "unit_dir"]


def _looks_like_repo(path: Path | None) -> bool:
    return bool(path) and (path / "labs").is_dir() and (path / "pyproject.toml").is_file()


def repo_root() -> Path:
    """Return the course repository root."""
    override = os.environ.get("EVE310_ROOT")
    if override and _looks_like_repo(Path(override)):
        return Path(override).resolve()

    # `uv sync` installs this package editable, so the source tree sits inside the repo.
    installed_root = Path(__file__).resolve().parents[2]
    if _looks_like_repo(installed_root):
        return installed_root

    for candidate in [Path.cwd(), *Path.cwd().parents]:
        if _looks_like_repo(candidate):
            return candidate

    raise RuntimeError(
        "Could not find the EVE 310 repository. Launch this notebook from inside the\n"
        "repository with `uv run jupyter lab`, or set the EVE310_ROOT environment\n"
        "variable to its location."
    )


def unit_dir(unit: str) -> Path:
    """Return the folder for a lab, e.g. ``lab04-exploratory-data-analysis``."""
    labs = repo_root() / LAB_PARENT
    candidate = labs / unit
    if candidate.is_dir():
        return candidate
    available = sorted(p.name for p in labs.glob("*") if p.is_dir())
    raise FileNotFoundError(f"No lab named {unit!r} in {labs}. Available: {', '.join(available)}")


def setup_notebook(unit: str, *, style: bool = True, quiet: bool = False) -> tuple[Path, Path]:
    """Prepare a local notebook session and return ``(DATA_DIR, FIGURES_DIR)``.

    ``unit`` is the lab folder name, such as ``"lab09-batch-processing"``. Figures are
    written to the returned folder, which is created if it is missing.
    """
    folder = unit_dir(unit)
    data = folder / "data"
    figures = folder / "figures"
    figures.mkdir(parents=True, exist_ok=True)

    if style:
        from eve310.plotting import set_plot_style

        set_plot_style()

    if not quiet:
        print(f"EVE 310 ready - {unit}")
        print(f"  data:    {data}")
        print(f"  figures: {figures}")

    return data, figures
