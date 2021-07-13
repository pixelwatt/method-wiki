---
sidebar_position: 5
---

# Plugin Overrides

Method contains a number of Plugin-specific overrides that are meant to streamline the post editor screen. These include:

## Ninja Forms: Add Form Button

Via the theme_remove_add_new_nf_button() function, "New Form" buttons are removed from above the TinyMCE editors (including the main editor, if using the Classis Editor plugin)

## Ninja Forms: Append A Form Widget

The "Append A Form" sidebar widget is removed.

## Yoast SEO: Editor Metabox Priority

Via the theme_lower_wpseo_priority() function, the Yoast SEO metabox is given a lower priority, so that custom CMB2 metaboxes containing you custom editor options appear above it.