const genreLink = document.getElementsByClassName('genre-link');
const chapterItem = document.getElementsByClassName('chapter-item');

toggle.addEventListener('click', function () {
    const chapterLink = document.getElementsByClassName('chapter');
    const bmButton = document.getElementsByClassName('bookmark-button');
    if (theme.checked) {
        chapterLink[0].classList.add('l-hover');
        chapterLink[1].classList.add('l-hover');
        bmButton[0].classList.replace('bm-dark', 'bm-light');
        bmButton[0].classList.add('l-hover');
        for (let i = 0; i < genreLink.length; i++) {
            genreLink[i].classList.add('l-hover');
        } 
        for (let i = 0; i < chapterItem.length; i++) {
            chapterItem[i].classList.add('l-hover');
        } 
    } else {
        chapterLink[0].classList.remove('l-hover');
        chapterLink[1].classList.remove('l-hover');
        bmButton[0].classList.replace('bm-light', 'bm-dark');
        bmButton[0].classList.remove('l-hover');
        for (let i = 0; i < genreLink.length; i++) {
            genreLink[i].classList.remove('l-hover');
        }
        for (let i = 0; i < chapterItem.length; i++) {
            chapterItem[i].classList.remove('l-hover');
        }
    }
});