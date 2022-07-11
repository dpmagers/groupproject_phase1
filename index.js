
function fetchRequest () {
return fetch('http://api.tvmaze.com/search/shows')
    .then(res => res.json())
    .then(resObj => console.log(resObj)) }


const header = document.querySelector('h1')
header.addEventListener('click', e => {
    fetchRequest()
})







