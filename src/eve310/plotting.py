"""Consistent figure styling for lab notebooks and slides."""

import matplotlib as mpl
import matplotlib.pyplot as plt


def set_plot_style(presentation: bool = False) -> None:
    """Apply the course plotting defaults.

    Set ``presentation=True`` for larger fonts that stay readable when projected.
    """
    scale = 1.4 if presentation else 1.0
    mpl.rcParams.update(
        {
            "figure.figsize": (7.0, 4.5),
            "figure.dpi": 110,
            "savefig.dpi": 200,
            "savefig.bbox": "tight",
            "font.size": 11 * scale,
            "axes.titlesize": 13 * scale,
            "axes.labelsize": 11 * scale,
            "axes.grid": True,
            "grid.alpha": 0.3,
            "axes.spines.top": False,
            "axes.spines.right": False,
            "legend.frameon": False,
            "lines.linewidth": 2.0,
        }
    )
    plt.set_cmap("viridis")
