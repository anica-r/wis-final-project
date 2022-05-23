# Web Information System Final Project

> This repository and the code it contains was prepared by Amy-Caroline Downing, Anica Rimac, Eline de Witte and Eren Janberk Genç as part of the requirements for completing the "Web Information Systems" class, offered by the MSc Digital Humanities programme in KU Leuven.

## What is this project about?

"*The Starry Night*" is a proof-of-concept web application that allows the user to make a connection in between the beauty of the stars and the beauty of human ingenuity through the intermediation of colors. The user can use the responsive UI presented to search for an astronomy picture using [NASA's Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) API. After finding a picture that piques her interest, the user can use the web interface to extract the six most dominant colors (the *color palette* of the picture). These colors can then be used to search for paintings using [Europeana's Search API](https://pro.europeana.eu/page/search). Alternatively, the user can also extract the hexcodes of the palette in order to creatively reuse it.

## Tech specs

This web application is powered by a very simple Node.js web server. The web server is responsible for serving the HTML pages and other related assets as well as handling POST requests. Once a POST request with certain parameters is made to the web server, a Python child process is spawned. This Python child process runs an unsupervised learning algorithm known as [**Mini Batch K-Means Clustering**]() to extract the six most dominant colors of the selected image. The relevant information is then passed backed to the main Node.js process.

For the front end mainly Bootstrap 5 components were used in order to give the website an unified look.

## How to install and run this project locally

### Prerequisites

There are two prerequisites to running this web application locally:

1. **a working Node.js installation that can be accessed through a terminal** If you do not yet have a working Node.js installation on your local machine, please refer to the installation documentation [here](https://nodejs.org/en/download/). If you are going to do a fresh install on a Windows machine, you can also [consider using Node Version Manager for ease of use](https://github.com/nvm-sh/nvm).
2. **A working Python installation that can be accessed through a terminal.** If you do not have a working Python installation on your local machine, please refer to the installation documentation [here](https://www.python.org/downloads/).

### Download the project from GitHub

You can download the source code of the project by:

1. Using the Git CLI
2. Using the GitHub Desktop Client
3. Downloading the repo as a .zip file through our GitHub repository

Since we use Git and GitHub to enable distributed development the options one and two are the preferred options. A detailed description of how to use Git is beyond the scope of this document. Instead you can refer to  [this article](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) for a specific guide on how to `git clone` a Git repository.

### Install the project dependencies

This web application uses both Node.js and Python in the back end. Hence, the 3rd party code that it relies on comes from two different ecosystems. Here's what you should do to install the project dependencies:

**IMPORTANT NOTE:** The steps outlined below install the Python dependencies directly to your base Python installation. If your system is utilizing your base Python installation for different system processes (like various Linux distributions), it might be a good idea to create a virtual environment before installing the Python dependencies. Please refer to [the documentation here](https://docs.python.org/3/library/venv.html) for a guide on how to do that.

1. Open a terminal through which you can run Node.js and Python from.
2. Navigate to the folder in which the project source code can be found.
3. Run `npm install` to install the Node.js dependencies from npm.
4. Run  `pip install requirements.txt` to install the Python dependencies from PyPI

### Spin up a local web server & access the web app

After installing both Node.js dependencies and Python dependencies, you can follow the steps below to run a local web server and access the web application:

1. Open a terminal through which you can run Node.js from.
2. Navigate to the folder in which the project source code can be found.
3. Run `npm run dev` to run the web application via an NPM script
4. Open up any browser of your choice and access the following URL: `http://127.0.0.1:8000`