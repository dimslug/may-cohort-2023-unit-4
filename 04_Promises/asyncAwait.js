/* 
! Async / Await
    - Introduced in ES8 in 2017
    -can make any function an async function simply by denoting as such
    - KEYWORDS:
        - async
            - denotes a function
        - await:
            - calls a process to "wait" for a result.
        - can help reduce the need for call back functions
        - cannot be used in loops
        - ALWAYS returns a promies
*/

//* syntax

async function asyncFuncDeclaration(){
    // code block
}

let funcExpression = async function() {
    // code block
}

let arrowFunc = async() => {
    // code block
}

async function getName() {
    return "Gandalf":
}

caonsole.log(getName());
getName().then(data => console.log(data));

/* 
! Await
    - Tells JS that a promise is being returned and to wait on that result
*/

async function extraData() {
    let info = returnData();
    return(`${info} in some cloud`);
}

extraData().then(data => console.log(data));