window.onload = function () {
    let toggle = document.querySelector(".menu-toggle");
    let nav = document.querySelector(".menu")
    let close = document.querySelector('.close-menu')


    toggle.addEventListener("click", () => {
        nav.classList.add("active")
    })

    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}