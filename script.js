//  ELEMENTS
const inputEl = document.getElementById("input");
const btnEl = document.querySelector(".btn")
const imgEl = document.querySelector('.dog-img')
const ageEl = document.getElementById('age');
const genderEl = document.getElementById('gender')
const nationality1El = document.getElementById('nationality1')
const nationality2El = document.getElementById('nationality2')
const text = document.querySelector(".none")

// FETCH FOR THE IMAGE
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => imgEl.src = data.message);

// ADD EVENT LISTENER
btnEl.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputEl.value == "") {
        text.classList.remove("none")
    } else {
        text.classList.add("none")
        // FETCH FOR GENDER
        fetch(`https://api.genderize.io/?name=${inputEl.value}`)
            .then(response => response.json())
            .then(data => genderEl.innerHTML = data.gender);

        // FETCH FOR AGE  
        fetch(`https://api.agify.io/?name=${inputEl.value}`)
            .then(response => response.json())
            .then(data => ageEl.innerHTML = data.age);

        // FETCH FOR NATIONALITY
        fetch(`https://api.nationalize.io/?name=${inputEl.value}`)
            .then(response => response.json())
            .then(data => nationality1El.innerHTML = data.country['0'].country_id);

        fetch(`https://api.nationalize.io/?name=${inputEl.value}`)
            .then(response => response.json())
            .then(data => nationality2El.innerHTML = data.country['1'].country_id);
    }
})
