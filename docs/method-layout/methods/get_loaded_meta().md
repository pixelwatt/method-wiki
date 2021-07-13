`public function get_loaded_meta( $key )`

This method allows you to quickly retrieve post meta loaded using the load_meta() method, which must first be called for this method to function correctly. If the loaded meta key doesn't exist, or is empty, this method returns false. If the loaded meta key you wish to retrive is an array, use the [get_serialized_loaded_meta()](/docs/method-layout/methods/get_serialized_loaded_meta()) method instead, as this method will not unserialize retrieved meta values.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to pull from the $meta property (where all meta for the current post is stored)  
  
***

## Example

Take the following code:

```php
$args = array(
	'posts_per_page' => 3,
	'post_type'   => 'post',
	'fields'      => 'ids'
);
$items = get_posts( $args );
foreach ( $items as $item ) {
	$this->load_meta( $item );
	$this->html .= '
		<div class="recent-post">
			' . ( $this->get_loaded_meta( '_mytheme_intro_img_id' ) ? wp_get_attachment_image( $this->get_loaded_meta( '_mytheme_intro_img_id' ), 'medium', false, array( 'class' => 'img-fluid' ) ) : '' ) . '
			<h3>' . get_the_title( $item ) . '</h3>
		</div>
	';
	$this->unload_meta();
}
```

In the above code, we first retrieve an array of recent post IDs using the WordPress' get_posts() funtion. Then, we loop through the array, calling the load_meta() method at the start of each pass through to load the current post's post meta into the $loaded_meta property. Then, we use the get_loaded_meta() method to see if an array key exists and isn't empty. Specifically, the method checks to see if `$loaded_meta['_mytheme_intro_img_id'][0]` exists and has a value. If so, we use the method again to pass an attachment ID to the wp_get_attachment_image() function, adding the resulting image to the layout's html output. This is commonly done with in conjunction with CMB2 file fields, used to let content editors pick imagery using custom editor options.