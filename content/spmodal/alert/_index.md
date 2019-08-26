---
title: alert
---
Alert a message. The promise contains a single argument that returns true/false.


Alert
------

![alert modal](./spmodal-alert.png)

**Html Template**
```html
  <button ng-click="c.onAlert()" class="btn btn-default">
    Alert
  </button>
```

**Client Script**
```javascript
function(spModal) {
	var c = this;
  c.onAlert = function () {
		spModal.alert('How do you feel today?').then(function (answer) {
			c.simple = answer;
		});
	}
 }
```

