---
# Course title, summary, and position.
linktitle: "glide.knowman.create_incident_link"
summary: ""
weight: 1
# Page metadata.
title: "glide.knowman.create_incident_link"
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
    name: "glide.knowman.create_incident_link"
    weight: 1
---

Description: URL used for the "Create Incident" link.


Value: `incident.do?sys_id=-1&sysparm_query=active=true^comments=(Created after Knowledge search: $[HTML:knowledgeRecord.short_description])&sysparm_stack=knowledge_home_launcher.do`