---
sidebar_position: 4
---

# Format Tags

## Overview

Format tags allow content editors to format select content with a limited set of HTML tags, by way of format tags. These were added to account for scenarios where a client may need the avibility to do basic text formatting, but facilitating that through a WYWISYG field isn't practical. A great example of such a scenerio is when clients are entering headlines through a text input. Here, it wouldn't make sense to use a full WYSIWYG (TinyMCE) field just for a headline, but editors still may need to ability to make basic formatting edits (bold, emphasize, add a line break). To allow for this, content entered through certain editor options can be passed through Method_Layout's format_tags() method, or a method that uses it, after passing the field's content through esc_html() (trust no one). This method checks for format tags and converts any it finds to HTML. You can let content editors know that format tags are supported by a field by including a "Tags Supported" badge in the field's description, which can be inserted with the theme_get_tags_badge() function, which inserts a clickable badge that triggers an overlay containing a list of currently-available tags. 

***

## Included Tags
  
- **\[strong\]...\[/strong\]**  
This tag allows you to bold portions of text by wrapping the desired text in `[strong]...[/strong]`.  
_(Ex: "I want \[strong\]this\[/strong\] to be bold.")_  
  
- **\[em\]...\[/em\]**  
Similiar to the \[strong\] tag, this tag allows you to italicize portions of text by wrapping the desired text in `[em]...[/em]`.  
_(Ex: "I want \[em\]this\[/em\] to be italic.")_  
  
- **\[br\]**, **\[mbr\]**, **\[dbr\]**  
This tags allows you to insert a line break. Use `[br]` for the line break to appear on all devices, `[mbr]` for the line break to only appear on mobile, and `[dbr]` for the break to only appear on desktop.  
_(Ex: "I want this text on line 1,\[br\]and this text on line 2.")_
  
- **\[bull\]** <span class="version-badge">v1.3.4+</span>  
This tags allows you to insert bullet special character, wrapped in a span with the `.method-bull` class for optional styling. 
_(Ex: "Hot Eats [bull] Cool Treats")_

***

## Adding New Tags  <span class="version-badge">v1.3.4+</span>

As of release v1.3.4, a filter is available to hook into to add additional format tags. Below is an example of how to use the filter:

```php title="lib/theme-setup.php"
function mytheme_register_format_tags( $tags ) {             
    $tags['[hr]'] = '<hr>';
    return $tags;
}
add_filter( 'method_format_tags', 'mytheme_register_format_tags' );
```

In the above code, we've created a function and hooked it into the method_format_tags filter, which allows you to add items to the $tags array in the layout class' format_tags() method. In this case, we've added a format tag for a horizontal rule.

Also added in v1.3.4, you can use the `method_after_tags_dialog_html` action to add documentation for new format codes to the format codes dialog that content editors can invoke when editing content. Below is an example of how to use the action:

```php title="lib/theme-setup.php"
function mytheme_add_format_tags_to_dialog() {
	echo '
		<hr>
		<h5>[hr]</h5>
		<p>Use this tag to insert a horizontal rule.</p>
	';
}

add_action( 'method_after_tags_dialog_html', 'mytheme_add_format_tags_to_dialog' );
```

***
  
## Related Functions
- theme_admin_footer_function()
- theme_get_tags_badge()

***
  
## Related Methods
- [format_tags()](/docs/method-layout/methods/format_tags())
- [format_headline()](/docs/method-layout/methods/format_headline())
- [array_to_ul()](/docs/method-layout/methods/array_to_ul())
- [array_to_p()](/docs/method-layout/methods/array_to_p())
- [get_headline()](/docs/method-layout/methods/get_headline())
- [get_loaded_headline()](/docs/method-layout/methods/get_loaded_headline())
- [get_headline_from_option()](/docs/method-layout/methods/get_headline_from_option())