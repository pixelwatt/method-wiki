---
sidebar_position: 2
---

# Helper Functions

## Overview

Method contains a number of helper functions, which are detailed below. If using a custom build of the Method theme, the method prefix will instead be whatever prefix you defined in Method Builder's globals file.

**Jump to:**
* [method_get_class()](#method_get_class-class-)
* [method_filter_content()](#method_filter_content-content-)
* [method_check_key()](#method_check_key-key-)
* [method_get_post_array()](#method_get_post_array-type-none---)
* [method_get_term_array()](#method_get_term_array-tax-none---)

***

## method_get_class( $class )

This function retrieves a string containing one of multiple CSS classes, if one is found matching the $class string passed to the function. You can add new switch cases to this function to make it better work with your theme. This can be particularly useful for classes that need to be uniform across all site layouts, as it allows you to quickly make any needed changes without needing to do repetitive updates.

### Arguments

- **$class**  
_(string)_ _(required)_ The short name for the string containing of class(es) that you'd like to retrieve.  
  
### Example

The following code:

```php
echo '
	<div id="front-join-inner">
		<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
			<div class="row justify-content-center">
				<div class="' . method_get_class( 'full_width_outer_col' ) . '">
					Content inside a standard content wrapper.
				</div>
			</div>
		</div>
	</div>
';
```

Would produce:

```html
	<div id="front-join-inner">
		<div class="container-fluid full-width-container">
			<div class="row justify-content-center">
				<div class="col-12 col-sm-11">
					Content inside a standard content wrapper.
				</div>
			</div>
		</div>
	</div>
```

***

## method_filter_content( $content )

This function applys WordPress' _the\_content_ filter to a passed string (if the passed string is not empty).

### Arguments

- **$content**  
_(string)_ _(required)_ A string of unfiltered content, such as content entered through the visual editor.  
  
### Example

The following code:

```php
echo method_filter_content( 'This is the way it’s going down, You\'re the prince of your town...' )
```

Would produce:

```html
<p>This is the way it’s going down, You're the prince of your town...</p>
```

### Notes

This function is identical to the filter_content() method included in the Method_Layout class. It is included as a function for use outside of the class as needed (such as functions for AJAX responses).

***

## method_check_key( $key )

This function checks to see if a passed value is set and is not empty. If both conditions are met, the function returns _true_. Otherwise, the function returns _false_.

### Arguments

- **$key**  
_(string)_ _(required)_ The variable to evaluate.  
  
### Example

Take the following code:

```php
$my_array = array(
	'title' => 'My Awesome Title',
	'content' => '',
);
$check1 = method_check_key( $my_array['title'] );
$check2 = method_check_key( $my_array['content'] );
$check3 = method_check_key( $my_array['image_id'] );
```

In the example above:  
  
- $check1 would equal _true_
- $check2 would equal _false_
- $check3 would equal _false_

### Notes

This function is identical to the check_key() method included in the Method_Layout class. It is included as a function for use outside of the class as needed (such as functions for AJAX responses).

***

## method_get_post_array( $type, $none = '' )

This function returns an array of post IDs ($key) and post titles ($value) belonging to the passed post type, if any exist and are public, and an optional _none_ value. This function is primarily used to populate options using the CMB2 select field.

### Arguments

- **$type**  
_(string)_ _(required)_ The post type that you would like to retrieve post IDs and titles for.  
  
- **$none**  
_(string)_ _(optional)_ If you would like to include a default _None_ value as the first item in the array (with an empty $key), provide a string to use.  
  
### Example

Take the follow code:

```php
$options = method_get_post_array( 'page', 'Do Not Link' );
echo '<pre>' . print_r( $options, true ) . '</pre>';
```

This would produce:

```html
Array
(
    [0] => Do Not Link
    [51] => Our Team
    [43] => Get In Touch
    [40] => News
    [37] => Giving Back
    [34] => Jobs
    [29] => Training
    [22] => About Us
    [5] => Welcome
)
```

### Notes

The ability to provide a custom value for _None_ was added in v1.2.0.

***

## method_get_term_array( $tax, $none = '' )

This function returns an array of term IDs ($key) and term names ($value) belonging to the passed taxonomy, if any exist and are public, and an optional _none_ value. Empty taxonomies are included. As with method_get_post_array(), this function is primarily used to populate options using the CMB2 select field.

### Arguments

- **$tax**  
_(string)_ _(required)_ The taxonomy that you would like to retrieve term IDs and term names for.  
  
- **$none**  
_(string)_ _(optional)_ If you would like to include a default _None_ value as the first item in the array (with an empty $key), provide a string to use.  
  
### Example

Take the follow code:

```php
$options = method_get_term_array( 'category', 'Do Not Filter' );
echo '<pre>' . print_r( $options, true ) . '</pre>';
```

This would produce:

```html
Array
(
    [0] => Do Not Filter
    [12] => Employee Spotlight
    [18] => Company News
	[22] => Case Studies
)
```

### Notes

The ability to provide a custom value for _None_ was added in v1.2.0.