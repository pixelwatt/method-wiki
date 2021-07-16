---
sidebar_position: 4
---

# Format Tags

## Overview

Format tags allow content editors to format select content with a limited set of HTML tags, by way of format tags. These were added to account for scenarios where a client may need the avibility to do basic text formatting, but facilitating that through a WYWISYG field isn't practical. A great example of such a scenerio is when clients are entering headlines through a text input. Here, it wouldn't make sense to use a full WYSIWYG (TinyMCE) field just for a headline, but editors still may need to ability to make basic formatting edits (bold, emphasize, add a line break). To allow for this, content entered through certain editor options can be passed through Method_Layout's format_tags() method, or a method that uses it, after passing the field's content through esc_html() (trust no one). This method checks for format tags and converts any it finds to HTML. You can let content editors know that format tags are supported by a field by including a "Tags Supported" badge in the field's description, which can be inserted with the theme_get_tags_badge() function, which inserts a clickable badge that triggers an overlay containing a list of currently-available tags. 

## Currently-Supported Tags
  
- **\[strong\]...\[/strong\]**  
This tag allows you to bold portions of text by wrapping the desired text in `[strong]...[/strong]`.  
_(Ex: "I want \[strong\]this\[/strong\] to be bold.")_  
  
- **\[em\]...\[/em\]**  
Similiar to the \[strong\] tag, this tag allows you to italicize portions of text by wrapping the desired text in `[em]...[/em]`.  
_(Ex: "I want \[em\]this\[/em\] to be italic.")_  
  
- **\[br\]**, **\[mbr\]**, **\[dbr\]**  
This tags allows you to insert a line break. Use `[br]` for the line break to appear on all devices, `[mbr]` for the line break to only appear on mobile, and `[dbr]` for the break to only appear on desktop.  
_(Ex: "I want this text on line 1,\[br\]and this text on line 2.")_

The ability to add and document additional tags without the need to directly modify the Method_Layout class will be implemented in an upcoming release.

## Related Functions
- theme_admin_footer_function()
- theme_get_tags_badge()
  
## Related Methods
- [format_tags()](/docs/method-layout/methods/format_tags())
- [format_headline()](/docs/method-layout/methods/format_headline())
- [array_to_ul()](/docs/method-layout/methods/array_to_ul())
- [array_to_p()](/docs/method-layout/methods/array_to_p())
- [get_headline()](/docs/method-layout/methods/get_headline())
- [get_loaded_headline()](/docs/method-layout/methods/get_loaded_headline())
- [get_headline_from_option()](/docs/method-layout/methods/get_headline_from_option())