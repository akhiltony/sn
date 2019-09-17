---
# Course title, summary, and position.
linktitle: "glide.ui.attachment.admin_scs_download_mime_types"
summary: ""
weight: 1
# Page metadata.
title: "glide.ui.attachment.admin_scs_download_mime_types"
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
    name: "glide.ui.attachment.admin_scs_download_mime_types"
    weight: 1
---

Description: For admin only uploads (accessed via upload.do), a list of comma separated attachment mime types that do not render inline in the browser. This will prevent cross site scripting attacks. For example, text/html will force html files to be downloaded to the client as attachments rather than viewed inline in the browser. This setting is only used when accessing static content files via the "/scs/" link provided by an admin-only uploaded file.


Value: ``