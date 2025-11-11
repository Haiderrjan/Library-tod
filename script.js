
let myLibrary = [];




class Book{
    constructor(title, author,pages, read,id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }

    info(){
        
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
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
    

})


function renderBooksToPage(){
const renderBook = document.querySelector(".render-books")
renderBook.textContent = "";

myLibrary.forEach((myLibrary) => {
    let card = document.createElement("div")
        card.classList.add("card")
        card.classList.add(`${myLibrary.id}`)
        renderBook.appendChild(card)

 for (let key in myLibrary) {
      const text = document.createElement('p');
      text.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(text);
    }

    const removeBtn = document.createElement("button")
card.appendChild(removeBtn)
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


