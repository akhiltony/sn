---
title: concourse_application_picker.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<div ng-if="!inHeader || app.showInHeader" class="concourse-application-picker">
		<div class="form-group">
			<label ng-if="::!inHeader" for="application_picker_select" class="col-sm-5 section-title-top control-label">
				<span class="icon-application-generic label-icon"></span>${gs.getMessage('Application')}
			</label>
			<a ng-if="::inHeader" href="/sys_scope.do?sys_id={{app.current.sysId}}" target="gsft_main"
			   class="icon-application-generic btn btn-icon" data-toggle="tooltip"
			   data-name="current-application-picker"
			   title="${gs.getMessage('Show selected application')}">
				<span class="sr-only">${gs.getMessage('View current application under development')}</span>
			</a>
			<span class="col-sm-7 selector" ng-class="{'three-controls' : !minified}">
				<select id="application_picker_select" class="form-control" name="application_picker_select"
						ng-model="app.currentId" ng-change="updateCurrent()"
						ng-options="a.sysId as a.name for a in app.list"></select>
				<span ng-if="::!inHeader">
					<a href="/sys_scope.do?sys_id={{app.current.sysId}}" class="icon-view btn btn-icon"
					   target="gsft_main" ng-click="closeModal()" data-toggle="tooltip"
					   title="${gs.getMessage('Show selected application')}">
						<span class="sr-only">${gs.getMessage('View current application under development')}</span>
					</a>
					<a href="/sys_scope_list.do?sysparm_query=active=true" class="icon-list btn btn-icon"
					   target="gsft_main" ng-click="closeModal()" data-toggle="tooltip">
						<span class="sr-only">${gs.getMessage('View list of applications')}</span>
					</a>
					<a href="javascript:void(0);" class="icon-refresh btn btn-icon"
					   ng-click="refreshApplicationPicker()" data-toggle="tooltip">
						<span class="sr-only">${gs.getMessage('Refresh application picker')}</span>
					</a>
				</span>
			</span>
		</div>
		<div ng-if="::!inHeader" class="form-group">
			<label class="col-sm-5 control-label" for="application_picker_in_header">
				${gs.getMessage('Show application picker in header')}
			</label>
			<div class="col-sm-7 input-switch">
				<input type="checkbox" ng-model="showInHeader" name="application_picker_in_header"
					   id="application_picker_in_header"/>
				<label class="switch" for="application_picker_in_header"></label>
			</div>
		</div>
	</div>
</j:jelly>
```