---
title: concourse_javascript_debugger.xml
---
```xml
<div class="form-group">
	<label class="col-sm-5 control-label" title="{{ ::moreinfo }}">{{::label}}</label>
	<div class="col-sm-7 input-switch">
		<input id="js-debug" type="checkbox" name="js-debug" ng-click="showJsDebugger()" ng-model="visible" />
		<label id="js-debug-switch" aria-hidden="true" class="switch" for="js-debug"/>
	</div>
</div>
```