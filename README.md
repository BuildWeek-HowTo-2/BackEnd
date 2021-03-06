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
|<a href="#getTutorials">GET tutorials</a>  | /api/tutorials/| <b>GET</b> request to retrieve all turoials
|<a href="#getTutorialById">GET tutorials by instructor_id</a>  | /api/tutorials/:id | <b>GET</b> request to retrieve all turoials by instructor_id
|<a href="#getdirectionsByTId">GET tutorials directions by way of tutorial_id </a>  | /api/tutorials/:id/directions | <b>GET</b> request to retrieve all directions for a tutorial by tutorial_id
|<a href="#postTutorial">POST tutorial </a>  | /api/tutorials| <b>POST</b> post tutorial to db
|<a href="#postTutorialDirections">POST tutorial directions </a>  | /api/tutorials/:id/directions| <b>POST</b> post tutorial directions by tutorial id
|<a href="#putTutorial">PUT tutorial </a>  | /api/tutorials/:id| <b>PUT</b> put/ update tutorial to db by tutorial_id
|<a href="#delTutorial">DEL tutorial </a> | /api/tutorials/:id| <b>DEL</b> delete tutorial by tutorial_id


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
  "id": 11,
  "username": "carly",
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJ0ZXN0aW5nNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg4MjY3MTQ2LCJleHAiOjE1ODgzNTM1NDZ9.7dTNk8VH5oPrCRaIUhGcfmRc-6iVWaw3CA4qlH0r0cM"
}
```

<hr />

<div id="userLogin"></div>

## [POST] Login For User

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/users/login

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
  "id": 11,
  "username": "carly",
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJ0ZXN0aW5nNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg4MjY3MTQ2LCJleHAiOjE1ODgzNTM1NDZ9.7dTNk8VH5oPrCRaIUhGcfmRc-6iVWaw3CA4qlH0r0cM"
}
```

<hr />

<div id="instructorRegister"></div>

## [POST] Registration For Instructor

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/instructors/register

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
  "id": 11,
  "username": "carly",
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJ0ZXN0aW5nNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg4MjY3MTQ2LCJleHAiOjE1ODgzNTM1NDZ9.7dTNk8VH5oPrCRaIUhGcfmRc-6iVWaw3CA4qlH0r0cM"
}

```

<hr />

<div id="instructorLogin"></div>

## [POST] Login For User

<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/instructors/login

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
  "id": 11,
  "username": "carly",
  "message": "Welcome carly! Here is a token...",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJ0ZXN0aW5nNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg4MjY3MTQ2LCJleHAiOjE1ODgzNTM1NDZ9.7dTNk8VH5oPrCRaIUhGcfmRc-6iVWaw3CA4qlH0r0cM"
}
```

<hr />

## [GET] Get Tutorials 

<div id="getTutorials"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials

### Request body should include: 
No request body needed


### What will be returned:

_You will receive an array of tutorials by that instructor's ID

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
    "username": "Ashley",
    "id": 3,
    "title": "How to count to 3",
    "summary": "to summarize we will end at three see the steps for more info.",
    "likes": 2
  },
  {
    "username": "Ashley",
    "id": 8,
    "title": "How to count to 4",
    "summary": "this instructor is like sooo  helpful glad to have you on board Ash.",
    "likes": 2
  },
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


## [POST] POST tutorial directions

<div id="postTutorialDirections"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials/:id/directions

### Request body should include: 

```js

  {
    "step_number": 3,
    "instructions": "google stufff then cry a little"
  }

```


### What will be returned:

_You will receive an object with the directions you just posted

```js
{
  "id": 21,
  "step_number": 3,
  "instructions": "google stufff then cry a little",
  "tutorial_id": 1
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

<hr />

## [DELETE] Remove Tutorial

<div id="delTutorial"></div>
<a href="#top">Return to the top</a>

URL: https://how2s.herokuapp.com/api/tutorials/:id

### Request body should include: 

No request body neccessary

### What will be returned:

_You will receive an array of all directions for that tutorial by tutorial_id this is an example for seeded tutorial with id of 4

```js
"message: you just killed 1 tutorial mourn them you animal"
```