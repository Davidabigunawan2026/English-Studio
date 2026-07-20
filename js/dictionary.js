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
        await translateToIndonesia(
        item.meanings[0].definitions[0].definition);

        document.getElementById("meaningID").textContent =
        meaningID;

        document.getElementById("example").textContent =
            item.meanings[0].definitions[0].example || "";


     //   console.log(data);

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








