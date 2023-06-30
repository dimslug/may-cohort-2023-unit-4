//TODO: Glboal Variables
const form = document.getElementsByTagName('form');
const table = document.querySelector('tbody');
//console.log(form);
//console.log(form.name.placeholder);
//console.log(form[0].placeholder);

//TODO: Event Listener
form.addEventListener("submit", e => {
    e.preventDefault(); // stops the default refresh of the form
    //console.log('HIT!');

    const animal = {
        name: form.name.value,
        sex: form.sex.value,
        species: form.species.value,
    }

    console.log(animal);
    animals.push(animal);
    // console.log(animals);
    form.reset() // points to our form and clreas it
    form[0].focus(); // targets the first input within the form when it is "new"
    //* alt: form.species.forcus() 

    displayTable();
});

//TODO: Display to Table (function)
function displayTable() {
    console.log('table: ', animals)

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    animals.forEach((animal, i) => {
        console.log(animal, i);

        //* Create
        let tr = document.createElement('tr'); // parent element
        let id = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //* Assign
        id.textContent = i + 1;
        name.textContent = animal.name;
        sex.textContent = animal.sex;
        species.textContent = animal.species;

         //* Append
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(sex);



    })
}