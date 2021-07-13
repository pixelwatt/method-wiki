---
sidebar_position: 2
---

# Upgrading Theme Components & Libraries

Method is built to support the upgrading of theme components and libraries over the lifespan of a custom theme. Below are instructions for upgrading compnents and libraries, as of Method v1.3.1.

## Bootstrap

To update Bootstrap...
1. Head to getbootstrap.com, go to the download page for the current release, and download the source files. 
2. Once downloaded, extract the source files. 
3. Replace the `inc/bootstrap/scss/` folder with the `scss/` folder from the extracted files, and replace the javascript files in `inc/bootstrap/js/` with the matching files found in `dist/js/` from the extracted files.
4. Finally, you'll need to recompile the theme's stylesheet and javascript files. To do this, navigate to the theme directory in the terminal and run `gulp scripts styles` to recompile both. You'll need to have the local dev utilities installed to do this.

## Method_Layout Class

Assuming no local changes need to be merged in, head to the [Releases](https://github.com/pixelwatt/method/releases) page and download the class-method-layout.php file for the latest release. Replace the file with the same name in the theme's /lib directory with the download file. You should be good to go.