function speak(text, lang = "en-US") {

    if (!text) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = lang;
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}