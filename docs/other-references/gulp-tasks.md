---
sidebar_position: 3
---

# Gulp Tasks

## Overview

This theme includes gulp tasks to assist in theme development by automating a number of different processes.

## Tasks

* **styles**  
This task triggers a series of tasks: _compile-styles_ and _process-styles_
  * **compile_styles**  
  This task compiles the theme.scss file to theme.css, and then generates a minified version, theme.min.css, in the root directory.
  * **process_styles**  
  This task checks the theme.css and theme.min.css files for any svg paths wrapped in inline(), and converts them into inline svgs.
* **scripts**  
This task combines core theme javascript files into a single file, assets/js/scripts, and then generates a minified version, assets/js/scripts.min.js. Scripts combined by this task can be modified by editing the array of scripts delcared at the beginning of this tasks.
* **watch**  
This task monitors .scss files in the theme and recompiles the main stylesheet (theme.css) if any of the files are modified.
* **serve**  
This task sets up a browsersync session that automatically refreshes the site when changes to theme files are detected. This requires a web serve to allready be set up. Change the proxy address in gulpfile.js to reflect your local development URL.

