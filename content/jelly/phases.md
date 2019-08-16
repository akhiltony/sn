---
title: "Phases"
description: "Jelly Phases"
---
Usually, there are two phases indicated by namespaces `<j>` versus `<j2>` and `<g>` versus `<g2>`.

The namespaces without the "2" happen in the first phase of processing and these are cached except when used in a UI page. Those with the "2" are never cached. Care must be taken when selecting whether to use phase 1 or phase 2 for efficiency and correct results.

In addition to the namespaces, the syntax used to insert values into static content differs depending on which phase is to supply the value. A dollar with braces surrounding a value inserts the value in phase 
1. For example, `${jvar_ref}` inserts the value jvar_ref during phase 1 of the jelly process. A dollar with brackets surrounding a value inserts the value in phase 
2. For example, `$[jvar_ref]` inserts the value jvar_ref during phase 2. A value surrounded by quotes is treated as a string. For example, `[jvar_ref]` inserts the value `jvar_ref` as a string during phase 2.

```html
 <script>
if (confirm("$[gs.getMessage('home.delete.confirm') ]"))
   ...
</script>
```

```html
<input type="hidden" id="${jvar_name}" name="${jvar_name}" value="${jvar_value}" class="${jvar_class}" />
```