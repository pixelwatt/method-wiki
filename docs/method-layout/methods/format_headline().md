`public function format_headline( string $text )`

This method runs a passed string through esc_html() for sanitization, then through the format_tags() method to replace any format tags in the string with html elements. This provides a way to allow for basic text formatting by content editors when entering text through a standard text input meta field. This is ideal for things like headlines, where a TinyMCE editor would provide too much freedom, but a standard text input by itself would be too strict.

***

## Arguments

- **$text**  
_(string)_ _(required)_ The string to run through esc_html() and check for format tags.  

***

## Return

_(string)_ The method returns the passed string, with any original html elements escaped, and format tags replaced with html elements.  

***

## Example  

Take the following code...

```php
$headline = '[strong]This[/strong] Is A [br]Headline';
echo '<h1>' . $this->format_headline( $headline ) . '</h1>';
```

The result:

```html
<h1><strong>This</strong> Is A <br>Headline</h1>
```