const grid = document.getElementById('grid');
const list = document.getElementById('list');
const manga = document.getElementsByClassName('favorites-manga-wrapper');
const mangaMore = document.getElementsByClassName('favorites-more-button');
const moreCont = document.getElementsByClassName('favorites-more-content');
const link = document.getElementsByClassName('favorites-link');
const summary = document.getElementsByClassName('favorites-summary');
const details = document.getElementsByClassName('favorites-details');
const favCont = document.getElementsByClassName('favorites');
const favCheckBox = document.getElementsByClassName('favorites-checkbox');
const image = document.getElementsByClassName('favorites-image');
const active = document.getElementsByClassName('active');

// View
for (let i = 0; i < manga.length; i++) {
    list.addEventListener('click', function () {
        manga[i].style.flexDirection = "row";
        manga[i].style.width = "100%";
        moreCont[i].style.top = "17%";
        link[i].style.width = "100%";
        link[i].classList.add('large-text');
        summary[i].style.display = "block";
        image[i].style.width = "20%";
        details[i].style.width = "80%";
        details[i].style.justifyContent = "space-between";

        if (theme.checked) {
            list.classList.add('l-highlight');
            grid.classList.remove('l-highlight');
        } else {
            list.classList.add('active');
            grid.classList.remove('active');
        }
        
    });
    
    grid.addEventListener('click', function () {
        manga[i].style.flexDirection = "column";
        moreCont[i].style.top = "10%";
        link[i].style.width = "calc(100%)";
        link[i].classList.remove('large-text');
        summary[i].style.display = "none";
        details[i].style.width = "100%";
        image[i].style.width = "100%";
        // grid.classList.add('active');
        // list.classList.remove('active');

        if (theme.checked) {
            list.classList.remove('l-highlight');
            grid.classList.add('l-highlight');
        } else {
            list.classList.remove('active');
            grid.classList.add('active');
        }

        if (favCont[0].offsetWidth >= 1300) {
            manga[i].style.width = "calc(100% / 5 - 10px)";
        } else if (favCont[0].offsetWidth >= 1024) {
            manga[i].style.width = "calc(100% / 4 - 10px)";
        } else {
            manga[i].style.width = "calc(100% / 3 - 10px)";
        }
    });
    
    navMenu.addEventListener('click', function () {
        if (manga[i].style.flexDirection != "row") {
            if (window.innerWidth >= 1024) {
                if (favCont[0].offsetWidth <= 1144) {
                    //  manga[i].style.width = "calc(100% / 5 - 10px)";
                } else if (favCont[0].offsetWidth >= 905) {
                     manga[i].style.width = "calc(100% / 4 - 10px)";
                } else if (favCont[0].offsetWidth <= 905) {
                    manga[i].style.width = "calc(100% / 2 - 10px)";
                }
            }
        }
    });

    manga[i].addEventListener('mouseover', function () {
        mangaMore[i].style.visibility = "visible";
    });

    manga[i].addEventListener('mouseout', function () {
        mangaMore[i].style.visibility = "hidden";
    });

    mangaMore[i].addEventListener('click', function () {
        if (moreCont[i].style.visibility == "visible") {
            moreCont[i].style.visibility = "hidden";
        } else {
            moreCont[i].style.visibility = "visible";
        }
    });

    moreCont[i].children[0].children[0].addEventListener('click', function () {
        let p = moreCont[i].children[0].children[0].children[2],
            icon = moreCont[i].children[0].children[0].children[1].children[0];
        if (favCheckBox[i].checked) {
            favCheckBox[i].checked = false;
            p.innerText = 'Notification: Off';
            icon.setAttribute('href', 'images/icon.svg#notif-2');
        } else {
            favCheckBox[i].checked = true;
            p.innerText = 'Notification: On';
            icon.setAttribute('href', 'images/icon.svg#notif');
        }
    });

    // if (favCont[0].offsetWidth <= 905) {
    //     manga[i].style.width = "calc(100% / 2 - 10px)";
    // }
}

toggle.addEventListener('click', function () {
    if (theme.checked == false) { 
        grid.classList.remove('l-hover');
        list.classList.remove('l-hover');
        grid.classList.replace('l-highlight', 'active');
        list.classList.replace('l-highlight', 'active');
        
        for (let i = 0; i < details.length; i++) {
            details[i].classList.remove('light-orange');
            mangaMore[i].children[0].classList.remove('l-hover');
            moreCont[i].classList.remove('light-container');
            moreCont[i].children[0].children[0].classList.remove('l-hover');
            moreCont[i].children[0].children[1].classList.remove('l-hover');
        }
    } else {
        grid.classList.add('l-hover');
        list.classList.add('l-hover');
        grid.classList.replace('active', 'l-highlight');
        list.classList.replace('active', 'l-highlight');
        
        for (let i = 0; i < details.length; i++) {
            details[i].classList.add('light-orange');
            mangaMore[i].children[0].classList.add('l-hover');
            moreCont[i].classList.add('light-container');
            moreCont[i].children[0].children[0].classList.add('l-hover');
            moreCont[i].children[0].children[1].classList.add('l-hover');
        }
    }
});