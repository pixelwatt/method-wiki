`protected function get_bs_icon_svg( string $icon, int|string $size = '16', string $class = '', string $label = '', bool $hidden = false )`

This method retrieves, modifies, and returns the svg for a Bootstrap icon.

***

## Arguments

- **$icon**  
_(string)_ _(required)_ The name of the icon that you would like to retrieve the svg for. (ex: 'alarm', 'chat-square-fill', 'share')  
  
- **$size**  
_(string / int)_ _(optional)_ The number of pixels that you would like the width and height of the icon to be (ex: '20')  
_Default: '16'_  
  
- **$class**  
_(string)_ _(optional)_ Any additional CSS classes to add to the svg  
_Default: ''_  
  
- **$label**  
_(string)_ _(optional)_ If you need to set the aria-label attribute for the svg (in some cases, needed for accessibility), provide a label.  
_Default: ''_  

- **$hidden**  
_(bool)_ _(optional)_ Whether or not to hide the svg from screen readers. If _true_, `aria-hidden="true"` will be added to the svg tag.  
_Default: false_  
  
***

## Example

Take the following code:

```php
echo $this->get_bs_icon_svg( 'stack', '24', 'my-custom-class', 'Stuff and things.' );
```

This would output the following markup:
  
```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-stack my-custom-class" viewBox="0 0 16 16" aria-label="Stuff and things.">
  <path d="M14.12 10.163l1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
  <path d="M14.12 6.576l1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
</svg>
```