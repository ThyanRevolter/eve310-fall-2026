"""Shared helpers for EVE 310 labs.

Import in any lab notebook after `uv sync`:

    from eve310 import setup_notebook

    DATA_DIR, FIGURES_DIR = setup_notebook("lab04-exploratory-data-analysis")
"""

from eve310.notebook import in_colab, repo_root, setup_notebook, unit_dir
from eve310.plotting import set_plot_style

__all__ = [
    "in_colab",
    "repo_root",
    "set_plot_style",
    "setup_notebook",
    "unit_dir",
]
