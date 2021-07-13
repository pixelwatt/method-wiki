`public function filter_content( $content )`

This method applys WordPress' _the\_content_ filter to a passed string (if the passed string is not empty).

***

## Arguments

- **$content**  
_(string)_ _(required)_ A string of unfiltered content, such as content entered through the visual editor.  
  
***

## Example

Take the following code:

```php
$my_content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
echo $this->filter_content( $my_content );
```

Would echo:  
  
```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

Granted, you normally would not echo content, but add it to the class $html property. A more realistic example:

```php
$post_content = get_the_content( null, false, $this->id );
$this->html .= '
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-12 col-sm-11">
				<h1>' . get_the_title( $this->id ) . '</h1>
				' . $this->filter_content( $post_content ) . '
			</div>
		</div>
	</div>
';
```