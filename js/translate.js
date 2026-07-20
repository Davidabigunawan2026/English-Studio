
/*==================================================
TRANSLATE ENGINE
==================================================*/

const btnTranslate =
document.getElementById("btnTranslate");

btnTranslate.addEventListener("click", translateText);

async function translateText(){

    const text =
    document.getElementById("txtTranslate").value.trim();

    console.log("Translate dijalankan");
    console.log(text);


    if(text==""){
        alert("Please enter text.");
        return;
    }

    const from =
    document.getElementById("fromLanguage").value;

    const to =
    document.getElementById("toLanguage").value;

    console.log(from, to);

    document.getElementById("translateResult").textContent =
    "Translating...";

    try{

        const url =
`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("translateResult").textContent =
        data.responseData.translatedText;

    }

    catch(error){

        document.getElementById("translateResult").textContent =
        "Translation failed.";

        console.log(error);

    }

}


/*==================================================
SPEAKER
==================================================*/

document.getElementById("btnSpeak").onclick = function(){

    const text =
    document.getElementById("word").textContent;

    speak(text);

}

function speak(text){

    const utterance =
    new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);

}


document
.getElementById("btnSpeakInput")
.addEventListener("click", speakInput);

document
.getElementById("btnSpeakResult")
.addEventListener("click", speakResult);



/*==================================================
SPEAK INPUT
==================================================*/

function speakInput(){

    const text =
    document.getElementById("txtTranslate").value;

    if(text=="") return;

    const speech =
    new SpeechSynthesisUtterance(text);

    const from =
    document.getElementById("fromLanguage").value;

    speech.lang =
        from === "id" ? "id-ID" : "en-US";

    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

}


/*==================================================
SPEAK RESULT
==================================================*/

function speakResult(){

    const text =
    document.getElementById("translateResult").textContent;

    if(text=="") return;

    const speech =
    new SpeechSynthesisUtterance(text);

    const to =
    document.getElementById("toLanguage").value;

    speech.lang =
        to === "id" ? "id-ID" : "en-US";

    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

}

/*==================================================
CLEAR TRANSLATE
==================================================*/

document
.getElementById("btnClearTranslate")
.addEventListener("click", clearTranslate);

function clearTranslate(){

    document.getElementById("txtTranslate").value = "";
    document.getElementById("translateResult").textContent = "";
    document.getElementById("txtTranslate").focus();

}



