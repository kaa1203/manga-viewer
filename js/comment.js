const repBttn = document.getElementsByClassName('tool-reply');
const userRep = document.getElementsByClassName('user-reply-wrapper');
const cancel = document.getElementsByClassName('cancel');
const textBox = document.getElementsByClassName('user-reply-textbox');
const postRep = document.getElementsByClassName('post-reply');
const postWrpr = document.getElementsByClassName('post-reply-container');
const postCancel = document.getElementsByClassName('post-cancel');
const postTextBox = document.getElementsByClassName('post-reply-textbox');
const upRad = document.getElementsByClassName('upvote-radio');
const upIcon = document.getElementsByClassName('upvote');
const downRad = document.getElementsByClassName('downvote-radio');
const downIcon = document.getElementsByClassName('downvote');
const repDrp = document.getElementsByClassName('rep-num');
const replies = document.getElementsByClassName('post-replies');
const icon = document.getElementsByClassName('dd-icon');
const comMoreBttn = document.getElementsByClassName('com-more');
const comMoreCon = document.getElementsByClassName('comments-more');
const repMoreBttn = document.getElementsByClassName('rep-more');
const repMoreCon = document.getElementsByClassName('rep-comments-more');
const recManga = document.getElementsByClassName('image-wrapper');




// Open/Close reply
for (let i = 0; i < repBttn.length; i++) { 
    const reply = userRep[i];
    repBttn[i].addEventListener('click', function(){
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            textBox[i].value = '';
        }
    });
    
    
    cancel[i].addEventListener('click', function(){
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            textBox[i].value = '';
        }
    });
    
}

// Reply
for (let i = 0; i < postRep.length; i++) { 
    const reply = postWrpr[i];
    postRep[i].addEventListener('click', function(){
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            postTextBox[i].value = '';
        }
    });
    
    postCancel[i].addEventListener('click', function(){
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            postTextBox[i].value = '';
        }
    });
}
// Radios
for (let i = 0; i < upIcon.length; i++) {
    
    upIcon[i].addEventListener('click', function(){
        if (upRad[i].checked === true) {
            upRad[i].checked = false;        
        } else {
            upRad[i].checked = true; 
        }       
    });

    downIcon[i].addEventListener('click', function(){
        if (downRad[i].checked === true) {
            downRad[i].checked = false;        
        } else {
            downRad[i].checked = true; 
        }       
    });
    
}

// Post replies
for (let i = 0; i < repDrp.length; i++) {
    const dropDown = repDrp[i];

    dropDown.addEventListener('click', function () {
        if (replies[i].style.display === "flex") {
            replies[i].style.display = "none";
            icon[i].style.transform = "rotate(0deg)";
        } else {
            replies[i].style.display = "flex";
            icon[i].style.transform = "rotate(180deg)";
        }
    });
}

for (let i = 0; i < comMoreBttn.length; i++) {
    const comBttn = comMoreBttn[i];
    comBttn.addEventListener('click', function () {
        if (comMoreCon[i].style.visibility != 'visible') {
            comMoreCon[i].style.visibility = 'visible';
        } else {
            comMoreCon[i].style.visibility = 'hidden';
        }
    });
    
}

for (let i = 0; i < repMoreBttn.length; i++) {
    const repBttn = repMoreBttn[i];
    repBttn.addEventListener('click', function () {
        if (repMoreCon[i].style.visibility != 'visible') {
            repMoreCon[i].style.visibility = 'visible';
        } else {
            repMoreCon[i].style.visibility = 'hidden';
        }
    });
}

navMenu.addEventListener('click', function () {
    if (window.innerWidth >= 1024) {
        for (let i = 0; i < recManga.length; i++) {    
            if (cont[1].offsetWidth <= 1144) {
                recManga[i].style.width = "calc(100% / 5 - 15px)";
            } else {
                recManga[i].style.width = "calc(100% / 4 - 15px)";
            }
            console.log(cont[1].offsetWidth)
        }
    }
});

toggle.addEventListener('click', function () {
    const details = document.getElementsByClassName('rec-details-wrapper');
    const buttons = document.getElementsByTagName('button');
    const comMore = document.getElementsByClassName('com-more');
    const repMore = document.getElementsByClassName('rep-more');
    const commentsMore = document.getElementsByClassName('comments-more');
    const repComMore = document.getElementsByClassName('rep-comments-more');
    if (theme.checked) {
        for (let i = 0; i < details.length; i++) {
            details[i].classList.add('light-orange');
        } 
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('l-hover');
        } 
        for (let i = 0; i < comMore.length; i++) {
            comMore[i].classList.add('l-hover');
            commentsMore[i].classList.add('light-container');            
            commentsMore[i].children[0].classList.add('l-hover');            
            commentsMore[i].children[1].classList.add('l-hover');            
        } 
        for (let i = 0; i < repMore.length; i++) {
            repMore[i].classList.add('l-hover');
            repComMore[i].classList.add('light-container');            
            repComMore[i].children[0].classList.add('l-hover');            
            repComMore[i].children[1].classList.add('l-hover');            
        } 
    } else {
        for (let i = 0; i < details.length; i++) {
            details[i].classList.remove('light-orange');
        }
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('l-hover');
        } 
        for (let i = 0; i < comMore.length; i++) {
            comMore[i].classList.remove('l-hover');
            commentsMore[i].classList.remove('light-container');            
            commentsMore[i].children[0].classList.remove('l-hover');            
            commentsMore[i].children[1].classList.remove('l-hover');   
        }
        for (let i = 0; i < repMore.length; i++) {
            repMore[i].classList.remove('l-hover');
            repComMore[i].classList.remove('light-container');            
            repComMore[i].children[0].classList.remove('l-hover');            
            repComMore[i].children[1].classList.remove('l-hover');            
        } 
    }
});