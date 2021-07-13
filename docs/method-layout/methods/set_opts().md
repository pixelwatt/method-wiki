`abstract protected function set_opts()`

This is an abstract method that should be included in the theme-specific layout class that extends Method_Layout. The method is called by the build_page() method to retrieve theme-specific options from the database and store them as an array in the $opts property. This class was made abstract to provide control over the option pulled from the database.

***

## Example

To retrieve theme options stored as "method_options":

```php
protected function set_opts() {
	$this->opts = get_option( 'method_options' );
}
```