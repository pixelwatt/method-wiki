`public function format_tags( string $text )`

This method searches a string for any [format tags](/docs/other-references/format-tags) and replaces matches with the coinciding html tags. This method should be used after esc_html() has been called. In most cases, you won't use this tag directly, but will instead use a method that calls it. Check the link above for a fill list of methods that utilize this method.

***

## Arguments

- **$text**  
_(string)_ _(required)_ The string to check for format tags.  

***

## Return

_(string)_ The method returns the passed string, with format tags replaces with html elements.  

***

## Example  

Take the following code...

```php
$headline = '[strong]This[/strong] Is A [br]Headline';
echo '<h1>' . $this->format_tags( esc_html( $headline ) ) . '</h1>';
```

The result:

```html
<h1><strong>This</strong> Is A <br>Headline</h1>
```