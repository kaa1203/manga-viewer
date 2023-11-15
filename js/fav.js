const grid = document.getElementById('grid');
const list = document.getElementById('list');
const manga = document.getElementsByClassName('favorites-manga-wrapper');
const title = document.getElementsByClassName('favorites-title');
const summary = document.getElementsByClassName('favorites-summary');
const details = document.getElementsByClassName('favorites-details');
const favCont = document.getElementsByClassName('favorites');

// View
for (let i = 0; i < manga.length; i++) {
    list.addEventListener('click', function () {
        manga[i].style.flexDirection = "row";
        manga[i].style.width = "100%";
        title[i].style.width = "100%";
        summary[i].style.display = "block";
        details[i].style.width = "80%";
        details[i].style.justifyContent = "space-evenly";
        list.classList.add('active');
        grid.classList.remove('active');
    });
    grid.addEventListener('click', function () {
        manga[i].style.flexDirection = "column";
        title[i].style.width = "240px";
        summary[i].style.display = "none";
        details[i].style.width = "100%";
        grid.classList.add('active');
        list.classList.remove('active');

        if (favCont[0].offsetWidth >= 1300) {
            manga[i].style.width = "calc(100% / 5 - 10px)";
        } else {
            manga[i].style.width = "calc(100% / 4 - 10px)";
        }
    });
    
    navMenu.addEventListener('click', function () {
        if (manga[i].style.flexDirection != "row") {
            if (favCont[0].offsetWidth <= 1144) {
                 manga[i].style.width = "calc(100% / 5 - 10px)";
            } else {
                 manga[i].style.width = "calc(100% / 4 - 10px)";
            }
        }
        
    });
}
