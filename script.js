let Book=[{
    title:"",
    author:"",
    yearPublished:"",
    readStatus:"",
    getSummary:function(){
        return  " Title:"+this.title+"\nAuthor: "+this.author+"\nYear published: "+this.yearPublished+"\nRead status:"+this.readStatus;
    },
    toggleReadStatus:function(){
        this.readStatus=!this.readStatus;
    }
}]
let library=[];
function addBook(title,author,yearPublished,readStatus){
    let book1={
        title:title,
        author:author,
        yearPublished:yearPublished,
        readStatus:readStatus
    };
    library.push(book1);
}
function removeLastBook(){
    library.pop();
}
function addBookToFront(title,author,yearPublished,readStatus){
    let book2={
        title:title,
        author:author,
        yearPublished:yearPublished,
        readStatus:readStatus
    };
    library.unshift(book2);
}
function removeFirstBook(){
    library.shift();
}
function getAllTitles(){
    const title1 = lib => (lib.title);
    const title = library.map(title1);
    return title; 
}
addBook("leo","lokesh",2023,false);
addBookToFront("ms dhoni","nejraj",2016,true);
addBook("managaram","lokesh",2020,true);
addBook("kaithi","lokesh",2025,true);
addBook("leo","lokesh",2023,false);
addBookToFront("ms dhoni","nejraj",2016,true);
addBook("managaram","lokesh",2020,true);
addBook("kaithi","lokesh",2025,true);
console.log(getAllTitles());
// function getBooksByAuthor(author){
//     var auth=library.filter(book=>book.author==author);
//     return auth;
        
// }

function getBooksByAuthor(auth) {
    const filteredBooks = library.filter(
      book => book.author==auth
    );
    return filteredBooks;
 }
let auth=getBooksByAuthor("lokesh");
// for(var i=0;i<auth.length;i++){
//     console.log(auth[i]);
// }
function getTotalBooksPublishedBefore(year){
    const numOfBooks=library.filter(book=>book.yearPublished<year);
    return numOfBooks;
}
let tBooksbyyear=getTotalBooksPublishedBefore(2024);
// for(var i=0;i<tBooksbyyear.length;i++){
//     console.log(tBooksbyyear[i]);
// }
console.log(tBooksbyyear.length);
function removeBookByTitle(title){
    const removeBooks=library.findIndex(book=>book.title==title);
    if(removeBooks!==-1){
        library.splice(removeBooks,1);
    }
}
removeBookByTitle("leo");
console.log(getAllTitles());
function BooksByRaedStatus(status){
    const bookStatus=library.filter(book=>book.readStatus===status);
    return bookStatus;
}
let bookStatus1=BooksByRaedStatus(true);
// for(var i=0;i<bookStatus1.length;i++){
//     console.log(bookStatus1[i]);
// }
function getSubLibrary(start,end){
    let port=library.slice(start,end);
    return port;
}
let portion=getSubLibrary(1,3);
for(var i=0;i<portion.length;i++){
    console.log(portion[i]);
}