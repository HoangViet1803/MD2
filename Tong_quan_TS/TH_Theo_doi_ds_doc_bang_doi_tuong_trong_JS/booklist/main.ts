import { Book } from "./Book";
let book1 = new Book("the Design of EveryDay Things","Don Norman", false);
let book2 = new Book('The Most Human Human','Brian Christian', true);
let books: Book[] = [book1, book2];
books.push(book1, book2);
books.forEach(book => {
    let bookInfo = `${book.title} by ${book.author}`
    if(book.alreadyRead){
        console.log(`You already read ${bookInfo}`);
    } else {
        console.log(`You stil need to read ${bookInfo}`);
    }

})
