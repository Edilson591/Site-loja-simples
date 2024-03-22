const menu = document.querySelector("#btn-nav")
        
        
function toggleMenu (e) {
    if(e.type === "touchstart") e.preventDefault()
    const selectUl = document.querySelector(".menu")
    selectUl.classList.toggle("active")
}

menu.addEventListener("click", toggleMenu)  
menu.addEventListener("touchstart", toggleMenu) 