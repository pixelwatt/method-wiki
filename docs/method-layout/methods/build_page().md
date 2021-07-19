`public function build_page( int $pid = '', bool $archive = false )`

This method is used to build the layout for a given page or detected archive. At least one of the arguments must be provided for any output.

***

## Arguments

- **$pid**  
_(int)_ _(optional)_ The post ID that you would like to build the page layout for. Defaults to ''
  
- **$archive**  
_(bool)_ _(optional)_ Whether or not you are building the layout of an archive. If true, the type of archive is automatically detected.  
  
***

## Return

_(string)_ This method returns a string containing all markup for the current post or archive's layout.

***

## Examples

### Single Posts

To generate the layout for a single post, page, or custom post type:

```php
<?php
	get_header();
	$layout = new MethodThemeLayout;
	echo $layout->build_page( $post->ID );
	get_footer();
```

### Archives

To generate the layout for an archive (soon to be handled by a new build_archive() method instead):

```php
<?php
	get_header();
	$layout = new MethodThemeLayout;
	echo $layout->build_page( '', true );
	get_footer();
```