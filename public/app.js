let Robot_;
var sets_icon = document.querySelector('header .sets_icon');
var sets = document.querySelector('.sets');
var mic = document.querySelector('.mic');
var lang = document.querySelector('.sets .lang');

// main events
function runEvents() {
  sets_icon.addEventListener('click', openSettings);
  mic.addEventListener('click', start_stopRecognition);
}
function auth() {
  var robot = localStorage.getItem('robot');
  if (!robot) {
    new Robot('Roboto', 'default', 1, '/icons/Robot.png').save();
    return 'new Robot';
  }
  Robot.getByID(robot, setUserInfo);
}

// functions
function openSettings(event) {
  var el = event.target;
  sets.parentElement.classList.add('df');
  sets.parentElement.classList.remove('dn');
  sets.parentElement.addEventListener('click', function (event) {
    clickOut(sets, event.target)
  })
}
function start_stopRecognition(event) {
  var el = event.target;
  if (mic.classList.contains('start')) {
    recognition.start();
    mic.classList.remove('start');
    mic.classList.add('stop');
    mic.querySelector('circle').setAttribute('fill', '#ff0000');
  } else if (mic.classList.contains('stop')) {
    recognition.stop();
    mic.classList.remove('stop');
    mic.classList.add('start');
    mic.querySelector('circle').setAttribute('fill', '#F7F7F7');
  }
}
// after getting user info, set them in the webpage
function setUserInfo() {
  const { name, age, voice, avatar } = Robot_;
}
