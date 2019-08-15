---
title: getAttribute
description: "GlideElement getAttribute"
---
Returns the value of the specified attribute from the dictionary.

If the attribute is a boolean attribute, use `getBooleanAttribute(String)` to get the value as
a boolean rather than as a string.

```js
doit();
function doit() {
  var gr = new GlideRecord('sys_user');
  gr.query('user_name', 'admin');
  if (gr.next()) {
    gs.print('we got one');
    gs.print(gr.location.getAttribute('tree_picker'));
  }
}
```
