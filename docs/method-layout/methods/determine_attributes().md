`abstract protected function determine_attributes()`

This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll run conditionals against properties set by the build_page() method to determine the layout components needed for specific layouts, which is stored as an array of components in the "components" key of the $attr property. This array is later used by the build_components() method to build out the HTML for set components.

***

## Example

```php
protected function determine_attributes() {
	if ( true == $this->attr['is_archive'] ) {
		switch ( $this->attr['post_type'] ) {
			case 'post':
				$this->attr['components'] = array( 'news-header', 'post-list' );
				break;
		}
	} else {
		switch ( $this->attr['post_type'] ) {
			case 'page':
				if ( $this->attr['is_front'] ) {
					$this->attr['components'] = array( 'front-carousel', 'front-intro' );
				} else {
					$template = get_page_template_slug( $this->id );
					switch ( $template ) {
						case 'templates/page-template-services.php':
							$this->attr['components'] = array( 'internal-header', 'services-list' );
							break;
						default:
							$this->attr['components'] = array( 'internal-header', 'default-content' );
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
```

The function above would register layout components for different pages/archives, as listed below:

![Component Registration](https://robclark.io/assets/method_wiki_images/method_reference_determine_attributes.png)