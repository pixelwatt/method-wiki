`abstract protected function build_header()`

This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll set up the header that appears on every page.

For layouts built inside the layout class, this method is called by the [build_layout()](/docs/method-layout/methods/build_layout()) method, which is called by [build_page()](/docs/method-layout/methods/build_page()). For layouts built directly inside the template, the markup for this method can be returned by using the [get_header_markup()](/docs/method-layout/methods/get_header_markup()) method. In either case, this method should not need to directly be called.

The build_footer() method does the same thing, but for the footer that appears at the bottom of every page. Trying to create a page for it causes GitHub to freak out and make it the footer of every wiki page.

***

## Arguments

This method accepts no arguments.

***

## Return

This method returns no value. Instead, markup for the header is added to the `$html`, `$scripts`, and `$modals` class properties.

***

## Example

```php
    protected function build_header() {
        $this->scripts .= '
            <script>
                // Javascript supporting the header gooes here.
            </script>
        ';
        $this->html .= '
            <!-- Header HTML goes here -->
        ';
        return;
    }
```