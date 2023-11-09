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
filBtn.onclick = function () {
    if (filWrpr.style.display === "flex") {
        filWrpr.style.display = "none";
    }
    else {
        filWrpr.style.display = "flex";
    }
}

// Rotate icons and open filters
for (let i = 0; i < filter.length; i++) {
    filter[i].onclick = function () {
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
    
}
    
}

// Fetch radios (uncomplete, still need to remove radios with the same name)
for (let i = 0; i < 4; i++) {               // i + 1 after one loop
    if (radio[i].checked !== true) {        //check if the radios are false
        let check = true;                   //set check value to true 
        radio[i].onclick = function () {    //onlick
            if (check == true) {            //if radios are true execute this 
                radio[i].checked = true;    //check the radios
                check = false               // set check value to false
            } else {                        //execute if check is false
                radio[i].checked = false;   // uncheck the radio
                check = true;               // set check value to true
            }
        }                                   // finish i   
    }   
}

//  Advance Search
advBtn.onclick = function () {
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
}

// Closes advance search
advClose.onclick = function () {
    advSrch.style.display = "none";
    srch.disabled = false;
    srch.style.cursor = "text";
    filBtn.disabled = false;
    filBtn.style.cursor = "pointer";
}

accToggle[1].onclick = function () {
    if (manga[0].style.display === "none") {
        manga[0].style.display = "block";
    } else {
        manga[0].style.display = "none";
        
    }
}

accToggle[0].onclick = function () {
    if (genre[0].style.display === "block") {
        genre[0].style.display = "none";
    } else {
        genre[0].style.display = "block";
        
    }
}