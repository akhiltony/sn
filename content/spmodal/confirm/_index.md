---
title: confirm
---
Display a confirmation message. The promise contains a boolean of the user's response.

Confirm
------

![confirm modal](./spmodal-confirm.png)


**Html Template**
```html
  <button ng-click="c.onConfirm()" class="btn btn-default">
    Confirm
  </button>
  <span>{{c.confirmed}}</span>
```

**Client Script**
```javascript
function(spModal) {
  var c = this;
  c.onConfirm = function() {
		c.confirmed = "asking";
		spModal.confirm("Can you confirm or deny this?").then(function(confirmed) {
			c.confirmed = confirmed; // true or false
		})
	}
 }
```
<br /> <br />

Confirm with HTML message
------

![confirm modal with html message](./spmodal-confirm_html_message.png)

**Html Template**
```html
  <button ng-click="c.onConfirmEx()" class="btn btn-default">
    Confirm - HTML message
  </button>
  <span>{{c.confirmed}}</span>
```

**Client Script**
```javascript
function(spModal) {
  var c = this;
  // more control, passing options
	c.onConfirmEx = function() {
		c.confirmed = "asking";
		var warn = '<i class="fa fa-warning" aria-hidden="true"></i>';
		spModal.open({
			title: 'Delete this Thing?',
			message: warn + ' Are you <b>sure</b> you want to do that?'
		}).then(function(confirmed) {
			c.confirmed = confirmed;
		})
	}
}
```


