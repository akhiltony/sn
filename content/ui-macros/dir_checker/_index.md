---
title: dir_checker.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide">
  <!-- 
    Determine which direction the text should display, which is defined in the language
  -->
  <g:evaluate var="jvar_text_direction" expression="GlideI18NStyle.getDirection();"/>

  <!-- this is tied to a session, but cache keys are decided on language -->
  <g:evaluate var="jvar_text_language" expression="gs.getSession().getLanguage()"/>
</j:jelly>
```