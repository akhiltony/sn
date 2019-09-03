---
title: concourse_settings_aside.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="glide">
	<div class="sn-aside sn-aside_left sn-aside_min-width">
		<div class="sn-aside-body">
			<div class="sn-widget-list_v2" role="tablist" aria-label="${gs.getMessage('System Settings. Use the up and down keys to navigate between tabs.')}">
				<span role="tab"
					class="sn-widget-list-item"
					data-tab-name="{{view.name}}"
					ng-repeat="view in views track by view.name" 
					ng-class="{'state-active':currentView().tab === '{{view.tab}}'}" 
					ng-click="openView(view.name)"
					ng-keydown="openViewOnKeypress($event)"
					tabindex="{{ currentView().tab == view.tab ? 0 : -1 }}"
					aria-selected="{{ currentView().tab === view.tab }}"
					aria-controls="{{ ::('tabpanel_' + view.tab) }}">
					<div aria-hidden="true" class="sn-widget-list-content sn-widget-list-content_static">
						<div class="sn-widget-list-image icon-{{view.icon}}"/>
					</div>
					<div class="sn-widget-list-content">
						<span class="sn-widget-list-title">{{view.title}}</span>
					</div>
				</span>
			</div>
		</div>
	</div>
</j:jelly>
```