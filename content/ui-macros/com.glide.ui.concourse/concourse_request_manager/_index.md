---
title: concourse_request_manager.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- header area -->
<j:jelly trim="false" xmlns:j="jelly:core">
		<div id="transaction_cancel" class="notification notification-warning navigation-notification"
			 ng-class="{'visible':showAlert}">
			<span class="pointerhand" id="request_manager_output">
				<!-- Transaction cancel button and timer -->
				<span class="pointerhand" id="request_manager_output_inner" role="status" aria-live="polite">
					<span id="request_status_message" class="request_message"></span>
					<span id="request_timer" style="cursor:default;"></span>
				</span>
			</span>
			<button id="cancel_transaction_button" data-dismiss="modal"
					class="btn-cancel-transaction btn btn-danger" style="display:inline"
					ng-class="{'hidden':hideButton}" ng-click="handleRequestCancel()">
				${gs.getMessage("Cancel")}
			</button>
		</div>
</j:jelly>
```