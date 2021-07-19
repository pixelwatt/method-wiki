`abstract protected function build_components()`

This is an **abstract method** that should be included in the theme-specific layout class that extends Method_Layout. This class loops through the components set by the [determine_attributes()](/docs/method-layout/methods/determine_attributes()) method and generates frontend markup for each component.

***

## Arguments

This method accepts no arguments.

***

## Return

This method returns no value. Instead, markup for each component is added to the `$html`, `$scripts`, and `$modals` class properties.

***

## Examples

Below are examples of various components built inside the build_components() method:

```php {7,39}
	protected function build_components() {
		if ( true == $this->attr['is_archive'] ) {
			global $wp_query;
		}
		foreach ( $this->attr['components'] as $component ) {
			switch ( $component ) {
				// An archive loop...
				case 'post-listing':
					$this->html .= '
						<div class="method-postlist">
							<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
								<div class="row justify-content-center">
									<div class="' . method_get_class( 'full_width_outer_col' ) . '">
					';
					if ( $wp_query->have_posts() ) {
						while ( $wp_query->have_posts() ) {
							// Optionally, load post meta if you need to access any meta keys here. Otherwise, remove the call to load_meta() and unload_meta() to make this component less expensive.
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
					$this->html .= '
									</div>
								</div>
							</div>
						</div>
					';
					break;
				// A component that displays content entered using the built-in editor...
				case 'page-content':
                    $this->html .= '
                        <div id="method-page-content">
                            <div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
                                <div class="row justify-content-center">
                                    <div class="' . method_get_class( 'full_width_outer_col' ) . '">
                                        ' . $this->filter_content( get_the_content( null, false, $this->id ) ) . '
                                    </div>
                                </div>
                            </div>
                        </div>
                    ';
                    break;
				default:
					break;
			}
		}
		return;
	}
```