---
title: page_timings.xml
---
```xml
<?xml version="1.0" encoding="UTF-8"?>
<j:jelly trim="true" xmlns:g="glide" xmlns:g2="null" xmlns:j="jelly:core" xmlns:j2="null">
   <!--
      Include the page timings in the top banner so that is only included once and not on each page.

      Pages fire page_timing events that the PageTimer handles (if it is loaded).
   -->

   <!-- XMLTemplate used to build the timing div displayed at the bottom of the page -->
   <script id="glide:page_timing_div" type="application/xml">
      <button class="pointerhand icon-stop-watch btn btn-icon"
              style="padding:5px 5px;"
              type="button"
              aria-controls="glide:timing_widget"
              title="${gs.getMessage('Response time(ms)')}: #{RESP}, ${gs.getMessage('network')}: #{NETW}, ${gs.getMessage('server')}: #{SERV}, ${gs.getMessage('browser')}: #{REND}"
              aria-expanded="false"
			  aria-label="${gs.getMessage('Response time')}">
      </button>

      <span class="timing_span" id="glide:timing_widget" style="display:none">
         ${gs.getMessage("Response time(ms)")}: #{RESP}, ${gs.getMessage("network")}: #{NETW}, ${gs.getMessage("server")}: #{SERV},$[SP]<a role="button" aria-controls="page_timing_details" aria-expanded="false" tabindex="0" class="timing_span">${gs.getMessage("browser")}: #{REND} <span class="sr-only">${gs.getMessage("Toggle browser timing details")}</span></a>
         <!--
            Create a relative span containing just a space and use that to absolutely position the
            details box that we will popup when clicking on the 'browser' link.  This allows the
            details to be positioned bottom:0, right:0 so it displays in the right place.  In
            addition, a blank div is added at the bottom of the details so that it is shown above
            the timing line at the right distance.
         -->
         <span style="position:relative; width: 1px;" role="region" aria-label="${gs.getMessage('Browser Timing Detail')}" aria-hidden="true">$[SP]
            <span style="position:absolute; bottom:0px; right:0px">
               <span id="page_timing_details">
                  <!-- details div goes here -->
               </span>
               <a aria-hidden="true"><div>$[SP]</div></a>
            </span>
         </span>
		<div class='timingGraphDiv'>
			<span class="timing_graph" data-aria-label="${gs.getMessage('Show Timing Breakdown')}">
				<span class="timing_network" title="${gs.getMessage('Network')} #{NETW}ms"></span>
				<span class="timing_server" title="${gs.getMessage('Server')} #{SERV}ms"></span>
				<span class="timing_browser" title="${gs.getMessage('Browser')} #{REND}ms"></span>
			</span>
			<button
				type="button"
				class="page_timing_expand icon-chevron-down btn btn-default btn-sm"
				data-toggle="tooltip"
				data-title-expand="${gs.getMessage('Expand timing details')}"
				data-title-collapse="${gs.getMessage('Collapse timing details')}"
				aria-label="${gs.getMessage('Timing details')}">
			</button>
		</div>
      </span>
   </script>

   <!-- XMLTemplate for browser timing detail lines -->
   <script id="glide:page_timing_details" type="application/xml">
      <div class="timing_details">
         #{details}
      </div>
   </script>

   <script id="glide:page_timing_detail_line" type="application/xml">
      <div class="timing_detail_line #{has_children}" data-children="#{child_count}">
         #{HTML:name}: #{ms}
         #{children}
      </div>
   </script>

   <script id="glide:page_timing_child_line" type="application/xml">
      <div class="timing_detail_line timing_detail_line_child">
         #{HTML:name}: #{ms}
      </div>
   </script>
</j:jelly>

```