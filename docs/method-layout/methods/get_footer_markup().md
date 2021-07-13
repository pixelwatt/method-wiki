`public function get_footer_markup()`

This method is used to return footer markup, as well as all of the page's scripts and modal markup (unless init_page() was called with the $standalone argument passed as true), when building layouts directly inside theme template files, and should only be used after the init_page() method has been called.

***

## Arguments

This method accepts no arguments.  

***

## Return

If the $standalone argument was passed as false to init_page() (or no value was specified), this method will return anything added to the class' $html property by the build_footer() method, as well as any markup added to the $scripts and $modal properties by build_header() or by any component generated using the build_component() method. If $standalone was passed as true, all markup added to the $html, $scripts, and $modals properties by build_footer() will be returned.

***

## Example

Below is a basic example of a page template built using get_footer_markup():

```php
<?php
/*
Template Name: My Custom Page Template
*/

	get_header();
	$layout = new MethodThemeLayout;
	$layout->init_page( $post->ID );
	echo $layout->get_header_markup();
	if ( have_posts() ) {
		while ( have_posts() ) {
			the_post(); 
			echo '
				<div class="method-page-content">
					<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
						<div class="row justify-content-center">
							<div class="' . method_get_class( 'full_width_outer_col' ) . '">
			';
			the_content();
			echo '
							</div>
						</div>
					</div>
				</div>
			';
		} // end while
	} // end if
	echo $layout->get_footer_markup();
	get_footer();

```