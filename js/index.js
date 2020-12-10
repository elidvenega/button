const btn = document.querySelector("#btn");

function msg(message) {
    btn.innerHTML = message;
}

btn.addEventListener("click", () => msg("hello"));

// Second Way of doing things
// btn.addEventListener("click", function () {
//    alert("hello");
// });



// btn.addEventListener("click", greet);

// function greet() {
//     alert("hello world");
// }