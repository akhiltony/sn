---
title: concourse_settings_forms.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<preference-changer label="${gs.getMessage('Tabbed forms')}"
						moreinfo="${gs.getMessage('Organize form sections and related lists into tabs')}"
						preference="tabbed.forms" fire-event="tabbed" type="boolean"/>
	<preference-changer label="${gs.getMessage('Related list loading')}"
						preference="glide.ui.related_list_timing"
						options="[{value: 'default', label: '${HTML:gs.getMessage('With the Form')}'},{value: 'deferred', label: '${HTML:gs.getMessage('After Form Loads')}'},{value: 'ondemand', label: '${HTML:gs.getMessage('On-demand')}'}]"
						type="choice"/>
</j:jelly>
```