`public function array_to_p( $array, $class = '', $seperator = '', $show_seperator = false )`

This method takes an indexed array and builds a paragraph, with each array item being seperated by line breaks. This can be ideal for formatting certain types of content, such as an street adress, and works well for outputting repeatable text inputs created on the backend with CMB2. 

:::caution Only Pass Trusted Input

Please be aware that $array is first passed through the [maybe_unserialize()](https://developer.wordpress.org/reference/functions/maybe_unserialize/) function (to support passing serialized post meta to the method). The contents of each array index are passed through [esc_html()](https://developer.wordpress.org/reference/functions/esc_html/), and then the [format_tags()](/docs/method-layout/methods/format_tags()) method (allowing for basic content formatting without supporting raw HTML)

:::

***

## Arguments

- **$array**  
_(mixed)_ _(required)_ An indexed array or serialized indexed array to convert into an unordered list.  
  
- **$class**  
_(string)_ _(optional)_ A CSS class for the paragraph. Defaults to empty.  
  
- **$seperator**  
_(string)_ _(optional)_ A visually-hidden seperator to include before each line break. While not required, providing a seperator is greatly encouraged, as it will allow for better indexing of the output by search engines and work better with screen readers.  
  
- **$show_seperator**  
_(bool)_ _(optional)_ Whether or not the seperator should be visible. If false, a span with the _visually-hidden_ css class will be wrapped around the seperator.  
  
***

## Return

_(string)_ If that passed value for $array is a valid array and is not empty, this method returns a string containing the merged values of an indexed array, seperated by a custom string (if provided) and a line break (`<br>`), all wrapped in `<p>...</p>`. If the provided value for $array is not an array, or is empty, the method returns an empty string.  

***

## Example

The following code...

```php
$my_array = array( '[strong]My Awesome Business[/strong]', '2920 Kessler Pines', 'Huntsville, AL 35801' );
$this->html .= $this->array_to_ul( $my_array, 'footer-addr', ', ' );
```

Would add the following HTML (formatted for legibility here, returned as single line in practice)...

```html
<p class="footer-addr">
	<strong>My Awesome Business</strong><span class="visually-hidden">, </span><br>
	2920 Kessler Pines<span class="visually-hidden">, </span><br>
	Huntsville, AL 35801
</p>

```

***

## Notes

* The _$seperator_ argument was added in v1.1.2
* Format tag support was added in v1.1.2