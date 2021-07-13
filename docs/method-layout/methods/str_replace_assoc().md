`public function str_replace_assoc( array $replace, string $subject )`

This method is used to replace strings found in an associative array. This method was created from Wes Foster's strReplaceAssoc() function ([source](https://www.php.net/manual/en/function.str-replace.php#95198)).

***

## Arguments

- **$replace**  
_(array)_ _(required)_ The associative array containing strings to search for (the array keys) and the strings to replace matches with (the values)  

- **$subject**  
_(string)_ _(required)_ The string to process.  

***

## Return

This method will return the passed string, but with any array key matches replaced by the associated values.

***

## Example

```php

$truth = "I really like muffins.";

$words = array(
	'really' => 'somewhat',
	'like' => 'enjoy',
	'muffins' => 'cake',
);

$this->str_replace_assoc( $words, $truth );

echo $truth;
// Result: "I somewhat enjoy cake."

```