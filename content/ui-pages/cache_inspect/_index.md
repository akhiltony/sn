---
title: cache_inspect.xml
---
```xml
<?xml version="1.0" encoding="utf-8" ?>
<j:jelly trim="true" xmlns:j="jelly:core" xmlns:g="glide" xmlns:j2="null" xmlns:g2="null">
	<script>
		function getList() {
			var sm = gel('subname');
			var sBox = gel('type');
			var type = sBox.options[sBox.options.selectedIndex].value;

			if (type == 'shr' || type == 'exp') {
				sm.style.display = "none";
				sm.style.visibility = "hidden";
			} else {
				sm.style.display = "block";
				sm.style.visibility = "visible";
			}

		    var aj = new GlideAjax("CacheInspectAjax");
		    aj.addParam("sysparm_chars", "list");
		    aj.addParam("sysparm_type", type);
		    aj.getXML(cacheResponse);
		}
		
		function cacheResponse(request) {
			var rxml = request.responseXML
		    var type = request.responseXML.documentElement.getAttribute("sysparm_type");
			var nl = gel('name_list');
			var items = rxml.getElementsByTagName("item");
			nl.options.length = 0;
			for (var i = 0; i &amp;lt; items.length; i++) {
				var v = items[i].getAttribute("value");
				var o = new Option(v, v);
				nl.options[nl.options.length] = o;
			}
			
			if (type == 'shr' || type == 'exp') {
				nl.onchange =  function() { showDetails(type, nl); };
			} else {
				var nl2 = gel('sub_name_list');
				nl.onchange =  function() { subList(); };
				nl2.onchange =  function() { showDetails(type, nl, nl2); };
			}
		}
		
		function subList() {
			var filter = gel("subname_filter");
			filter.value = "";
			updateSubList();
		}
		
		function updateSubList() {
			var sBox = gel('type');
			var type = sBox.options[sBox.options.selectedIndex].value;
			sBox = gel('name_list');
			var name = sBox.options[sBox.options.selectedIndex].value;
			var filter = gel("subname_filter");

		    var aj = new GlideAjax("CacheInspectAjax");
		    aj.addParam("sysparm_chars", "list");
		    aj.addParam("sysparm_type", type);
		    aj.addParam("sysparm_name", name);
		    aj.addParam("sysparm_filter", filter.value);
		    aj.getXML(showSubList);
		}
		
		function showSubList(request) {
			var rxml = request.responseXML
			var nl = gel('sub_name_list');
			var items = rxml.getElementsByTagName("item");
			nl.options.length = 0;
			for (var i = 0; i &amp;lt; items.length; i++) {
				var v = items[i].getAttribute("value");
				var o = new Option(v, v);
				nl.options[nl.options.length] = o;
			}
			var e = gel('subname_count');
			e.innerHTML = nl.options.length;
			writeDetails();
		}

		function showDetails(type, sBox, sBox2) {
			var name = sBox.options[sBox.options.selectedIndex].value;
			var value = "";
			
			if (sBox2)
				value += sBox2.options[sBox2.options.selectedIndex].value;

		    var aj = new GlideAjax("CacheInspectAjax");
		    aj.addParam("sysparm_chars", "get");
		    aj.addParam("sysparm_type", type);
		    aj.addParam("sysparm_name", name);
		    aj.addParam("sysparm_value", value);
		    aj.getXML(writeDetails);
		}
		
		function writeDetails(request) {
			var ta = gel('details');
			if (!request || !request.responseXML) {
				ta.value = '';				
				return;
			}
				
			var rxml = request.responseXML;
			var items = rxml.getElementsByTagName("item");
			for (var i = 0; i &amp;lt; items.length; i++) {
				var v = items[i];
				if (v.getAttribute('name') == "details")
					ta.value = getTextValue(v);
			}
		}
		
		addLoadEvent(getList);
	</script>

	<table border="0">
		<tr>
			<td><img src="images/cache_header.gifx" alt="Cache Inspector"/></td>
			<td>
				<div><b>Cache Inspector (v2)</b></div>
			</td>
		</tr>
	</table>

	<div style="width:100%">
		<label for="type">Type:$[SP]</label>
		<select id='type' onChange='getList();'>
			<option value='shr'>Shared</option>
			<option value='pri'>Private</option>
			<option value='exp'>Expression</option>
		</select>
	</div>
	
	<div style="width:100%">
		<div class="caption"><label for="name_list">Name:</label></div>
		<select id='name_list' size="20" style="width: 100%;">
		</select>
	</div>
	<div id="subname" style="width:100%">
		<hr/>
		<div class="caption"><label for="sub_name_list">Sub name:$[SP]$[SP]<span id="subname_count" />$[SP]item(s)</label><label for="subname_filter">$[SP]$[SP]$[SP]$[SP]$[SP]$[SP]Filter:$[SP]</label><input id="subname_filter" size="20" onChange="updateSubList();"/></div>
		<select id='sub_name_list' size="20" style="width: 100%;">
		</select>
	</div>
	
	<hr/>
	<div style="width:100%">
		<div class="caption"><label for="details">Details:</label></div>
		<textarea id="details" style="width: 100%; height: 200px;">
		</textarea>
	</div>
</j:jelly>
```