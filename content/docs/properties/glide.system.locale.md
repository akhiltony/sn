---
# Course title, summary, and position.
linktitle: "glide.system.locale"
summary: ""
weight: 1
# Page metadata.
title: "glide.system.locale"
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
    name: "glide.system.locale"
    weight: 1
---

Description: Locale code to use for localization. Format is [language code].[country code] (e.g. en.GB for Britain fr.FR for France, de.DE for Germany, or ja.JP for Japan).<br/>
<br/>
NOTE: Do not change this value once a system has gone into production. If a user's locale must be changed, update the "Country code" field on the user record.<br/>
<br/>
The value of this property determines the system's default currency into which all prices are automatically converted before other sums or conversions are performed.<br/>
Changing this property after any price or currency fields have been given a value (for Service Catalog items, Assets, Project Tasks, etc.) may result in improper conversion or prices that sum incorrectly.


Value: ``