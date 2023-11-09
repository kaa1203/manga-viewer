//Declare navMenu
const navMenu = document.getElementById('navMenu');
const sideNav = document.getElementById('sideNav');
const cont = document.getElementsByClassName("container");

navMenu.onclick = function () {
    if (sideNav.style.width === "0px") {  
        for (let i = 0; i < cont.length; i++) {
            cont[i].classList.remove("centered");
        }
        
        sideNav.style.width = "15%";
        
    }
    else {
        for (let i = 0; i < cont.length; i++) {
        cont[i].classList.add("centered");
        }
        
        sideNav.style.width = 0;
    }
    

    sideNav.style.transition = "all .25s";
}   

