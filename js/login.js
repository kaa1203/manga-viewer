// Login button 
const openModal = document.getElementById('openliModal');
// Modal
const loginModal = document.getElementById('loginModal');
// Close button
const closeBtn = document.getElementById('closeIcon');
// Show password Icon(svg attr)
const passSvg = document.getElementById('visible');
// Username textbox
const uName = document.getElementById('userName');
// Password textbox
const pWord = document.getElementById('password');
// Show password Icon 
const passIcon = document.getElementById('passwordIcon');

// Trigger this funtion when Login link is clicked
openModal.onclick = function () {
    loginModal.classList.toggle('is-hidden');
}

// Close the modal on click and clear it's field
closeBtn.onclick = function () {
    loginModal.classList.toggle('is-hidden');
    pWord.value = ('');
    uName.value = ('');
}

// On click, change the type of input and then, change the href value to change the icons
passSvg.onclick = function () {
    if (pWord.type == 'password') {
        pWord.type = 'text';    
        passIcon.setAttribute("href", "images/icon.svg#eye-close");
    }
    else {
        pWord.type = 'password';
        passIcon.setAttribute("href", "images/icon.svg#eye-open");
    }
    
}

// Close Modal when user clicked on the background and clear it's field at the same time 
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.classList.toggle('is-hidden');
    pWord.value = ('');
    uName.value = ('');
    }
}


