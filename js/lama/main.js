//  document
//    .getElementById("menuVocabulary")
//    .addEventListener("click", showVocabulary);


/*=========================================
    PAGE NAVIGATION
=========================================*/

const pages = document.querySelectorAll(".page");

function showPage(pageId){

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document
        .getElementById(pageId)
        .classList.add("active");
}


document.getElementById("menuDashboard")
.onclick = () => showPage("dashboardPage");

document.getElementById("menuDictionary")
.onclick = () => showPage("dictionaryPage");

document.getElementById("menuTranslate")
.onclick = () => showPage("translatePage");

document.getElementById("menuVocabulary")
.onclick = () => showPage("vocabularyPage");

document.getElementById("menuGrammar")
.onclick = () => showPage("grammarPage");

document.getElementById("menuListening")
.onclick = () => showPage("listeningPage");

document.getElementById("menuSpeaking")
.onclick = () => showPage("speakingPage");

document.getElementById("menuConversation")
.onclick = () => showPage("conversationPage");

document.getElementById("menuQuiz")
.onclick = () => showPage("quizPage");

document.getElementById("menuProgress")
.onclick = () => showPage("progressPage");

document.getElementById("menuFavorites")
.onclick = () => showPage("favoritesPage");

document.getElementById("menuSettings")
.onclick = () => showPage("settingsPage");



showPage("dashboardPage");



