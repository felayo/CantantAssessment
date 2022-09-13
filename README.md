# Screening Assessment

Build a NodeJs + Express + MongoDB API that can persist, edit, and retrieve user information. Each user's information will be structured like this:

```json
{
 "userId": "a38a8320-b750-41d1-a2d3-117dd286eeb5", //guid
 "firstName": "John", //string
 "lastName": "Doe",//string
 "accountId": "47cabec9-4e05-4744-b1c3-602a51dd86bc"//guid
}
```

## Install the dependencies
- cd to cantant folder
- run `npm install`

### Start the application
`npm run dev`

## API BASE URL
The API base URL is http://localhost:3000
The App is hosted locally on port 3000

## API Endpoints Documentation
`POST '/user'`

- Add a new user
- Returns: An object that contains: `userId`, `firstName`, `lastName` `accountId`
- Example Response
```json
{
    "userId": "51b1200c-7ada-49e9-8360-a2033855927e",
    "firstName": "kemi",
    "lastName": "Ajibaye",
    "accountId": "c16e341c-bf58-480f-ad7e-bacf403a9237"
}
```

`GET '/users'`
- fetches an array of users information
- Returns: An object that contains: `userId`, `firstName`, `lastName` `accountId`
- Example Response
  
```json
[
    {
        "userId": "ba3136dd-94e8-48e6-89aa-1457c8bc540a",
        "firstName": "Segun",
        "lastName": "Ajibaye",
        "accountId": "8f061737-9500-4760-909d-9591c6c6c340"
    },
    {
        "userId": "5e28e5b5-3467-4eb7-a071-fe0ee8741ab5",
        "firstName": "mayowa",
        "lastName": "Ajibaye",
        "accountId": "29e8db02-3769-4428-8499-004725e9778f"
    },
    {
        "userId": "b004ac07-456a-4af4-ba4f-666f8a431cce",
        "firstName": "mary",
        "lastName": "Ajibaye",
        "accountId": "7f8a9900-0b79-419c-8d90-78b7c08db091"
    },
    {
        "userId": "51b1200c-7ada-49e9-8360-a2033855927e",
        "firstName": "kemi",
        "lastName": "Ajibaye",
        "accountId": "c16e341c-bf58-480f-ad7e-bacf403a9237"
    }
]
```

`PATCH '/users/:id'`
  


`GET 'users/:id'`
  