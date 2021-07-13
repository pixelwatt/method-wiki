`public function odd_or_even( int $i, string $odd_text = 'odd', string $even_text = 'even' )`

This method evaluates a number and returns a value indicating whether it is an odd or even number.

***

## Arguments

- **$i**  
_(int)_ _(required)_ The number to evaluate.  
  
- **$odd_text**  
_(string)_ _(optional)_ The string to return if the passed number is odd.  
_Default: 'odd'_  
  
- **$even_text**  
_(string)_ _(optional)_ The string to return if the passed number is even.  
_Default: 'even'_  
  
***

## Example

Take the following code:

```php
$output = '';

// The array below is formatted in the same way that meta for a CMB2 repeatable group field with a text input and TinyMCE field would be.
$items = array(
	array(
		'title' => 'My Awesome Title',
		'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.',
	),
	array(
		'title' => 'Another Awesome Title',
		'content' => 'Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget.',
	),
	array(
		'title' => 'Oh Honey',
		'content' => 'Hey, yeah, whoa-ho, I\'m on a roll, Ridin\' so high, achieving my goals',
	),
);

$i = 1;

$output .= '<div class="method-content-rows">';
foreach ( $items as $item ) {
	$output .= '
		<div class="method-content-row ' . $this->odd_or_even( $i, 'method-content-row-odd', 'method-content-row-even' ) . '">
			<div class="container-fluid">
				<div class="row justify-content-' . ( 'odd' == $this->odd_or_even( $i ) ? 'start' : 'end' ) . '">
					<div class="col-12 col-md-8">
						' . ( $this->check_key( $item['title'] ) ? '<h2>' . $this->format_headline( $item['title'] ) . '</h2>' : '' ) . '
						' . ( $this->check_key( $item['content'] ) ? '<div class="content-wrap">' . $this->filter_content( $item['content'] ) . '</div>' : '' ) . '
					</div>
				</div>
			</div>
		</div>
	';
	$i++;
}
$output .= '</div>';

echo $output;
```

This would output the following markup:
  
```html
<div class="method-content-rows">
	<div class="method-content-row method-content-row-odd">
		<div class="container-fluid">
			<div class="row justify-content-start">
				<div class="col-12 col-md-8">
					<h2>My Awesome Title</h2>
					<div class="content-wrap">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="method-content-row method-content-row-even">
		<div class="container-fluid">
			<div class="row justify-content-end">
				<div class="col-12 col-md-8">
					<h2>Another Awesome Title</h2>
					<div class="content-wrap">
						<p>Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="method-content-row method-content-row-odd">
		<div class="container-fluid">
			<div class="row justify-content-start">
				<div class="col-12 col-md-8">
					<h2>Oh Honey</h2>
					<div class="content-wrap">
						<p>Hey, yeah, whoa-ho, I'm on a roll, Ridin' so high, achieving my goals</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```