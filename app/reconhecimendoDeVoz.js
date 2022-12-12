window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-BR'
recognition.start()