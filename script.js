
let myLibrary = [];


const formBtn = document.querySelector("#form-book");
 const containerAddBook = document.querySelector("#card");

formBtn.addEventListener("click", function(){
    
    containerAddBook.style.visibility = "visible";
})






class Book{
    constructor(title, author,pages, read,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }

 
    }
   




function addBookToLibrary(){

      let FormName = document.querySelector("#booktitle").value;
      let formAuthor = document.querySelector("#author").value
      let formPages = document.querySelector("#pages").value
      let formRead = document.querySelector("#read").value

    
        myLibrary.push(new Book(FormName, formAuthor, formPages, formRead))
    
 

}

const sumbitBook = document.querySelector("#btnSubmit") 

sumbitBook.addEventListener("click", function(e){
    e.preventDefault();
    addBookToLibrary()
    renderBooksToPage();
    containerAddBook.style.visibility = "hidden";
    

})


function renderBooksToPage(){
const renderBook = document.querySelector(".render-books")
renderBook.textContent = "";

myLibrary.forEach((myLibrary) => {
    let bookCard = document.createElement("div")
        bookCard.classList.add("book-card")
        bookCard.classList.add(`${myLibrary.id}`)
        renderBook.appendChild(bookCard)


 for (const[key, value] of Object.entries(myLibrary)) {

    if (myLibrary[key] != myLibrary.id) {
      const text = document.createElement('p');
      text.textContent = `${key}: ${myLibrary[key]}`;
      bookCard.appendChild(text);
    }
    
      
     

    }



const removeBtn = document.createElement("button")
bookCard.appendChild(removeBtn)
removeBtn.textContent = "remove"

removeBtn.onclick = removeButton
})
}

function removeButton(){
    const bookId = this.parentElement.classList[1]

    // const findBook = myLibrary.findIndex((element) => element.Id === bookId);
    // const deleteBook = myLibrary.splice(findBook,1)
    // this.parentElement.remove();

    myLibrary.map((book, index) => {
        if (book.id === bookId){
            myLibrary.splice(index,1)
             this.parentElement.remove();
        }
    })

}



