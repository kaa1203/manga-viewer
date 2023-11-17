const navMenu = document.getElementById('navMenu');
const sideNav = document.getElementById('sideNav');
const cont = document.getElementsByClassName('container');
const toTop = document.getElementById('toTop');
const theme = document.getElementById('profileCB');
const toggle = document.getElementById('toggleTheme');
const profilePic = document.getElementById('profilePicture');
const profileCont = document.getElementById('profileContainer');
const notifBell = document.getElementById('notificationBell');
const notifCont = document.getElementById('notifContainer');
const moreIcon = document.getElementById('moreIcon');
const moreWrapper = document.getElementById('moreWrapper');
const body = document.getElementsByTagName('body');

// Side nav and content
navMenu.addEventListener('click', function () {
    let x = sideNav.style.width;
    for (let i = 0; i < cont.length; i++) {
        if (window.innerWidth >= 1024) {
            if (x === "0%") {
                cont[i].style.width = "80%"; 
                sideNav.style.width = "15%";
                cont[i].style.marginLeft = "17.5%"
                cont[i].style.transition = "ease-in-out width .10s";
            } else {
                cont[i].style.width = "97%"; 
                sideNav.style.width = "0%";
                cont[i].style.marginLeft = "auto"
                cont[i].style.transition = "linear width .10s";
            }
            sideNav.style.transition = "ease-in-out .1s";
        }
    }
}); 

// Change Theme
toggle.addEventListener('click', function () {
    const icon = theme.nextElementSibling.childNodes[1].childNodes[1];
    const text = document.getElementsByClassName('profile-display');
    if (theme.checked == false) {
        theme.checked = true; 
        icon.setAttribute('href', 'images/icon.svg#light');
        text[0].childNodes[3].innerText = " Light Mode";
    } else {
        theme.checked = false;
        icon.setAttribute('href', 'images/icon.svg#dark');
        text[0].childNodes[3].innerText = " Dark Mode";
    }
});

// Profile
profilePic.addEventListener('click', function () {
    if (profileCont.style.visibility !== "visible") {
        profileCont.style.visibility = "visible";
        notifCont.style.visibility = 'hidden';
        moreWrapper.style.visibility = 'hidden'; 
    } else {
        profileCont.style.visibility = "hidden";
    }
});

// Notification
notifBell.addEventListener('click', function (event) {
    if (notifCont.style.visibility !== 'visible') {
        notifCont.style.visibility = 'visible';
        profileCont.style.visibility = "hidden";
    } else {
        notifCont.style.visibility = 'hidden';
        moreWrapper.style.visibility = 'hidden'; 
    }    
});

// Notifaction More Button
moreIcon.addEventListener('click', function () {
    if (moreWrapper.style.visibility !== 'visible') {
        moreWrapper.style.visibility = 'visible'; 
    } else {
        moreWrapper.style.visibility = 'hidden'; 
    }    
});

window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}); 

// check if the user is clicking outside of element. Not my ideal solution but if it works it's not stupid i guess... ¯\_(ツ)_/¯ i dont know how to exclude the trigger button on the code so I put an event inside of it too
document.addEventListener('click', function (event) {
    if (notifCont.contains(event.target) || notifBell.contains(event.target)) {
        return;
    } else {
        notifCont.style.visibility = "hidden";
        moreWrapper.style.visibility = "hidden";
    }
    if (profileCont.contains(event.target) || profilePic.contains(event.target)) {
    } else {
        profileCont.style.visibility = "hidden";
     }

});