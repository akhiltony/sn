---
# Course title, summary, and position.
linktitle: GlideServlet 
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: GlideServlet 
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
    name: GlideServlet 
    weight: 1
---

# GlideServlet aka Processors

# GlideScriptedProcessor

| Property/Method | Description                                                              |
|-----------------|--------------------------------------------------------------------------|
| redirect        | Redirects to the specified URL                                           |
| writeOutput     | Writes the contents of the given string to the response                  |
| writeJSON       | Writes a JSON object to the current URL. Note: Works only in scoped apps |

## GlideServletRequest

| Property/Method   | Description                                     |
|-------------------|-------------------------------------------------|
| getHeaders        | Returns an array of headers as a string         |
| getHeaderNames    | Returns an array of header names as a string    |
| getQueryString    | Returns the query string from the request       |
| getContentType    | Returns the content type                        |
| getParameterNames | Returns an array of parameter names as a string |
| getHeader         | Returns the header                              |
| getParameter      | Returns an object                               |

## GlideServletResponse

| Property/Method | Description                                   |
|-----------------|-----------------------------------------------|
| setContentType  | Sets the MIME type of the response            |
| sendRedirect    | Sends a temporary redirect to the client      |
| setStatus       | Sets the status code for the response         |
| setHeader       | Sets a response header to the specified value |
