---
# Course title, summary, and position.
linktitle: "glide.ui.html.editor.v4.paste.word_import"
summary: ""
weight: 1
# Page metadata.
title: "glide.ui.html.editor.v4.paste.word_import"
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID name.
# - weight: Position of link in menu.
menu:
  properties:
    parent: Properties
    name: "glide.ui.html.editor.v4.paste.word_import"
    weight: 1
---

Description: <p>Paste formatting behavior for Microsoft Word.  This setting controls how content being pasted from Microsoft Word is filtered. The supported values are:</p>

<ul>
    <li><code>clean</code> - Preserve the structure of the content such as headings, tables and lists but remove inline styles and classes. This results in simple content that uses the site's CSS stylesheet while retaining the semantic structure from the original document.</li>
    <li><code>merge</code> - Preserve the inline formatting and structure of the original document. Invalid and proprietary styles, tags and attributes are still removed ensuring that the HTML is valid while more closely matching the original document formatting.</li>
    <li><code>prompt</code> (Default) - Prompt the user to choose between the clean and merge options after attempting to paste Word content.</li>
</ul>


Value: `prompt`