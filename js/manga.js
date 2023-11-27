// Manga Chapter 
const openChap = document.getElementById('mangaListButton');
const chapModal = document.getElementById('mangaList');
const chapClose = document.getElementById('chapListClose');
const mangaNavButton = document.getElementsByClassName('manga-nav-button');
const mangaChap = document.getElementsByClassName('manga-chapter-item');

// Chapter List
openChap.addEventListener('click', function () {
    chapModal.style.visibility = 'visible';
});

chapClose.addEventListener('click', function () {
    chapModal.style.visibility = 'hidden';
});

window.addEventListener('click', function (event) {
 if (event.target == chapModal) {
        chapModal.style.visibility = "hidden";
    }
});


toggle.addEventListener('click', function () { 
    if (theme.checked) {
        mangaNavButton[3].classList.replace('bm-dark', 'bm-light');
        chapModal.children[0].classList.add('light-container');
        chapModal.children[0].children[1].classList.add('l-header');
        for (let i = 0; i < mangaNavButton.length; i++) {
            mangaNavButton[i].classList.add('l-hover');                    
        }
        for (let i = 0; i < mangaChap.length; i++) {
            mangaChap[i].classList.add('l-hover');                    
        }
    } else {
        mangaNavButton[3].classList.replace('bm-light', 'bm-dark'); 
        chapModal.children[0].classList.remove('light-container');
        chapModal.children[0].children[1].classList.remove('l-header');
        for (let i = 0; i < mangaNavButton.length; i++) {
            mangaNavButton[i].classList.remove('l-hover');                    
        }
        for (let i = 0; i < mangaChap.length; i++) {
            mangaChap[i].classList.remove('l-hover');                    
        }
    }
});
