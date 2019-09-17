---
# Course title, summary, and position.
linktitle: "sa.map.auto_grouping_host_name_regex"
summary: ""
weight: 1
# Page metadata.
title: "sa.map.auto_grouping_host_name_regex"
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
    name: "sa.map.auto_grouping_host_name_regex"
    weight: 1
---

Description: Comma separted list of RegEx that will be used to find common parts in host name when auto-grouping CIs on map.
All capturing groups in regex define the common part of host name that will be evaluated in auto-grouping algorithm.
RegEx on top of list has higher priority and executed before the following RegEx in the list.
List format: /regex1/,/regex2/,/regex3/,...
Default value: 
/^([\w-]+?)(?:\d+[a-z]?)?$/

Sometimes it's required to logically group elements in regex, but not to include the group in common part of host name.
In such cases use non-capturing group. The syntax is:
(?:<content of group>)
Example in default value:
(?:\d+[a-z]?)


Value: `/^([\w-]+?)(?:\d+[a-z]?)?$/`