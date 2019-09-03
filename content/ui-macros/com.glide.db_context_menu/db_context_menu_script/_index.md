---
title: db_context_menu_script.xml
---
```xml
<?xml version="1.0" encoding="utf-8"?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
   <!-- 
      Write out the context menu data as GlideMenu scripts if there is any context menu data specified for this page
      
      Context menu items are written during Phase1 and Phase2.  Encoding the json from Phase1 and copying to Phase2
      is slow when there are lots of scripts (OOB Change Form = 30-38 ms).  Instead, write out the scripts as an object
      in Phase1 and create each script in Phase2 (since there should not be too many of them).  This is not the absolute
      optimum (there could be duplicate scripts between P1 and P2) but the time saving to write them is a reasonable 
      tradeoff to the little bit of extra characters written out.
   -->
   <g:evaluate var="jvar_context_menus">
      var cm = '';
      if (typeof g_CMScripts != 'undefined') {
         var json = new JSON();
         cm = json.encode(g_CMScripts);
         g_CMScripts = undefined;
      }
      cm;
   </g:evaluate>
   <j2:set var="jvar_context_menus" value="${jvar_context_menus}" />
   <j2:if test="$[!empty(jvar_context_menus)]">
      <script>
         GlideMenu.addScripts($[NOESC:jvar_context_menus]);
      </script>
   </j2:if>

   <g2:evaluate var="jvar_context_menus">
      var cm = '';
      if (typeof g_CMScripts != 'undefined') {
         var json = new JSON();
         cm = json.encode(g_CMScripts);
         g_CMScripts = undefined;
      }
      cm;
   </g2:evaluate>
   <j2:if test="$[!empty(jvar_context_menus)]">
      <script>
         GlideMenu.addScripts($[NOESC:jvar_context_menus]);
      </script>
   </j2:if>
</j:jelly>
```