speak.addEventListener('click',function(event){
    event.preventDefault();
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        let promptBox = document.getElementById("prompt")
        promptBox.value = transcript
        console.log(transcript);
    });
    
    if (speech == true) {
        recognition.start();
    }
    
})