---
title: concourse_theme_picker.xml
---
```xml
<div class="theme-picker-container input-group-radio">
	<span ng-repeat="theme in themes"
		  id="{{::theme.name}}"
		  class="settings-theme"
		  ng-class="{'theme-selected':theme.id==defaultTheme}"
		  ng-click="updateTheme(theme)"
		  data-ref="{{::theme.id}}"
		  data-placement="auto"
		  ng-init="addTooltip($last); ">
		<div class="theme-icon">
			<div class="theme-top" ng-style="::{'background' : theme.colorDarker}"/>
			<div class="theme-left" ng-style="::{'background' : theme.colorLighter}"/>
			<div class="theme-bottom" ng-style="::{'background' : theme.accentColor}"/>
		</div>
		<p ng-bind="::theme.name"/>
		<input type="radio"
			   name="theme"
			   id="theme-{{::theme.name}}"
			   class="radio"
			   ng-value="::theme.id"
			   ng-model="defaultTheme"/>
		<label for="theme-{{::theme.name}}" class="radio-label">
			<span class="sr-only" ng-bind="::theme.name"/>
		</label>
	</span>
</div>
```