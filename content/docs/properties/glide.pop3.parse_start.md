---
# Course title, summary, and position.
linktitle: "glide.pop3.parse_start"
summary: ""
weight: 1
# Page metadata.
title: "glide.pop3.parse_start"
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
    name: "glide.pop3.parse_start"
    weight: 1
---

Description: Text indicating the beginning of the email body section where name:value pairs should be parsed. In the example below, the text PARSE_START signals that the name:value pairs that follow should automatically be applied to the current record.
<pre>
   PARSE_START
       severity:1
       category:hardware
   PARSE_END
</pre>


Value: ``