`public function get_bg_inline_style( int $id, string $size )`

This method assists in adding background images to html tags.  

***

## Arguments  

- **$id**  
_(int)_ _(required)_ The attachment ID for the image you wish to use as an html element's background image.  

- **$size**  
_(string)_ _(required)_ The image size you want to use for the background image. It can be any of the predefined image sizes (`thumbnail`, `medium`, `large`, or `full`), or custom images sizes that you've registered with WordPress' add_image_size() function.  

***

## Return

(string) This method returns an inline style attribute that sets the background image to the appropriate image url.  

***

## Example

For this example, lets assume that we're building a layout component for a small section of one of our page templates. In the custom editor options we've created for this page template, we've provided content editors with a CMB2 file field for picking an image to use as the background image, which we've configured to use the meta key `_method_quote_bg`. By default, the full URL of that image will be stored under the meta key, and the attachment ID for that image will be seperately stored as `_method_quote_bg_id`. Below, we'll use the attachment ID to generate an inline style:

```php
$this->html .= '
	<div id="method-front-quote"' . $this->get_bg_inline_style( $this->get_meta( '_method_quote_bg_id' ), 'large' ) . '>
		"Make it so."
	</div>
';
```

Assuming that an image had been picked for our custom option, this would generate something like this:

```html
	<div id="method-front-quote" style="background-image: url('https://robclark.io/wp-content/uploads/2021/06/quote-bg-1024x512.jpg');">
		"Make it so."
	</div>
```

Please note that while this method generates CSS to set the element's background image, it does not generate CSS for sizing and alignment. It is recommended that you provide CSS for sizing in alignment in the theme's stylesheet:

```css title="theme.scss"
#method-front-quote {
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}
```