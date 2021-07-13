`public function build_component( string $component )`

This method returns the markup for a single layout component constructerd in the build_components() method and is intended to be used when building layouts directly inside theme template files. If init_page() has been called with the $standalone argument passed as false (or not passed), the method will return any markup that has been added to the class $html property by the requested component. If init_page() has been called with the $standalone argument passed as true, all markup added by the component to the $html, $modals, and $scripts properties will be returned.

***

## Arguments

- **$component**  
_(string)_ _(required)_ The layout component from the build_components() that you would like the method to return markup for.

***

## Examples

### Example 1

In the following example, we'll use the build_component() method to return markup for a custom layout component...

```php title="/templates/page-template-custom.php"
<?php
/*
Template Name: My Custom Page Template
*/

	get_header();
	$layout = new MethodThemeLayout;
	$layout->init_page( $post->ID );
	echo $layout->get_header_markup();
	echo $layout->build_component( 'my-awesome-message' );
	echo $layout->get_footer_markup();
	get_footer();

```

As you can see, we're using the build_component() method to retrieve and display markup for a component called 'my-awesome-message'. Below is an example of how our build_components() method might look...

```php title="/lib/class-theme-layout.php"
protected function build_components() {
	if ( true == $this->attr['is_archive'] ) {
		global $wp_query;
	}
	foreach ( $this->attr['components'] as $component ) {
		switch ( $component ) {
			// other layout components would go here...
			case 'my-awesome-message':
				$this->html .= '
					<div class="container-fluid">
						<div class="row justify-content-center">
							<div class="col-12 col-md-11">
								<h1>Ever notice how Cable and Thanos are played by the same guy?</h1>
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

### Example 2

For this example, let's imagine that we have some javascript that we want to also add to the $scripts property for the 'my-awesome-message' component...

```php title="/lib/class-theme-layout.php"
protected function build_components() {
	if ( true == $this->attr['is_archive'] ) {
		global $wp_query;
	}
	foreach ( $this->attr['components'] as $component ) {
		switch ( $component ) {
			// other layout components would go here...
			case 'my-awesome-message':
				$this->html .= '
					<div class="container-fluid">
						<div class="row justify-content-center">
							<div class="col-12 col-md-11">
								<h1>Ever notice how Cable and Thanos are played by the same guy?</h1>
							</div>
						</div>
					</div>
				';
				$this->scripts .= '
					<script>
						console.log("The more you know.");
					</script>
				';
				break;
			default:
				break;
		}
	}
	return;
}
```

Now let's say that we wanted to display the 'my-awesome-message' component referenced above using the build_component() method, but we wanted that to be the only thing displayed when using our custom template. To achieve this, we'd need to remove the calls to get_header_markup() and get_footer_markup(). This creates a new problem, however, as the contents of the $scripts property for the 'my-awesome-message' component are normally returned with the get_footer_markup() method. For out script to make it to the frontend, we need to modify our template's call to init_page() to pass the $standalone argument as true. This will make any call to build_component() not only return component markup added to the $html property, but also the $scripts and $modals properties:

```php title="/templates/page-template-custom.php"
<?php
/*
Template Name: My Custom Page Template
*/

	get_header();
	$layout = new MethodThemeLayout;
	$layout->init_page( $post->ID, true );
	echo $layout->build_component( 'my-awesome-message' );
	get_footer();

```