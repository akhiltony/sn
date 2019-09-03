---
title: concourse_settings_lists.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?><!-- header area -->
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<preference-changer label="${gs.getMessage('Wrap longer text in list columns')}"
						moreinfo="${gs.getMessage('Breaks text into lines to minimize horizontal scrolling in lists')}"
						fire-event="table_wrap" preference="table.wrap" type="boolean"/>
	<!--<preference-changer-->
	<!--label="${gs.getMessage('Open records in modal window')}"-->
	<!--moreinfo="${gs.getMessage('Keep the list open in the background and open the record in a popup over the list')}"-->
	<!--fire-event="toggleListFormModalPreference" preference="glide.ui.listFormModal" type="boolean" />-->
	<j:if test="${pm.isActive('com.glide.ui.list_v3_components')}">
		<j2:if test="$[gs.getSession().getUser().getPreference('use.list_v3')]">
			<preference-changer label="${gs.getMessage('Striped Table Rows')}"
								preference="glide.ui.list_v3.row_stripes" type="boolean"
								fire-event="cc_listv3_tablerow_striped"/>
			<preference-changer label="${gs.getMessage('Modern Cell Styles')}"
								preference="glide.ui.field_style_circles" type="boolean"
								fire-event="cc_modern_cell_styles"/>
		</j2:if>
	</j:if>
	<!--<preference-changer-->
	<!--label="${gs.getMessage('Default List Mode')}"-->
	<!--preference="glide.ui.default_list_mode"-->
	<!--options="[{value: 'grid', label: '${HTML:gs.getMessage('Grid')}'},{value: 'split', label: '${HTML:gs.getMessage('Split')}'}]"-->
	<!--type="choice"/>-->
</j:jelly>
```