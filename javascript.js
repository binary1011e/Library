const myLibrary = [];
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}  
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.haveRead}`;
}
Book.prototype.toggle = function() {
    if (this.haveRead == "has read") {
        this.haveRead == "has not read";
    } else {
        this.haveRead == "has read";
    }
}
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
close = document.querySelector("#clear");
close.addEventListener("click", () => dialog.close());
form.addEventListener("submit", display);
function displays(book) {
    const library = document.querySelector(".library");
    const card = document.createElement("div");
    card.className = "card";
    function addElement(text) {
        const element = document.createElement("div");
        element.textContent = text;
        card.appendChild(element);
    }
    addElement("title: " + book.title);
    addElement("author: " + book.author);
    addElement("pages: " + book.pages);
    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    if (book.haveRead == "has read") {
        book.toggle();
        toggle.checked = true;
    }
    toggle.addEventListener("click", function() {
        book.toggle();
    });
    const group = document.createElement("div");
    group.textContent = "Read";
    group.appendChild(toggle);
    card.appendChild(group);

    const del = document.createElement("button");
    del.addEventListener("click",function() {
        del.parentElement.remove();
        myLibrary.remove(book);
    });
    del.textContent = "Delete";
    del.className = "delete";
    card.appendChild(del);
    library.appendChild(card);
}

function display(event) {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const readYet = document.querySelector("#haveRead").checked;
    let hasRead = "has not read";
    if (readYet) {
        hasRead = "has read";
    }
    book = new Book(title, author, pages, hasRead);
    myLibrary.push(book);
    displays(book);
    dialog.close();
    event.preventDefault();
}
function addThisBookToLibrary(newBook) {
    myLibrary.push(newBook);
    displays(newBook);
}


theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "has not read")
addThisBookToLibrary(theHobbit);
const add = document.querySelector(".new");
add.addEventListener("click", function() {
    dialog.showModal();
})
