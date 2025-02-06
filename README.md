# Book Finder App Js

## Introduction

Welcome to the Book Finder App! This project allows users to search for books based on multiple criteria such as title, author, genre, and more. The goal of this app is to provide a user-friendly interface for finding books quickly and efficiently.

### Developer Introduction

Hello! My name is Gabriela, and I am the developer behind the Book Finder App. I have a passion for creating intuitive and functional applications that enhance user experiences. This project is an intermediate-level application aimed at demonstrating my skills in web development, JavaScript, and backend integration.

### Features

- **Search by Multiple Criteria**: Users can search for books using various filters such as title, author, genre, etc.
- **Responsive Design**: The app is designed to be responsive, ensuring a seamless experience across different devices.
- **Backend Integration**: The app connects to a SQL Server database to store and retrieve book information.

### Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: SQL Server

### Prerequisites

- Node.js and npm installed
- SQL Server installed and configured
- Git installed

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/book-finder-app.git
    cd book-finder-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure SQL Server**:
    - Create a SQL Server database named `BookFinderDB`.
    - Create a `Books` table using the following SQL command:
    ```sql
    CREATE TABLE Books (
        id INT PRIMARY KEY IDENTITY(1,1),
        title NVARCHAR(255) NOT NULL,
        author NVARCHAR(255) NOT NULL,
        genre NVARCHAR(100),
        published_year INT,
        description TEXT
    );
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the root directory and add your SQL Server connection details:
    ```env
    DB_SERVER=your_server_name
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=BookFinderDB
    ```

5. **Start the server**:
    ```bash
    node server.js
    ```

6. **Open the app**:
    - Open your browser and navigate to `http://localhost:3000`.

### Search for Books

1. Enter your search criteria in the search bar.
2. Click the "Search" button.
3. Browse through the search results displayed on the page.

### Add a Book

1. Click on the "Add Book" button.
2. Fill in the details of the book in the form.
3. Click the "Submit" button to add the book to the database.

## Contributing

If you would like to contribute to the project, please fork the repository and create a pull request. Contributions, whether they be bug fixes, feature additions, or improvements to documentation, are always welcome.

## Author
@shturno

## Contact

If you have any questions or feedback, feel free to reach out to me at [email](mailto:gabriel.dsalvarenga@gmail.com)

Thank you for using the Book Finder App!

---
