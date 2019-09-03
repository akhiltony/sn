---
title: html_page_response_time.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null">
   <j2:if test="$[jvar_hide_response_time != true]">
      <j2:if test="$[gs.getProperty('glide.ui.response_time', 'true')]">
         <g:inline template="page_timings.xml" />
         <script type="text/javascript">
            var g_serverTime = parseInt("$[jvar_transaction_info.getStopWatchTime()]") + parseInt("$[jvar_last_transaction_time]");
            var g_logClientViewRoles = "$[gs.getProperty('glide.log.client.view.roles')]";

			// do not do this for the navigation menu
            if (window.name != 'gsft_nav') {
				 addAfterPageLoadedEvent(function() {
					 if (window.performance)
						setTimeGraph();
					 else 
						firePageTimer();
				 });
			 }
			 
			function setTimeGraph() {
				if (window.performance.timing.loadEventEnd > 0)
			 		firePageTimer();
			 	else 
			 		setTimeout(setTimeGraph, 300);
			 }
			 
			function firePageTimer() {
				 if (window.performance $[AND] performance.timing.requestStart != performance.timing.responseStart) {
				 	var p = performance.timing;

				 	CustomEvent.fire('page_timing', { name: 'SERV', ms: p.responseEnd - p.requestStart});
				 	CustomEvent.fire('page_timing', { name: 'REND', ms: (p.loadEventEnd - p.responseEnd) });
				 	CustomEvent.fire('page_timing_network', { name: 'NETW', ms: (p.responseEnd - p.navigationStart) });
				 } else {
				    CustomEvent.fire('page_timing', { name: 'SERV', ms: g_serverTime });
					CustomEvent.fire('page_timing', { name: 'REND', startTime: g_loadTime });
					CustomEvent.fire('page_timing_network', { name: 'NETW', loadTime: g_loadTime });
				 }
			 
			 	CustomEvent.fire('page_timing_show', { show: '$[JS:gs.getPreference('glide.ui.response_time')]' });
				 <g:inline template="client_transaction.xml" />
			 }
			 
            // The following line is used to set the time when we start requesting a new page
            Event.observe(window, 'beforeunload', function() {
				new CookieJar().put('g_startTime', new Date().getTime());
                CustomEvent.fireTop('request_start', document);
            });

            // simple pages fire this (stats.do, etc.)
            CustomEvent.observe('simple_page.unload', function() {
				new CookieJar().put('g_startTime', new Date().getTime());
            }); 

            // indicate we have completed the request (used by RequestManager.js for cancel widget)
            addLoadEvent(function() {
            	CustomEvent.fireTop("request_complete", window.location);
            });
         </script>
      </j2:if>
   </j2:if>
</j:jelly>
```