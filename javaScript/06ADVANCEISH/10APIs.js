// note you won't run json format in node


// var jokes = "https://api.chucknorris.io/jokes/random"
// fetch(jokes)
// .then((response) => {
//     console.log(response.json());
// })
// .catch();


var jokes = "https://api.chucknorris.io/jokes/random"
fetch(jokes)
.then((response) => {
 return response.json();
})
.then( (data) => {
    // console.log("DATA:", data);
    var joke = data.value;
    console.log("JOKE:",joke);

})
.catch();
