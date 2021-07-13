---
sidebar_position: 2
---

# Installation

## Custom Theme Builds

First and foremost, it is recommended that you use the [Method Generator](https://github.com/pixelwatt/method-generator) project to create a custom build of the Method theme that is optimized for your specific needs. This tool will create a theme build with correct prefixes, namespaces, and theme information.

Once you have created a custom build of the theme, or are content with using the Method theme as-is, follow the instructions below to get your copy of the theme ready for local development.

### Prerequisites

Method includes many helpful gulp tasks to help automate development. To use these tasks, you'll need:
- [Node / NPM](https://nodejs.org/en/)
- [Gulp (v4.0.0+)](https://gulpjs.com/)
- [Dart SDK (For Dart SASS)](https://dart.dev/get-dart#automated-installation-and-updates)

### Installing Dependencies

1. Navigate to the theme folder in your terminal/command prompt/PowerShell and run the following command to install all of the project’s prerequisites into `./node_modules`:
`npm install --save-dev`
2. Once the installation finishes, run the following command to compile your theme's stylesheets and javascript:  `gulp scripts styles`  
This will generate the theme's theme.css, theme.min.css and scripts.js files.