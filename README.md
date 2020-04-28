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

### Instructor Endpoints
| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#getTutorialById">POST Users Registration</a>  | /api/tutorials/:id | <b>GET</b> request to retrieve all turoials by instructor_id

### User Endpoints 
| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#getAllTutorials">get All tutorials</a>  | /api/tutorials | <b>GET</b> request to retrieve all turoials


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

## [GET] Get Tutorials by ID

<div id="getTutorialById"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials/id

### Request body should include: 
No request body needed


### What will be returned:

_You will receive an array of tutorials by that instructor's ID

```js
[
  {
    "username": "Jasmine",
    "tutorial_id": 1,
    "title": "How to make a pb&j",
    "summary": "you should be able to make a pb&j after these important steps."
  },
  {
    "username": "Jasmine",
    "tutorial_id": 6,
    "title": "How to make a toast",
    "summary": "toast will be made today."
  }
]
```

<hr />

## [GET] Get All tutorials

<div id="getAllTutorials"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials

### Request body should include: 
No request body needed


### What will be returned:

_You will receive an array of all tutorials

```js
[
  {
    "username": "Jasmine",
    "tutorial_id": 1,
    "title": "How to make a pb&j",
    "summary": "you should be able to make a pb&j after these important steps."
  },
  {
    "username": "Jasmine",
    "tutorial_id": 6,
    "title": "How to make a toast",
    "summary": "toast will be made today."
  },
    {
    "username": "Ashley",
    "tutorial_id": 3,
    "title": "How to count to 3",
    "summary": "to summarize we will end at three see the steps for more info."
  },
  {
    "username": "Ashley",
    "tutorial_id": 8,
    "title": "How to count to 4",
    "summary": "this instructor is like sooo  helpful glad to have you on board Ash."
  }
]
```