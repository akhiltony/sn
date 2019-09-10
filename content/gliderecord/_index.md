---
aliases:
- '/Operators/'
- '/GlideRecord/'
- '/gr/'
date: '2016-01-01'
keywords:
- getlasterrormessage
- isvalid
- operation
- setabortaction
- setworkflow
- cancreate
- candelete
- canread
- canwrite
- addencodedquery
- addjoinquery
- addnotnullquery
- addnullquery
- addorcondition
- addquery
- choosewindow
- get
- getencodedquery
- getrowcount
- hasnext
- next
- orderby
- orderbydesc
- query
- setlimit
- setencodedquery
- addfunction
- getattribute
- getcategory
- getclassdisplayvalue
- getdisplayname
- getdisplayvalue
- getelement
- getlabel
- getlink
- getrecordclassname
- gettablename
- getvalue
- autosysfields
- deletemultiple
- deleterecord
- initialize
- insert
- isactionaborted
- isnewrecord
- isvalidfield
- usvalidrecord
- newrecord
- setcategory
- setforceupdate
- setnewguid
- setnewguidvalue
- setvalue
- update
- updatemultiple
- updatelazy
layout: page
tags:
- 'server-side-api'
title: GlideRecord
url: '/gliderecord/'
---

# What is GlideRecord

A `GlideRecord` is a class of object that represents a table & offers a
scriptable API to access records on that table

`GlideRecord` is comprised of [`GlideElements`](/glideelement) as well
as other methods and metadata that work together to allow you to query
from and write to database tables

[`GlideElement`](/glideelement) is a class of object that represents a
column on a table

There are two versions of GlideRecord, the client side version, and the
server side version.
[docs](https://developer.servicenow.com/app.do#!/api_doc?v=jakarta&id=c_GlideRecordScopedAPI)

| Category | Method                                        | Brief Description                                                                                                                       |
|----------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| \*       | [getLastErrorMessage](#getlasterrormessage)   | Retrieves the last error message                                                                                                        |
| \*       | [isValid](#isvalid)                           | Determines whether the table exists or not                                                                                              |
| \*       | [operation](#operation)                       | Retrieves the current operation being performed, such as insert, update, or delete                                                      |
| \*       | [setAbortAction](#setabortaction)             | Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted                                           |
| \*       | [setWorkflow](#setworkflow)                   | Flag to run or not run other business rules                                                                                             |
| Access   | [canCreate](#cancreate)                       | Determines if the Access Control Rules which include the user's roles permit inserting new records in this table                        |
| Access   | [canDelete](#candelete)                       | Determines if the Access Control Rules which include the user's roles permit deleting records in this table                             |
| Access   | [canRead](#canread)                           | Determines if the Access Control Rules which include the user's roles permit reading records in this table                              |
| Access   | [canWrite](#canwrite)                         | Determines if the Access Control Rules which include the user's roles permit editing records in this table                              |
| Query    | [addEncodedQuery](#addencodedquery)           | Specifies one of many querys encoded                                                                                                    |
| Query    | [addJoinQuery](#addjoinquery)                 | Adds a filter to return records based on a relationship in a related table                                                              |
| Query    | [addNotNullQuery](#addnotnullquery)           | Add's a `^fielsISNOTNULL` condition                                                                                                     |
| Query    | [addNullQuery](#addnullquery)                 | Add's a `^fieldISNULL` condition                                                                                                        |
| Query    | [addOrCondition](#addorcondition)             | Add's a `^OR` condition                                                                                                                 |
| Query    | [addQuery](#addquery)                         | Specifies one of many querys                                                                                                            |
| Query    | [chooseWindow](#choosewindow)                 | Sets a range of rows to be returned by subsequent queries. If forceCount is true, getRowCount() method will return all possible records |
| Query    | [get](#get)                                   | Get's a single record                                                                                                                   |
| Query    | [getEncodedQuery](#getencodedquery)           | Returns the query in it's encoded form                                                                                                  |
| Query    | [getRowCount](#getrowcount)                   | Gets the number of rows, not recomeneded, use [GlideAggregate](/GlideAggregate) instead                                                 |
| Query    | [hasNext](#hasnext)                           | Determines if there are any more records in the GlideRecord                                                                             |
| Query    | [next](#next)                                 | Moves to the next record in the GlideRecord                                                                                             |
| Query    | [orderBy](#orderby)                           | Sets the order by to A-Z on the specified field                                                                                         |
| Query    | [orderByDesc](#orderbydesc)                   | Sets the order by to Z-A on the specified field                                                                                         |
| Query    | [query](#query)                               | Runs the query against the table based on the specified filters by addQuery and addEncodedQuery                                         |
| Query    | [setLimit](#setlimit)                         | Sets a limit on the number of results                                                                                                   |
| Query    | [setEncodedQuery](#setencodedquery)           |                                                                                                                                         |
| Read     | [addFunction](#addfunction)                   | Retrieve the specified platform function in addition of the field values                                                                |
| Read     | [getAttribute](#getattribute)                 | Gets the attributes on the field in question from the dictionary                                                                        |
| Read     | [getCategory](#getcategory)                   | Determines whether a category is set for a query.                                                                                       |
| Read     | [getClassDisplayValue](#getclassdisplayvalue) |                                                                                                                                         |
| Read     | [getDisplayName](#getdisplayname)             | Retrieves the name of the display field                                                                                                 |
| Read     | [getDisplayValue](#getdisplayvalue)           | Retrieves the display value for the current record                                                                                      |
| Read     | [getElement](#getelement)                     | Retrieves the GlideElement for a specified field                                                                                        |
| Read     | [getLabel](#getlabel)                         | The label of the field as a String                                                                                                      |
| Read     | [getLink](#getlink)                           | Retrieves a link to the current record                                                                                                  |
| Read     | [getRecordClassName](#getrecordclassname)     | Retrieves the class name for the current record                                                                                         |
| Read     | [getTableName](#gettablename)                 | Retrieves the table name associated with this GlideRecord                                                                               |
| Read     | [getValue](#getvalue)                         | Retrieves the underlying value of a field                                                                                               |
| Write    | [autoSysFields](#autosysfields)               | Flag to update fields starting with `sys_`                                                                                              |
| Write    | [deleteMultiple](#deletemultiple)             | Deletes all records found to match the query                                                                                            |
| Write    | [deleteRecord](#deleterecord)                 | Deletes a single record                                                                                                                 |
| Write    | [getUniqueValue](#getuniquevalue)             | Gets the primary key of the record, which is usually the sys\_id unless otherwise specified                                             |
| Write    | [initialize](#initialize)                     | Sets up the GlideRecord to ignores default values for columns                                                                           |
| Write    | [insert](#insert)                             | Insert a new record using the field values that have been set for the current record                                                    |
| Write    | [isActionAborted](#isactionaborted)           | Determines whether the current database action is to be aborted. Available in Fuji patch 3                                              |
| Write    | [isNewRecord](#isnewrecord)                   | Checks if the current record is a new record that has not yet been inserted into the database                                           |
| Write    | [isValidField](#isvalidfield)                 | Determines if the given field is defined in the current table                                                                           |
| Write    | [isValidRecord](#usvalidrecord)               | Determines if current record is a valid record                                                                                          |
| Write    | [newRecord](#newrecord)                       | Sets up the GlideRecord to follow the default values and assigns a sys\_id                                                              |
| Write    | [setCategory](#setcategory)                   | Sets the category, which determines how the query is routed to a secondary database pool.                                               |
| Write    | [setForceUpdate](#setforceupdate)             | Flag to allow a save/update when there are no changes                                                                                   |
| Write    | [setNewGuid](#setnewguid)                     | Assigns a `sys_id` when called                                                                                                          |
| Write    | [setNewGuidValue](#setnewguidvalue)           | Sets the `sys_id` to the value specified                                                                                                |
| Write    | [setValue](#setvalue)                         | Sets the value for the specified field.                                                                                                 |
| Write    | [update](#update)                             | Updates the current GlideRecord with any changes that have been made                                                                    |
| Write    | [updateMultiple](#updatemultiple)             | Updates each GlideRecord in the list with any changes that have been made                                                               |
| Write    | [updateLazy](#updatelazy)                     | Places update in a batch, doesn't happen immediately, code continues past it. Undocumented.                                             |
|          | [Operators](#operators)                       | Different Operators for GlideRecord                                                                                                     |


## Operators

| Operator label           | Equivalent query operator | Example query                                                                 |
|--------------------------|---------------------------|-------------------------------------------------------------------------------|
| is not                   | `!=`                      | `short_description!=Network storage unavailable`                              |
| and                      | `^`                       | `active=true^CallerISNOTEMPTY`                                                |
| OR filter (new query)    | `^NQ`                     | `active=true^NQactive=false`                                                  |
| OR condition             | `^OR`                     | `short_descriptionISEMPTY^ORdescriptionISEMPTY`                               |
| before                   | `<`                       | `sla_due<javascript:gs.daysAgoStart(0)`                                       |
| less than                | `<`                       | `reassignment_count<2`                                                        |
| at or before             | `<=`                      | `sla_due<=javascript:gs.daysAgoEnd(0)`                                        |
| less than or is          | `<=`                      | `short_description<=s`                                                        |
| is                       | `=`                       | `short_description=Network storage unavailable`                               |
| after                    | `>`                       | `sla_due>javascript:gs.daysAgoEnd(0)`                                         |
| greater than             | `>`                       | `impact>2`                                                                    |
| at or after              | `>=`                      | `sla_due>=javascript:gs.daysAgoStart(0)`                                      |
| greater than or is       | `>=`                      | `short_description>=s`                                                        |
| is anything              | `ANYTHING`                | `short_descriptionANYTHING`                                                   |
| between                  | `BETWEEN`                 | `short_descriptionBETWEENq@t`                                                 |
| between                  | `BETWEEN`                 | `impactBETWEEN1@2`                                                            |
| between                  | `BETWEEN`                 | `sla_dueBETWEENjavascript:gs.daysAgoStart(1)@javascript:gs.daysAgoEnd(0)`     |
| between                  | `BETWEEN`                 | `reassignment_countBETWEEN1@2`                                                |
| changes from             | `CHANGESFROM`             | `stateCHANGESFROM4^EQ`                                                        |
| changes to               | `CHANGESTO`               | `stateCHANGESTO4^EQ`                                                          |
| trend (after)            | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GT')`     |
| trend (before)           | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LT')`     |
| trend (on or after)      | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','GE')`     |
| trend (on or before)     | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','LE')`     |
| trend (on)               | `DATEPART`                | `sla_dueDATEPARTMonday@javascript:gs.datePart('dayofweek','monday','EE')`     |
| is (dyanmic)             | `DYNAMIC`                 | `caller_idDYNAMIC54635e965f510100a9ad2572f2b4774c`                            |
| is empty string          | `EMPTYSTRING`             | `caller_idEMPTYSTRING`                                                        |
| ends with                | `ENDSWITH`                | `short_descriptionENDSWITHoutage`                                             |
| greater than field       | `GT_FIELD`                | `reassignment_countGT_FIELDreopen_count`                                      |
| greater than or is field | `GT_OR_EQUALS_FIELD`      | `reassignment_countGT_OR_EQUALS_FIELDreopen_count`                            |
| is one of                | `IN`                      | `impactIN1,2`                                                                 |
| is empty                 | `ISEMPTY`                 | `short_descriptionISEMPTY`                                                    |
| is not empty             | `ISNOTEMPTY`              | `activeISNOTEMPTY`                                                            |
| is less than             | `LESSTHAN`                | `sla_dueLESSTHANactivity_due@day@before@3`                                    |
| contains                 | `LIKE`                    | `subcategoryLIKEem`                                                           |
| less than field          | `LT_FIELD`                | `reassignment_countLT_FIELDreopen_count`                                      |
| less than or is field    | `LT_OR_EQUALS_FIELD`      | `reassignment_countLT_OR_EQUALS_FIELDreopen_count`                            |
| is more than             | `MORETHAN`                | `sla_dueMORETHANactivity_due@day@before@1`                                    |
| is not one of            | `NOT IN`                  | `subcategoryNOT INdb2,sql server,oracle`                                      |
| does not contain         | `NOT LIKE`                | `subcategoryNOT LIKEem`                                                       |
| not on                   | `NOTONToday`              | `sla_dueNOTONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)` |
| is different             | `NSAMEAS`                 | `activeNSAMEASmade_sla`                                                       |
| on                       | `ONToday`                 | `sla_dueONToday@javascript:gs.daysAgoStart(0)@javascript:gs.daysAgoEnd(0)`    |
| relative (on)            | `RELATIVEEE`              | `sla_dueRELATIVEEE@hour@ago@1`                                                |
| relative (on or after)   | `RELATIVEGE`              | `sla_dueRELATIVEGE@hour@ago@1`                                                |
| relative (after)         | `RELATIVEGT`              | `sla_dueRELATIVEGT@hour@ago@1`                                                |
| relative (on or before)  | `RELATIVELE`              | `sla_dueRELATIVELE@hour@ago@1`                                                |
| relative (before)        | `RELATIVELT`              | `sla_dueRELATIVELT@hour@ago@1`                                                |
| is same                  | `SAMEAS`                  | `short_descriptionSAMEASdescription`                                          |
| starts with              | `STARTSWITH`              | `subcategorySTARTSWITHem`                                                     |
| changes                  | `VALCHANGES`              | `stateVALCHANGES`                                                             |
