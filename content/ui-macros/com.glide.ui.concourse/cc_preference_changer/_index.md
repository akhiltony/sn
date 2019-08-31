---
title: cc_preference_changer.xml
---
```xml
<div class="preference-changer">
	<div ng-class="{ 'row form-group' : label }">
		<div class="col-sm-5 section-title-top control-label" ng-bind="::label" ng-if="label" title="{{ ::moreinfo }}"></div>
		<div ng-class="{ 'col-sm-7' : label }">
			<div class="form-group" ng-if="::type == 'choice'" ng-repeat="option in ::options track by $index">
				<span class="input-group-radio">
					<input type="radio" name="{{ ::id }}" id="{{ ::id }}-{{ $index }}" ng-model="prefValue" ng-value="::option.value" class="radio" />
					<label for="{{ ::id }}-{{ $index }}" ng-bind="::option.label" class="radio-label">
					</label>
				</span>
			</div>
			<div ng-if="::type == 'boolean'">
				<div class="input-switch">
					<input type="checkbox" name="{{ ::id }}" id="{{ ::id }}" ng-checked="prefValue" />
					<label class="switch" for="{{ ::id }}">
						<span class="sr-only" ng-bind="::label"> </span>
					</label>
				</div>
			</div>
			<div class="sn-widget-list-content sn-widget-list-content_static" ng-if="::type == 'boolean-disabled'">
				<div class="input-switch" title="{{ ::disabledmsg }}">
					<input aria-disabled="true" type="checkbox" name="{{ ::id }}" id="{{ ::id }}" ng-checked="false"
						ng-click="$event.preventDefault()"
						aria-label="{{ ::label }}. {{ ::disabledmsg }}"/>
					<label class="switch input-switch-disabled" for="{{ ::id }}">
						<span class="sr-only" ng-bind="::label"> </span>
					</label>
				</div>
			</div>
		</div>
	</div>
</div>

```