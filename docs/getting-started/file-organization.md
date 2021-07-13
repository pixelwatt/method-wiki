---
sidebar_position: 4
---

# File Organization

Below is a rundown of how the Method theme is organized and structured...

```
├── assets/  
│   ├── css  
│   │   ├── admin-styles.css  
│   ├── images/
│   ├── fonts/    <- add if your theme includes webfonts
│   ├── js/  
│   │   ├── scripts.js    <- compiled via 'gulp scripts'
│   │   └── scripts.min.js    <- compiled + minified via 'gulp scripts'
├── inc/
│   ├── bootstrap/
│   │   └── ...
│   ├── bootstrap-icons/
│   │   └── ...
│   ├── jarallax/
│   │   └── ...
│   ├── matchHeight/
│   │   └── ...
│   ├── tgm-plugin-activation/
│   │   └── ...
│   └── wp-bootstrap-navwalker/
│   │   └── ...
├── lib/    <- theme functions
│   ├── admin-customization.php
│   ├── class-method-layout.php
│   ├── class-theme-layout.php
│   ├── cmb2-helper-functions.php
│   ├── cmb2-metaboxes.php
│   ├── cmb2-options-loader.php
│   ├── helper-functions.php
│   ├── post-types-and-taxonomies.php
│   ├── theme-customization.php
│   └── theme-setup.php
├── .gitignore
├── .gitlab-ci.yml  
├── .jshintrc    <- required for scripts gulp task to work
├── 404.php
├── CHANGELOG
├── LICENSE
├── footer.php
├── front-page.php
├── functions.php
├── gulpfile.js
├── header.php
├── index.php
├── login.css
├── package.json
├── page.php
├── screenshot.png
├── single.php
├── style.css
├── theme.css
├── theme.min.css
└── theme.scss
```