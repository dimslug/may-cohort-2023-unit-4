/* 
!   API
    - Application Programming Interface
    - Client (front end) to communicate with the server (database)
    - allows for HTTP requests and response lifecycle

*   AJAX
    - Asyncronous JavaScript and XML
    - Wraps XML with XMLHttpRequest -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic sections of the page.

*   jQuery
    - A library that helps us handle the front end, prior to DOM and fetch
    - still uses but dated

    AJAX examples:
        - Times updates like comments (think of replies to posts or messages)
        - Infinite Scrolling
        PROs:
            - Page components load individually
            - New data updates regularly
        CONs:
            - JS must be enabled
            - Add more complexity
            - refreshes the page state and stores info can bloat
            - difficult for screan readers
    - Not Promised based
*/
/* 
!   Fetch
    - Before fetch(), we would have to use an httpReqiest through the above process

    - Is an API
    - Its a method that requires 1 argument
        - The location we are trying to obtain data from
    - Handles the request and response
    - Returns a promise
        - Allows us access to resolvers (.then(), .catch())

*/

const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
//console.log(fetch(testEndpoint));

fetch(testEndpoint)
    //.then(response => console.log(response)); // object is returnd
    //.then(response => console.log(response.url)); // url is returned
    //.then(response => console.log(response.body)); // body is returned
    //.then(response => console.log(response.json()));

    /* 
    *   JSON
            - JavaScript Object Notation
                - Very lightweight for storing and transgerring data
                - "easy to understand"

        Syntax:
        {
            "key":"value",
            "key":"true",
            "key": 0,
        }

        - Everything is wrapped in quotes with some minor exceptions: integers & booleans
        - data is all separated by a comma
        -cannot hold comments or functions
    */
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.body)
    
    });

    // JASON.parse(string)
    let myText = '{ "name": "Gollum", "lost_ring": true}';
    console.log(myText);
    // console.log(myText.name) // is a string
    let newJSON = JSON.parse(myText);
    console.log(newJSON.name); // is a JSON

    //* Fetching with Functions

const url = 'https://meowfacts.herokuapp.com/';

//btn.addEventListener('click', getCatFact);

// function getCatFact() {
//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }

const getCatFact = async () => {
    let res = await fetch(url);
    let results = await res.json();
    let data = results.data[0];
    console.log(data)
}

btn.addEventListener('click', getCatFact);

//* Local Fetch
let lotr = document.getElementById('lotr');

fetch('./local.json')
    .then(res => res.json())
    .then(data => {
        let members = data.fellowship;

        for(member of members) {


            const div = document.createElement('div');
            const h1 = document.createElement('h1');
            const h3 = document.createElement('h3');

            h1.textContent = member.name;
            h3.textContent = member.race;

            div.appendChild(h1);
            div.appendChild(h3);
            div.appendChild(div);
        }
    })


    //* Error Handling

    const cats2 = document.getElementById('cats2');

    async function getCatFactsAgain () {
        
        try {
            let res = await fetch(url);
            let results = await res.json();
            let data = results.data[0];

            console.log(`Cat Facts: ${data}`)
        } catch (error) {
            console.log(error);
        }
    }

    cats2.addEventListener('click', getCatFactsAgain);

//? Using resolvers
fetch(url)
    .then(res => ress.json())
    .then(info => console.log('Resolver: ', info.data[0]))
    .catch(err => console.error(err));
