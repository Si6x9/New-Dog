//import fetch from "node-fetch"

console.log("1st");
const dogimg = document.getElementById('container')
const dogbtn = document.getElementById('dogbtn')
// .then -> promises
// JavaScript runs first what it already knows
// asynchronous -> runs when it is ready else it skips this line and come back after it is ready

// fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => console.log("2nd", json))

const img = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
        // console.log(json.message);
        dogimg.innerHTML = `<img src="${json.message}" width="250px" height="250px" />`
    })
}
img()
dogbtn.onclick = () => img()


console.log("4th");
console.log("3rd");