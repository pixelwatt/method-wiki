`public function build_page( int $pid = '', bool $archive = false )`

This method is used to build the layout for a given page or detected archive. At least one of the arguments must be provided for any output.

***

## Arguments

- **$pid**  
_(int)_ _(optional)_ The post ID that you would like to build the page layout for. Defaults to ''
  
- **$archive**  
_(bool)_ _(optional)_ Whether or not you are building the layout of an archive. If true, the type of archive is automatically detected.  
  
***

## Examples

To generate the layout for a page, regardless of template:

```php
$layout = new MethodThemeLayout;
echo $layout->build_page( $post->ID );
```