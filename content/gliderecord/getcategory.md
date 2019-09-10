---
title: getCategpry
description: 
---
The setCategory and getCategory methods are available in GlideRecord for working with query categories when routing to secondary database pools, known as read replicas.

A read replica is a 100% copy of an instance’s database (DB) that can be only queried against with the goal to reduce load on the primary database. It’s a paid feature and requires an extra plugin that can only be activated by ServiceNow. With setCategory you can route some categories to the read replica, so queries for them will not go to primary database anymore (effectively reducing load on primary database).

[Source](https://community.servicenow.com/community?id=community_question&sys_id=971f83e1dbdcdbc01dcaf3231f961927)