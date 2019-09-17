---
# Course title, summary, and position.
linktitle: GlideDateTime
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1
aliases: ['/glidedatetime']
# Page metadata.
title: GlideDateTime
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  scripting:
    parent: Scripting
    name: GlideDateTime
    weight: 1
---
What is GlideDateTime




## getDaysInMonthLocalTime

Gets the number of days in the month stored by the GlideDateTime object,
expressed in the current user's time zone.

``` {.js}
var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
gs.info(gdt.getDaysInMonthLocalTime()); // returns 31
```

## getDaysInMonthUTC

Gets the number of days in the month stored by the GlideDateTime object,
expressed in the UTC time zone

``` {.js}
var gdt = new GlideDateTime("2011-12-02 12:00:00"); //December
gs.info(gdt.getDaysInMonthUTC()); // returns 31
```

## getDisplayValue

Gets the datetime in the current user's display format and time zone

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00");
gs.info(gdt.getDisplayValue()); //uses current user session time zone (US/Pacific)
```

## getDisplayValueInternal

Gets the display value in the internal datetime format

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00"); 
gs.info(gdt.getDisplayValueInternal()); //uses current user session time zone (US/Pacific)
```

## getDisplayValueWithoutTZ

This method is **UNDOCUMENTED**. So beware it may change.

``` {.js}
var gdt = new GlideDateTime("2011-08-31 08:00:00"); 
gs.info(gdt.getDisplayValueWithoutTZ());
```

## getDSTOffset

Gets the amount of time that daylight savings time is offset

``` {.js}
```

## getErrorMsg

Gets the current error message

## getInternalFormattedLocalTime

Returns local time with internal time format

## getLocalDate

Gets the date for the user's time zone

## getLocalTime

Returns a GlideTime object that represents the time portion of the
GlideDateTime object in the user's time zone

## getMonthLocalTime

Gets the month stored by the GlideDateTime object, expressed in the
current user's time zone

## getMonthUTC

Gets the month stored by the GlideDateTime object, expressed in the UTC
time zone

## getNumericValue

Gets the number of milliseconds since January 1, 1970, 00:00:00
Greenwich Mean Time (GMT)

## getTime

Returns a GlideTime object that represents the time portion of the
GlideDateTime object

## getTZOffset

Returns the time zone offset in milliseconds.

## getUserFormattedLocalTime

Returns local time with user time format

## getValue

Gets a datetiime value in the same format as it is stored in the
database

## getWeekOfYearLocalTime

Gets the number of the week stored by the GlideDateTime object,
expressed in the user's time zone

## getWeekOfYearUTC

Gets the number of the current week of the current year

## getYearLocalTime

Gets the year stored by the GlideDateTime object, expressed in the
current user's time zone

## getYearUTC

Gets the year stored by the GlideDateTime object, expressed in the UTC
time zone

## setDayOfMonthLocalTime

Sets the day of the month to a specified value in the local time zone

## setDayOfMonthUTC

Sets the day of the month to a specified value in the UTC time zone

## setDisplayValue

Sets a date and time value using the current user's display format and
time zone. Also set an optional parameter format, to set date and time
format

## setDisplayValueInternal

Sets a date and time value using the internal format and the current
user's time zone

## setGlideDateTime

Sets the date and time of the current object using an existing
GlideDateTime object. This method is equivalent to instantiating a new
object with a GlideDateTime parameter

## setMonthLocalTime

Sets the month stored by the GlideDateTime object to a specified value
using the current user's time zone

## setMonthUTC

Sets the month stored by the GlideDateTime object to a specified value
using the UTC time zone

## setValue

Sets the date and time

## setValueUTC

Sets a date and time value using the UTC time zone and the specified
date and time format

## setYearLocalTime

Sets the year stored by the GlideDateTime object to a specified value
using the current user's time zone

## setYearUTC

Sets the year stored by the GlideDateTime object to a specified value
using the UTC time zone


## isDST

Determines if an object's time uses a daylight savings offset

## isValid

Determines if a value is a valid datetime

## onOrAfter

Returns true if the object's data time is on or after the input argument

## onOrBefore

Returns true if the object's data time is on or before the input
argument