# Globals Reference

Below is an overview of options contained within `njk/templates/_globals-defaults.html`. Prior to generating a custom build of the theme, copy this file to `njk/templates/_globals.html` and make revisions as neccessary.  

***

## Theme Information

Options in this section are primarily used to generate the style.css file. However, some options, such as the version number, are used across the theme.

- **theme_name**  
_(string)_ The name of your theme, which will be displayed on the Themes page in the WordPress dashboard.  
_Default: "Method"_  

- **theme_uri**  
_(string)_ A url for a website that contains information about your theme.  
_Default: "https://github.com/pixelwatt/method"_  

- **theme_description**  
_(string)_ A description for your theme, which will be displayed on the Themes page in the WordPress dashboard.  
_Default: "A barebones foundation for custom theme development."_  

- **theme_version**  
_(string)_ The version number for your theme. In most cases, you'll want to change this to "1.0.0" or an initial development release number.  
_Default: "1.3.1"_  

- **theme_author**  
_(string)_ The author of your theme, which will be displayed on the Themes page in the WordPress dashboard.  
_Default: "Rob Clark"_  

- **theme_author_uri**  
_(string)_ The url for the author of your theme. If provided, the author's name will be linked to this url in the WordPress dashboard.  
_Default: "https://robclark.io/"_  

- **theme_tags**  
_(string)_ A comma-seperated list of tags that are relevant to your theme, which will be displayed on the Themes page in the WordPress dashboard if provided.  
_Default: "cmb2, bootstrap"_  

- **github_theme_uri**  
_(bool|string)_ If you would like to use the GitHub Updater plugin to deploy updates for this theme, provide the neccessary url here. Otherwise, set as _false_.  
_Default: false_  

***

## Theme Support

Options in this section determine whether or not your theme enables support for select WordPress features.

- **theme_support_html5**  
_(bool)_ Whether or not WordPress should use HTML5 markup for the search forms, comment forms, comment lists, gallery, and caption (when using WordPress-provided components).
_Default: true_  

- **theme_support_titletag**  
_(bool)_ Whether or not to allow plugins and themes to manage the document title tag.  
_Default: true_  

- **theme_support_thumbnails**  
_(bool)_ Whether or not to support Featured Images for individual posts.  
_Default: true_  

***

## Nav Menus

In this section, you'll provide the needed information to register nav menu locations for your theme.

- **nav_menus**  
_(array)_ An array of nav menu location names and labels.  
_Default: `[{ label: "Primary", location: "primary" }]`_

***

## Custom Image Sizes

In this section, you'll provide the needed information to register custom image sizes for your theme.

- **image_sizes**  
_(array)_ An array of custom image size names, dimensions, and whether or not resized images for the size should be cropped.  
_Default: `[{ name: "header_bg", width: 1400, height: 600, cropped: true }]`_

***

## Required Plugins

In this section, you'll choose whether or not to require the installation of certain plugins upon theme activation.

- **require_cmb2**  
_(bool)_ Whether or not to require the [CMB2](https://wordpress.org/plugins/cmb2/) plugin. It is highly recommended to keep this set as _true_.  
_Default: true_  

- **require_classic_editor**  
_(bool)_ Whether or not to require the [Classic Editor](https://wordpress.org/plugins/classic-editor/) plugin, which will disable the Gutenberg editor.  
_Default: false_  

- **require_github_updater**  
_(bool)_ Whether or not to require the [GitHub Updater](https://github.com/afragen/git-updater) plugin.  
_Default: false_  

- **require_cmb2_roadway_segments**  
_(bool)_ Whether or not to require the [CMB2 Roadway Segments](https://github.com/pixelwatt/cmb2-roadway-segments) plugin, which adds a custom CMB2 field type for Google Maps.  
_Default: false_  

- **require_cmb2_mapbox**  
_(bool)_ Whether or not to require the [CMB2 Mapbox](https://github.com/pixelwatt/cmb2-mapbox) plugin, which adds a custom CMB2 field type for Mapbox.  
_Default: false_  

***

## Code

Options in this section determine how functions and classes are named, as well as which text domain to use where applicable.

- **code_textdomain**  
_(string)_ The text domain for the theme.  
_Default: "method"_

- **code_prefix**  
_(string)_ The prefix to use for all function names and any references to those functions.  
_Default: "method\_"_

- **code_layoutclass**  
_(string)_ The name to use for the theme's layout class that extends Method_Layout.  
Default: "MethodThemeLayout"_

***

## Javascript Libraries

Options in this section which scripts to include in the theme's `scripts` gulp task. Please note that you'll need to install dev dependencies and run `gulp scripts` for any of the options below to be reflected, or for any of the bundled Javascript libraries to work in general.

- **js_use_matchheight**  
_(bool)_ Whether or not [jQuery matchHeight](https://github.com/liabru/jquery-match-height) should be included in the theme's combined scripts file.  
_Default: true_  

- **js_use_jarallax**  
_(bool)_ Whether or not [Jarallax](https://github.com/nk-o/jarallax) should be included in the theme's combined scripts file.  
_Default: true_  

***

## Common CSS Classes

In this section, you'll provide common CSS classes that you'd like to be made available via the [method_get_class()](/docs/other-references/helper-functions#method_get_class-class-) function.

- **css_classes**  
_(array)_ An array of css classes and the ID to refrence them by when using the theme_get_class() function.  
_Default: `[{ id: "full_width_outer_col", class: "full-width-outer-col col-12 col-sm-11" },{ id: "full_width_container", class: "full-width-container" }]`_  

***

## Local Development

- **localdev_url**  
_(string)_ The functional local dev URL that you plan to use for viewing this theme's dev site. When running `gulp serve` from the theme's directory, BrowserSync will use this address as a proxy.  
_Default: "method.test:8080"_  

***

## Other

- **jquery_version**  
_(string)_ **Because WordPress now ships with a modern version of jQuery, it is highly recommended that you leave this option blank.** If you would like to use a custom version of jQuery, enter the version number here to deregister the built-in version for the frontend and reregister the replacement version using Google's CDN.  
_Default: ""_  

- **googlefonts_css_url**  
_(string)_ If using fonts from Google Fonts, enter the provided URL here. If this option is not empty, a wp_enqueue_style() call be generated to correctly enqueue the script, using a null version number to prevent a broken url.   
_Default: ""_  

- **fontawesome_kit_url**  
_(string)_ While Bootstrap Icons tend to be faster, especially when inlined, providing a FontAwesome kit url will generate a wp_enqueue_script() to correctly enqueue the FontAwesome kit.  
_Default: ""_  

***

## Login Customization

Options in this section allow you to customize the appearance of the theme's login page. Aside from the first option, all options in this section will be used to generate the `login.css` file.

- **custom_login_enable**  
_(bool)_ Whether or not to add the neccessary lines to `admin-customization.php` to enable a customized login screen. If set to _false_, there's no need to change any of the other variables in this section.  
_Default: true_  

- **custom_login_accent**  
_(string)_ The accent color for the login screen. This will be used as the background color for buttons and alerts, as well as the text color for links below the login form.  
_Default: "#4BFD9F"_  

- **custom_login_btn_color**  
_(string)_ The text color for buttons and alerts that appear on the login screen. This color should have sufficient contrast with the color set for `custom_login_accent`  
_Default: "#000"_  

- **custom_login_logo**  
_(string)_ The relative path from the theme's root folder for the custom logo to display in the place of the WordPress logo on the login page.  
_Default: "assets/images/login-logo.svg"_  

- **custom_login_logo_width**  
_(string)_ The display width of the logo.  
_Default: "250px"_  

- **custom_login_logo_height**  
_(string)_ The display height of the logo.  
_Default: "80px"_  

- **custom_login_bg**  
_(string)_ The relative path from the theme's root folder for the custom background image to display as the background behind the login form on the login page.  
_Default: "assets/images/login-bg.jpg"_  