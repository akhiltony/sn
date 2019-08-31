---
title: html_page_script_includer.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">

	<j2:if test="$[sysparm_timing == 'true']">
		<script type="text/javascript">
			var __stmr = new Date();
		</script>
	</j2:if>
	
	<g:requires name="${jvar_includes_file}" includes="true" />
	
	<j2:if test="$[sysparm_timing == 'true']">
		<script type="text/javascript">
			CustomEvent.fire('page_timing', { name: 'SCPT', startTime: __stmr, win: window });
		</script>
	</j2:if>

</j:jelly>
```