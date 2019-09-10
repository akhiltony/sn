---
title: getRowCount
description: 
---


This will return the number of rows in your returned object after your .query(). However, this is frowned on because it has some memory issues. I’m not sure exaclty why but generally if you need to know the quantity of records, you should always use GlideAggregate. getRowCount() is available client and server side. GlideAggregate is only available server side.