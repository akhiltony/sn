---
title: home_splash.xml
---
```xml

<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="false" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<g2:doctype name="html"/>
	<!-- http://localhost:8080/home_splash.do -->
	<!-- property: home_splash.do?sysparm_view=itil -->
	
	<!-- fast load of home page - give user the opportunity to cancel  -->
	<html data-doctype="true">
		<head>
			<title>${gs.getMessage('Home page loading...')}</title>

			<j:set var="jvar_theme" value="$[gs.getPreference(new GlideThemeUtil().getThemeVersion())]"/>
			<g:requires name="styles/css_includes.css" includes="true"
						params="c=$[gs.getProperty('css.version')]_$[GlideCacheManager.getFlushStamp('csscsscsscache')]&amp;theme=${jvar_theme}" />
			<g:requires name="styles/heisenberg/heisenberg_all.css" includes="true"/>
			<g:requires name="scripts/lib/jquery_includes.js" includes="true" />
		</head>
		<body>
			<g:inline template="redirect_page.xml" message="${gs.getMessage('Home page loading...')}"/>

			<div class="loading-container">
				<button id="cancel_button" class="btn btn-primary">${gs.getMessage('Cancel')}</button>
			</div>
			<div class="stopped-container" style="display: none;">
				<h2>${gs.getMessage('Home not loaded')}</h2>
				<p>${gs.getMessage('Feel free to view another page or')}$[SP]<a href="javascript:location.reload();">${gs.getMessage('try to load the home page again')}</a></p> 
			</div>

			 <!-- sysparm_view may have been specified -->
			<g2:evaluate var="jvar_redirect" jelly="true">
				var redirect = 'home.do?';
				if (jelly.sysparm_view != '')
					redirect += 'sysparm_view=' + jelly.sysparm_view;

				redirect;
			</g2:evaluate>
			<script type="text/javascript">
				$j(function(){
					var $cancelButton = $j('#cancel_button');
					var loadHomeTimeout = setTimeout(loadHome, 1000);
					var homeLoading = false; // if the home page is already loading
					
					$cancelButton.on('click', function(){
						if (homeLoading) {
							$cancelButton.addClass('pressed');
							window.location.href = "cancel_my_transaction.do?sysparm_page=home";
						} else {
							clearTimeout(loadHomeTimeout);
							$j('.loading-container').hide();
							$j('.stopped-container').show();
						}
					});
					
					function loadHome() {
						homeLoading = true;
						startTiming();
						window.location.href = '$[jvar_redirect]';
					}
	
					// stuff copied from timing.js so the home page has timing info at the bottom and the
					// cancel request X will show in the banner
					function startTiming() {
						window.parent['g_startTime'] = new Date().getTime();
						var t = window.self.parent;
						if (t != null)
							if (window != t)
								t.CustomEvent.fireEvent("request_start", document);
					}
				});
				
			</script>
		</body>
	</html>
</j:jelly>
```