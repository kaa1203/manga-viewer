const repBttn = document.getElementsByClassName('tool-reply');
const userRep = document.getElementsByClassName('user-reply-wrapper');
const cancel = document.getElementsByClassName('cancel');
const textBox = document.getElementsByClassName('user-reply-textbox');
const postRep = document.getElementsByClassName('post-reply');
const postWrpr = document.getElementsByClassName('post-reply-container');
const postCancel = document.getElementsByClassName('post-cancel');
const postTextBox = document.getElementsByClassName('post-reply-textbox');

// Open/Close reply
for (let i = 0; i < repBttn.length; i++) { 
    const reply = userRep[i];
    console.log(repBttn[i]);
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

for (let i = 0; i < postRep.length; i++) { 
    const reply = postWrpr[i];
    console.log(postRep[i]);
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