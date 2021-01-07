const btn = document.querySelector(".btn");

const greet = function (message) {
    btn.innerHTML = message;
}

btn.addEventListener("click", e => greet("Hello"));

// Second Way of doing things
// btn.addEventListener("click", function () {
//    alert("hello");
// });


// Third way of doing it
// btn.addEventListener("click", greet);
// function greet() {
//     alert("hello world");
// }