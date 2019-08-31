---
title: html_page_properties.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">

  <!-- 
    The following properties are ONLY available within the current GlideContext from which these are called.
  -->
  
  <!-- Note: If the existing UI is ever updated to run in non-quirks mode (e.g. a proper doctype is specified)
       then the appropriate  <meta http-equiv="X-UA-Compatible" ...> tag needs to be modified in order to allow
       IE to toggle between different document modes (Currently only applicable to UI11). -->
  <j2:set var="jvar_doctype" value="${jvar_doctype}" />  
  <j2:if test="$[sysparm_doctype == 'true' || jvar_doctype == 'true']">
    <g2:doctype name="html"/>
  </j2:if>
  
  <j:if test="${jvar_form_name == 'sys_form_template'}">
    <j:if test="${jvar_media != 'print'}">
      <j:set var="jvar_html_class" value="section_header_html_no_scroll"/>
      <j:set var="jvar_body_class" value="section_header_body_no_scroll"/>
    </j:if>
  </j:if>
  
  <g:inline template="dir_checker.xml" />
  <g:inline template="ie_checker.xml" />

</j:jelly>
```