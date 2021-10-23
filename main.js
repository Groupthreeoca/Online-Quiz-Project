let loginForm = document.getElementById("firstForm");

let signupForm = document.querySelector(".signupForm");

let signinLink = document.querySelector(".signinLink");
let signupLink = document.querySelector(".signupLink");

signinLink.addEventListener("click", goSignin);
function goSignin() {
  loginForm.style.cssText =
    "display:block;display: flex; flex-direction: column;margin-left: 5em;  text-align: center;border: 1px solid;border-radius: 10px;margin-top: 1em;margin-bottom: 1em;padding: 1em;margin-right: 5em;";

  signupForm.style.display = "none";
}
signupLink.addEventListener("click", goSignup);
function goSignup() {
  signupForm.style.cssText =
    "display:block;display: flex; flex-direction: column;margin-left: 5em;  text-align: center;border: 1px solid;border-radius: 10px;margin-top: 1em;margin-bottom: 1em;padding: 1em;margin-right: 5em;";

  loginForm.style.display = "none";
}
let passSignup = document.querySelector(".passwordSignup");
let rpassSignup = document.querySelector(".rpasswordSignup");
let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");

passSignup.addEventListener("keyup", invalidPassword);
function invalidPassword() {
  let c = passSignup.value;
  let f = c.length;

  if (f <= 6) {
    msg1.innerHTML = "password must be longer than 6 characters";
  } else if (f > 6) {
    msg1.innerHTML = "correct password";
  }
}
rpassSignup.addEventListener("keyup", invalidRepeatPassword);
function invalidRepeatPassword() {
  let c = passSignup.value;
  let f = c.length;
  let w = rpassSignup.value;

  if (w != c || f <= 6) {
    msg2.innerHTML = "incorrect password";
  } else if (w == c && f > 6) {
    msg2.innerHTML = "correct password";
    msg1.style.cssText = "visibility:block";
  }
}
let signupBtn = document.querySelector(".signupBtn");

signupBtn.addEventListener("click", newSignup);
function newSignup() {
  var fname = document.querySelector(".usernameSignup").value;
  var email = document.querySelector(".emailSignup").value;
  var password = document.querySelector(".passwordSignup").value;

  var user = {
    fname: fname,
    email: email,
    password: password,
  };
  console.log(user);
  var json = JSON.stringify(user);
  let signupstatus;
  for (let i = 0; i < localStorage.length; i++) {
    if (user.email == localStorage.key(i)) {
      signupstatus = true;
    }
  }
  let enterPass = document.querySelector(".passwordSignup");
  let repeatPass = document.querySelector(".rpasswordSignup");
  let checkPass = enterPass.value;
  let value1Check = checkPass.length;

  let checkRepeat = repeatPass.value;
  let value2Check = checkRepeat.length;

  if (signupstatus || value1Check < 6 || value1Check != value2Check) {
    alert("email already exist or incorrect password");
  } else {
    goSignin();
  }
  localStorage.setItem(user.email, json);
}
let signinBtn = document.querySelector(".loginBtn");
// login function
signinBtn.addEventListener("click", goQuiz);
function goQuiz() {
  let email = document.querySelector(".emailSignin").value;
  let password = document.querySelector(".passwordLogin").value;
  let located = false;
  let locatedIndex;
  // searching for users email in local storage
  for (let i = 0; i < localStorage.length; i++) {
    if (email == localStorage.key(i)) {
      located = true;
      locatedIndex = i;
    }
  }
  let emailSignin = document.querySelector(".emailSignin");
  let correctCheck = document.querySelector(".fa-check-circle");
  let wrongCheck = document.querySelector(".fa-exclamation-circle ");
  let wrongCheck2 = document.querySelector(".iconsPass .fa-exclamation-circle");
  let json = JSON.parse(localStorage.getItem(localStorage.key(locatedIndex)));
  if (password == json.password && located) {
    window.location.href = "index2.html";
  } else {
    let passwordField = document.querySelector(".passwordLogin");

    emailSignin.style.border = "3px solid red";
    passwordField.style.border = "3px solid red";
    wrongCheck.style.display = "block";
    wrongCheck2.style.display = "block";
    correctCheck.style.display = "none";
    setTimeout(function () {
      alert("incorrect email or password");
    }, 100);
  }
}

// email validation

let emailSignin = document.querySelector(".emailSignin");
emailSignin.addEventListener("keydown", checkEmail);
function checkEmail() {
  let email = document.querySelector(".emailSignin").value;
  const regx = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let correctCheck = document.querySelector(".fa-check-circle");
  let wrongCheck = document.querySelector(".fa-exclamation-circle ");

  if (email.match(regx)) {
    emailSignin.style.border = "3px solid green";
    correctCheck.style.display = "block";
    wrongCheck.style.display = "none";
  } else {
    emailSignin.style.border = "3px solid red";
    wrongCheck.style.display = "block";
    correctCheck.style.display = "none";
  }
}
