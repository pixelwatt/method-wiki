`public function get_meta( $key )`

This method allows you to quickly retrieve post meta from the current post. If the meta key you wish to retrive is an array, use the [get_serialized_meta()](/docs/method-layout/methods/get_serialized_meta()) method instead, as this method will not unserialize retrieved meta values.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to pull from the $meta property (where all meta for the current post is stored)  
  
- **$fallback** <span class="version-badge">v1.3.4+</span>  
_(string)_ _(optional)_ An optional string to fall back to if the loaded meta key isn't set or is empty. If a fallback value is not provided and the key isn't set or is empty, the method will return false. If used, the $fallback string **will not** be passed through the format_tags() class method, so you can include HTML markup as needed.
  
***

## Return

If the passed meta key exists, this method will return the value of that key. If the meta key doesn't exist, or is empty, the method returns false.  

***

## Example

Take the following code:

```php
$this->html .= ( $this->get_meta( '_mytheme_front_img_id' ) ? wp_get_attachment_image( $this->get_meta( '_mytheme_front_img_id' ), 'large' ) : '' );
```

In the above code, we first use the get_meta() method to see if an array key exists and isn't empty. Specifically, the method checks to see if `$meta['_mytheme_front_img_id'][0]` exists and has a value. If so, we use the method again to pass an attachment ID to the wp_get_attachment_image() function, adding the resulting image to the layout's html output. This is commonly done with in conjunction with CMB2 file fields, used to let content editors pick imagery using custom editor options.