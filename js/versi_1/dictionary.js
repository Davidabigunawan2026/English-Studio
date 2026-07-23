//  console.log("dictionary.js berhasil dimuat");





/*==================================================
DICTIONARY ENGINE
==================================================*/


async function searchWord(word){

//    console.log("Search dijalankan");
//    console.log(word);

    const url =
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try{

        const response = await fetch(url);

    //    console.log(response);

        if(!response.ok){
            alert("Word not found.");
            return;
        }

        const data = await response.json();

        const item = data[0];

        document.getElementById("word").textContent =
            item.word;

        document.getElementById("phonetic").textContent =
            item.phonetic || "";

        document.getElementById("partOfSpeech").textContent =
            item.meanings[0].partOfSpeech;

        document.getElementById("meaning").textContent =
            item.meanings[0].definitions[0].definition;


        const meaningID =
        await translateToIndonesia(item.word);

        document.getElementById("meaningID").textContent =
        meaningID;


        let example = "";

            for (const meaning of item.meanings) {

                for (const definition of meaning.definitions) {

                    if (definition.example) {
                        example = definition.example;
                        break;
                    }

                }

                if (example) break;

            }

            document.getElementById("example").textContent =
                example || "No example available.";


            const exampleID =
            await translateToIndonesia(example);

            document.getElementById("exampleID").textContent =
            example
                ? exampleID
                : "";

    }

    catch(error){
     //  console.log(error);
    }

}



const btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", function(){

    const word =
        document.getElementById("txtWord").value;

    searchWord(word);

});




/*==================================================
TRANSLATE TO INDONESIA
==================================================*/

async function translateToIndonesia(text){

    const url =
`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        return data.responseData.translatedText;

    }

    catch(error){

        return "Translation unavailable.";

    }

}



/*==================================================
SPEAK EXAMPLE
==================================================*/

const btnSpeakExample =
document.getElementById("btnSpeakExample");

if(btnSpeakExample){

    btnSpeakExample.onclick = function(){

        console.log("Speaker Example diklik");
        const text =
        document.getElementById("example").textContent;
        console.log(text);

        if(text){
            speak(text);
        }

    };

}



/*==================================================
SPEAK ENGINE
==================================================*/

function speak(text){

    if(!text) return;

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);

}

