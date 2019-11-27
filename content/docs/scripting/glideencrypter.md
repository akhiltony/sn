---
# Course title, summary, and position.
linktitle: GlideEncrypter
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideEncrypter
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideEncrypter
    weight: 1
---

Here's some examples of using `GlideEncrypter`.

``` {.js}
var encrypter = new GlideEncrypter();
// or GlideEncrypter('24 character string');
```

## Encrypt & Decrypt

An important note, if you are setting a `Password2` field, you must
encrypt the value first otherwise the value will be stored in clear text
and decrypting it may provide an incorrect value.

``` {.js}
var encrypter = new GlideEncrypter();
var encrypted = encrypter.encrypt('Super Secret Phrase');
gs.info('encrypted: ' + encrypted);
var decrypted = encrypter.decrypt(encrypted);
gs.info('decrypted: ' + decrypted);
/**
*** Script: encrypted: g/bXLJHa7xNRMKZEo5q/YtLMEdse36ED
*** Script: decrypted: Super Secret Phrase
*/
```

## Scoped Decrypt

``` {.js}
gr.password.getDecryptedValue()'
```

## Scoped Encrypt

If you are setting a password2 field, this is how you do it in scope.

``` {.js}
gr.password.setDisplayValue('un-encrypted string goes here');
```
