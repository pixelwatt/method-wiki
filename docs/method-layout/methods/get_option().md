`public function get_option( $key )`

This method allows you to quickly retrieve the value for an individual theme option (or theme mod, depending on the value that the set_opts() method is configured to query). This method can be used to retrieve any option, reguardless of whether or not it is an array. If the passed key does not exist or is empty, this method will return _false_.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The options key to pull from the $opts property (where all theme options are stored)  
  
 - **$fallback** <span class="version-badge">v1.3.4+</span>  
_(string)_ _(optional)_ An optional string to fall back to if the loaded option key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return false. If used, the $fallback string **will not** be passed through the format_tags() class method, so you can include HTML markup as needed.
  
***

## Return

If the passed array key (option) exists and is not empty, the key's value is returned. If the key does not exist or is empty, this method returns _false_.  
  
***

## Example

Take the following code:

```php
$this->html .= ( $this->get_option( 'copyright' ) ? '<div class="site-copyright">' . $this->get_option( 'copyright' ) . '</div>' : '' );
```

In the about code, we first use the get_option() method to see if an array key exists and isn't empty. If the key exists and has a value, we then use the method to output the value, wrapped with a div. Otherwise, we do nothing. The above example is somewhat overly simplified, as it does not sanitize or filter the returned value. In similiar cases, you would most likely be better off using the get_headline_from_option() or get_content_from_option() methods, which automatically check to see if a key exists and has a value, and then processes the returned value in different ways.