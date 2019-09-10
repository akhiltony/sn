---
title: deleteMultiple
description: 
---
Generally you don’t need to delete records, so this is less common to see in use, some places you might see it used are when storing things temporarily. Like the cart’s items, those things don’t stick around and I’ve seen it coded to clear it out in some cases. In any case, my point is, this is seen less often.

This is shortcut to delete a lot of records, however it’s not necessarily faster. To use this you can just specify your query, and then invoke incident.deleteMultiple();

This is available on server only.