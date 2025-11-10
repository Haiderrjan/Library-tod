
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
   




function addBookToLibrary(name,author,page,read){
    // let percy = new Book("percy", "jacky", "256", "not read as of yet");
    // myLibrary.push(percy);
    // let harry = new Book("harry", "jk rolin", "664", "read");
    // myLibrary.push(harry)

    let book = new Book(name, author,page,read);
    myLibrary.push(book);


    
}



function removeBook(){
   

    myLibrary = myLibrary.filter(myLibrary => myLibrary.title !== "percy")
    console.log(myLibrary);
   



}




//  function listOfBooks(title){
//         for(const books of myLibrary) {
//             console.log(books);


//         }
        
//  }
        


 const bookForm = document.querySelector("#form-book");
const deleteForm = document.querySelector("#deleteForm")
 const message = document.querySelector(".forming")
 const grid = document.querySelector("#grid")

 bookForm.addEventListener("click", function(){
    message.style.display = "unset";
 })

 deleteForm.addEventListener("click", function(e){
    e.preventDefault();
    message.style.display = "none";

 })


 const btnBook = document.querySelector("#btn-book");
//  const bookName = document.querySelector("#book-title")
    const content = document.querySelector(".content");
    const form = document.querySelector("#form")
    

 btnBook.addEventListener("click", function(e){
    e.preventDefault();
    const name = form.elements.bookTitle.value;
    const author = form.elements.authorName.value;
    const page = form.elements.page.value;
    const read = form.elements.read.value;

        addBookToLibrary(name,author,page,read);
    


        listOfBooks()
    // makeCard(name)
    // const author = form.elements.author.value;
    // const read = form.elements.read.value;
    

    


 })


 function makeCard(name){
//     const cell = document.createElement("div")
//     cell.classList.add("cell")

//     const card = document.createElement("div")
//     cell.classList.add("card")

//     const cardContent = document.createElement("div")
//     cell.classList.add("cardContent")

//     const content = document.createElement("div")
//     cell.classList.add("content")


//     const titles = document.createElement("h4")
//     titles.textContent = title;
//     // const pages = document.createElement("p")
//     // pages.textContent = title;

//     // const reads = document.createElement("p")
//     // reads.textContent = title;

    

//     grid.append(cell);
//     cell.append(card)
//     card.append(cardContent)
//     cardContent.append(content)
//     content.append(titles)
//     // content.append(pages)
//     // content.append(reads)
// console.log("workes")
   




 }


 


 function listOfBooks(){

   grid.innerHTML = ""
    
        for(const books of myLibrary) {
            console.log(books);
            

 const cell = document.createElement("div")
    cell.classList.add("cell")

    const card = document.createElement("div")
    cell.classList.add("card")

    const cardContent = document.createElement("div")
    cell.classList.add("cardContent")

    const content = document.createElement("div")
    cell.classList.add("content")


    const titles = document.createElement("h4")
    titles.textContent = books.title;
    // const pages = document.createElement("p")
    // pages.textContent = title;

    // const reads = document.createElement("p")
    // reads.textContent = title;

    

    grid.append(cell);
    cell.append(card)
    card.append(cardContent)
    cardContent.append(content)
    content.append(books.title)
    // content.append(pages)
    // content.append(reads)





        }
        
 }