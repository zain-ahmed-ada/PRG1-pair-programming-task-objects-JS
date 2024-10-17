// Can you write functions that allow you to:

// Search by book name.
// Display the total number of books onloan/not on loan
// Alter a book’s status (onloan/not on loan)
// Add a new book to the library
// Remove a book from the library 

const library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        isLoaned: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        isLoaned: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        isLoaned: false
    }];

function loanStatus(lib) {
    for (const book of lib) {
        const bookInfo = `${book.title} by ${book.author}`;

        if (book.isLoaned) {
            console.log(`Out on loan: ${bookInfo}`);
        } else {
            console.log(`On the shelf: ${bookInfo}`);
        }
    }
}


function getBooksByAuthor(authorName) {
    const booksByAuthor = [];
  
    for (const book of library) { // Use for...of loop for cleaner iteration
      if (book.author === authorName) {
        const bookStatus = book.isLoaned ? 'Out on loan' : 'On the shelf'; 
        booksByAuthor.push(`${book.title} - ${bookStatus}`);
      }
    }
  
    return booksByAuthor;
}
  

function searchByBookName(searchTerm) {
    const bookByTitle = [];
    for (const book of library) {
        if (book.title === searchTerm) {
            bookByTitle.push({title: book.title, author: book.author});
        }
    }
    return bookByTitle;
}

function displayLoanTotals() {
    let isLoanedCount = 0;
    let notLoanedCount = 0;
    for (const book of library) {
         if (book.isLoaned === true) {
             isLoanedCount++;
        } else {
             notLoanedCount++;
        }
    }
    console.log(`Total books on loan: ${isLoanedCount}`);
    console.log(`Total books not on loan: ${notLoanedCount}`);
}
  
function alterBookStatus(bookTitle, newStatus) {
    
}
  
  
function addNewBook(title, author, isLoaned) {
    
}
  

function removeBook(bookTitle) {
    
}
  
// Personal testing function calls 
  

// Search for book by author 
const authorName = 'Suzanne Collins';
const booksStatus = getBooksByAuthor(authorName);

console.log(`Books by ${authorName}:`);
console.log(booksStatus);


// See loan status of all books    
loanStatus(library);

// Leave this code here for automated testing

module.exports = {
    library,
    loanStatus,
    getBooksByAuthor,
    searchByBookName,
    displayLoanTotals,
    alterBookStatus,
    addNewBook,
    removeBook
  };