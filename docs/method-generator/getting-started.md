---
sidebar_position: 1
sidebar_label: "About / Installation"
---

# Method Generator

Method Generator allows you to rapidly create custom builds of the [Method](https://github.com/pixelwatt/method) theme using Gulp and Nunjucks.

***

## Prerequisites

To compile custom theme releases using the included gulp tasks, you'll need:
* [Node / NPM](https://nodejs.org/en/)
* [Gulp](https://gulpjs.com/) (v4.0.0+)

***

## Getting Generator

### Using Git

If you plan on using Generator to create custom builds of Method more than once, the most efficient way to get Generator is to clone the project's repo from GitHub. Once cloned, ensure that the method submodule is initialized and that the `build/` folder contain's Method's theme files.

### Downloading

You can also download Method Generator and add Method's files manually:
1. Download the latest release of Method Generator [here](https://github.com/pixelwatt/method-generator/releases). Extract into a directory of your choosing.
2. Download the cooresponding release of Method from [here](https://github.com/pixelwatt/method/releases). Extract the theme files into the extracted Method Generator's `build/` directory. **Make sure that you download the same version numbers of both projects. Otherwise, Method Generator may generate an unusable theme.**

***

## Creating A Custom Build

1. First, install the project's dependencies by running the following command from method-generator's root folder: `npm install --save-dev`
2. Next, copy `njk/templates/_globals-defaults.html` to `njk/templates/_globals.html`. This new file will be used when compiling a custom version of the base theme.
3. Reconfigure the new `_globals.html` file to reflect your project ([Globals reference](/docs/method-generator/globals)).
4. When you're ready to compile, from the method-generator's root folder run the following command: `gulp build-custom`. This will copy the stock version of the theme into a new directory, `/custom`, compile core theme files with the custom variavles you've set, and copy them over the stock files in `/custom`
5. To fully rebrand the theme, you'll need to replace 3 image files with your own:
	* `/custom/screenshot.png`: The screenshot displayed when choosing a theme from the Wordpress admin. The resolution of this image should be 1200px x 900px
	* `/custom/assets/images/login-bg.jpg`: The background image to use for the login page (only required if the custom_login_enable global variable was set to true )
	* `/custom/assets/images/login-logo.png`: The logo to use for the login page. Should be no wider than 250px (only required if the custom_login_enable global variable was set to true )
6. Due to limitations with gulp, you'll need to recreate the `.gitignore` file for the new theme (while the gulp task can be reconfigured to duplicate dot files, it causes exclusions to be ignored, so this seems like the lesser of two evils). You can download Method's `.gitignore` file [here](https://github.com/pixelwatt/method/blob/master/.gitignore), saving it to the `/custom` directory.
7. That's it! You should have a custom theme ready to use for development! Duplicate and rename the `/custom` directory into the themes directory of your local WordPress installation and move on to [installing Method's local dev dependencies](/docs/getting-started/installation) to generate your new build's scripts and stylesheets.