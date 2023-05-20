# API Contract
### Get One Problem Log
```
Request
    URI: /problemlog/{id}
    HTTP Verb: GET
    Body: None

Response:
    HTTP Status:
        200 OK if the Problem Log was successfully retrieved
        404 NOT FOUND if the Problem Log cannot be found
    Response Body Type: JSON
    Example Response Body:
    {
        "id":10,
        "name":"3 sum",
        "difficulty":3.7,
        "url":"https://leetcode.com/problems/3sum/",
        "timestamp":"2022-12-03T10:15:30+01:00"
    }
```
### Get Problem Logs
```
Request
    URI: /problemlog?page=0&size=3
    HTTP Verb: GET
    Body: None

Response:
    HTTP Status:
        200 OK if the Problem Logs were successfully retrieved
    Response Body Type: JSON
    Example Response Body:
    [
        {
            "id":13,
            "name":"3 sum",
            "difficulty":3.7,
            "url":"https://leetcode.com/problems/3sum/",
            "timestamp":"2022-12-03T10:15:30+01:00"
        },
        {
            "id":12,
            "name":"Reverse Integer",
            "difficulty":3.4,
            "url":"https://leetcode.com/problems/reverse-integer/",
            "timestamp":"2022-11-03T10:15:30+01:00"
        },
        {
            "id":11,
            "name":"String to Integer (atoi)",
            "difficulty":2.2,
            "url":"https://leetcode.com/problems/string-to-integer-atoi/",
            "timestamp":"2022-10-03T10:15:30+01:00"
        }
    ]
    
```
### Create Problem Logs
```
Request
    URI: /problemlog
    HTTP Verb: POST
    Body:
    {
        "name":"3 sum",
        "difficulty":3.7,
        "url":"https://leetcode.com/problems/3sum/",
        "timestamp":"2022-12-03T10:15:30+01:00"
    }

Response:
    HTTP Status:
        201 CREATED if the Problem Log was successfully created
    Response Body Type: JSON
    Example Response Body:
    {
        "id":10,
        "name":"3 sum",
        "difficulty":3.7,
        "url":"https://leetcode.com/problems/3sum/",
        "timestamp":"2022-12-03T10:15:30+01:00"
    }
```
### Update Problem Log
```
Request
    URI: /problemlog/{id}
    HTTP Verb: PUT
    Body:
    {
        "name":"Valid Parentheses",
        "difficulty":2.0,
        "url":"https://leetcode.com/problems/valid-parentheses/",
        "timestamp":"2022-02-03T10:15:30+01:00"
    }

Response:
    HTTP Status:
        204 NO_CONTENT if the Problem Log was successfully updated
        201 CREATED if the Problem Log was successfully created
    Response Body Type: JSON
    Example Response Body:
    {
        "id":10,
        "name":"Valid Parentheses",
        "difficulty":2.0,
        "url":"https://leetcode.com/problems/valid-parentheses/",
        "timestamp":"2022-02-03T10:15:30+01:00"
    }
```
### Delete Problem Log
```
Request
    URI: /problemlog/{id}
    HTTP Verb: DELETE
    Body: None

Response:
    HTTP Status:
        204 NO_CONTENT if the Problem Log was successfully deleted
        404 NOT FOUND if the Problem Log cannot be found
    Response Body Type: JSON
    Example Response Body: None
```