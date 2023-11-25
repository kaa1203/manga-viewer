const navMenu = document.getElementById('navMenu');
const sideNav = document.getElementById('sideNav');
const sideNavItem = document.getElementsByClassName('side-navbar-item');
const sideNavList = document.getElementsByClassName('side-navbar-list');
const navCon = document.getElementsByClassName('nav-container');
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
const searchBar = document.getElementById('navSearch');
const searchDel = document.getElementsByClassName('search');
const highlight = document.getElementsByClassName('highlight');

// Side nav and content
navMenu.addEventListener('click', function () {
    let x = sideNav.style.width;
    if (window.innerWidth >= 1249) {
        for (let i = 0; i < cont.length; i++) {
            if (x === "0%") {
                cont[i].style.width = "80%"; 
                sideNav.style.width = "15%";
                cont[i].style.marginLeft = "17.5%"
                cont[i].style.transition = "ease-in-out width .10s";
            } else {
                cont[i].style.width = "90%"; 
                sideNav.style.width = "0%";
                cont[i].style.marginLeft = "auto"
                cont[i].style.transition = "linear width .10s";
            }
        }
    } else if (window.innerWidth >= 1024) {
    } else if (window.innerWidth >= 768) {
        if (sideNav.offsetWidth <= 100) {
            for (let i = 0; i < sideNavItem.length; i++) {
                sideNav.style.width = "25%";
                let item = sideNavItem[i];
                let span = item.children[0].children[1],
                    icon = item.children[0].children[0];
                sideNavList[0].style.padding = "15px"; 
                sideNavList[0].style.marginTop = "0";  
                sideNavList[1].style.padding = "15px"; 
                span.style.display = "block";
                icon.style.margin = "0";
            }
        } else {
            for (let i = 0; i < sideNavItem.length; i++) {
                sideNav.style.width = "8%";
                let item = sideNavItem[i];
                let span = item.children[0].children[1],
                    icon = item.children[0].children[0];
                sideNavList[0].style.padding = "2px 4px";  
                sideNavList[0].style.marginTop = "15px";  
                sideNavList[1].style.padding = "2px 4px"; 
                span.style.display = "none";
                icon.style.margin = "auto";
            }
        }
    }
    sideNav.style.transition = "ease-in-out .1s";
    
}); 

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1023) { 
        for (let i = 0; i < sideNavItem.length; i++) {
                sideNav.style.width = "8%";
                let item = sideNavItem[i];
                let span = item.children[0].children[1],
                    icon = item.children[0].children[0];
                sideNavList[0].style.padding = "2px 4px";  
                sideNavList[0].style.marginTop = "15px";  
                sideNavList[1].style.padding = "2px 4px"; 
                span.style.display = "none";
                icon.style.margin = "auto";
        }
        for (let i = 0; i < cont.length; i++) {
             cont[i].style.width = "90%";
             cont[i].style.marginLeft = "9%";
             cont[i].style.marginBottom = "1%";
            
        }
    }
});


searchBar.addEventListener('keyup', function () {
    if (searchBar.value != '') {
        searchDel[0].style.visibility = "visible";
    } else {
        searchDel[0].style.visibility = "hidden";
    }
});

searchDel[0].addEventListener('click', function () {
    searchBar.value = ''; 
    searchDel[0].style.visibility = "hidden";
});
// Change Theme
// Things to figure out:
// How to retain the "checked" value when going to a different page(is it possible via front end or it can only be done via fetching data from db???)
// should I create two css classes??? (dark-theme and light-theme)
toggle.addEventListener('click', function () {
    const icon = theme.nextElementSibling.childNodes[1].childNodes[1];
    const text = document.getElementsByClassName('profile-display');
    if (theme.checked == false) {
        theme.checked = true; 
        icon.setAttribute('href', 'images/icon.svg#light');
        text[0].childNodes[3].innerText = " Light Mode";
        navCon[0].classList.add('light-container');
        sideNav.classList.add('light-container');
        notifCont.classList.add('light-container');
        profileCont.classList.add('light-container');
        highlight[0].classList.add('l-highlight');
        document.body.classList.add('light-bg');
        for (let i = 0; i < cont.length; i++) {
            cont[i].classList.add('light-container');
        }

        for (let i = 0; i < sideNavItem.length; i++) {
            sideNavItem[i].classList.add('l-side-nav');
        }

    } else {
        theme.checked = false;
        icon.setAttribute('href', 'images/icon.svg#dark');
        text[0].childNodes[3].innerText = " Dark Mode";
        navCon[0].classList.remove('light-container');
        sideNav.classList.remove('light-container');
        notifCont.classList.remove('light-container');
        profileCont.classList.remove('light-container');
        highlight[0].classList.remove('l-highlight');
        document.body.classList.remove('light-bg');
        for (let i = 0; i < cont.length; i++) {
            cont[i].classList.remove('light-container');
        }

        for (let i = 0; i < sideNavItem.length; i++) {
            sideNavItem[i].classList.remove('l-side-nav');
        }
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

// Go to top!
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}); 

// check if the user is clicking outside of element. Not my ideal solution but if it works it's not stupid i guess... ¯\_(ツ)_/¯ i dont know how to exclude the trigger button on the code so I put an event inside of it too...
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
