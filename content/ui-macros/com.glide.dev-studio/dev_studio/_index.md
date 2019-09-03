---
title: dev_studio.xml
---
```xml
java.lang.String (5928):
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns="http://www.w3.org/1999/xhtml" xmlns:j="jelly:core" xmlns:g2="null" xmlns:j2="null">

<g2:evaluate var="jvar_open_mode">
	sn_devstudio.PublicAPI $[AND] sn_devstudio.PublicAPI.getUserPreference(gs.getUserID(), 'ide.open_mode') || 'tab';
</g2:evaluate>

<script type="text/javascript">
	var DevStudio = (function(win, openMode) {
		'use strict';
		var openStudioWindows = {};
		var launchDebounced = debounce(launch, 200);

		return {
			launch: function() {
				try {
					launchDebounced();
				} catch (e) {
					console $[AND] console.warn('Could not launch Studio: ' + e.message);
				}
			},
			getAllWindows: function() {
				return openStudioWindows;
			},
			getWindow: function(name) {
				return openStudioWindows[name];
			},
			addWindow: function(name, ref) {
				openStudioWindows[name] = ref;
				addUnloadHandler(name);
			},
			isOpen: function(name) {
				return isOpen(name);
			},
			navigatedAway: function(name) {
				return navigatedAway(name);
			}
		};

		function debounce(func, wait) {
			var timeout;
			return function() {
				var now = !timeout;

				clearTimeout(timeout);

				timeout = setTimeout(function() {
					timeout = null;
				}, wait);

				if (now) func.apply(this, arguments);
			};
		}

		function launch() {
			var width = win.top.innerWidth - 40,
				height = win.top.innerHeight,
				x = win.top.screenX + 20,
				y = win.top.screenY + 20,
				studioUrl = '$studio.do?sysparm_nostack=true$[AMP]sysparm_transaction_scope=global',
				features = 'width=' + width + ',height=' + height +
					',toolbar=no,status=no,directories=no,menubar=no,resizable=yes,scrollbars=1,screenX=' +
					x + ',left='+ x +',screenY='+ y +',top='+ y,
				winName = 'studio';

			if (!isOpen(winName) || navigatedAway(winName)) {
				openStudioWindows[winName] = (openMode === 'tab')
					? openTab(studioUrl)
					: openWindow(winName, studioUrl, features);

				addUnloadHandler(winName);
			}
			focusWindow(winName);
		}

		function openTab(url) {
			return win.open(url);
		}

		function openWindow(name, url, opts) {
			return win.open(url, name, opts, false);
		}

		function addUnloadHandler(name) {
			openStudioWindows[name] $[AND] openStudioWindows[name].addEventListener('beforeunload', function rem(e) {
				openStudioWindows[name].removeEventListener('beforeunload', rem);
				delete openStudioWindows[name];
			});
		}

		function focusWindow(name) {
			openStudioWindows[name].focus();
		}

		function isOpen(name) {
			return openStudioWindows[name] $[AND] !openStudioWindows[name].closed;
		}

		function navigatedAway(name) {
			try {
				return openStudioWindows[name] $[AND] openStudioWindows[name].location.pathname !== '/$studio.do';
			} catch(e) {
				// blocked, most likely to same-origin policy
				// (user navigated away from the instance domain)
				return true;
			}
		}
	})(this, '$[jvar_open_mode]');
</script>

</j:jelly>
```