`public function get_loaded_headline( string $key, string $before, string $after, string $fallback = '' )`

This method allows you to build headlines and other types of content from loaded post meta more efficiently than by using the get_loaded_meta() method. Before this method is used, load_meta() must be first called to load a specified post's meta into the $loaded_meta property. Otherwise, this method will not function as expected. Loaded meta key values, if set and not empty, are passed through esc_html() and then the format_tags() class method. The primary purpose of this method is to provide a utility for writing more concise code.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The loaded meta key to check and use if is set and not empty.  
  
- **$before**  
_(string)_ _(required)_ Markup to include before the processed value of the loaded meta key, if the key is set and not empty, or a fallback value has been provided.  
  
- **$after**  
_(string)_ _(required)_ Markup to include after the processed value of the loaded meta key, if the key is set and not empty, or a fallback value has been provided.  
  
- **$fallback**  
_(string)_ _(optional)_ An optional string to fall back to if the loaded meta key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return empty.  
  
***

## Example

For this example, let's imagine that we have a custom post type called `locations`. For each location a content editor adds, we've used CMB2 to create a text field (stored as post meta with the key `_method_location_custom_title`) that allows content editors to add a custom title for each location. In the example below, we'll build a layout component that loops through each location, checks to see if a custom title has been set, and displays it if available. Otherwise, the post title for the location will be displayed:

```php
$args = array(
	'posts_per_page' => -1,
	'post_type'   => 'locations',
	'fields'      => 'ids'
);
$items = get_posts( $args );
$this->html .= '
	<div id="method-location-list">
		<div class="container-fluid full-width-container">
			<div class="row justify-content-center">
				<div class="col-11">
';
foreach ( $items as $item ) {
	$this->load_meta( $item );
	$this->html .= '
		<div class="location-row">
			' . get_loaded_headline( '_method_location_custom_title', '<h2>', '</h2>', get_the_title( $item ) ) . '
			<!-- Additional locatiom details would normally be pull and displayed here. -->
		</div>
	';
	$this->unload_meta();
}
$this->html .= '
				</div>
			</div>
		</div>
	</div>
';
```