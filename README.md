# task-api

Ini merupakan sebuah API yang menyediakan fungsi task dalam aplikasi AIANG

## Create Task
- **Metode** : POST
- **Headers** : Authorization Bearer Token
- **URL** : **/tasks/**
- **Request Body** :
```json
{
    "name" : "STRING",
    "desc" : "STRING",
    "category" : "STRING",
    "priority": "STRING",
    "date": "DATE"
}
```
- Jika activity berhasil ditambahkan, server akan mengembalikan respons :
  - **Status Code** : 201
  - **Response Body** :
    ```json
    {
    "error": false,
    "message": "task has been created",
    "data": {
        "id": "STRING",
        "user_id": "STRING",
        "name": "STRING"
      }
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
## Get Tasks 
- **Metode** : GET
- **Headers** : Authorization Bearer Token
- **URL** : **/tasks**
- **Response Body** :
  ```json
  {
    {
        "id": "STRING",
        "name": "STRING",
        "desc": "STRING",
        "category": "STRING",
        "priority": "STRING",
        "date": "DATE",
        "user_id": "STRING",
        "createdAt": "DATETIME",
        "updatedAt": "DATETIME"
    }
  }
  ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```

- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Update Task By ID
- **Metode** : PUT
- **Headers** : Authentication Bearer Token
- **URL** : **/tasks/{id}
- **Request Body** :
```json
{
  {
    "name" : "STRING",
    "desc" : "STRING",
    "category" : "STRING",
    "priority": "STRING",
    "date": "DATE"
  }
}
```
- Jika task berhasil di update, server akan mengembalikan respons :
  - **Status Code** : 200
  - **Response Body** :
    ```json
    {
      "error": false,
      "message": "success"
    }
    ```
- Jika id dari task salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Task not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Get Task Per ID
- **Metode** : GET
- **Headers** : Authentication Bearer Token
- **URL** : **/tasks/{id}**
- **Response Body** :
  ```json
  {
    "id": "STRING",
    "name": "STRING",
    "desc": "STRING",
    "category": "STRING",
    "priority": "STRING",
    "date": "DATE",
    "user_id": "STRING",
    "createdAt": "DATETIME",
    "updatedAt": "DATETIME"
  }
  ```
- Jika id dari task salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Task not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```

## Delete Task Per ID
- **Metode** : DELETE
- **Headers** : Authorization Bearer Token
- **URL** : **/tasks/{id}**
- **Response Body** :
  ```json
  {
    "error": false,
    "message": "success"
  }
  ```
- Jika id dari task salah / tidak ditemukan, server akan emngembalikan respons :
  - **Status Code** : 404
  - **Response Body** :
    ```json
    {
      "error": true,
      "message": "Task not found"
    }
    ```
- Jika token salah atau tidak sesuai, server akan mengembalikan respons :
  - **Status Code** : 403
  - **Response Body** :
    ```json
    {
      Forbidden
    }
    ```
- Jika token kosong, server akan mengembalikan respons :
  - **Status Code** : 401
  - **Response Body** :
    ```json
    {
      Unauthorized
    }
    ```
