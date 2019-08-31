---
title: ie_checker.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:g2="null" xmlns:j2="null">
	<!-- sets the variables true if requester is MSIE  
		jvar_isMSIE - any Internet Explorer
		jvar_isMSIE6, etc - a specific version
		
		Might want to rename this to browser_checker
	-->

    <!--
      During system startup the GlideFormulator does not have a request in the Transaction
      Check for valid request before getting header to avoid error in the startup case
    -->
	<g2:evaluate var="jvar_ie_checker" object="true">
		// since we're dealing with global vars, let's play nice.
		if (typeof browser === 'undefined')
			var browser = {};

		browser = (function IEChecker(obj) {
			// in case there is an override, we should honor it.
			if (typeof obj.isMSIE !== 'undefined')
				return obj;

			var request = GlideTransaction.get().getRequest();
			var userAgent = (typeof request === 'undefined' || request === null) ? '' : request.getHeader('user-agent');
			obj.hasUA = (userAgent !== '');
			obj.userAgent = userAgent;

			obj.version = -1;
			var matches = null;

			// If IE is in compatibility mode, ignore the emulated version
			// and report the actual version.
			if (matches = userAgent.match(/Trident\/(\d)\.0/))
				obj.version = parseInt(matches[1]) + 4;
			else if (matches = userAgent.match(/MSIE (\d)\.0/))
				obj.version = parseInt(matches[1]);

			obj.isMSIE = (obj.version !== -1);

			for (var i = 6; i != 12; i++) {
				obj[('isMSIE' + i)] = (i === obj.version);
			}

			// float to int
			obj.versionString = obj.version.toString();

			// firefox
			obj.isFirefox = userAgent.indexOf('Firefox') !== -1;
			for (var i = 30; i != 35; i++) {
				obj[('isFF' + i)] = userAgent.indexOf('Firefox/' + i) !== -1;
			}
			if (obj.isFirefox) {
				var idx = userAgent.indexOf('Firefox/')
				var d = userAgent.substring(idx + 8 , idx + 10)
				obj.ffVersion = parseInt(d.charAt(1) == "." ? d.charAt(0) : d );
			}

			// other browsers
			obj.isWindows = userAgent.indexOf('Windows') !== -1;
			obj.isChrome = userAgent.indexOf('Chrome') !== -1;

			return obj;
		})(browser);
	</g2:evaluate>
	
	<j2:if test="$[browser.hasUA]">
		<j2:set var="jvar_MSIE_vn" value="$[browser.versionString]"/>
		<j2:set var="jvar_isMSIE" value="$[browser.isMSIE]"/>
		<j2:set var="jvar_is_ie6" value="$[browser.isMSIE6]"/>
		<j2:set var="jvar_isMSIE6" value="$[browser.isMSIE6]"/>
		<j2:set var="jvar_isMSIE7" value="$[browser.isMSIE7]"/>
		<j2:set var="jvar_isMSIE8" value="$[browser.isMSIE8]"/>
		<j2:set var="jvar_isMSIE9" value="$[browser.isMSIE9]"/>
		<j2:set var="jvar_isMSIE10" value="$[browser.isMSIE10]"/>
		<j2:set var="jvar_isMSIE11" value="$[browser.isMSIE11]"/>
		<j2:set var="jvar_isFirefox" value="$[browser.isFirefox]"/>
		<j2:set var="jvar_isFF30" value="$[browser.isFF30]"/>
		<j2:set var="jvar_isFF31" value="$[browser.isFF31]"/>
		<j2:set var="jvar_isFF32" value="$[browser.isFF32]"/>
		<j2:set var="jvar_isFF33" value="$[browser.isFF33]"/>
		<j2:set var="jvar_isFF34" value="$[browser.isFF34]"/>
		<j2:set var="jvar_isWindows" value="$[browser.isWindows]"/>
		<j2:set var="jvar_isChrome" value="$[browser.isChrome]"/>
		<j2:set var="jvar_isIPAD" value="$[browser.userAgent.indexOf('iPad;') > -1]"/>
		<j2:set var="jvar_isIPHONE" value="$[browser.userAgent.indexOf('iPhone') > -1]"/>
		<j2:set var="jvar_isANDROID" value="$[browser.userAgent.indexOf('Android') > -1]"/>
	</j2:if>

	<g2:set_if var="jvar_msie9_body_class" test="$[jvar_isMSIE9]" true="msie9" false="" />
	<g2:set_if var="jvar_msie10_body_class" test="$[jvar_isMSIE10]" true="msie10" false="" />
	<g2:set_if var="jvar_msie11_body_class" test="$[jvar_isMSIE11]" true="msie11" false="" />
	<g2:set_if var="jvar_firefox_body_class" test="$[jvar_isFirefox]" true="firefox" false="" />
	<g2:set_if var="jvar_ff30_body_class" test="$[jvar_isFF30]" true="ff30" false="" />
	<g2:set_if var="jvar_ff31_body_class" test="$[jvar_isFF31]" true="ff31" false="" />
	<g2:set_if var="jvar_ff32_body_class" test="$[jvar_isFF32]" true="ff32" false="" />
	<g2:set_if var="jvar_ff33_body_class" test="$[jvar_isFF33]" true="ff33" false="" />
	<g2:set_if var="jvar_ff34_body_class" test="$[jvar_isFF34]" true="ff34" false="" />
	<g2:set_if var="jvar_windows_body_class" test="$[jvar_isWindows]" true="windows" false="" />
	<g2:set_if var="jvar_chrome_body_class" test="$[jvar_isChrome]" true="chrome" false="" />
	<j2:set var="jvar_browser_body_class" value="$[jvar_msie9_body_class] $[jvar_msie10_body_class] $[jvar_msie11_body_class] $[jvar_firefox_body_class] $[jvar_windows_body_class] $[jvar_chrome_body_class] $[jvar_ff30_body_class] $[jvar_ff31_body_class] $[jvar_ff32_body_class] $[jvar_ff33_body_class] $[jvar_ff34_body_class] "/>

</j:jelly>
```