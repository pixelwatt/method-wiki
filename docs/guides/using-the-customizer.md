---
sidebar_position: 1
---

# Using The Customizer For Theme Options

## Background

While not aligned with WordPress' theme development guidelines, the Method theme by is built to use a theme options page instead of the Customizer. Some of the main reasons for this decision:

- The Customizer is great for themes with a small number of theme options, but can become very cluttered very quickly for themes that require any significant number of custom options.
- By using CMB2 to create the theme options page, custom CMB2 field types can be used for theme options, such as map fields, custom link fields, etc.
- While you can pull theme mods set by the customizer individually, the get_theme_mod function still first pulls all theme mods before returning the value for the spefic key you requested, offering no real performance benefit. While theme mods are stored as theme-specific options, the fact that we're building a fully-custom site means that the theme will most likely never be changed.

THat being said, its relatively simple to modify Method to use the Customizer instead of theme options, if desired. To do so, follow the steps below.

## Modifying Method to Use The Customizer

These steps assume that you'll be storing options set through the Customizer as theme mods.

1. In `inc/class_theme_layout.php`, modify the set_opts() method to call get_theme_mods() instead of get_option().  
  
**Before**
```php
protected function set_opts() {
	$this->opts = get_option( 'method_options' );
}
```
  
**After:**
```php
protected function set_opts() {
	$this->opts = get_theme_mods();
}
```

2. In `inc/theme-customization.php`, delete everything from line 7 down and replace with your code of choice for setting up the Customizer, where it be though the stock WordPress functions or with a framework like [Kirki](https://wordpress.org/plugins/kirki/).

3. That's it! Aside from some possible tweaks that you may need to do to the build_social_icons() method in the theme layout class (depending on how your Customizer implementation builds arrays), you should be good to go! Now, theme mods for the current theme will be stored in the layout class' $opts property. You'll be able to use the get_option(), get_headline_from_option(), and get_content_from_option() methods to access Customizer options in the same way you would have with theme options.