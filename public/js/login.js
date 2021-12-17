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
    document.location.replace('../index.html');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}


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
    document.location.replace('../index.html');
  } else {
    alert('Failed to signin');
  }
}

document
  .querySelector("#signup-form")
  .addEventListener('submit', signInFormHandler);