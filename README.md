# Secret Santa Assignment Generator

## Overview
This is a React-based web application that facilitates Secret Santa assignments by allowing users to upload employee lists from the current and previous years in CSV format. The system processes the files and generates a new CSV file with Secret Santa pairings.

## Features
- Upload CSV files for current year employees and previous year assignments.
- Process the uploaded files and generate new Secret Santa assignments.
- Download the generated assignments as a CSV file.
- Error handling and loading indicators for a better user experience.

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Bootstrap
- **Backend:** The application interacts with a server hosted at `https://secret-santa-server-8igm.onrender.com`
- **File Upload & Processing:** Uses FormData API and Fetch API to handle file submissions.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Mariappan5355/secret-santa-client.git
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Project Structure
```
client/
│── src/
│   ├── components/
│   │   ├── FileUpload.tsx   # File upload component
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Entry point
│── public/
│── package.json
│── README.md
```

## Usage
1. Upload a CSV file containing the current year employees.
2. (Optional) Upload a CSV file containing last year's Secret Santa assignments.
3. Click the **Generate & Download CSV** button.
4. The system will process the files and provide a downloadable CSV file with new Secret Santa assignments.

## Dependencies
- React 18
- Bootstrap 5
- Axios
- React Router DOM
- TypeScript

## Scripts
- `npm start` - Runs the development server.
- `npm build` - Builds the app for production.
- `npm test` - Runs tests.

## Contributing
Feel free to fork this repository and submit pull requests with improvements.

## License
This project is open-source under the MIT License.

