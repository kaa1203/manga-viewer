// Manga Chapter 
const openChap = document.getElementById('mangaListButton');
const chapModal = document.getElementById('mangaList');
const chapClose = document.getElementById('chapListClose');

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
