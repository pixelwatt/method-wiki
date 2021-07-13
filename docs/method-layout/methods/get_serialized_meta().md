`public function get_serialized_meta( $key )`

This method allows you to quickly retrieve and unserialize serialized post meta for the current post. If the meta key doesn't exist, or is empty, the method returns false. To retrieve post meta that does not need to be unserialized, use the [get_meta()](https://github.com/pixelwatt/method/wiki/Method-Reference:-get_meta()) method.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The meta key to pull from the $meta property and unserialize (where all meta for the current post is stored)  
