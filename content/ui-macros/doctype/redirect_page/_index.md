---
title: redirect_page.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide">
	<g:macro message="" redirect_to="" redirect_timeout="1500" redirect_target="window" />
	<div class="loading-container">
		<j:if test="${!empty(jvar_message)}">
			<h1 class="loading-message">
				${jvar_message}
			</h1>
		</j:if>

		<div class="loading-indicator icon-loading icon-lg"/>
	</div>
	<j:if test="${!empty(jvar_redirect_to)}">
		<script data-comment="loading_page redirect">
			setTimeout(function() {
				${jvar_redirect_target}.location.href = '${jvar_redirect_to}';
			}, ${jvar_redirect_timeout});
		</script>
	</j:if>
</j:jelly>
```