    // Test Suite for Library Management 
    const { library, loanStatus, getBooksByAuthor, searchByBookName,displayLoanTotals, alterBookStatus, addNewBook, removeBook } = require('./objects.js');
    
    describe('Library Management Functions', () => {
      // 1. Test loanStatus Function
    
      test('loanStatus should correctly identify books as "Out on loan" or "On the shelf"', () => {
        // Arrange: Mock console.log to capture output
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    
        // Act: Call loanStatus with a controlled library state
        const testLibrary = [
          { title: 'Book 1', author: 'Author 1', isLoaned: true },
          { title: 'Book 2', author: 'Author 2', isLoaned: false }
        ];
        loanStatus(testLibrary);
    
        // Assert: Check console output
        expect(consoleLogMock).toHaveBeenCalledWith('Out on loan: Book 1 by Author 1');
        expect(consoleLogMock).toHaveBeenCalledWith('On the shelf: Book 2 by Author 2');
    
        // Cleanup: Restore console.log
        consoleLogMock.mockRestore();
      });
    
      // 2. Test getBooksByAuthor Function
    
      test('getBooksByAuthor should return an array of books by the specified author', () => {
        const authorName = 'Bill Gates';
        const result = getBooksByAuthor(authorName);
    
        expect(Array.isArray(result)).toBe(true);
        expect(result).toContain('The Road Ahead - Out on loan'); 
      });
    
      test('getBooksByAuthor should return an empty array if no books by the author are found', () => {
        const authorName = 'Nonexistent Author';
        const result = getBooksByAuthor(authorName);
    
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(0); 
      });
    
     
    // 3. Tests for Future Functionality (TDD)

    // 3.1 Search by book name
    test('searchByBookName should return an array of books matching the full book name (case-insensitive)', () => {
        // Arrange: We'll assume the searchByBookName function exists and takes a search term
        // Act: Call searchByBookName with different search terms
        const result1 = searchByBookName('The Road Ahead'); 
        const result2 = searchByBookName('Mockingjay: The Final Book of The Hunger Games');
        const result3 = searchByBookName('Nonexistent Book'); 
    
        // Assert: Check the results
        expect(Array.isArray(result1)).toBe(true);
        expect(result1).toHaveLength(1);
        expect(result1[0]).toMatchObject({ title: 'The Road Ahead', author: 'Bill Gates' }); 
    
        expect(Array.isArray(result2)).toBe(true);
        expect(result2).toHaveLength(1);
        // ... similar assertion for 'Mockingjay...'
    
        expect(Array.isArray(result3)).toBe(true);
        expect(result3).toHaveLength(0);
    });
    
    // 3.2 Display total number of books on loan/not on loan
    test('displayLoanTotals should correctly count and log the number of books on loan and not on loan', () => {
        // Arrange: Mock console.log to capture output
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    
        // Act: Call displayLoanTotals (assuming it exists)
        displayLoanTotals(); 
    
        // Assert: Check console output
        expect(consoleLogMock).toHaveBeenCalledWith(expect.stringContaining('Total books on loan: 2'));
        expect(consoleLogMock).toHaveBeenCalledWith(expect.stringContaining('Total books not on loan: 1'));
    
        // Cleanup: Restore console.log
        consoleLogMock.mockRestore();
    });
    
    // 3.3 Alter a book's status
    test('alterBookStatus should change the isLoaned property of a book', () => {
        // Arrange: Find a book in the library and store its original status
        const bookToAlter = library.find(book => book.title === 'The Road Ahead');
        const originalStatus = bookToAlter.isLoaned;
    
        // Act: Call alterBookStatus (assuming it exists)
        alterBookStatus('The Road Ahead', !originalStatus); 
    
        // Assert: Check if the book's status has changed
        expect(bookToAlter.isLoaned).toBe(!originalStatus);
    });
    
    // 3.4 Add a new book
    test('addNewBook should add a new book object to the library', () => {
        // Arrange: Store the original library length
        const originalLength = library.length;
    
        // Act: Call addNewBook (assuming it exists)
        addNewBook('New Book', 'New Author', false);
    
        // Assert
        expect(library).toHaveLength(originalLength + 1);
        expect(library[library.length - 1]).toMatchObject({
        title: 'New Book',
        author: 'New Author',
        isLoaned: false
        });
    });
    
    // 3.5 Remove a book
    test('removeBook should remove a book from the library by its title', () => {
        // Arrange: Store the original library length
        const originalLength = library.length;
    
        // Act: Call removeBook (assuming it exists)
        removeBook('Steve Jobs'); 
    
        // Assert
        expect(library).toHaveLength(originalLength - 1);
        expect(library.find(book => book.title === 'Steve Jobs')).toBeUndefined(); 
    });

});