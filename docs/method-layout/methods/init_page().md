`public function init_page( int $pid, bool $standalone )`

This method is intended to be used when building layouts directly inside theme template files, as opposed to building layout components in the theme layout class' build_components() method and setting the component order in determine_attributes(). 

This method sets up the layout class similiar to how the build_page() method does, but with a few key differences:
- init_page() **does not** call the determine_attributes() method. Insteaded, minimal attributes are set.
- init_page() **does not** call the build_layout() method, as it is assumed that you will be building the layout manually. That being said, reusable components can still be build by using the build_component() method.
- init_page() **does** set $attr["is_front"] to true if the post ID passed to the method is the ID of the front page.
- init_page() **does** query and store post meta and theme options in the $meta and $opts properties.
- init_page() can only be used for single post templates (not archives)

***

## Arguments

- **$pid**  
_(int)_ _(required)_ The post ID that you would like to load data for

- **$standalone**  
_(bool)_ _(optional)_ By default, the build\_component(), get\_header\_markup(), and get\_footer\_markup() methods will only return markup from $this->html. Any added scripts or modals will be returned with get\_footer\_markup() when it is called. If you do no intend to call get\_footer\_markup(), pass the $standalone argument for init\_page() as true. When set to true, build\_component(), get\_header\_markup(), and get\_footer\_markup() will return merged output containing the contents of $this->html, $this->scripts, and $this->modals, resetting the contents of each every time one of the methods is called.  
_Default: 'false'_  
  
***

## Example

Below is an example of a page template built using init_page():

```php
<?php
/*
Template Name: My Custom Page Template
*/

	get_header();
	$layout = new MethodThemeLayout;
	$layout->init_page( $post->ID );
	echo $layout->get_header_markup();
	echo $layout->build_component( 'page-header' );
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
	echo $layout->build_component( 'call-to-action' );
	echo $layout->get_footer_markup();
	get_footer();

```