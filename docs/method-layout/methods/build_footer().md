`abstract protected function build_footer()`

This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll set up the footer that appears on every page.

For layouts built inside the layout class, this method is called by the [build_layout()](/docs/method-layout/methods/build_layout()) method, which is called by [build_page()](/docs/method-layout/methods/build_page()). For layouts built directly inside the template, the markup for this method can be returned by using the [get_footer_markup()](/docs/method-layout/methods/get_footer_markup()) method. In either case, this method should not need to directly be called.

***

## Arguments

This method accepts no arguments.

***

## Return

This method returns no value. Instead, markup for the footer is added to the `$html`, `$scripts`, and `$modals` class properties.

***

## Example

```php
    protected function build_footer() {
        $this->scripts .= '
            <script>
                // Javascript supporting the footer gooes here.
            </script>
        ';
        $this->html .= '
            <!-- Footer HTML goes here -->
        ';
        return;
    }
```