---
title: html_page_script_core.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">

  <script type="text/javascript" data-comment="navpage layout preferences, onfocus observation">
	/**
	* Every window needs to observe these events.
	*/
	if (Prototype.Browser.IE $[AND] !isMSIE9) {
		document.onfocusout = function() { CustomEvent.fireTop(GlideEvent.WINDOW_BLURRED, window); };
		document.onfocusin = function() { CustomEvent.fireTop(GlideEvent.WINDOW_FOCUSED, window); };
	} else {
		Event.observe(window, 'blur', function() { CustomEvent.fireTop(GlideEvent.WINDOW_BLURRED, window); });
		Event.observe(window, 'focus', function() { CustomEvent.fireTop(GlideEvent.WINDOW_FOCUSED, window); });
	}
  </script>
  
</j:jelly>
```