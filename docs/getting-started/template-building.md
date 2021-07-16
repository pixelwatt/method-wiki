---
sidebar_position: 3
---

# Development Workflow

On this page, I'll brielfy walk you through the different routes for building the frontend components of template files, walk you through an example, and show you how to register template-specific options using CMB2.

***

## Building The Frontend

When building out template layouts with Method, there are two approaches that you can take: 

1. You can build template layouts entirely inside the theme's layout class (which extends Method_Layout), adding logic to the determine_attributes() method to determine which layout components should be included in each template, and then adding the components individually to the build_components() method. Or...
2. You can build template layouts directly inside template files, using methods from Method_Layout to efficiently pull post meta, theme options, and reusable components as needed.

While you can't switch between the two approaches for the same template file, you can handle each template file differently. For example, you could consolidate all of the frontend code for the front page into the layout class, but build the frontend code for the single post template inside the single.php template file. There are advantages to both. Building inside the class is a great way to consolidate code, while building directly inside template files tends to work better for plugin-specific template files (one example being The Events Calendar).

Below, I'll walk you through how you could use both approaches to build the frontend for front-page.php, the front page template for the theme.

***

### Example 1: The Layout Class Approach

First, I'll walk you through how to build the front page template entirely inside the layout class. To start, let's take a look at the `front-page.php` template file itself...

```php title="front-page.php"
<?php
	get_header();
	$layout = new MethodThemeLayout;
	echo $layout->build_page( $post->ID );
	get_footer();

```

Because most of the code is consolidated into the MethodThemeLayout (or whatever you decide to call it if using Method Generator), the template file itself is pretty light. We have the standard calls to WordPress' get_header() and get_footer() functions, and in between we create a new `MethodThemeLayout` object, then echo the return of it's public build_page() method, which we pass the post ID to. The build_page() method is inherited form the Method_Layout class, and does a number of different things. This includes determining the post type, determining if the page is using a custom template (or the front page), stores post meta and theme options inside class properties, and assembles the page layout, finally returning the full html for the page.

When building inside the layout class, this is pretty much how every template file for a single post will look (aside from extra template information for custom page templates). Now, let's look at the theme layout class, where we'll do most of the work. For the sake of keeping things as short as possible, this class only contains the relevant markup for generating the front page:

```php title="lib/class-theme-layout.php" {18-19,42-69,71-84,92-122}
class MethodThemeLayout extends Method_Layout {

	protected function set_opts() {
		$this->opts = get_option( 'method_options' );
	}

	protected function determine_attributes() {
		global $wp_query;
		if ( true == $this->attr['is_archive'] ) {
			switch ( $this->attr['post_type'] ) {
				case 'post':
					$this->attr['components'] = array( 'blog-header', 'blog-posts' );
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
			<div id="grace-primary-nav">
				<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
					<div class="row justify-content-center">
						<div class="' . method_get_class( 'full_width_outer_col' ) . '">
							<div class="navbar-wrap">
								<nav class="navbar navbar-expand-lg navbar-light">
									<a class="navbar-brand" href="/">
										<img src="' . get_template_directory_uri() . '/assets/images/logo.svg" class="img-fluid" id="site-logo" width="178" height="79" alt="Method logo">
									</a>
									<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span class="navbar-toggler-icon"></span>
									</button>
									<div class="collapse navbar-collapse" id="navbarSupportedContent">
										' . wp_nav_menu( array( 'theme_location' => 'primary', 'depth' => 2, 'container' => '', 'menu_class' => '', 'items_wrap' => '<ul id="%1$s" class="navbar-nav ms-auto %2$s">%3$s</ul>','walker' => new bootstrap_5_wp_nav_menu_walker(), 'fallback_cb' => '__return_false', 'echo' => false, ) ) . '
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		';
		return;
	}

	protected function build_footer() {
		$this->html .= '
			<footer>
				<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
					<div class="row justify-content-center">
						<div class="' . method_get_class( 'full_width_outer_col' ) . '">
							' . ( $this->get_option( 'footer_copyright' ) ? '<p id="copyright">' . esc_html( $this->get_option( 'footer_copyright' ) ) . '</p>' : '' ) . '
						</div>
					</div>
				</div>
			</footer>
		';
		return;
	}

	protected function build_components() {
		if ( true == $this->attr['is_archive'] ) {
			global $wp_query;
		}
		foreach ( $this->attr['components'] as $component ) {
			switch ( $component ) {
				case 'front-header':
					$this->html .= '
						<div id="method-front-header">
							<div class="container-fluid ' . method_get_class( 'full_width_container' ) . '">
								<div class="row justify-content-center">
									<div class="' . method_get_class( 'full_width_outer_col' ) . '">
										<div class="d-flex align-items-center justify-content-start">
											<div class="headline-wrap">
												' . $this->get_headline( '_method_header_headline', '<h1>', '</h1>', 'Welcome to My Site!' ) . '
												' . ( $this->get_meta( '_method_header_subtitle' ) ? '<span class="subtitle">' . esc_html( $this->get_meta( '_method_header_subtitle' ) ) . '</span>' : '' ) . '
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					';
					break;
				case 'page-content':
					$this->html .= '
						<div id="method-front-content">
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

}

```

In the above layout class, we're doing all the actual work for building out the front page. I've highlighted the relevant portions of code. 

First, in the determine_attributes() method, we specify which components should be built if the current post is the front page (lines 18-19). 

We provide the actual markup for these components further down in the class, in the build_components() method. Here, we query and format post meta using the inherited get_meta() and get_headline() methods. Because the class stores all post meta for reuse across the layout, there's no need to use get_post_meta(). The same goes for WordPress' get_option() function. Instead, we use the get_option() method to query stored data. By reusing this data across components, the number of database queries generated by our page can be greatly reduced.

Finally, the code for the header and footer are contained in the build_header() and build_footer() methods. These methods are automatically called when using the build_page() method, reguardless of the template being built.

***

### Example 2: The Template Approach

Now that you've seen how to build a template using the layout class, lets build the same layout using the template approach. If we decided to build the front-page.php layout directly inside the template, it would look something like this...

```php title="front-page.php"
<?php
	get_header();
	$layout = new MethodThemeLayout;
	$layout->init_page( $post->ID );
	echo $layout->get_header_markup();
?>
	<!-- start header -->
	<div id="method-front-header">
		<div class="container-fluid <?php echo method_get_class( 'full_width_container' ); ?>">
			<div class="row justify-content-center">
				<div class="<?php echo method_get_class( 'full_width_outer_col' ); ?>">
					<div class="d-flex align-items-center justify-content-start">
						<div class="headline-wrap">
							<?php
								echo $layout->get_headline( '_method_header_headline', '<h1>', '</h1>', 'Welcome to My Site!' );
								echo ( $layout->get_meta( '_method_header_subtitle' ) ? '<span class="subtitle">' . esc_html( $layout->get_meta( '_method_header_subtitle' ) ) . '</span>' : '' );
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- end header -->
<?php
	echo $layout->get_component( 'page-content' );
	echo $layout->get_footer_markup();
	get_footer();
?>
```

In the code above, we start out by creating a new MethodThemeLayout object just as before, but instead of calling the [build_page()](/docs/method-layout/methods/build_page()) method on line 4, we instead call [init_page()](/docs/method-layout/methods/init_page()). This method does a lot of the same setup work that the [build_page()](/docs/method-layout/methods/build_page()) method does, but doesn't build or return anything. Instead, it leaves it to us to build the template out.

To begin building the page out, we start by echoing the return of the [get_header_markup()](/docs/method-layout/methods/get_header_markup()) method. This method essentially returns anything added to the class `$html` property by the [build_header()](/docs/method-layout/methods/build_header()) method we saw earlier in the class example.

If we added any markup to the `$scripts` or `$modals` properties in the [build_header()](/docs/method-layout/methods/build_header()) method, that markup would be returned with the call to the [get_footer_markup()](/docs/method-layout/methods/get_footer_markup()) method on line 28 to preserve code order on the page (unless the $standalone argument was passed as _true_ to [init_page()](/docs/method-layout/methods/init_page()), which should only be done if you do not intend to call the [get_footer_markup()](/docs/method-layout/methods/get_footer_markup()) method).

Next, we build the header in much the same way we did in the class example. We have access to the same method and functions as we did inside the class for accessing post meta, so aside from adding echoes and changing some names around, we're good to go.

Next, we call the get_component() method to get the output of the `page-content` compontent we added in the class example. Because this component appears on multiple templates, we keep it inside the layout class so we can reuse it without repeating ourselves. As with get_header_markup(), only content added to the $html property by a requested component will be returned. Anything markup added to $scripts and $modals will be returned with get_footer_markup() (unless $standalone was passed to init_page() as true, in which case markup added to all 3 properties would be returned).

Finally, we echo the return of the get_footer_markup() method, which in this case will return all content added to the `$html` class property by the build_footer() method, as well as the content added to `$scripts` and `$modals` by build_header(), build_footer(), and any components we added using the get_component() method.

***

## Building The Backend

Now that we've gone over how to build the frontend for our templates, let's take a moment to look at the backend. In the examples above, we referenced two meta keys, `_method_front_headline` and `_method_front_subtitle`. In this section, we'll go through how to provide custom editor options to control the content stored in these meta keys.

For the examples below, we'll be working with two files: `lib/cmb2-metaboxes.php` and `lib/cmb2-options-loader.php`. In `lib/cmb2-metaboxes.php`, we'll register our metaboxes. To assist in registering individual options, we can optionally use the method_load_cmb2_options() function in `lib/cmb2-options-loader.php` to template out sets of options, if our theme's design contains components shared across multiple layouts.

While we won't be working inside the file, it's worth mentioning `lib/cmb2-helper-functions.php`, which adds visibility options for targeting the front page template editor and default page template editor.

***

### Example 1: The Untemplated Approach

For this example, we'll create a metabox that only appears in the page editor when editing the front page of the site. Instead of templating options via the method_load_cmb2_options() function, we'll stick to the default way of registering options.

```php title="lib/cmb2-metaboxes.php"
<?php

//======================================================================
// CMB2 METABOXES
//======================================================================

/**
 * Front Page Metabox
 */

add_action( 'cmb2_admin_init', 'method_register_page_front_metabox' );

function method_register_page_front_metabox() {
	$prefix = '_method_';

	$cmb_options = new_cmb2_box(
		array(
			'id'            => $prefix . 'metabox_page_front',
			'title'         => esc_html__( 'Front Page Options', 'cmb2' ),
			'object_types'  => array( 'page' ),
			'show_on' => array(
				'key' => 'front-page',
				'value' => '',
			),
		)
	);

	$cmb_options->add_field(
		array(
			'name'     => __( '<span style="font-size: 1.5rem; font-weight: 900;">Header Options</span>', 'method' ),
			'id'       => $prefix . 'header_info',
			'type'     => 'title',
		)
	);
	$cmb_options->add_field(
		array(
			'name'     => __( 'Headline', 'method' ),
			'desc'     => __( method_get_tags_badge() . 'Provide a headline for the page header.', 'method' ),
			'id'       => $prefix . 'header_headline',
			'type'     => 'text',
		)
	);
	$cmb_options->add_field(
		array(
			'name'     => __( 'Subtitle', 'method' ),
			'desc'     => __( 'Additionally, provide a subtitle for the page header.', 'method' ),
			'id'       => $prefix . 'header_subtitle',
			'type'     => 'text',
		)
	);
}

```

In the code above, we use the `method_register_page_front_metabox()` function to register a new CMB2 metabox, only to be shown when editing the static front page. Once we've created the new metabox object, we use CMB2's `add_field()` method to register options for a section heading, headline text input, and subtitle text input. If you're familiar with CMB2, there isn't much else to see. This is the standard approach to registering metaboxes with the framework.

The only item of note is the call to a function called `method_get_tags_badge()` on line 38. To allow for safe use of limited HTML formatting inside text inputs, Method utilizes shortcode-like [format tags](/docs/other-references/format-tags), and provides methods to process them. When registering a field that you intend to allow use of format tags in, you can use `method_get_tags_badge()` to add a badge into that field's description letting content editors know that it's safe to use format tags. Clicking on the badge will open an overlay that details supported tags and provides examples of supported input. Because the [get_headline()](/docs/method-layout/methods/get_headline()) method used in the examples about automatically processes format tags, we've added a badge to the description for the headline field.

***

### Example 2: The Templated Approach

In the first example, we registered a metabox with custom options to control the headline and subtitle for the header that appears on the static front page of our site. The code we used works great if the front page of the site is the only one with a header, but what if a similiar header was used on multiple templates? We could replicate the fields we added using CMB2's `add_field()` method for every metabox registration, but that's a lot of repeated code. In the example below, I'll walk you through how to template options using Method's `method_register_page_front_metabox()` function. Let's start by making a change to the metabox we created in the first example:

```php title="lib/cmb2-metaboxes.php" {28}
<?php

//======================================================================
// CMB2 METABOXES
//======================================================================

/**
 * Front Page Metabox
 */

add_action( 'cmb2_admin_init', 'method_register_page_front_metabox' );

function method_register_page_front_metabox() {
	$prefix = '_method_';

	$cmb_options = new_cmb2_box(
		array(
			'id'            => $prefix . 'metabox_page_front',
			'title'         => esc_html__( 'Front Page Options', 'cmb2' ),
			'object_types'  => array( 'page' ),
			'show_on' => array(
				'key' => 'front-page',
				'value' => '',
			),
		)
	);

	method_load_cmb2_options( $cmb_options, array( 'header-options' ) );

}

```

In the code above, we've replace the metabox's field registrations with a call to `method_load_cmb2_options()`. This function accepts two arguments. For the first argument, we provide the CMB2 object that we want to add templated options to. For the second option, we pass an array of option sets that we want to add. In this case, we're only adding one set of options, those being `'header-options'`.

Now lets take a look at the `lib/cmb2-options-loader.php` file:

```php title="lib/cmb2-options-loader.php" {11-35}
<?php

//======================================================================
// CMB2 OPTIONS LOADER
//======================================================================

function method_load_cmb2_options( &$obj, $temps ) {
	foreach ( $temps as $temp ) {
		$prefix = str_replace( '-', '_', $temp );
		switch ( $temp ) {
			case 'header-options':
				$obj->add_field(
					array(
						'name'     => __( '<span style="font-size: 1.5rem; font-weight: 900;">Header Options</span>', 'method' ),
						'id'       => '_method_header_info',
						'type'     => 'title',
					)
				);
				$obj->add_field(
					array(
						'name'     => __( 'Headline', 'method' ),
						'desc'     => __( method_get_tags_badge() . 'Provide a headline for the page header.', 'method' ),
						'id'       => '_method_header_headline',
						'type'     => 'text',
					)
				);
				$obj->add_field(
					array(
						'name'     => __( 'Subtitle', 'method' ),
						'desc'     => __( 'Additionally, provide a subtitle for the page header.', 'method' ),
						'id'       => '_method_header_subtitle',
						'type'     => 'text',
					)
				);
				break;
			default:
				break;
		}
	}
	return;
}

```

In the code above, we've added a case to `method_load_cmb2_options()`'s switch statement for the `header-options` fieldset. Overall, the code for the field registrations is pretty similiar to the ones from the first example. The only differences are that we're adding the fields to `$obj` instead of `$cmb2_options`, and we're hardcoding the entire metakey for each option (the `id` key), since we didn't pass `$prefix` to the function.

***

### Further Reading

For more information on using CMB2, check out the plugin's [extensive wiki](https://github.com/CMB2/CMB2/wiki).

***

## Theme Options

In addition to being used for custom metaboxes across our theme, CMB2 is also used to create the theme's custom options page. All code responsible for creating the options page and registering it's fields can be found in the `lib/theme-customization.php` file. Overall, the code is very similar to that used for creating metaboxes. The main difference is that field IDs are stored as keys inside the `method_options` option in the `wp_options` table, instead of individual meta keys.