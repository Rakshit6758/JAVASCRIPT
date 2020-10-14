function book(title, author) {
    this.title = title; 
    this.author  = author;
}

var myBook = new book("Perl", "Mohtashim");
document.write("Book title is : " + myBook.title + "<br>");
document.write("Book author is : " + myBook.author + "<br>");