# API Documentation
<div id="top"></div>

**BASE URL**  https://how2s.herokuapp.com

- Attach endpoints to the end of the base URL in order to make HTTP Requests.


## Table of Contents

## User and Instructor registration and login
Endpoints that do _**not**_ require authentication (Not Protected):

| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#userRegister">POST Users Registration</a>  | /api/users/register | <b>POST</b> request to register new user
|<a href="#userLogin">POST Users Login</a>            | /api/users/login|  <b>POST</b> request to login new user
|<a href="#instructorRegister">POST Instructors Registration</a>  | /api/instructors/register | <b>POST</b> request to register new instructor
|<a href="#instructorLogin">POST Instructors Login</a>            | /api/instructors/login|  <b>POST</b> request to login new instructor

# Instructor Endpoints
| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#getTutorialById">GET tutorials by instructor_id</a>  | /api/tutorials/:id | <b>GET</b> request to retrieve all turoials by instructor_id
|<a href="#getdirectionsByTId">GET tutorials directions by way of tutorial_id </a>  | /api/tutorials/:id/directions | <b>GET</b> request to retrieve all directions for a tutorial by tutorial_id
|<a href="#postTutorial">POST tutorial </a>  | /api/tutorials| <b>POST</b> post tutorial to db
|<a href="#putTutorial">PUT tutorial </a>  | /api/tutorials/:id| <b>PUT</b> put/ update tutorial to db by tutorial id


# User Endpoints 
| Requests        | Endpoints          | Description
|-----------------|--------------------|--------------------|
|<a href="#getAllTutorials">GET All tutorials</a>  | /api/tutorials | <b>GET</b> request to retrieve all turoials orderd by likes highest to lowest


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
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMCwidXNlcm5hbWUiOiJ0ZXN0aW5nYWdhaW4yIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE1ODgxMDA1MjUsImV4cCI6MTU4ODE4NjkyNX0.eyJ5s4hb8__nG1YSLBEa6cX0tyacbmWv6o9p-ezJmd0"
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

URL: https://how2s.herokuapp.com/api/tutorials/:id

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

## [GET] Get all Tutorials

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
    "id": 7,
    "title": "how to do a specific thing",
    "summary": "sooo spacific it doesnt get a proper summary wait what.",
    "likes": 5,
    "instructor_id": 3
  },
  {
    "id": 1,
    "title": "How to make a pb&j",
    "summary": "you should be able to make a pb&j after these important steps.",
    "likes": 2,
    "instructor_id": 1
  },
  {
    "id": 2,
    "title": "How to make code",
    "summary": "im not acutally gunna teach you that lets just cry instead.",
    "likes": 2,
    "instructor_id": 3
  }
]
```
<hr />

## [GET] Get Directions by Tutorial ID

<div id="getdirectionsByTId"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials/:id/directions

### Request body should include: 
No request body needed


### What will be returned:

_You will receive an array of all directions for that tutorial by tutorial_id this is an example for seeded tutorial with id of 4

```js
[
  {
    "step_number": 1,
    "instructions": "stand near open shoes"
  },
  {
    "step_number": 2,
    "instructions": "jump into shoes"
  }
]
```


<hr />

## [POST] POST tutorial

<div id="postTutorial"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials

### Request body should include: 

```js
  {
    "title": "change tutorial title id 16",
    "summary": "superrrrr speceific sumary.",
	"instructor_id": 5
  }
```


### What will be returned:

_You will receive an array of all directions for that tutorial by tutorial_id this is an example for seeded tutorial with id of 4

```js
{
  "id": 17,
  "title": "title id 16",
  "summary": "superrrrr speceific sumary.",
  "likes": 0
}
```

<hr />

## [PUT] PUT / Update Tutorial

<div id="putTutorial"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials/:id

### Request body should include: 

```js
  {
    "title": "change tutorial title id 16",
    "summary": "superrrrr speceific sumary.",
	"instructor_id": 5
  }
```


### What will be returned:

_You will receive an array of all directions for that tutorial by tutorial_id this is an example for seeded tutorial with id of 4

```js
{
  "id": 17,
  "title": "title id 16",
  "summary": "superrrrr speceific sumary.",
  "likes": 0
}
```