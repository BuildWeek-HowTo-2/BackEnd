## API Documentation
<div id="top"></div>

**BASE URL**  https://how2s.herokuapp.com

- Attach endpoints to the end of the base URL in order to make HTTP Requests.

### Table of Contents
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#userRegister">POST Users Registration</a>  | /api/users/register | <b>POST</b> request to register new user
|<a href="#userLogin">POST Users Login</a>            | /api/users/login|  <b>POST</b> request to login new user
|<a href="#instructorRegister">POST Instructors Registration</a>  | /api/instructors/register | <b>POST</b> request to register new instructor
|<a href="#instructorLogin">POST Instructors Login</a>            | /api/instructors/login|  <b>POST</b> request to login new instructor

<hr />

<div id="userRegister"></div>

## [POST] Registration For User

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/users/register

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
{
  "username": "carly",
  "password": "$2a$08$/TmNnEfYC6vq.3ysLGM0feEGFBjfQGULxL8B/oIkZW9eTdUrtzKga"
}
}
```

<hr />

<div id="userLogin"></div>

## [POST] Login For User

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/user/login

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Im5ldyBhZ2FpbiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNTg4MDE5NTI0LCJleHAiOjE1ODgxMDU5MjR9.cjMPI4lJMkhWcC3ad2Vue1X_3_J9v-60uA5aVD4XDlw"
}
```

<hr />

<div id="instructorRegister"></div>

## [POST] Registration For Instructor

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/instructor/register

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
{
  "username": "carly",
  "password": "$2a$08$/TmNnEfYC6vq.3ysLGM0feEGFBjfQGULxL8B/oIkZW9eTdUrtzKga"
}
}
```

<hr />

<div id="instrucorLogin"></div>

## [POST] Login For User

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/instructor/login

### Request body should include: 
| Input (Case Sensitive)           | Input Type          |
|-----------------|--------------------|
|username (required)           | string (4+ characters) |
|password (required)       | string (4+ characters)    |


_An example of how the body should appear:_

```js
{
	"username": "carly",
	"password": "carly"
}
```

### What will be returned:

_You will receive the user object an a JWT._

```js
{
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Im5ldyBhZ2FpbiIsInJvbGUiOiJpbnN0cnVjdG9yIiwiaWF0IjoxNTg4MDE5NTI0LCJleHAiOjE1ODgxMDU5MjR9.cjMPI4lJMkhWcC3ad2Vue1X_3_J9v-60uA5aVD4XDlw"
}
```

<hr />