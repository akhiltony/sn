---
# Course title, summary, and position.
linktitle: "glide.set_x_frame_options"
summary: ""
weight: 1
# Page metadata.
title: "glide.set_x_frame_options"
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
    name: "glide.set_x_frame_options"
    weight: 1
---

Description: Enable this property to set the X-Frame-Options response header to SAMEORIGIN for all UI pages.  The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a &lt;frame> or &lt;iframe>. Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.

https://developer.mozilla.org/en/the_x-frame-options_response_header


Value: `true`