`public function inject_bs_modal( array $args )`

This method builds the markup for a Bootstrap 5 modal and injects it into the class $modal property. Arguments are passed as an array.

***

## Arguments

- **$args**  
_(array)_ _(optional)_ Parameters used to build the modal.  
  
  - **'id'**  
  _(string)_ _(optional)_ The CSS ID for the modal. Defaults to 'bsModal'  
  _Default: 'bsModal'_  
  
  - **'title'**  
  _(string)_ _(optional)_ The title of the modal, displayed in the modal header. This should be included for accessibility purposes.  _Default: ''_  
  
  - **'hide_title'**  
  _(bool)_ _(optional)_ Whether the header title should be visible. If set to _true_, the _visually-hidden_ CSS class will be added to the h5 title tag in the modal's header.  
  _Default: false_
  
  - **'content'**  
  _(string)_ _(optional)_ Content to display in the body of the modal. This can be anything from a string containing a paragraph of text to one with complex grid markup.  
  _Default: ''_  
  
  - **'prefiltered'**  
  _(bool)_ _(optional)_ Whether the content being passed has allready been passed through WordPress' _the\_content_ filter. If _true_, passed content is used as is. If _false_, passed content is processed with the 'the\_content' filter.  
  _Default: false_  
  
  - **'size'**  
  _(string)_ _(optional)_ The size postfix to use for the modal, if the default size is not sufficient. Possible values: sm|lg|xl  
  _Default: ''_  
  
  - **'scrollable'**  
  _(bool)_ _(optional)_ Whether or not content in the modal's body should be scrollable.  
  _Default: false_  

  - **'hide_header'**  
  _(bool)_ _(optional)_ Whether the modal header should be visible. If set to _true_, the _visually-hidden_ CSS class will be added to the modal header div (.modal-header).  
  _Default: false_

  - **'prepend_header'**  
  _(string)_ _(optional)_ Any markup or content to add to the beginning of the modal's header (just after the `.modal-header` div)  
  _Default: ''_  

  - **'append_header'**  
  _(string)_ _(optional)_ Any markup or content to add to the end of the modal's header (just before the `.modal-header`'s closing tag)  
  _Default: ''_  

  - **'prepend_body'**  
  _(string)_ _(optional)_ Any markup or content to add to the beginning of the modal's body (just after the `.modal-body` div)  
  _Default: ''_  

  - **'append_body'**  
  _(string)_ _(optional)_ Any markup or content to add to the end of the modal's body (just before the `.modal-body`'s closing tag)  
  _Default: ''_  

  - **'return'**  
  _(bool)_ _(optional)_ If set to _true_, the markup for the modal will be returned. If _false_, the markup will be added to the layout class' $modals property.  
  _Default: false_
  
***

## Example

The following code...

```php
$modal_content = '
	<div class="container-fluid">
		<div class="row">
			<div class="col-12 col-md-8">
				<h3 aria-hidden="true">Bio -</h3>
				<div class="content-wrap">
					<h4>Johhny Q Public</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.</p>
					<p>Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget. Vivamus laoreet diam ut diam porta tristique. Pellentesque ornare massa at mi ornare posuere. Etiam pellentesque justo ante, ut accumsan ante eleifend tincidunt.</p>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="img-wrap">
					<img src="https://via.placeholder.com/400" width="400" height="400" alt="Placeholder Image" class="img-fluid">
				</div>
			</div>
		</div>
	</div>
';
$args = array(
	'id'          => 'bioModal',
	'title'       => 'Leadership Bio',
	'hide_title'  => true,
	'content'     => $modal_content,
	'prefiltered' => true,
	'size'        => 'xl',
);
$this->inject_bs_modal( $args );

```

Would add the following HTML to the class $modal property, which is included in returned layout HTML to the frontend...

```html
<div class="modal fade" id="bioModal" tabindex="-1" role="dialog" aria-labelledby="bioModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title visually-hidden" id="bioModalLabel">Leadership Bio</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<div class="container-fluid">
					<div class="row">
						<div class="col-12 col-md-8">
						<h3 aria-hidden="true">Bio -</h3>
							<div class="content-wrap">
								<h4>Johhny Q Public</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend faucibus nisl, id pretium est euismod nec. Proin fermentum mauris nec nisi imperdiet convallis. Proin at suscipit sem, non dapibus justo.</p>
								<p>Mauris auctor massa vel nulla efficitur scelerisque. Aenean consectetur lacinia sapien, eu efficitur elit consectetur eget. Vivamus laoreet diam ut diam porta tristique. Pellentesque ornare massa at mi ornare posuere. Etiam pellentesque justo ante, ut accumsan ante eleifend tincidunt.</p>
							</div>
						</div>
						<div class="col-12 col-md-4">
							<div class="img-wrap">
								<img src="https://via.placeholder.com/400" width="400" height="400" alt="Placeholder Image" class="img-fluid">
							</div>
						</div>
					</div>
				</div>
			</div>  
		</div>
	</div>
</div>
```

***

## Notes

* Added in v1.1.4