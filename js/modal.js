const openModal = document.getElementById('openliModal');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeIcon');
const passSvg = document.getElementById('visible');
const uName = document.getElementById('userName');
const pWord = document.getElementById('password');
const passIcon = document.getElementById('passwordIcon');
// Accordion
const closeModal = document.getElementById('accordionClose');
const modal = document.getElementById('accordionModal');
const fav = document.getElementById('favorite');
const favCon = document.getElementById('favContent');
const his = document.getElementById('history');
const hisCon = document.getElementById('hisContent');
const favHeader = document.getElementById('favHeader');
const hisHeader = document.getElementById('hisHeader');
// Register
const openReg = document.getElementById('register');
const regModal = document.getElementById('registerModal');
const regClose = document.getElementById('regClose');
const regInput = document.getElementsByName("reg-input");
const regIcon = document.getElementsByClassName('reg-visible');

// Trigger this funtion when Login link is clicked
openModal.addEventListener('click', function (){
    loginModal.classList.toggle('is-hidden');
});


// Close the modal on click and clear it's field
closeBtn.addEventListener('click', function (){
    loginModal.classList.toggle('is-hidden');
    pWord.value = ('');
    uName.value = ('');
});


// On click, change the type of input and then, change the href value to change the icons
passSvg.addEventListener('click', function (){
    if (pWord.type == 'password') {
        pWord.type = 'text';    
        passIcon.setAttribute("href", "images/icon.svg#eye-close");
    }
    else {
        pWord.type = 'password';
        passIcon.setAttribute("href", "images/icon.svg#eye-open");
    }
});

// Accordion modal

closeModal.addEventListener('click', function (){
    let favIcon = (favHeader.children[2].children),
        hisIcon = (hisHeader.children[2].children);
    modal.style.visibility = "hidden";
    hisCon.style.visibility = "hidden";
    favCon.style.visibility = "hidden";
    favIcon[0].setAttribute("href", "images/icon.svg#plus");
    hisIcon[0].setAttribute("href", "images/icon.svg#plus");
});


fav.addEventListener('click', function (){
    let icon = (favHeader.children[2].children);
    modal.style.visibility = "visible";
    hisCon.style.visibility = "hidden";
    favCon.style.visibility = "visible";
    hisCon.style.height = "0";
    favCon.style.height = "310px";
    icon[0].setAttribute("href", "images/icon.svg#minus");
}) ;


his.addEventListener('click', function (){
    let icon = (hisHeader.children[2].children);
    modal.style.visibility = "visible";
    hisCon.style.visibility = "visible";
    favCon.style.height = "0";
    hisCon.style.height = "310px";
    icon[0].setAttribute("href", "images/icon.svg#minus");
}) ;


favHeader.addEventListener('click', function (){
    let icon = (favHeader.children[2].children);
    if (favCon.style.visibility == "visible") {
        favCon.style.visibility = "hidden";
        favCon.style.height = "0";
        icon[0].setAttribute("href", "images/icon.svg#plus");
    } else {
        favCon.style.visibility = "visible";
        favCon.style.height = "310px";
        icon[0].setAttribute("href", "images/icon.svg#minus");
    }
});


hisHeader.addEventListener('click', function (){
    let icon = (hisHeader.children[2].children);
    if (hisCon.style.visibility == "visible") {
        hisCon.style.visibility = "hidden";
        hisCon.style.height = "0";
        icon[0].setAttribute("href", "images/icon.svg#plus");        
    } else {
        hisCon.style.visibility = "visible";
        hisCon.style.height = "310px";
        icon[0].setAttribute("href", "images/icon.svg#minus");
    }
});

// Register Modal
for (let i = 0; i < regInput.length; i++) {
        const input = regInput[i];
    openReg.addEventListener('click', function () {
        loginModal.classList.add('is-hidden');
        pWord.value = ('');
        uName.value = ('');
        regModal.style.visibility = "visible";
    });

    regClose.addEventListener('click', function () {
        regModal.style.visibility = "hidden";
        loginModal.classList.add('is-hidden');
        input.value = ('');
    });
}

for (let i = 0; i < regIcon.length; i++) {
    const showPass = regIcon[i];
    showPass.addEventListener('click', function () {
        let passInput = regInput[i + 2];
        if (passInput.type == "text") {
            passInput.type = "password";
            passInput.setAttribute("type", "password");
            showPass.childNodes[1].setAttribute("href", "images/icon.svg#eye-open");
        } else {
            passInput.type = "text";
            passInput.setAttribute("type", "text");
            showPass.childNodes[1].setAttribute("href", "images/icon.svg#eye-close");
        }
    });
}

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        let favIcon = (favHeader.children[2].children),
        hisIcon = (hisHeader.children[2].children);
        modal.style.visibility = "hidden";
        hisCon.style.visibility = "hidden";
        favCon.style.visibility = "hidden";
        favIcon[0].setAttribute("href", "images/icon.svg#plus");
        hisIcon[0].setAttribute("href", "images/icon.svg#plus");
    } else if (event.target == loginModal) {
        loginModal.classList.toggle('is-hidden');
        pWord.value = ('');
        uName.value = ('');
    } else if (event.target == regModal) {
        regModal.style.visibility = "hidden";
        loginModal.classList.add('is-hidden');
        if (input.value != null) {
            input.value = ('');
        }
    } 
});


