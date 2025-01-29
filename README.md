# File Upload App

This is a simple Node.js app that allows users to upload files (images, PDFs, etc.) to the server.

## Features

- **File Upload**: Users can upload images (PNG, JPG, JPEG) and PDFs.
- **File Validation**: Only valid image and PDF file types are accepted.
- **Rate Limiting**: API is rate-limited to avoid abuse.

## Technologies Used

- **Node.js**
- **Express.js**
- **Multer** (for handling file uploads)
- **Rate Limiter** (to limit the number of requests)

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/file-upload-app.git
```

### 2. Install Dependencies
Navigate to the project folder and run the following command to install the required dependencies:
npm install

### 3. Run the App

To run the application, use the following command (with nodemon for live reloading):
- npm install -g nodemon    ( **If you don't have nodemon installed)*
- nodemon start
This will start the server and make the API available at `` http://localhost:5000.``


### 4. Test the API
You can test the file upload API using Postman or any other API testing tool:

Endpoint: **POST** ``http://localhost:5000/api/upload``
