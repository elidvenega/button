const btn = document.querySelector(".btn");

const greet = function () {
    const message = "Hello It Works"
    btn.innerHTML = message;
}

btn.addEventListener("click", e => greet());

// Second Way of doing things
// btn.addEventListener("click", function () {
//    alert("hello");
// });


// Third way of doing it
// btn.addEventListener("click", greet);
// function greet() {
//     alert("hello world");
// }