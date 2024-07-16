# Products App

This is a simple Products App built with Node.js, Express, MongoDB, and a basic HTML/CSS/JS frontend.

## Backend Setup

1. Navigate to the `products-api` directory:
    ```bash
    cd products-api
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following content:
    ```
    MONGO_URI=your_mongodb_connection_string
    SECRET=your_jwt_secret_key
    ```

4. Start the server:
    ```bash
    npx nodemon server.js
    ```

## Frontend Setup

1. Navigate to the `products-frontend` directory:
    ```bash
    cd products-frontend
    ```

2. Open `index.html` in your browser or use a local server like `http-server`:
    ```bash
    npm install -g http-server
    http-server .
    ```

## Deployment

### Frontend

1. Host the frontend on Vercel or Netlify.



## Links

- [Hosted Frontend](http://example-frontend-link)
