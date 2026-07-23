/*=========================================
    PAGE NAVIGATION
=========================================*/


/*=========================================
    DICTIONARY MENU
=========================================*/


//  showPage("dashboardPage");



/*=========================================
    DICTIONARY
=========================================*/

const menuDictionary =
document.getElementById("menuDictionary");

const dictionaryModal =
document.getElementById("dictionaryModal");

const btnCloseDictionary =
document.getElementById("btnCloseDictionary");

menuDictionary.onclick = function(){

    dictionaryModal.classList.add("show");

};

btnCloseDictionary.onclick = function(){

    dictionaryModal.classList.remove("show");

};


/*=========================================
    TRANSLATE
=========================================*/


const menuTranslate =
document.getElementById("menuTranslate");

const translateModal =
document.getElementById("translateModal");

const btnCloseTranslate =
document.getElementById("btnCloseTranslate");

menuTranslate.onclick = function(){

    translateModal.classList.add("show");

};

btnCloseTranslate.onclick = function(){

    translateModal.classList.remove("show");

};


