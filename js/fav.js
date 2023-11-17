const grid = document.getElementById('grid');
const list = document.getElementById('list');
const manga = document.getElementsByClassName('favorites-manga-wrapper');
const link = document.getElementsByClassName('favorites-link');
const summary = document.getElementsByClassName('favorites-summary');
const details = document.getElementsByClassName('favorites-details');
const favCont = document.getElementsByClassName('favorites');
const image = document.getElementsByClassName('favorites-image');
const search = document.getElementById('favSearchBttn');
const srchbar = document.getElementById('favSearch');

// View
for (let i = 0; i < manga.length; i++) {
    list.addEventListener('click', function () {
        manga[i].style.flexDirection = "row";
        manga[i].style.width = "100%";
        link[i].style.width = "100%";
        link[i].classList.add('large-text');
        summary[i].style.display = "block";
        image[i].style.width = "20%";
        details[i].style.width = "80%";
        details[i].style.justifyContent = "space-between";
        list.classList.add('active');
        grid.classList.remove('active');
    });
    
    grid.addEventListener('click', function () {
        manga[i].style.flexDirection = "column";
        link[i].style.width = "calc(100%)";
        link[i].classList.remove('large-text');
        summary[i].style.display = "none";
        details[i].style.width = "100%";
        image[i].style.width = "100%";
        grid.classList.add('active');
        list.classList.remove('active');

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
            if (favCont[0].offsetWidth <= 1144) {
                 manga[i].style.width = "calc(100% / 5 - 10px)";
            } else if (favCont[0].offsetWidth >= 905) {
                 manga[i].style.width = "calc(100% / 4 - 10px)";
            } else if (favCont[0].offsetWidth <= 905) {
                manga[i].style.width = "calc(100% / 2 - 10px)";
            }
        }
    });

    // if (favCont[0].offsetWidth <= 905) {
    //     manga[i].style.width = "calc(100% / 2 - 10px)";
    // }
}

search.addEventListener('click', function () {
    if (srchbar.style.width != "60%") {
        search.style.left = "0";
        search.style.backgroundColor = "var(--Grey)";
        search.style.border = "1px solid var(--White-transparent)";
        srchbar.style.width = "60%";
        srchbar.style.backgroundColor = "var(--Grey)";
        srchbar.style.transition = "width 250ms linear";
        srchbar.style.border = "1px solid var(--White-transparent)";
    } else {
        search.style.left = "7px";
        search.style.backgroundColor = "var(--Dark-Grey)";
        search.style.border = "1px solid var(--Grey-transparent)";
        srchbar.style.width = "1%";
        srchbar.style.transition = "width 250ms linear";
        // srchbar.style.backgroundColor = "transparent";
        // srchbar.style.border = "1px solid transparent";
    }
    

});