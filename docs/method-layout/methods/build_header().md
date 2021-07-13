`abstract protected function build_header()`

This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. In this method, you'll set up the header that appears on every page.

The build_footer() method does the same thing, but for the footer that appears at the bottom of every page. Trying to create a page for it causes GitHub to freak out and make it the footer of every wiki page.

***

## Example

    protected function build_header() {
        $this->scripts .= '
            <script>
                // Javascript supporting the header go here.
            </script>
        ';
        $this->html .= '
            <!-- Header HTML goes here -->
        ';
        return;
    }