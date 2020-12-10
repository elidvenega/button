const btn = document.querySelector("#btn");

function msg(message) {
    btn.innerHTML = message;
}
btn.addEventListener("click", () => msg("hello"));