# Matrix Multiplication Calculator

This is a web application for performing matrix multiplication. The frontend is built with React using Vite, and the backend API is developed with Ruby on Rails.

## Features
- Dynamic input for matrix rows and columns
- API for matrix multiplication using Ruby on Rails
- Responsive and user-friendly UI

## Technologies Used
### Frontend:
- React (Vite)
- Tailwind CSS (optional for styling)
- Axios (for API requests)

### Backend:
- Ruby on Rails (API)


## Setup Instructions

### Backend (Ruby on Rails API)
1. Clone the repository:
   ```sh
   https://github.com/Vt221001/ror_assignment.git
   ```
2. Navigate to the matrix-api folder:
   ```sh
   cd matrix-api
   ```
3. Install dependencies:
   ```sh
   bundle install
   ```

4. Start the Rails server:
   ```sh
   rails s
   ```

### Frontend (React with Vite)
1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoint
- `POST /api/multiply`
  - Request Body:
    ```json
    {
      "matrixA": [[1, 2], [3, 4]],
      "matrixB": [[5, 6], [7, 8]]
    }
    ```
  - Response:
    ```json
    {
      "result": [[19, 22], [43, 50]]
    }
    ```

## Usage
1. Open the frontend in a browser.
2. Enter the number of rows and columns for both matrices.
3. Input matrix values dynamically.
4. Click the "Calculate" button to compute the result.
5. The result will be displayed on the screen.


