"""Helpers for authoring and checking EVE 310 lab notebooks locally.

Student notebooks are standalone and do not import this package - labs run in Google
Colab, where each notebook's setup cell downloads its own data. These helpers are for
staff working inside the repository after `uv sync`:

    from eve310 import setup_notebook

    DATA_DIR, FIGURES_DIR = setup_notebook("lab04-exploratory-data-analysis")
"""

from eve310.notebook import repo_root, setup_notebook, unit_dir
from eve310.plotting import set_plot_style

__all__ = [
    "repo_root",
    "set_plot_style",
    "setup_notebook",
    "unit_dir",
]
