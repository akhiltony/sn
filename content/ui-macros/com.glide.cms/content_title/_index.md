---
title: content_title.xml
---
```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
     May potentially set a title attribute for a content page for SEO 
     Overrides the default <title> attribute we put on all pages
-->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<j:if test="${jvar_form_name == 'view_content'}">

		<g:evaluate jelly="true" var="jvar_page_title"> 
			var title = getPageTitle();
			function getPageTitle() {
			    var t = GlideTransaction.get().getRequestParameter('sysparm_sys_id');
			    var cp = GlideContentPage.get(t);
			    if (!cp.isValid())
			        return '';
			
				if (cp.getTitle() != '')
					return cp.getTitle();
						
				return '';
			}
			if (!title || title=='undefined')
				title = '';
			
			if (gs.getProperty('glide.ui.escape_text') == 'false')
				title = GlideStringUtil.escapeHTML(title);
			
			title;
		</g:evaluate>
	</j:if>
</j:jelly>
```