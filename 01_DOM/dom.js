/*
!   DOM
    - Document Object Model
    - Only through the browser

    Frame:
        - Document : HTML Page
            - Is a global variable
        - object: elements and comments (nodes)
        - Model: Arrangement

    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure:
        - HTML
            - Head
                - Meta
                -Links
                - Title
            - Body
                - Nav
                - Header
                - Divs, etc.

!   BOM
    - Browser Object Model
    - Window variable that we can access
    - various methods available

*/

function askForStuff() {
    prompt();
}
// askForStuff();

console.log(document);
console.log(document.URL);
console.log(document.title);
console.log(document.location);
document.title = "DOM Lesson Updated"


//* Creating Elements
let h1 = document.createElement('h1');
console.log(h1);

/* 
    Our variable now has access to our various properties (within the H1 element)
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node (element)
        - textContent: returns the full text
            ex:
                <p> Hello <b> World</b></p>
                ~ innerText would return just "Hello"
                ~textContent would return "Hello World"
*/

h1.innerText = "creating my first DOM element"
console.log(h1);

/* 
*    Chain of Events:
    1. Create our element
    2. Apply our value
    3. Place our elements
*/

//* Append Child
// console.log(document.body);
document.body.appendChild(h1);
// console.log(document.body.childre[2]);
h1.style.colo ='blue';
// console.log(document.body.children)
h1.style.textAlign = 'center';
h1.style = `
    color: blue;
    text-align: center;
    text-shadow: 2px 2px 2px yellow;
`;

h1.className = "h1-class-name";
h1.id = "set-id";
console.log(h1);


//* Finding Elements

/* 
! HTMLCollection
    - An array-like object
    - allows access to index, properties, and methods to help navigate and modify.
    - Does NOT allow to modify a group of elements.
    - Can loop through it.
    - Can use .length property to get the size of the list

    How to get an element
    - use array notation

    Access Multiple Element requires these methonds:
    - getElementsByTagName()
    - querySelectorAll()
    - getElementsByClassName()
*/

let li = document.getElementsByTagName('li');
//console.log(li);
let bathroom = li[0];
bathroom.style.color = 'red';

/* 
* .querySelector()
    - grabs first instance of an element or null if nothing is found
    - can target by ID, Class, or Element
*/

let firstLi = document.querySelector('li');
console.log(firstLi);

let toDoList = document.querySelector('#listTitle');
console.log("ID Select :", toDoList);
toDoList.style.textAlign = 'center';

/* 
* .querySelectAll()
    - returns a static nodeList (an array) list of elements
    * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');
console.log(nodeListLi);

//? static example
let newLi = document.createElement('li');
let ul = document.getElementById('ulToDo');
newLi.innerText = 'New Item'
ul.appendChild(newLi);
console.log(li);

/* 
* .getElementsByClassName()
*/
let liClass = document.getElementsByClassName('listItem');
console.log('------------------------');
console.log(liClass);

/* 
! Event Listeners
    .addEventListener()
        - Dom node method
        - requires an event to "listen for" and a callback function (arguments)

    ex:
        node.addEventListener('click', CB)
*/

let btn = document.getElementById('submit');

// btn.addEventListener("click", (event) =>{
//     //console.log(event);
//     console.log('Someone clicked the button');
// })

/* 
* Process of Manipulate our DOM
    - Caputre data
    - access parent element
    -create element
    - assign value to newly created element
    - append out newly created element to parent
*/

let input = document.getElementById('listInput');

btn.addEventListener('click', addItem);

function addItem() {
    let newItem = document.createElement('li');
    newItem.textContent = input.value; // pulled from the value propert of the input field element.
    newItem.style = `
        color: blue;
    `;

    ul.appendChild(newItem);
}

//! ------------------------------------

let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

// mock data
const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
]
// event listener

buildBtn.addEventListener('click', buildTable);

// function to build an display elements
function buildTable(){
    myList.forEach((color, i) => {
        
    })
}