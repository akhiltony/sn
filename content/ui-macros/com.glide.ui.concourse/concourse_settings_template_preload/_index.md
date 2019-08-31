---
title: concourse_settings_template_preload.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:j2="null" xmlns:g="glide">
	<g:inline template="angular_template.xml" name="cc_preference_changer.xml"/>
	<g:inline template="angular_template.xml" name="concourse_preference_picker.xml"/>
	<g:inline template="angular_template.xml" name="concourse_settings_forms.xml"/>
	<g:inline template="angular_template.xml" name="concourse_settings_general.xml"/>
	<g:inline template="angular_template.xml" name="concourse_settings_lists.xml"/>
	<g:inline template="angular_template.xml" name="concourse_settings_theme.xml"/>
	<j2:if test="${jvar_settings_menu_show_developer_tab}">
		<g:inline template="angular_template.xml" name="concourse_settings_developer.xml"/>
		<j:if test="${jvar_settings_menu_show_application_picker}">
			<g:inline template="angular_template.xml" name="concourse_application_picker.xml"/>
		</j:if>
		<j:if test="${jvar_settings_menu_show_update_set_picker}">
			<g:inline template="angular_template.xml" name="concourse_update_set_picker.xml"/>
		</j:if>
	</j2:if>
	<g:inline template="angular_template.xml" name="concourse_theme_picker.xml"/>
	<j2:if test="${jvar_settings_menu_show_domain_picker}">
		<g:inline template="angular_template.xml" name="concourse_domain_picker.xml"/>
	</j2:if>
	<j2:if test="${jvar_settings_menu_show_domain_reference_picker}">
		<g:inline template="angular_template.xml" name="concourse_domain_reference_picker.xml"/>
	</j2:if>
	<j2:if test="${jvar_settings_menu_show_encryption_picker}">
		<g:inline template="angular_template.xml" name="concourse_encryption_picker.xml"/>
	</j2:if>
	<g:inline template="angular_template.xml" name="concourse_print_friendly.xml"/>
	<j2:if test="${!jvar_settings_menu_notifications_tab}">
		<g:inline template="angular_template.xml" name="concourse_settings_notifications_connect.xml"/>
	</j2:if>
	<j:if test="${jvar_settings_menu_notifications_tab}">
		<g:inline template="notification_preference_preload.xml" />
	</j:if>
</j:jelly>
```