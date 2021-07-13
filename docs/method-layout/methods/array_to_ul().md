`public function array_to_ul( $array, $class = '' )`

This method takes an indexed array and builds the HTML for an unordered list, with each array item having its own list item. Please be aware that $array is first passed through the maybe_unserialize() function (to support passing serialized post meta to the method).

The contents of each array index are passed through esc_html(), and then the format_tags() method (allowing for basic content formatting without supporting raw HTML)

***

## Arguments

- **$array**  
_(mixed)_ _(required)_ An indexed array or serialized indexed array to convert into an unordered list.  
  
- **$class**  
_(string)_ _(optional)_ A CSS class for the unordered list.  
  
***

## Example

The following code...

```php
$my_array = array( 'one', 'two', 'three' );
$this->html .= $this->array_to_ul( $my_array, 'some-numbers' );
```

Would add the following HTML (formatted for legibility here, returned as single line in practice)...

```html
<ul class="some-numbers">
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ul>
```

***

## Notes

* The _$class_ argument was added in v1.1.2
* Format tag support was added in v1.1.2