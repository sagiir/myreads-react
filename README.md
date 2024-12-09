# Book Trek - Book Tracking App
Book Trek is a React application for managing your book library. You can search for any book, add them to shelves (i.e. Want to Read, Currently Reading, Read). 
This proejct was created as part of Udacity's React Fundamentals program. 

## Overview
Book Trek helps users to organize and track their book reading list. 
- Search: find a book using book name, author or ISBN
- Book Shelf: **Currently Reading**, **Want to read**, **Read**
- Move books: Easily move books around from one shelf to another or remove from shelf. 

## Setup and Installation

To set up and run the project on your local machine, follow these steps:

### 1. **Prerequisites** 
- Ensure **Node.js** is installed on your system.
- Install a text editor or IDE like **VS Code**

### 2. **Clone The Repository**
- Open Command Prompt or PowerShell
- Navigate to the folder where you want to download this project
- Run the following command to download:

    `git clone https://github.com/sagiir/myreads-react.git`

### 3. Install Dependencies
- Run the following command to install all necessary packages:

    `npm install`

### 4. Start Development Server
- Start the application by running this command

    `npm start`

- This command will launch dev server, and the application will be available at:

    `http://localhost:3000` 

## Running the Application

### 1. Main Page:
- Displays books organized into shelves: Currently Reading, Want to Read, and Read
- Each book has a dropdown menu that you can use to move it to a different shelf, or remove.

### 2 Search:
- Use the search page to find any book by a certain keyword (e.g., King, Satire, React etc.)
- Add books to any shelf directly from search page.

### 3 Shelf Update
- Books will retain their assigned shelves even after page refresh

## Folder Structure

```
myreads-react
|__ src/
|   |__ components /        # React components
|   |   |___ App.js         # Main app component
|   |   |___ Book.js        # Individual Book component
|   |   |___ BookShelf.js   # Displays books by shelf
|   |   |___ search.js      # Search functionality
|   |__ BookAPI.js          # API for books data
|   |__ App.css             # CSS styles
|   |__ index.js            # App entry point
|__ public/
|   |__ index.html          # HTML template file
|__ package.json            # Dependencies and scripts
|__ README.md               # Project documentation (this file)

```