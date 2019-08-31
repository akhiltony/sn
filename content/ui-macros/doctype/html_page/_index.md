---
title: html_page.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<!--  We need to support IE8 in the workflow canvas and it's now using two forms, workflow_ide and canvas -->
	<g2:doctype name="html" />
	<g:inline template="html_page_properties.xml" />
	<!-- copy phase 1 RP.getDeferInlineScripts to phase 2 -->
	<g:evaluate var="jvar_defer_scripts" jelly="true" expression="jelly.RP.getDeferInlineScripts()"/>
	<g2:evaluate expression="RP.setDeferInlineScripts(${jvar_defer_scripts})"/>
	<g:evaluate var="jvar_disable_angular_autobind" jelly="true"
				expression="(gs.getProperty('glide.ui.form.angular_nonbindable.enabled', true) == 'true' ${AND} jelly.jvar_form_name == 'sys_form_template') ? 'ng-non-bindable' : ''" />

	<html lang="${jvar_text_language}" class="${jvar_html_class} ${jvar_text_direction} ${jvar_disable_angular_autobind}" data-doctype="true" dir="${jvar_text_direction}" >
		<head>
			<g2:atf_only>
				<g2:inline template="atf_common.xml" />
			</g2:atf_only>
			<g:inline template="html_page_title.xml" />
			<g:inline template="html_page_meta.xml" />
			<j:if test="${jvar_form_name != 'view_content'}">
				<meta name="viewport" content="initial-scale=1.0"/>
			</j:if>
            <g:inline template="html_page_script_globals.xml" />
			<link href="${gs.getEscapedProperty('glide.product.icon', 'favicon.ico')}" rel="shortcut icon" />
			<script>
				// window.performance in Chrome, Firefox, and Internet Explorer 9+ (not Safari)
				window.NOW.xperf = window.performance || {};
				if (!NOW.xperf.now) {
					NOW.xperf.now = function() { return new Date().getTime(); };
				}
				NOW.xperf.parseBegin = NOW.xperf.now(); 
				NOW.xperf.cssBegin = NOW.xperf.now(); 
			</script>
			<j:set var="jvar_theme" value="$[gs.getPreference(new GlideThemeUtil().getThemeVersion())]"/>
			<g:requires name="styles/css_includes_doctype.css" includes="true"
				params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=${jvar_theme}" />
			<j:if test="${jvar_form_name == 'sys_form_template'}">
				<j:if test="${gs.getUser().getPreference('use.concourse') == 'true'}">
					<g:requires name="styles/css_includes_ng.css" includes="true"
						params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=${jvar_theme}" />
				</j:if>
			</j:if>
			<g:inline template="heisenberg_output.xml" type="css"/>
			<script>
			NOW.xperf.cssEnd = NOW.xperf.now();
			NOW.xperf.scriptBegin = NOW.xperf.now();
			</script>
			<g:inline template="html_page_script_includer.xml" includes_file="scripts/doctype/js_includes_doctype.js" />
			<g:inline template="html_page_script_includer.xml" includes_file="scripts/js_includes_customer.js" />
			<script>
				NOW.xperf.scriptEnd = NOW.xperf.now();
				NOW.xperf.parseEnd = NOW.xperf.now();  
				$j(function() {
					var x = NOW.xperf;
					var last = x.lastDoctypeEnd - x.lastDoctypeBegin;
					if (window.console) {
						console.log("+-- Parse times");
						console.log("| CSS parse: " + (x.cssEnd - x.cssBegin));
						console.log("| JS  doctype: " + (x.scriptEnd - x.scriptBegin));
						console.log("| JS at end of page: " + last);
						console.log("+-- All parsing: " + (x.parseEnd - x.parseBegin + last));	
					}
					
					var ms = Math.round(x.parseEnd - x.parseBegin + last);
					CustomEvent.fire('page_timing', { name: 'PARS', ms: ms, win: window });
					
					if (window.performance $[AND] performance.timing) {
						NOW.xperf.z = new Date().getTime();
						setTimeout(function () {
						   var x = performance.timing.loadEventEnd - performance.timing.domContentLoadedEventStart;
						   CustomEvent.fire('page_timing', { name: 'DOMC', ms: x, win: window });
						   x = performance.timing.loadEventStart - NOW.xperf.z;
						   CustomEvent.fire('page_timing', { name: 'PROC', ms: x, win: window });
						}, 250);  // has to be done after the loadEvent ends
					}
				})
			</script>
			<!-- non form / list pages get more script -->
			<j:if test="${jvar_form_name != 'sys_form_template' &amp;&amp; jvar_form_name != 'sys_list_template2' &amp;&amp; jvar_form_name != 'sys_search_template' &amp;&amp; jvar_form_name != 'pa_text_records' &amp;&amp; jvar_form_name != 'pa_collected_records' &amp;&amp; jvar_form_name != 'pa_compare_records' &amp;&amp; jvar_form_name != 'pa_realtime_records' }">
				<g:inline template="html_page_script_includer.xml" includes_file="scripts/doctype/js_includes_legacy.js" />
			</j:if>
			<!-- forms have their debug output within the form so it scrolls -->
			<g:inline template="html_page_script_core.xml" />
			<g:inline template="html_page_onready.xml" />
			<g:inline template="html_page_header.xml" />

			<j2:if test="$[jvar_session.isLoggedIn()]">    	
				<g:inline template="amb_common.xml" />
			</j2:if>		
			
			<g:inline template="html_page_noscript.xml" />			
			
			<g2:evaluate var="jvar_guided_tours">
				(GlidePluginManager.isActive('com.glide.guided_tours') $[AND] gs.getProperty("com.snc.guided_tours.standard_ui.enable", false) === 'true' $[AND] !GlideCollaborationCompatibility.isIncompatible())
			</g2:evaluate>
					
			<j2:if test="$[jvar_guided_tours]">
				<g2:requires name="scripts/app.guided_tours/js_guided_tours_includes.js" includes="true"/>
			</j2:if>		
			
		</head>

		<body ontouchend="CustomEvent.fireAll('body_clicked', event);"
			onclick="CustomEvent.fireAll('body_clicked', event);" 
			class="${jvar_body_class} $[jvar_browser_body_class]" 
			data-formName="${jvar_form_name}">
			<span class="sr-only">
				<span id="html_page_aria_live_polite" role="region" aria-live="polite"></span>
				<span id="html_page_aria_live_assertive" role="region" aria-live="assertive"></span>
			</span>

			<j:if test="${(jvar_form_name != 'login.xml') &amp;&amp; (jvar_form_name != 'view_content')}">
				<j:if test="${jvar_form_name != 'sys_form_template' &amp;&amp; jvar_form_name != 'sys_list_template2' }">
					<!-- forms have their messages output within the form -->
					<div class="outputmsg_div">
						<g:inline template="output_messages2.xml" />
					</div>
				</j:if>
			</j:if>
			<g:insert_form name="${jvar_form_name}" />

			<div style="border:none; visibility:hidden">
				<form name="sys_personalize" style="display:inline" method="GET" action="slushbucket.do">
					<input type="hidden" name="sysparm_referring_url" value="$[sysparm_this_url]" />
					<input type="hidden" name="sysparm_view" value="$[sysparm_view]" />
				</form>
			</div>

			<g:ui_page_footer />

			<j:if test="${jvar_form_name != 'sys_form_template'}"> <!-- forms have their debug output within the form so it scrolls -->
				<g:inline template="session_debug.xml" />
			</j:if>
			<span style="display:none" data-comments="js_includes_last_doctype" />
			<script>NOW.xperf.lastDoctypeBegin = NOW.xperf.now();</script>
			<g:inline template="html_page_script_includer.xml" includes_file="scripts/doctype/js_includes_last_doctype.js" />
			<g:inline template="heisenberg_output.xml" type="js"/>
			<j:if test="${pm.isActive('com.glide.ui_list_edit')}">
				<g:inline template="html_page_script_includer.xml" includes_file="scripts/js_includes_list_edit_doctype.js" />
			</j:if>

			<j:if test="${pm.isActive('com.glide.transaction_scope')}">
				<g:inline template="transaction_scope_template.xml"/>
			</j:if>
			
			<g2:evaluate var="jvar_is_dev_studio" jelly="true" expression="jelly.RP.isInDevStudio()"/>
		
			<!-- Need to clear the drafts then render the form and then ui policies should run -->
			<j2:if test="$[pm.isActive('com.glide.autorecovery') ${AND} gs.getProperty('glide.ui.auto.recovery') == 'true' ${AND} gs.getPreference('user.auto.recovery', 'true') == 'true']">
				<j2:if test="$[jvar_is_dev_studio]">
					<g2:inline template="cleardraft_list_template.xml"/>
				</j2:if>
			</j2:if>
			
			<span style="display:none" data-comments="requires" />
			<g:requires output="true" />
			<g2:no_escape>
				<g2:requires output="true" />
			</g2:no_escape>
			<script>NOW.xperf.lastDoctypeEnd = NOW.xperf.now();</script>
			<span style="display:none" data-comments="db_context_menu_script" />
			<script>NOW.xperf.dbContextBegin = NOW.xperf.now();</script>
			<g:inline template="db_context_menu_script.xml" />
			<script>NOW.xperf.dbContextEnd = NOW.xperf.now();</script>
			<span style="display:none" data-comments="db_context_menu_script" />
			<g:inline template="html_page_response_time.xml" />
			<g:messages emit="true"/>
			<g2:messages emit="true"/>
			<!-- all script must be loaded / emitted before this point -->
			<g:requires name="scripts/doctype/z_last_include.js" />
		</body>
		<script type="text/html" id="popup_template">
			<div class="popup popup_form" style="">
				<iframe src="$src" style="" />
			</div>
		</script>
	</html>
</j:jelly>

```