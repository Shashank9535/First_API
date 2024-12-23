README: Testing API with Thunder Client

This guide will walk you through testing your API using Thunder Client, a lightweight HTTP client integrated into Visual Studio Code.


---

Prerequisites

1. Node.js and NPM installed: Ensure you have Node.js installed on your system.


2. Your API is set up: Make sure your server (e.g., app.js) is ready to run.


3. Thunder Client installed: If not, follow the instructions below.




---

Setting Up the Environment

Step 1: Start Your Server

1. Open the terminal in VS Code (Ctrl + `` ).


2. Run the following command:

node app.js


3. You should see a message like:

Server is running on http://localhost:3000



Step 2: Install Thunder Client (if not already installed)

1. Click the Extensions icon (Ctrl+Shift+X) in the VS Code sidebar.


2. Search for "Thunder Client".


3. Click Install.



Step 3: Open Thunder Client

1. Click the Thunder Client icon in the sidebar (lightning bolt symbol).




---

Testing API Endpoints

1. GET: Fetch All Books

1. Click New Request in Thunder Client.


2. Configure the request:

Method: GET

URL: http://localhost:3000/books



3. Click Send.


4. The response should display a list of all books.




---

2. GET: Fetch a Single Book

1. Click New Request.


2. Configure the request:

Method: GET

URL: http://localhost:3000/books/1



3. Click Send.


4. The response should display details of the book with ID 1.




---

3. POST: Add a New Book

1. Click New Request.


2. Configure the request:

Method: POST

URL: http://localhost:3000/books



3. Add Headers:

Click the Headers tab.

Add the following header:

Key: Content-Type

Value: application/json




4. Add Body:

Click the Body tab.

Select JSON and enter the following:

{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
}



5. Click Send.


6. The response should confirm the new book was added.



Verify the Addition:
Perform a GET request to /books and confirm the new book is in the list.


---

Common Issues and Fixes

1. Connection Refused:

Ensure the server is running.

Check if the port matches (default: 3000).



2. Empty Response:

Verify the URL for typos.



3. POST Request Fails:

Ensure Content-Type: application/json is added in headers.



4. Server Not Restarting:

Stop the server (Ctrl+C) and restart it:

node app.js





---

Visual Reference for POST Request

┌─────────────────────────────────┐
│ Method: POST                    │
│ URL: http://localhost:3000/books│
├─────────────────────────────────┤
│ Headers                         │
│ Content-Type: application/json  │
├─────────────────────────────────┤
│ Body (JSON)                     │
│ {                              │
│   "title": "The Hobbit",       │
│   "author": "J.R.R. Tolkien"   │
│ }                              │
└─────────────────────────────────┘


---

Optional: Advanced Features

1. Test Other Methods: Learn how to use PUT or DELETE.


2. Save Requests: Store reusable API requests in Thunder Client.


3. Environment Variables: Use variables for dynamic values like URLs or tokens.



Feel free to extend this guide with additional endpoints and use cases!
