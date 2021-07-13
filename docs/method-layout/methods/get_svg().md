`public function get_svg( int $id, string $class = '', string $label = '', bool $hidden = false, string $fallback_size = 'full' )`

This method retrieves returns a customized, inlined svg from an attachment ID. If the ID passed to the method is not for a svg, the method falls back to wp_get_attachment_image(), which will use the "full" image size by default.

***

## Arguments

- **$id**  
_(int)_ _(required)_ The attachment ID to get the path for. 
  
- **$class**  
_(string)_ _(optional)_ A CSS class (or classes) to add the svg tag. 
_Default: ''_  
  
- **$label**  
_(string)_ _(optional)_ If you need to set the aria-label attribute for the svg (in some cases, needed for accessibility), provide a label.  
_Default: ''_  

- **$hidden**  
_(bool)_ _(optional)_ Whether or not to hide the svg from screen readers. If _true_, `aria-hidden="true"` will be added to the svg tag.  
_Default: false_  

- **$fallback_size**  
_(string)_ _(optional)_ The image size to return if the attachment ID references an image that is not an svg. 
_Default: 'full'_  
  
***

## Return

_(string)_ If the passed attachment ID is for an svg, the method will return an inlined HTML svg element. If the ID references any other type of image, wp_get_attachment_image() will be used to return a HTML img element. Otherwise, the method will return an empty string.  

***

## Example

:::note Coming Soon

In the interest of getting the documentation site online before 2030, check back soon for an example.

:::