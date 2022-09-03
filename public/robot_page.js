let Robot_;
var homeLINK = document.querySelector('header .Logo');
var edit = document.querySelector('.robot svg.edit');
var name_field = document.querySelector('.robot input[name="Robot name"]');

// main events
function runEvents() {
  homeLINK.addEventListener('click', function (event) {
    goTo('/');
  })
  edit.addEventListener('click', ableEdit);
}
function auth() {
  var robot = localStorage.getItem('robot');
  if (!robot) {
    new Robot('Roboto', 'default', 1, '/icons/Robot.png').save();
    return 'new Robot';
  }
  Robot.getByID(robot, setUserInfo);
}

function ableEdit(event) {
  let el = event.target.tagName == 'svg' ? event.target : event.target.parentElement;
  name_field.removeAttribute('disabled');
  edit.innerHTML = `
    <path d="M19.315 4.68496C15.2748 0.644686 8.72524 0.644686 4.68496 4.68496C0.64469 8.72524 0.64469 15.2748 4.68496 19.315C8.72524 23.3553 15.2748 23.3553 19.315 19.315C23.3553 15.2748 23.3545 8.72524 19.315 4.68496V4.68496ZM17.6301 9.44193L11.3437 15.7291C11.1885 15.8842 10.9781 15.9714 10.7586 15.9714C10.5392 15.9714 10.3287 15.8842 10.1735 15.7291L6.36993 11.9247C6.29309 11.8478 6.23214 11.7566 6.19056 11.6562C6.14898 11.5558 6.12757 11.4482 6.12757 11.3396C6.12757 11.1201 6.21475 10.9097 6.36993 10.7545C6.52511 10.5993 6.73558 10.5121 6.95503 10.5121C7.17449 10.5121 7.38496 10.5993 7.54014 10.7545L10.7586 13.973L16.4599 8.27089C16.5368 8.19406 16.628 8.13312 16.7285 8.09155C16.8289 8.04999 16.9366 8.02862 17.0453 8.02866C17.154 8.02869 17.2616 8.05014 17.362 8.09178C17.4624 8.13341 17.5536 8.19441 17.6305 8.27131C17.7073 8.3482 17.7683 8.43947 17.8098 8.53991C17.8514 8.64035 17.8728 8.748 17.8727 8.8567C17.8727 8.9654 17.8512 9.07303 17.8096 9.17345C17.768 9.27386 17.707 9.36509 17.6301 9.44193V9.44193Z" fill="white"/>`;
  edit.classList.add('endEdit');
  edit.classList.remove('edit');
  document.querySelector('svg.endEdit').addEventListener('click', confirmEdit);
}
function confirmEdit(event) {
  let el = event.target.tagName == 'svg' ? event.target : event.target.parentElement;
  name_field.setAttribute('disabled', '');
  edit.innerHTML = `
    <path d="M22 7.24C22.0008 7.10839 21.9755 6.97793 21.9258 6.85609C21.876 6.73426 21.8027 6.62344 21.71 6.53L17.47 2.29C17.3766 2.19732 17.2657 2.12399 17.1439 2.07423C17.0221 2.02447 16.8916 1.99924 16.76 2C16.6284 1.99924 16.4979 2.02447 16.3761 2.07423C16.2543 2.12399 16.1434 2.19732 16.05 2.29L13.22 5.12L2.29 16.05C2.19732 16.1434 2.12399 16.2543 2.07423 16.3761C2.02447 16.4979 1.99924 16.6284 2 16.76V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H7.24C7.37993 22.0076 7.51989 21.9857 7.65082 21.9358C7.78175 21.8858 7.90071 21.8089 8 21.71L18.87 10.78L21.71 8C21.8013 7.90308 21.8756 7.79153 21.93 7.67C21.9396 7.59029 21.9396 7.50971 21.93 7.43C21.9347 7.38345 21.9347 7.33655 21.93 7.29L22 7.24ZM6.83 20H4V17.17L13.93 7.24L16.76 10.07L6.83 20ZM18.17 8.66L15.34 5.83L16.76 4.42L19.58 7.24L18.17 8.66Z" fill="white"/>`;
  edit.classList.add('edit');
  edit.classList.remove('endEdit');
  Robot.edit('name', name_field.value);
}
// after getting user info, set them in the webpage
function setUserInfo() {
  const { name, age, voice, avatar } = Robot_;
  name_field.value = name;
}
