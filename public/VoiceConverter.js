window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
const synth = window.speechSynthesis;

recognition.interimResults = false;

recognition.addEventListener('result', function (event) {
  let p = '';
  const parDIV = document.createElement('div');
  const par = document.createElement('p');
  const text = event.results[0][0].transcript;
  recognition.lang = lang.options[lang.selectedIndex].value;
  parDIV.classList.add('msg_parent');
  parDIV.classList.add('mmp');
  par.classList.add('m_message');
  var txt = text.replaceAll('undefined', '');
  p += `${txt} `;
  par.textContent = p;
  par.change_ff();
  parDIV.appendChild(par);
  document.querySelector('dialog').append(parDIV);
  speakOut(txt);
})
recognition.addEventListener('end', function (event) {
  if (mic.classList.contains('stop')) {
    recognition.start();
  }
})
function speakOut(msg) {
  let reply = '';
  const par = document.createElement('p');
  new Algorithm(msg, reply, function (r) {
    if (r != '') {
      var utterThis = new SpeechSynthesisUtterance(r);
      synth.speak(utterThis);
      par.textContent = r;
      document.querySelector('dialog').append(par);
    }
  });
}
