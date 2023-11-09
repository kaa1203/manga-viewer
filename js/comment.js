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

// Open/Close reply
for (let i = 0; i < repBttn.length; i++) { 
    const reply = userRep[i];
    repBttn[i].onclick = function () {
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            textBox[i].value = '';
        }
    }
    
    cancel[i].onclick = function () {
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            textBox[i].value = '';
        }
    }
}

// Reply
for (let i = 0; i < postRep.length; i++) { 
    const reply = postWrpr[i];
    postRep[i].onclick = function () {
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            postTextBox[i].value = '';
        }
    }
    
    postCancel[i].onclick = function () {
        if (reply.style.display !== "flex") {
            reply.style.display = "flex";
        } else {
            reply.style.display = "none";
            postTextBox[i].value = '';
        }
    }
}
// Radios
for (let i = 0; i < upIcon.length; i++) {
    
    upIcon[i].onclick = function () {
        if (upRad[i].checked === true) {
            upRad[i].checked = false;        
        } else {
            upRad[i].checked = true; 
        }       
    }

    downIcon[i].onclick = function () {
        if (downRad[i].checked === true) {
            downRad[i].checked = false;        
        } else {
            downRad[i].checked = true; 
        }       
    }
}

// Post replies
for (let i = 0; i < repDrp.length; i++) {
    const dropDown = repDrp[i];

    dropDown.onclick = function () {
        if (replies[i].style.display === "flex") {
            replies[i].style.display = "none";
            icon[i].style.transform = "rotate(0deg)";
        } else {
            replies[i].style.display = "flex";
            icon[i].style.transform = "rotate(180deg)";
        }
        
    }
    
}
