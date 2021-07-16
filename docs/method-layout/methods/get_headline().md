`public function get_headline( string $key, string $before, string $after, string $fallback = '' )`

This method allows you to build headlines and other types of content from post meta more efficiently than by using the get_meta() method. Meta key values, if set and not empty, are passed through esc_html() and then the format_tags() class method. The primary purpose of this method is to provide a utility for writing more concise code.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to check and use if is set and not empty.  
  
- **$before**  
_(string)_ _(required)_ Markup to include before the processed value of the meta key, if the meta key is set and not empty, or a fallback value has been provided.  
  
- **$after**  
_(string)_ _(required)_ Markup to include after the processed value of the meta key, if the meta key is set and not empty, or a fallback value has been provided.  
  
- **$fallback**  
_(string)_ _(optional)_ An optional string to fall back to if the meta key isn't set or is empty. If a fallback value is not provided and the meta key isn't set or is empty, the method will return empty.  
  
***

## Examples

### Example 1

```php
// Instead of this...
$this->html .= ( $this->get_meta( '_method_my_headline' ) ? '<h2>' . $this->format_tags( esc_html( $this->get_meta( '_method_my_headline' ) ) ) . '</h2>' : '' );

// You could do this...
$this->html .= $this->get_headline( '_method_my_headline', '<h2>', '</h2>' );
```

### Example 2

```php
// Instead of this...
$this->html .= '<h2>' . ( $this->get_meta( '_method_my_headline' ) ? $this->format_tags( esc_html( $this->get_meta( '_method_my_headline' ) ) ) : 'Awesome Content' ) . '</h2>';

// You could do this...
$this->html .= $this->get_headline( '_method_my_headline', '<h2>', '</h2>', 'Awesome Content' );
```

### Example 3

```php
// Instead of this...
$this->html .= ( $this->get_meta( '_method_employee_title' ) ? '<p class="employee-meta mb-0">Job Title: ' . $this->format_tags( esc_html( $this->get_meta( '_method_employee_title' ) ) ) . '</p>' : '' );

// You could do this...
$this->html .= get_headline( '_method_employee_title', '<p class="employee-meta mb-0">Job Title: ', '</p>' );
```