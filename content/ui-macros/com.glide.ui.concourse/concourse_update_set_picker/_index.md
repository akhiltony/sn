---
title: concourse_update_set_picker.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<div ng-if="!inHeader || updateSets.showInHeader" class="concourse-update-set-picker">
		<div class="form-group">
			<label ng-if="::!inHeader" for="update_set_picker_select" class="col-sm-5 section-title-top control-label">
				<span class="icon-document-multiple label-icon"></span>${gs.getMessage('Update set')}
			</label>
			<a ng-if="::inHeader" href="/sys_update_set.do?sys_id={{updateSets.currentId}}" target="gsft_main"
			   class="icon-document-multiple btn btn-icon" data-toggle="tooltip">
				<span class="sr-only">${gs.getMessage('View current update set')}</span>
			</a>
			<span class="col-sm-7 selector" ng-class="::{'three-controls' : !minified}">
				<select name="update_set_picker_select" id="update_set_picker_select" class="form-control"
						ng-model="updateSets.currentId" ng-change="updateCurrent()"
						ng-options="updateSet.sysId as updateSet.name for updateSet in updateSets.list"></select>
				<span ng-if="::!inHeader">
					<a href="/sys_update_set.do?sys_id={{updateSets.currentId}}" target="gsft_main"
					   data-name="current-update-set"
					   title="${gs.getMessage('View current update set')}" class="icon-view btn btn-icon"
					   ng-click="closeModal()" data-toggle="tooltip" data-locator="view-update-set">
						<span class="sr-only">${gs.getMessage('View current update set')}</span>
					</a>
					<a href="/sys_update_set_list.do" target="gsft_main" class="icon-list btn btn-icon"
					   title="${gs.getMessage('View list of update sets')}" ng-click="closeModal()"
					   data-toggle="tooltip">
						<span class="sr-only">${gs.getMessage('View list of update sets')}</span>
					</a>
					<a href="javascript:void(0);" class="icon-refresh btn btn-icon" ng-click="refreshUpdateSetList()"
					   title="${gs.getMessage('Refresh update set picker')}" data-toggle="tooltip">
						<span class="sr-only">${gs.getMessage('Refresh update set picker')}</span>
					</a>
				</span>
			</span>
		</div>
		<div ng-if="::!inHeader" class="form-group">
			<label class="col-sm-5 control-label" for="update_set_picker_in_header">
				${gs.getMessage('Show update set picker in header')}
			</label>
			<div class="col-sm-7 input-switch">
				<input type="checkbox" ng-model="showInHeader" name="update_set_picker_in_header"
					   id="update_set_picker_in_header"/>
				<label class="switch" for="update_set_picker_in_header"></label>
			</div>
		</div>
	</div>
</j:jelly>

```