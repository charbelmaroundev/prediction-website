const inputEl = document.getElementById("input");
const btnEl = document.querySelector(".btn")
const imgEl = document.querySelector('.dog-img')
const ageEl = document.getElementById('age');
const genderEl = document.getElementById('gender')
const nationality1El = document.getElementById('nationality1')
const nationality2El = document.getElementById('nationality2')

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => imgEl.src = data.message);


btnEl.addEventListener('click', (e) => {
    e.preventDefault()

    fetch(`https://api.genderize.io/?name=${inputEl.value}`)
        .then(response => response.json())
        .then(data => genderEl.innerHTML = data.gender);

    fetch(`https://api.agify.io/?name=${inputEl.value}`)
        .then(response => response.json())
        .then(data => ageEl.innerHTML = data.age);

})
