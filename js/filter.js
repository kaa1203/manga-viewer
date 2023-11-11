// Assign Ids
const filBtn = document.getElementById('filterButton');
const filWrpr = document.getElementById('filterWrapper');
const filter = document.getElementsByClassName("table-filter-button");
const tabFil = document.getElementsByClassName("table-filter");
const advBtn = document.getElementById('searchButton');
const advSrch = document.getElementById('advSearch');
const srch = document.getElementById('tableSearch');
const advClose = document.getElementById('closeButton');
const genre = document.getElementsByClassName('search-genre');
const manga = document.getElementsByClassName('search-manga');
const accToggle = document.getElementsByClassName('section-heading');
const radio = document.getElementsByClassName("filter-radio");

// Change display of filter
filBtn.addEventListener('click', function () { 
    if (filWrpr.style.display === "flex") {
        filWrpr.style.display = "none";
    }
    else {
        filWrpr.style.display = "flex";
    }
});

// Rotate icons and open filters
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener('click', function () { 
        let icon = filter[i].childNodes[1];
        if (icon.style.transform === "rotate(180deg)") {
            icon.style.transform = "rotate(0deg)";
        } else {
            icon.style.transform = "rotate(180deg)";
        }
    
        if (tabFil[i].style.display === "block") {
            tabFil[i].style.display = "none";
        } else {
            tabFil[i].style.display = "block";
        }
    });
}

// Fetch radios
for (let i = 0; i < 4; i++) {
    if (radio[i].checked !== true) {
        let check = true,
        prev = radio[i].nextElementSibling,
        next = radio[i].previousElementSibling;
        
        console.log(prev);
        radio[i].addEventListener('click', function () {
            if (check == true) {
                radio[i].checked = true;
                check = false;
                radio[i].value = 0;
            } else {
                radio[i].checked = false;
                check = true;
                radio[i].value = 1;
            }
            // console.log(prev.checked);
            // console.log(next.checked);
        });
    }
}

//  Advance Search
advBtn.addEventListener('click', function () {
    if (advSrch.style.display === "block") {
        advSrch.style.display = "none";
        srch.disabled = false;
        srch.style.cursor = "text";
        filBtn.disabled = false;
        filBtn.style.cursor = "pointer";
    } else {
        advSrch.style.display = "block";
        srch.disabled = true;
        srch.style.cursor = "not-allowed";
        filBtn.disabled = true;
        filBtn.style.cursor = "not-allowed";
        
        if (filWrpr.style.display === "flex") {
            filWrpr.style.display = "none";
        }
    }   
});


// Closes advance search
advClose.addEventListener('click', function () {
    advSrch.style.display = "none";
    srch.disabled = false;
    srch.style.cursor = "text";
    filBtn.disabled = false;
    filBtn.style.cursor = "pointer";
});


accToggle[1].addEventListener('click', function () {
    if (manga[0].style.display === "none") {
        manga[0].style.display = "block";
    } else {
        manga[0].style.display = "none";
        
    }
});


accToggle[0].addEventListener('click', function () {
    if (genre[0].style.display === "block") {
        genre[0].style.display = "none";
    } else {
        genre[0].style.display = "block";
        
    }
});



