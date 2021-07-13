---
sidebar_position: 5
---

# functions.php Structure

To prevent the `functions.php` file from becoming an untennable nightmare, its contents have been split into 10 different files, all of which are located under the /lib folder. Each of these files and the content within them is expanded on below:

**Jump To:**
* [lib/class-method-layout.php](#libclass-method-layoutphp)
* [lib/class-theme-layout.php](#libclass-theme-layoutphp)
* [lib/theme-setup.php](#libtheme-setupphp)
* [lib/admin-customization.php](#libadmin-customizationphp)
* [lib/theme-customization.php](#libtheme-customizationphp)
* [lib/post-types-and-taxonomies.php](#libpost-types-and-taxonomiesphp)
* [lib/helper-functions.php](#libhelper-functionsphp)
* [lib/cmb2-helper-functions.php](#libcmb2-helper-functionsphp)
* [lib/cmb2-metaboxes.php](#libcmb2-metaboxesphp)
* [lib/cmb2-options-loader.php](#libcmb2-options-loaderphp)

----

## lib/class-method-layout.php

This file contains the Method_Layout class, an abstract class that the theme extends and uses to build out the frontend of the site. This class contains server methods to aid in efficiently building frontend markup and interacting with data. A full reference for Method_Layout can be found [here](https://github.com/pixelwatt/method/wiki/Helper-Functions). In most cases, this file should not be edited.

----

## lib/class-theme-layout.php

This file contains the theme's layout class, which extends the Method_Layout class. Here, you'll find the set_opts(), determine_components(), build_header(), build_footer(), and build_components() methods, which you'll use to build out your site's frontend.

----

## lib/theme-setup.php

This file sets up the theme. This includes:
* Enabling support for a variety of WordPress features. By default, this includes:
  * HTML5 markup for the search form, comment form, comment list, galleries, captions, script tags, and style tags.
  * The WordPress-generated title tag
  * Post thumbnails
* Registering nav menu theme locations
* Registering custom image sizes
* Enqueuing styles and scripts for use on the frontend of the site.
* Setting up required theme plugins.

----

## lib/admin-customization.php

This file contains functions for customizing and optimizing the WordPress dashboard.

These customizations and optimizations include:
* Enqueueing the WordPress-bundled _jquery-ui-modal_ assets (styles and js), and a custom admin stylesheet (located at `assets/css/admin-styles.css`)
* Hooking onto the _admin\_footer_ action to add javascript and HTML markup for a reference dialogue for [Format Tags](https://github.com/pixelwatt/method/wiki/Format-Tags). (Work on a cleaner implementation for adding custom dialogues which are only added as needed is in progress)
* Overrides for Ninja Forms and Yoast SEO to clean up the editor (see [Plugin Overrides](https://github.com/pixelwatt/method/wiki/Plugin-Overrides))
* If the theme was built to include support for custom login screen styles, functions setting up the custom styles and behavior for the login screen are found in this file.

----

## lib/theme-customization.php

This file contains code for the theme options page. As with metaboxes, CMB2 is used to create the theme options page and set up it's fields.

Alternatly, you can modify the theme to use Customizer options instead. The process is pretty straight-forward and instructions on how to do this can be found [here](https://github.com/pixelwatt/method/wiki/Use-The-Customizer).

----

## lib/post-types-and-taxonomies.php

Up for breaking some WordPress coding standards? Live on the edge and fill this file with custom post type and taxonomy registrations as needed.

----

## lib/helper-functions.php 

Here you'll find many helpful functions to aid in content and metabox building. See [Helper Functions](https://github.com/pixelwatt/method/wiki/Helper-Functions) for more a detailed reference of these functions.

----

## lib/cmb2-helper-functions.php

This file contains functions to aid in creating CMB2 metaboxes.

----

## lib/cmb2-metaboxes.php

The file contains all CMB2 metabox registrations, and the sets of options each metabox should include.

----

## lib/cmb2-options-loader.php

In this file, you'll find the method_load_cmb2_options() function, where you'll create sets of options to use in your theme's custom metaboxes.