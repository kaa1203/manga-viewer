const navMenu = document.getElementById('navMenu');
const sideNav = document.getElementById('sideNav');
const cont = document.getElementsByClassName('container');
const toTop = document.getElementById('toTop');
const theme = document.getElementById('profileCB');
const toggle = document.getElementById('toggleTheme');
const profilePic = document.getElementById('profilePicture');
const profileCont = document.getElementById('profileContainer');
navMenu.addEventListener('click', function () {
    if (sideNav.style.width === "0px") {  
        for (let i = 0; i < cont.length; i++) {
            cont[i].style.width = "80%";
            cont[i].style.transition = "linear width .10s";
            cont[i].style.transform = "translateX(0%)";
            
        }
        sideNav.style.width = "15%";  
    }
    else {
        for (let i = 0; i < cont.length; i++) {
            cont[i].style.width = "97%";
            cont[i].style.transition = "linear width .10s";
            cont[i].style.transform = "translateX(-16.3%)";
        }
        sideNav.style.width = 0;
    }
    sideNav.style.transition = "ease-in-out .1s";
});

toggle.addEventListener('click', function () {
    let icon = theme.nextElementSibling.childNodes[1].childNodes[1];
    if (theme.checked == false) {
        theme.checked = true; 
        icon.setAttribute('href', 'images/icon.svg#light');
    } else {
        theme.checked = false;
        icon.setAttribute('href', 'images/icon.svg#dark');
    }
});

profilePic.addEventListener('click', function () {
    if (profileCont.style.visibility !== "visible") {
        profileCont.style.visibility = "visible";
    } else {
        profileCont.style.visibility = "hidden";
    }
});

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}); 
