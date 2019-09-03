---
title: concourse_template_preload.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide">
	<g:inline template="angular_template.xml" name="concourse_request_manager.xml"/>
	<g:inline template="angular_template.xml" name="sn_avatar.xml"/>
	<g:inline template="angular_template.xml" name="sn_avatar_popover.xml"/>
	<g:inline template="angular_template.xml" name="sn_avatar_button.xml"/>
	<g:inline template="angular_template.xml" name="sn_attachment_preview.xml"/>
	<g:inline template="angular_template.xml" name="ng_overview_help.xml"/>
	<j:if test="${pm.isActive('com.glide.embedded_help')}">
		<g:inline template="angular_template.xml" name="sn_embedded_help_content.xml"/>
		<g:inline template="angular_template.xml" name="sn_embedded_help_pane.xml"/>
		<g:inline template="angular_template.xml" name="sn_embedded_help_menu.xml"/>
		<g:inline template="angular_template.xml" name="sn_embedded_help_action_list.xml"/>
		<g:inline template="angular_template.xml" name="embedded_help_bar_toggle.xml"/>
	</j:if>
	<g:evaluate var="jvar_connect_installed">
		GlidePluginManager.isActive('com.glide.connect')
	</g:evaluate>
	<j:if test="${jvar_connect_installed}">
		<g:inline template="angular_template.xml" name="connectConversationBarToggle.xml"/>
	</j:if>
	<g:inline template="angular_template.xml" name="concourse_main_pane.xml"/>
</j:jelly>

```