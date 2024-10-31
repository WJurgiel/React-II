import {Book} from "./library_types";
import {Reader} from "./library_types"

const catalog: Book[] = [
    {
        author: "J.K Rowling",
        title: "Harry Potter 3",
        year: 1985,
        borrower: null,
        isBorrowed: false
    },
    {
        author: "Adam Mickiewicz",
        title: "Pan Tadeusz",
        year: 1835,
        borrower: null,
        isBorrowed: false
    },
    {
        author: "Andrzej Sapkowski",
        title: "Miecz przeznaczenia",
        year: 1989,
        borrower: null,
        isBorrowed: false
    },
    {
        author: "Aleksander Fredro",
        title: "Zemsta",
        year: 1858,
        borrower: null,
        isBorrowed: false
    }
]
const readers: Reader[] = [
    {
        firstName: "Dariusz",
        lastName: "Homa",
        libraryCardNumber: 142
    },
    {
        firstName: "Wojciech",
        lastName: "Jurgielewicz",
        libraryCardNumber: 153
    },
    {
        firstName: "Jakub",
        lastName: "Latawiec",
        libraryCardNumber: 122
    },
]

const findBook = (books: Book[], title: string) => {
    return books.find(b => b.title.includes(title));
}
const getAvailable = (books: Book[]) => {
    return books.filter(b => !b.isBorrowed
    );
}
const borrowBook = (books: Book[], title: string, borrower: Reader) => {
    return books.map(book => {
        if (book.title.includes(title) && !book.isBorrowed) {
            book.borrower = borrower;
            book.isBorrowed = true;
        }
        return book;
    });
}
console.log("find book", findBook(catalog, "Pan Tadeusz"));

borrowBook(catalog, "Miecz przeznaczenia", readers[0]);
borrowBook(catalog, "Zemsta", readers[1]);

const available = getAvailable(catalog);
console.log("Available books", available);

