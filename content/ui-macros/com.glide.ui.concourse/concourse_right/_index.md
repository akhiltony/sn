---
title: concourse_right.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- the right pane that collaboration uses -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:j2="null" xmlns:g="glide" xmlns:g2="null">

	<g:evaluate var="jvar_theme">
		var theme = gs.getPreference('glide.css.theme.ui16');
		if (null == theme){
			var company = gs.getUser().getCompanyRecord();
		if (null != company)
			theme = company.getValue("theme");
		}
		theme;
	</g:evaluate>
	<j2:if test="$[jvar_connect]">
		<div concourse-compilation-target="sn.concourse_connect" concourse-compilation-target-timeout="${gs.getProperty('glide.ui.concourse.compilation_delay.concourse_connect', '3000')}">
		<g2:call function="ng_chat_support_enabled.xml" return="jvar_support_enabled" />
		<g2:evaluate var="jvar_connect_chat_enabled" expression="GlideCollaborationCompatibility.isChatEnabled();" />
		<g2:inline template="ng_amb_header.xml" />
		<g2:inline template="ng_chat_config.xml" />
		<script>
			angular.module("sn.connect").config(function($provide) {
				$provide.value("inFrameSet", true);
				$provide.value("inSupportClient", false);
			});

			angular.element(document).ready(function() {
				// add these modules to the navpage Angular
				window.NOW = window.NOW || {};
				window.NOW.ngLoadModules = window.NOW.ngLoadModules || [];
				NOW.ngLoadModules = NOW.ngLoadModules.concat(['sn.connect', 'ng.common', 'sn.common.controls', 'sn.dragdrop']);
			});
		</script>
		
 		<g2:inline template="navpage_ng_chat_east.xml" />
		<sn-floating-conversation-container />
		</div>
	</j2:if>
	
	<j2:if test="$[jvar_embedded_help]">
		<div concourse-compilation-target="sn.embedded_help">
			<script>			
				angular.module("sn.embedded_help").config(function($provide) {
					$provide.value("helpUrl", "${gs.getProperty('glide.product.help_url', '')}");
					$provide.value("autoClosePane", ${gs.getProperty('com.glide.embedded_help.auto_close', false) === 'true'});
					$provide.value("persistGuidedSetupActions", ${gs.getProperty('com.glide.embedded_help.guided_setup.persist_actions', false) === 'true'});
				});
		
				angular.element(document).ready(function() {
					// add these modules to the navpage Angular
					window.NOW = window.NOW || {};
					window.NOW.ngLoadModules = window.NOW.ngLoadModules || [];
					NOW.ngLoadModules = NOW.ngLoadModules.concat(['sn.embedded_help']);
				});
			</script>
			<g2:inline template="navpage_ng_embedded_help_east.xml" />
		</div>
	</j2:if>
	
	<j2:if test="$[jvar_sn_templated_snip]">
		<div concourse-compilation-target="sn.response_template_sidebar" style="height: 100%">
			<script>
				angular.element(document).ready(function() {
				// add these modules to the navpage Angular
				window.NOW = window.NOW || {};
				window.NOW.ngLoadModules = window.NOW.ngLoadModules || [];
				NOW.ngLoadModules = NOW.ngLoadModules.concat(['sn.response_template_sidebar']);
				});
			</script>
			<g2:inline template="navpage_ng_hr_sidebar_east.xml" />
		</div>
	</j2:if>
	
	<j2:if test="$[jvar_sn_knowledge_block]">
 		<div concourse-compilation-target="sn.knowledge_block_sidebar">
			<script>
				angular.element(document).ready(function() {
 				//add these modules to the navpage Angular
				window.NOW = window.NOW || {};
				window.NOW.ngLoadModules = window.NOW.ngLoadModules || [];
				NOW.ngLoadModules = NOW.ngLoadModules.concat(['sn.knowledge_block_sidebar']);
				});
            </script>
            <g2:inline template="navpage_ng_kb_sidebar_east.xml" />
         </div>
	</j2:if>

</j:jelly>
```