`public function load_meta( int $id )`

This method loads all post meta for the provided post ID into the $loaded_meta class property. This is useful when looping through posts for a layout component displayed on a single post, and does not require existing post meta values to be requiried. As with meta for the current post (if building a layout for a single post), methods are provided to assist in using loaded post meta. These methods include: get_loaded_meta(), get_serialized_loaded_meta(), get_loaded_headline(), and get_loaded_content()

***

## Arguments

- **$id**  
_(int)_ _(required)_ The post ID to retrieve post meta for.  

## Example

In the following example, we'll create a layout component for the build_components() method that displays a grid of employees and some basic information about them...

```php
protected function build_components() {
	if ( true == $this->attr['is_archive'] ) {
		global $wp_query;
	}
	foreach ( $this->attr['components'] as $component ) {
		switch ( $component ) {
			case 'employee-grid':
				// First, we'll pull the post IDs for employees managed via a custom post type
				$args = array(
					'post_type' => 'method_team',
					'numberposts' => -1,
					'orderby'     => 'menu_order',
					'order'       => 'ASC',
					'fields' => 'ids'
				);
				$items = get_posts( $args );
				
				// Next, we'll loop through them, if any exist
				if ( $items ) {
					if ( is_array( $items ) ) {
						$this->html .= '
							<div id="method-employee-grid">
								<div class="container">
									<div class="row">
						';
						foreach ( $items as $item ) {
							// Load post meta for the current empoloyee post ID into $this->loaded_meta
							$this->load_meta( $item );
							$this->html .= '
								<div class="col-12 col-md-4 col-xl-3 grid-item">
									<h3>' . get_the_title( $item ) . '</h3>
									' . get_loaded_headline( '_method_employee_title', '<p class="employee-meta mb-0">Title: ', '</p>' ) . '
									' . get_loaded_headline( '_method_employee_location', '<p class="employee-meta mb-0">Location: ', '</p>' ) . '
									' . ( get_loaded_meta( '_method_employee_email' ) ? '<a href="mailto:' . get_loaded_meta( '_method_employee_email' ) . '">Send Email</a>' : '' ) . '
								</div>
							';
							$this->unload_meta(); // Technically not required, but clean.
						}
						$this->html .= '
									</div>
								</div>
							</div>
						';
					}
				}
				break;
			default:
				break;
		}
	}
	return;
}
```

In the example above, we use WordPress' get_posts() function to pull an array of post IDs for the method_team post type. Then, if any post IDs are returned, we set up the opening HTML for a grid. Then, we loop through each post ID, using the load_meta() method to load the post meta for each item. We then use the some of Method's utility methods to interact with the retrieved post meta for each item.