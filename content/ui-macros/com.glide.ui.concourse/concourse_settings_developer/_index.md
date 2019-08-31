---
title: concourse_settings_developer.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<j2:if test="${jvar_settings_menu_show_developer_tab}">
		<j:if test="${jvar_settings_menu_show_application_picker}">
			<application-picker current="settings.application"
								show-in-header="settings.showApplicationPickerInHeader"
								in-header=""/>
		</j:if>
		<j:if test="${jvar_settings_menu_show_update_set_picker}">
			<update-set-picker current="settings.updateSet"
							   show-in-header="settings.showUpdateSetPickerInHeader"/>
		</j:if>
		<j:if test="${jvar_settings_menu_show_javascript_debugger_log_and_field_watcher}">
			<javascript-debugger label="${gs.getMessage('JavaScript log and field watcher')}"
								 moreinfo="${gs.getMessage('Allows debugging of custom instance code')}"
								 type="boolean" />
		</j:if>
		<j:if test="${jvar_settings_menu_show_atf_page_inspector}">
		<atf-inspector/>
		<preference-changer label="${gs.getMessage('Automated Test Framework Page Inspector')}"
							moreinfo="${gs.getMessage('Helps you identify and test components for custom UI pages')}"
							preference="glide.atf_inspector.enabled" type="boolean"
							fire-event="atf_inspector_toggle_event"/>
		</j:if>
	</j2:if>
</j:jelly>
```