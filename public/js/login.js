const SessionData = JSON.parse(sessionStorage.getItem("UserSession"));
const logged = document.getElementById("logged")
if(SessionData) {
  logged.innerHTML= "";
  let newA = document.createElement("a")
  newA.textContent = "Log Out"
  newA.setAttribute("href", "#")
  newA.addEventListener("click", logUserOut);

  logged.appendChild(newA)
}
//init
if (SessionData)
  $("#username-display").text(!SessionData.user.username ? "Not logged in" : SessionData.user.username);
//end init
async function logUserOut() {
  const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      sessionStorage.removeItem("UserSession")
      document.location.replace('/');
    } else {
      alert('Failed to log out');
    }
}
const loginFormHandler = async function(event) {
  event.preventDefault();

  const emailEl = document.querySelector('#email-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    let userData = await response.json();
    sessionStorage.setItem("UserSession", JSON.stringify(userData));
    document.location.href = '/index.html';
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

const signInFormHandler = async function(event){
  event.preventDefault();
  
  const emailEl = document.querySelector('#email-input-signin');
  const usernameEl = document.querySelector('#username-input-signin');
  const passwordEl = document.querySelector('#password-input-signin');

  const response = await fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({
      email: emailEl.value,
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    let userData = await response.json();
    sessionStorage.setItem("UserSession", JSON.stringify(userData));
    document.location.href = '/index.html';
  } else {
    alert('Failed to signin');
  }
}

document
  .querySelector("#signup-form")
  .addEventListener('submit', signInFormHandler);