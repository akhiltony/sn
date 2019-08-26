---
title: prompt
---
Prompt the user for input. Provide a message and an optional default value for the input field. The promise contains the user's response as a string. 

Prompt
------

![spModal prompt dialog](./spmodal-prompt.png)

**Html Template**
```html
  <button ng-click="c.onPrompt()" class="btn btn-default">
    Prompt
  </button>
  <div ng-show="c.name">
    You answered <span>{{c.name}}</span>
  </div>
```

**Client Script**
```javascript
function(spModal) {
  var c = this;
  c.onPrompt = function() {
		spModal.prompt("Your name please", c.name).then(function(name) {
			c.name = name;
		})
	}
}
```

