
let myLibrary = [];




class Book{
    constructor(title, author,pages,read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }

    info(){
        
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }

    addBook(){

        const booker = `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
        myLibrary.push(booker);
    }  
    }
   




function addBookToLibrary(){
    let percy = new Book("percy", "jacky", "256", "not read as of yet");
    myLibrary.push(percy);
    let harry = new Book("harry", "jk rolin", "664", "read");
    myLibrary.push(harry)
    
}



function removeBook(){
   

    myLibrary = myLibrary.filter(myLibrary => myLibrary.title !== "percy")
    console.log(myLibrary);
   



}




 function listOfBooks(){
        for(const books of myLibrary) {
            console.log(books);
        }
        
 }
        


 const addBook = document.querySelector("#add-books");
const deleteForm = document.querySelector("#deleteForm")
 const message = document.querySelector(".forming")

 addBook.addEventListener("click", function(){
    message.style.display = "unset";
 })

 deleteForm.addEventListener("click", function(){
    message.style.display = "none";
 })
