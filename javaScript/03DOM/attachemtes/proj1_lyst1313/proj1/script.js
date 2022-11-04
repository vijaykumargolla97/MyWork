var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;
setInterval( () => {
if (count < 1000)
count++;
counter.innerText = count;
}, 10);

// in the above code 10 reffers to speed of the count
// less number more speed

setTimeout(() => {
    followers.innerText = "insta followers";
}, 3000);
