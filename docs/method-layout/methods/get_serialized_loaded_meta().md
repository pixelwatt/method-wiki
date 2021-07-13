`public function get_serialized_loaded_meta( $key )`

This method allows you to quickly retrieve and unserialize loaded serialized post meta loaded using the load_meta() method, which must first be called for this method to function correctly. If the loaded meta key doesn't exist, or is empty, the method returns false. To retrieve loaded post meta that does not need to be unserialized, use the [get_loaded_meta()](/docs/method-layout/methods/get_loaded_meta()) method.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to pull from the $meta property and unserialize (where all meta for the current post is stored)  

***

## Example

For this example, let's imagine that we have a custom post type called `locations`. For each location a content editor adds, we've used CMB2 to create a filelist field (stored as serialized post meta with the key `_method_location_photos`) that allows content editors to add multiple photos for that location. In the example below, we'll build a layout component that loops through each location, checks to see if photos have been added for that location, and displays them if available:

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
	$photos = $this->get_serialized_loaded_meta( '_method_location_photos' );
	$this->html .= '
		<div class="location-row">
			<h2>' . get_the_title( $item ) . '</h2>
	';
	if ( $photos ) {
		if ( is_array( $photos ) ) {
			$this->html .= '<div class="row photo-row">';
			foreach ( $photos as $key => $value ) {
				$this->html .= '
					<div class="col-12 col-md-6 col-lg-4 photo-col">
						' . wp_get_attachment_image( $key, 'medium', false, array( 'class' => 'img-fluid' ) ) . '
					</div>
				';
			}
			$this->html .= '</div>';
		}
	}
	$this->html .= '
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