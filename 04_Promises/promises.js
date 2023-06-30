/* 
! Promises
    is an object that may produce a singular avlue in the future.

    3 States
        - Pending
        - Fulfilled
        - Rejected
    
    Takes in two parameters:
        - Resolve
        - Reject

    Always returns an object
*/

// function getData() {
//     setTimeout(() => {
//         console.log('data')
//         return "some data"
//     }, 3000)
// }

//getData(); // the balue comes "late" = 3 seconds

//console.log(data); // We get an undefined because the info is delayed when compiled.

// callback - functions that get executed after the end of a process
function getData(cb) {
    setTimeout(() => {
        cb("some data");
    }, 3000)
}

getData(data => console.log(data));
getData(data => {
    let newString = data + " and more data...";
    console.log(newString);
});

/* 
* A promise is an object that produce a singular value in the future

    - Resolve
    - Rejected
        - These detail what to do depending on the results
*/

function returnData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('some data from Promies');
            } else {
                reject('This is rejected');
            }
        }, 2000);
    })
}

console.log(returnData());
/* 
    - When returned, the returnData() func. will gice us a string isntead of a Promise Object.

    - Chained with a resolver
        - Keyword:
            - .then() - if succesful
                - can be chained together
            - .catch() - if there is an error
            - Take in CB functions
            - note: only put in semicolon (;) after the LAST resolver.
*/

returnData()
    .then(data => console.log("From Response; ", data))
    .then(() => console.log('from second .then'))
    .catch(function(err) {
        console.log(err); // provides our rejection results
    });

/* 
    The Process
        - resolve / reject are parameters of a cb function
        - setTimeout acting as our waiting for a response.
        - resolve() or rejects() said promise
        - when returned, returns a promise - not a string
        - use of resolver (.then() / .catch()) with call back function to help extrapolate the info from that promise
*/