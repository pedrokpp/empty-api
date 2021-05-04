# Empty API
Empty's API to handle user authentication

## Usage

#### GET ``$url/users/``
 - Returns all registered users


#### GET ``$url/users/:hwid``
 - Returns user's info if HWID is registered


#### POST ``$url/users/``
 - Register a new user with the following pattern:

```json
Content-Type: application/json

{
    "hwid": "$hwid",
    "winuser": "$name",
    "process": $bool
}
```


#### DELETE ``$url/users/:hwid``
 - Deletes the user that contains the HWID mentioned, if it exists
