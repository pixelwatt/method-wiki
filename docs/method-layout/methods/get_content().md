`public function get_content( string $key, string $before, string $after, string $fallback = '' )`

This method allows you to retrieve and filter content from post meta more efficiently than by using the get_meta() method. Meta key values, if set and not empty, are passed through the filter_content() class method, then wrapped in values provide for the $before and $after arguments. This method is most useful when handeling content entered through a TinyMCE field.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to check and use if is set and not empty.  
  
- **$before**  
_(string)_ _(required)_ Markup to include before the processed value of the meta key, if the meta key is set and not empty, or a fallback value has been provided.  
  
- **$after**  
_(string)_ _(required)_ Markup to include after the processed value of the meta key, if the meta key is set and not empty, or a fallback value has been provided.  
  
- **$fallback**  
_(string)_ _(optional)_ An optional string to fall back to if the meta key isn't set or is empty. If a fallback value is not provided and the meta key isn't set or is empty, the method will return empty. If used, the $fallback string **will not** be passed through the filter_content() class method.
  
***

## Example

```php
// Instead of this...
$this->html .= '<div class="content-wrap">' . ( $this->get_meta( '_method_my_content' ) ? $this->filter_content( $this->get_meta( '_method_my_content' ) ) : '<p>Coming Soon</p>' ) . '</div>';

// You could do this...
$this->html .= $this->get_content( '_method_my_content', '<div class="content-wrap">', '</div>', '<p>Coming Soon</p>' );
```