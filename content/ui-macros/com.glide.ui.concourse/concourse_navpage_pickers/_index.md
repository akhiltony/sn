---
title: concourse_navpage_pickers.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<div class="navpage-pickers navpage-header-content hidden-xs hidden-sm hidden-md">
		<j2:if test="${jvar_settings_menu_show_update_set_picker}">
			<g2:evaluate var="jvar_picker_current_update_set" expression="new SNC.ConcoursePickerGenerator().getCurrentUpdateSet()" />
			<update-set-picker current="${jvar_picker_current_update_set}"
							   in-header="true"
							   show-in-header="${gs.getPreference('glide.ui.update_set_picker.in_header', '')}"
							   class="picker"/>
		</j2:if>
		<j2:if test="${jvar_settings_menu_show_application_picker}">
			<g2:evaluate var="jvar_picker_current_application" expression="new SNC.ConcoursePickerGenerator().getCurrentApplication()" />
				<application-picker current="${jvar_picker_current_application}"
					show-in-header="${gs.getPreference('glide.ui.application_picker.in_header', '')}"
					in-header="true"
					class="picker"/>
		</j2:if>
		<j2:if test="${jvar_settings_menu_show_domain_picker}">
			<g2:evaluate var="jvar_picker_current_domain" expression="new SNC.DomainPickerGenerator().getCurrentDomain()" />
				<domain-picker current="${jvar_picker_current_domain}"
					in-header="true"
					show-in-header="${gs.getPreference('glide.ui.domain_picker.in_header', '')}"
					class="pull-right picker"/>
		</j2:if>
		<j2:if test="${jvar_settings_menu_show_domain_reference_picker}">
			<g2:evaluate var="jvar_picker_current_domain" expression="new SNC.DomainPickerGenerator().getCurrentDomain()" />
			<domain-reference-picker current="${jvar_picker_current_domain}"
				in-header="true"
				show-in-header="${gs.getPreference('glide.ui.domain_picker.in_header', '')}"
				class="pull-right picker" />
		</j2:if>
		<j2:if test="${jvar_settings_menu_show_encryption_picker}">
			<g2:evaluate var="jvar_picker_current_encryption" expression="new SNC.ConcoursePickerGenerator().getCurrentEncryptionAsJSON()" />
				<encryption-picker current="${jvar_picker_current_encryption}"
					in-header="true"
					show-in-header="${gs.getPreference('glide.ui.encryption_picker.in_header', '')}"
					class="pull-right picker" />
		</j2:if>
	</div>
</j:jelly>
```