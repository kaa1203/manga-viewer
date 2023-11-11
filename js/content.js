const popBttn = document.getElementsByClassName('pop-button');
const moreCont = document.getElementsByClassName('more-content');
const upBttn = document.getElementsByClassName('up-button');
const moreUp = document.getElementsByClassName('more-latest');


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

