---
# Course title, summary, and position.
linktitle: spModal
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1
aliases: ['/spmodal']
# Page metadata.
title: spModal
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
    name: spModal
    weight: 1
---
spModal provides an alternative way to show alerts, prompts, and confirmation dialogs. Additionally you can use spModal.open() to display a widget in a modal dialog. spModal is a lightweight wrapper for angular UI bootstrap's $uibModal. See here for more info: https://angular-ui.github.io/bootstrap/#/modal

| Method | Description |
| :------ | :----------- |
| [alert](./alert)(message).then(fn) | Alert a message. The promise contains a single argument that returns true/false. |
| [confirm](./confirm)(message).then(fn) | Display a confirmation message. The promise contains a boolean of the user's response.  |
| [prompt](./prompt)(message, *defaultValue*).then(fn) | Prompt the user for input. Provide a message and an optional default value for the input field. The promise contains the user's response as a string. |
| [open](./open)(object options).then(fn) | Open a modal with a customized set of options. See the options table below. |

**Options** object definition

| Option | type | Default | Description |
| :------ | :------ | :------ | :----------- |
| title | string | empty | goes in header - can be HTML | 
| message | string | empty | goes in the body - can be HTML |
| buttons | array | Cancel & OK | buttons to show on the dialog |
| input | bool | false | if true, shows an input field on the dialog |
| value | string | empty | The value of the input field |
| widget | string | empty | The Widget Id or sys_id to embed in the modal |
| widgetInput | object | null | An object to send to the embedded widget as input |
| shared | object | null | A client-side object to share data with the embedded widget client script |
| size | string | empty | 'sm' or 'lg' |
