---
title: email
---
This is a `EmailOutbound` object.

## email

| Property/Method | Description                         |
|-----------------|-------------------------------------|
| addAddress      | Type can be cc or bcc               |
| setBody         | Override the body of the message    |
| setFrom         | Override the sender address         |
| setReplyTo      | Override the reply to address       |
| setSubject      | Override the subject of the message |

## addAddress

```js
//               type   address           display
email.addAddress('bcc','adam@example.com','Adam Example');
```

## setBody

```js
email.setBody("This is a short message");
```

## setFrom

```js
email.setFrom("brody@exmaple.com");
```

## setReplyTo

```js
email.setReplyTo("brody@exmaple.com");
```

## setSubject

```js
email.setSubject("this is a subject");
```