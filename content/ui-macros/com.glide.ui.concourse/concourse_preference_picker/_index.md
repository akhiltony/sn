---
title: concourse_preference_picker
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<div class="concourse-preference-picker row form-group">
		<label for="{{::endpoint}}_picker_select" class="col-sm-5 section-title-top control-label">{{::labelTitle}}</label>
		<span class="col-sm-7 one-control">
			<select id="{{::endpoint}}_picker_select" class="form-control pull-left" name="{{::endpoint}}_picker_select" ng-model="current" ng-change="updateCurrent()">
				<option ng-repeat="item in list" value="{{::item.value}}" title="{{::item.label}}" ng-selected="item.value == current">{{::item.label}}</option>
			</select>
			<a href="javascript:void(0);" ng-click="refreshPicker()" class="icon-clear-cache btn btn-icon" role="button" aria-label="{{::refreshTitle}}" title="{{::refreshTitle}}"></a>
		</span>
	</div>
</j:jelly>
```