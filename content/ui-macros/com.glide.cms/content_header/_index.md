---
title: content_header.xml
---
```xml
<?xml version="1.0" encoding="utf-8"?>
<!--
Added to the header section of ALL pages
Mechanism is in plugin XML: <extension point="com.glide.page.header" name="content_header.xml">
-->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g2:evaluate jelly="true">
		var wantCMSTheme = false;
		if (jelly.sysparm_base_form == 'edit_content' || jelly.sysparm_base_form == 'view_content')
			wantCMSTheme = true;
		
		if (GlideTransaction.get().isVirtual())
			wantCMSTheme = true;
	</g2:evaluate>
	<j2:if test="$[wantCMSTheme]">
		<g2:evaluate jelly="true"> 
			var theme = getTheme();
			if (theme == '')
				var sheets = getAllSheets();
			else
				var sheets = getOrderedSheets(theme);

			function getTheme() {
				var theme = gs.getSession().getProperty('glide_cms_theme');
				if (typeof jelly.sysparm_sys_id != "undefined") {
			    	var cp = GlideContentPage.get(jelly.sysparm_sys_id);
			    	if (cp.isValid())
			    		theme = cp.getTheme();
			    }
			
				if (!theme $[AMP]$[AMP] cp.getSiteID() != '') { // try the site default 
			       var gr = new GlideRecord('content_site');
			       if (gr.get(cp.getSiteID())) 
				       theme = gr.default_theme + '';					
			    }

			    if (!theme) // try the global default
			        theme = GlideContentConfig.get().getDefaultTheme();

				if (theme)
         			gs.getSession().putProperty('glide_cms_theme', theme);
			    return theme;
			}

			function getOrderedSheets(theme) {
				var gr = new GlideRecord('content_theme_css');
				gr.addQuery('content_theme', theme);
				gr.orderBy('order');
				gr.query();
			    var al = new Array();
			    while (gr.next())
			      al.push(gr.content_css + '');

			    gr = new GlideRecord('content_css');
				var loader = new GlideRecordKeySetLoader(gr);
			    loader.queryFromNativeArray(al);
				return gr;
			}

			function getAllSheets() {
				var gr = new GlideRecord('content_css'); 
				gr.query(); 
				return gr;
			}
		</g2:evaluate>

		<!-- set any site specific options -->
		<j2:if test="$[GlideTransaction.get().isVirtual()]">
			<g2:evaluate jelly="true">
				var current_site = new GlideRecord('content_site');
				current_site.addQuery('url_suffix', GlideTransaction.get().getSiteName());
				current_site.query();
				if (current_site.next()) {
					// set some flags
					var headlessCatalog = jelly.sysparm_headless;
					if (typeof headlessCatalog == 'undefined')
						headlessCatalog = current_site.catalog_headless == true;
				
					var cartlessCatalog = jelly.sysparm_cartless;
					if (typeof cartlessCatalog == 'undefined')
						cartlessCatalog = current_site.catalog_cartless == true;
				}
			</g2:evaluate>	
			<g2:set_if test="$[headlessCatalog]" var="sysparm_headless" true="true" />
			<g2:set_if test="$[cartlessCatalog]" var="sysparm_cartless" true="true" />	
		</j2:if>

		<j2:while test="$[sheets.next()]">
			<j2:choose>
				<j2:when test="$[sheets.type == 'link']">
					<link href="$[sheets.url]" type="text/css" rel="stylesheet"/>
				</j2:when>
				<j2:otherwise>
					<link href="$[sheets.sys_id].cssdbx?v=$[sheets.sys_updated_on]" type="text/css" rel="stylesheet"/>
				</j2:otherwise>
			</j2:choose>
		</j2:while>
			
	</j2:if>
	<j:if test="${jvar_form_name == 'view_content'}">
		<g:inline template="content_meta.xml" />
	</j:if>	

	<!--  Include JS files for charting v2, if required -->
	<g2:evaluate var="jvar_cms_page" jelly="true">
		var isCmsPage = false;
		var sys_id = jelly.sysparm_sys_id;
		if (sys_id $[AMP]$[AMP] sys_id != '') {
			var cp = GlideContentPage.get(jelly.sysparm_sys_id);
			if (cp.getSiteID() != '')
				isCmsPage = true;
		}
		isCmsPage;
	</g2:evaluate>
	<j2:if test="$[jvar_cms_page == 'true']">
		<g:inline template="reporting_includes.xml" />
	</j2:if>

</j:jelly>
```