---
# Course title, summary, and position.
linktitle: sn_ws
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1
aliases: [
  '/restapiresponsestream',
  '/restapiresponse',
  '/restapirequestbody',
  '/restmessagev2',
  '/restresponsev2',
]
# Page metadata.
title: sn_ws
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
    name: sn_ws
    weight: 1
---

# RESTAPIRequest
[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

##  headers

All headers from the request

##  pathParams

The variable path parameters passed in the request URI as an object

##  queryParams

The query parameters from the request as an object

##  getRequestedQueryCategory

Get the query category (i.e. read replica category) from query parameter
`sysparm\_query\_category`

##  getSupportedResponseContentTypes

Obtain a set of media types that are common between what the client
request accepts and what this service is able to produce

##  body

The body of the request

##  queryString

The entire query string from the request URI

##  uri

The request URI, excluding domain information

##  url

The entire request URL, including domain

##  getHeader

Get the value of a specific header from the request


# RESTAPIRequestBody

##  nextEntry

Returns the next entry from the request body as an object if request is
array. If not an array then returns entire request body as an object

##  data

The request body de-serialized as an object \|

##  dataString

The request body as a string -- be careful to consider impact to memory
\|

##  dataStream

The body of the request as a stream. Note, this object provides no
functions to manipulate the stream from script. Rather this object can
be passed to another API which takes an InputStream as an input
parameter

##  hasNext

Return true if request has more entries. Use this in conjunction with
nextEntry


# RESTAPIResponse

##  setHeaders

Set response headers from the specified object

##  getStreamWriter

Return stream writer. Caller responsible to set proper content type and
status using setStatus and setHeader methods. Caller responsible to
populate all headers on response before actually writing to stream

##  setLocation

Set the Location header

##  setError

Set Response Error

##  setContentType

Set the Content-Type header \|

##  setBody

Use the specified object as the response body

##  setStatus

Set response HTTP status code

##  setHeader

Set a response header

# RESTAPIResponseStream

## writeStream

Write an InputStream directly to the response stream. Can be called
multiple times. Caller responsible for response format and setting
proper Content-Type and status code prior to calling

## writeString

Write a string directly to the response stream. Can be called multiple
times. Caller responsible for response format and setting proper
Content-Type and status code prior to calling


# RESTMessageV2

[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

## setMIDServer

Configure the REST message to communicate through a MID Server

## getRequestBody

Get the content of the REST message body

## getRequestHeader

Get the value for an HTTP header specified by the REST client

## setHttpMethod

The HTTP method this REST message performs, such as GET or PUT. You must
set an HTTP method when using the RESTMessageV2() constructor with no
parameters

## setBasicAuth

Set basic authentication headers for the REST message

## setRequestHeader

Set an HTTP header to the specified value

## setAuthenticationProfile

Set the credentials for the REST message using an existing basic auth or
OAuth 2.0 profile. Valid types are 'basic' and 'oauth2'. Valid
profileIds are the sys\_id of a Basic Auth Configuration
\[sys\_auth\_profile\_basic\] record or an OAuth Entity Profile
\[oauth\_entity\_profile\] record \|

## setQueryParameter

Append a name-value parameter to the request URL \|

## setRequestBodyFromAttachment

Uses the specified attachment as the request body of this REST Message.
Mutually exclusive with setRequestBody

## getEndpoint

Get the URL of the endpoint for the REST message

## setStringParameterNoEscape

Set a REST message function variable to the specified value without
escaping XML reserved characters

## execute

Send the REST message to the endpoint

## setHttpTimeout

Set the amount of time the REST message waits for a response from the
REST provider

## setEndpoint

Set the endpoint for the REST message

## setRequestBody

Set the body content of a PUT or POST request. Mutually exclusive with
setRequestBodyFromAttachment

## getRequestHeaders

Get name and value for all HTTP headers specified by the REST client

## saveResponseBodyAsAttachment

Setup the response body to be saved into the specified attachment when
the request is sent. encryptCtxSysId is optional

## setStringParameter

Set a REST message function variable to the specified value

## setMutualAuth

Set the mutual authentication protocol profile for the REST message

## setEccTopic

Set the ECC topic for the REST message. The default ECC topic is
RESTProbe if topic is not set. In most cases it is unnecessary to set
ECC topic

## setEccCorrelator

Associate outbound requests and the resulting response record in the ECC
queue

## setEccParameter

Override a value from the database by writing to the REST message
payload

## executeAsync

Send the REST message to the endpoint asynchronously. The instance does
not wait for a response from the web service provider when making
asynchronous calls

## getEccTopic

Get the ECC topic for the REST message

[Working with the response on this page](/restresponsev2)

# RESTResponseV2

[Developer
Documentation](https://developer.servicenow.com/app.do#!/api_doc?v=kingston&id=sn_ws-namespace)

This is generally generated from a [RESTMessageV2](/restmessagev2) call.

## getStatusCode

Get the numeric HTTP status code returned by the REST provider

## getHeaders

Deprecated -- use getAllHeaders instead \|

## waitForResponse

Set the amount of time the instance waits for the response

## getBody

Get the content of the REST response body

## getErrorCode

Get the numeric error code, if there was an error during the REST
transaction

## getQueryString

Get the error message if there was an error during the REST transaction

## getAllHeaders

Get all headers returned in the REST response and the associated values

## haveError

Indicate if there was an error during the REST transaction

## getHeader

Get the value for a specified header

## getErrorMessage

Get the query used for this request