# Building Loops for Archives

## Overview

When building an archive layout, you can either build directly in the template, using a standard loop to loop through archive items, or you can build the layout component inside the theme layout class. This guide will briefly cover how to build an archive loop from within the layout class.

***

## Layout Component Example

Below is a theme layout class built with only the neccessary elements to generate a post archive, with the relevant lines highlighted:

```php title="lib/class-theme-layout.php" {11-13,59-61,64-84}
class MethodThemeLayout extends Method_Layout {

	protected function set_opts() {
		$this->opts = get_option( 'method_options' );
	}

	protected function determine_attributes() {
		global $wp_query;
		if ( true == $this->attr['is_archive'] ) {
			switch ( $this->attr['post_type'] ) {
				case 'post':
					$this->attr['components'] = array( 'post-listing' );
					break;
			}
		} else {
			switch ( $this->attr['post_type'] ) {
				case 'page':
					if ( $this->attr['is_front'] ) {
						$this->attr['components'] = array( 'front-header', 'page-content' );
					} else {
						$template = get_page_template_slug( $this->id );
						switch ( $template ) {
							case 'templates/page-template-custom.php':
								$this->attr['components'] = array( 'internal-header', 'page-content' );
								break;
							default:
								$this->attr['components'] = array( 'internal-header', 'page-content' );
								break;
						}
					}
					break;
				case 'post':
					$this->attr['components'] = array( 'post-header', 'post-content' );
					break;
				default:
					break;
			}
		}
		return;
	}

	protected function build_header() {
		$this->scripts .= '
		';
		$this->html .= '
			<!-- markup for the footer that appears on every page would go here -->
		';
		return;
	}

	protected function build_footer() {
		$this->html .= '
			<!-- markup for the footer that appears on every page would go here -->
		';
		return;
	}

	protected function build_components() {
		if ( true == $this->attr['is_archive'] ) {
			global $wp_query;
		}
		foreach ( $this->attr['components'] as $component ) {
			switch ( $component ) {
				case 'post-listing':
					$this->html .= '<div class="method-postlist">';
					if ( $wp_query->have_posts() ) {
						while ( $wp_query->have_posts() ) {
							// Optionally, load post meta if you need to access any meta keys here. Otherwise, remove the call to load_meta() and unload_meta()
							$this->load_meta( $wp_query->post->ID );

							$this->html .= '
								<div class="method-postlist-item">
									<h2>' . get_the_title( $wp_query->post->ID ) . '</h2>
									<p class="method-postlist-item-date">' . get_the_time( 'l, F j, Y', $wp_query->post->ID ) . '</p>
								</div>
							';

							// If you loaded this post's postmeta above, unload it below.
							$this->unload_meta();
						}
						wp_reset_postdata();
					}
					$this->html .= '</div>';
					break;
				default:
					break;
			}
		}
		return;
	}

}

```

***

## Helpful Resources

* [Formatting Date and Time](https://wordpress.org/support/article/formatting-date-and-time/)
* [WP_Query Class Reference](https://developer.wordpress.org/reference/classes/wp_query/)