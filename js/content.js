const popBttn = document.getElementsByClassName('pop-button');
const moreCont = document.getElementsByClassName('more-content');
const upBttn = document.getElementsByClassName('up-button');
const moreUp = document.getElementsByClassName('more-latest');
const manga = document.getElementsByClassName('content-item');
const mangaDetails = document.getElementsByClassName('content-details');
const latest = document.getElementsByClassName('latest-update-item');
const latestChap = document.getElementsByClassName('latest-manga-item');


for (let i = 0; i < popBttn.length; i++) {
    const pop = popBttn[i];
    pop.addEventListener('click', function() {
        if (moreCont[i].style.display === "block") {
            moreCont[i].style.display = "none";
            pop.innerText = "Show More";
        } else {
            moreCont[i].style.display = "block";
            pop.innerText = "Show Less";
        }
    });
}

for (let i = 0; i < upBttn.length; i++) {
    const up = upBttn[i];
    up.addEventListener('click', function() {
        if (moreUp[i].style.display === "block") {
            moreUp[i].style.display = "none";
            up.innerText = "Show More";
        } else {
            moreUp[i].style.display = "block";
            up.innerText = "Show Less";
        }
    });
}

navMenu.addEventListener('click', function () {
    if (window.innerWidth > 1280) {
        for (let i = 0; i < manga.length; i++) {
            if (cont[1].offsetWidth <= 1144) {
                manga[i].style.width = "calc(100% / 5 - 10px)";
            } else {
                manga[i].style.width = "calc(100% / 4 - 10px)";
            }

        }
        for (let i = 0; i < latest.length; i++) {
            if (cont[2].offsetWidth <= 1144) {
                latest[i].style.width = "calc(100% / 3 - 10px)";
            } else {
                latest[i].style.width = "calc(100% / 2 - 10px)";
            }
        }
    }
});

toggle.addEventListener('click', function () {
    if (theme.checked == false) {
        for (let i = 0; i < mangaDetails.length; i++) {
            mangaDetails[i].classList.remove('light-orange');
        }
        for (let i = 0; i < latestChap.length; i++) {
            latestChap[i].classList.remove('l-hover');
        }
        for (let i = 0; i < upBttn.length; i++) {
            upBttn[i].classList.remove('l-hover');
        }
        for (let i = 0; i < popBttn.length; i++) {
            popBttn[i].classList.remove('l-hover');
        }
    } else {
        for (let i = 0; i < mangaDetails.length; i++) {
            mangaDetails[i].classList.add('light-orange');
        }
        for (let i = 0; i < latestChap.length; i++) {
            latestChap[i].classList.add('l-hover');
        }
        for (let i = 0; i < upBttn.length; i++) {
            upBttn[i].classList.add('l-hover');
        }
        for (let i = 0; i < popBttn.length; i++) {
            popBttn[i].classList.add('l-hover');
        }
    }
    
});
