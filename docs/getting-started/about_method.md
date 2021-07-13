---
sidebar_position: 1
---

# About Method

## Introduction

Method is a base theme designed to facilitate custom theme-building at an accellerated pace, without sacrificing code efficiency or site performance. The theme uses Twitter's Bootstrap 5 framework as the foundation for building the frontend, while using the CMB2 framework on the backend to provide a workflow for programatically creating and configuring metaboxes for custom post editor options and the theme options page. CMB2 offers a wide variety of field types to choose from when building metaboxes, and allows you to create custom field types if needed.

This theme was designed for building fully-customized solutions and is not intended to be a turn-key solution. Especially in reguards to the frontend, Method essentially provides you with a blank slate to efficiently build from. This theme is an optimal fit for projects that heavily utilize custom post meta and theme options (whether through theme mods or custom options), as it is specifically designed to reduce the number of database queries neccessary to utilize such data. Method was originally built to facilitate a workflow where preapproved design comps are converted into a functioning theme.

This theme is maintained by [Rob Clark](https://robclark.io), and is frequently updated thanks to the awesomeness of [The Bold Agency](https://theboldagency.co), who allows Rob to merge in new enhancements and improvements developed during agency projects. Without Bold, this would be a pretty stagnant project.

## Basic Concepts

### All Frontend Code Is Generated Using The Method_Layout Class

Or more specifically, a class that extends Method_Layout. For the prebuilt Method theme, this is the MethodThemeLayout class. If generating a custom build of Method using the Method Generator project, this class can be called whatever you'd like. Either way, you can find the extended class in `lib/class-theme-layout.php`.  

The Method_Layout class, which the theme layout class extends, contains serveral helpful methods for efficiently interacting with meta and theme option arrays stored within the class, allowing you to write efficient code and never having to directly access the associated class properties. A full list of Method_Layout's properties and methods can be found [here](/docs/method-layout/class-reference).  

Frontend code can either be consolidated into the layout class or authored directly in template files. When opting to contain code within the layout class, you'll use the [determine_attributes()](/docs/method-layout/methods/determine_attributes()) method to set the layout components that should be used for each template, and then add the markup for those components into the [build_components()](/docs/method-layout/methods/build_components()) method.

If writing code directly in template files, you'll write one-off components in the files, or use the [build_component()](/docs/method-layout/methods/build_component()) method to generate code for reusable components as neccessary. The layout class automatically pulls all theme options and post meta (if building a single post), and provides several methods for querying and using that data, eliminating the need for multiple calls to get_option()/get_theme_mod() and get_post_meta(). This reduces the total number of database queries, allowing you to instead efficiently reuse saved data. 

Reguardless of where you put frontend code, it is highly recommended that you place markup for the header and footer in the [build_header()](/docs/method-layout/methods/build_header()) and [build_footer()](/docs/method-layout/methods/build_footer()) methods. These methods are automatically called when using the [build_page()](/docs/method-layout/methods/build_page()) method (used when consolidating code in the layout class), or can manually be called from template files using [get_header_markup()](/docs/method-layout/methods/get_header_markup()) and [get_footer_markup()](/docs/method-layout/methods/get_footer_markup()), after calling [init_page()](/docs/method-layout/methods/init_page()) (the build_page() equivalent when writing code into template files).

### Custom Metaboxes and Theme Options Are Programmatically Set

So that we can reliably use meta keys when building the frontend, custom metabox and theme options are programatically implemented (versus set via the dashboard using something like ACF's default functionality). Hard-coding custom fields ensures that the metakeys we use in frontend code exist and store data in the way that we expect it to be stored. This theme was built to facilitate this using CMB2, which is a great metabox framework with support for several fieldtypes.

While Method was designed around a CMB2 workflow, ACF can also be used to programatically set metaboxes. You can read more on that [here](https://www.advancedcustomfields.com/resources/register-fields-via-php/).

### Theme CSS is Contained Within theme.scss

All CSS for the theme is authored in theme.scss, and compiled down the theme.css and theme.min.css using the bundled gulp tasks. Because Bootstrap's source files are imported at the top of the file, you'll have full access to all of Bootstrap's SASS variables and mixins, allowing you to write theme styles more efficiently, and allowing you to make bulk changes much easier. You can also override Bootstrap variables by setting override values before the import, allowing you to customize Bootstrap without having to modify the source files, making future Bootstrap upgrades substantially more straight-forward.

A gulp task has also been included to allow you to easily inline svg images into the compiled stylesheets. To do this, wrap image paths you with to inline in `inline`, instead of `url`.


