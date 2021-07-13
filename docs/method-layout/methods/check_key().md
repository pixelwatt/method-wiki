`public function check_key( $key )`

This method checks to see if a passed value is set and is not empty. If both conditions are met, the method returns _true_. Otherwise, the method returns _false_.

***

## Arguments

- **$key**  
_(string)_ _(required)_ The variable to evaluate.  
  
***

## Example

Take the following code:

```php
$my_array = array(
	'title' => 'My Awesome Title',
	'content' => '',
);
$check1 = $this->check_key( $my_array['title'] );
$check2 = $this->check_key( $my_array['content'] );
$check3 = $this->check_key( $my_array['image_id'] );
```

In the example above:  
  
- $check1 would equal _true_
- $check2 would equal _false_
- $check3 would equal _false_