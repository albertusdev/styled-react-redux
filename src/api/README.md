### API

## Styleguides
- All function related to api calls are written here.
- It's a good practice to only call the function through the modules in `redux/modules`
- Function should be written in standard function, not arrow function due to the asynchronous behaviour
- All function parameter should be object, anticipating the growth of number of sent parameters to the api call
  - *It's allowed to use snake_case in the parameter name as long as we don't need to perform any operations with it*
  - This is because most of the time the JSON format to be parsed in the server is in `snake_case` 
  - Example:
    ```
      export async function getUser({ id, name }) {
        return request.post(user()).send({ id, name, last_login });
      }
    ```  
- Function Naming:
  - Function name should be written in camelCase
  - All function name should start with the HTTP method (delete, get, patch, put, post, etc).
  - After the method, follows the detail (noun) of the function 
  - Example: `getUser(), postUser(), patchUser(), deleteUser(), etc.`