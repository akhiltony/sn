---
title: Escaping
description: "Jelly Escaping"
---
Escaping is hell with Jelly and XML. Anything you'd think about escaping
is probably wrong. Here's the short of it.

### Characters

|     Desired Character     | Phase 1     | Phase 2     |
|:-------------------------:|-------------|-------------|
|            `&`            | `${AMP}`    | `$[AMP]`    |
|            `<`            | `${AMP}lt;` | `$[AMP]lt;` |
|            `>`            | `${AMP}gt;` | `$[AMP]gt;` |
|            ` `            | `${SP}`     | `$[SP]`     |

### Values

``` {.xml}
${test.getHTMLValue()}
${JS:expression}
${HTML:expression}
```

Sometimes you need to call `<g:no_escape>${jvar_t}</g:no_escape>`.