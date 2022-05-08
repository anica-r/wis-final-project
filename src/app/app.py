import sys
import json
from urllib.request import urlopen

import numpy as np
from skimage import color, util, io
from sklearn import cluster

def rgb_to_hex(red, green, blue):
    """Return color as #rrggbb for the given color values."""
    return '#%02x%02x%02x' % (red, green, blue)

nasa_url = str(sys.argv[1])
palette_data = {}

# try getting the image
try:
    nasa_img = io.imread(nasa_url)
    # manipulate the nasa_img object
    nasa_img = np.asarray(nasa_img, dtype="uint8").reshape(-1, 3)
    nasa_img = color.rgb2lab(nasa_img)
    # initialize a mini batch k-means object with 6 clusters
    kmeans_instance = cluster.MiniBatchKMeans(
    n_clusters=6,
    init="k-means++",
    batch_size=1024
    )
    palette = kmeans_instance.fit(nasa_img).cluster_centers_
    palette = color.lab2rgb(palette)
    palette = util.img_as_ubyte(palette)
    palette = [rgb_to_hex(*list(swatch)) for swatch in palette]
    palette_data["raw_palette"] = palette
    palette_data["europeana_palette"] = palette
    print(palette_data)
    sys.exit(0)
except Exception:
    sys.exit(1)
