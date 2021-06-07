
const mainContent = document.querySelector(".right-screen-main-content");
const createAcount = document.getElementById("create-account");
const singin= document.getElementById("sign-in");

// Content printes ut når brukeren loader siden
window.onload = function(){
  printSigninContent();

  togglePasswordVisibility();
  signInLines();
  showUsername();
  inputLinesAnimatios();
  login();
}

singin.addEventListener("click", ()=>{
  printSigninContent();
  togglePasswordVisibility();
  signInLines();
  showUsername();
  inputLinesAnimatios();
  login();
})

createAcount.addEventListener("click", ()=>{
  createAcountContent();
})



// Printer main content for sign-in siden
function printSigninContent(){
  mainContent.innerHTML = `
    <form id="form" action="index.html" method="post">

      <div class="login-div">

        <div class="username-div">
          <label class="login-username-label">USERNAME</label>
          <input type="text" class="login-input login-input" placeholder="USERNAME" minlength="3" size="30" required>
          <div class="login-underline-inactive"></div>
          <div class="login-underlines login-input-underline"></div>
        </div>


        <div class="password-div">
          <div>
            <label class="login-password-label">PASSWORD</label>
          </div>

          <div class="password-wrap">
            <input class="login-input password-input" type="password" placeholder="PASSWORD" minlength="2" size="30" required>
            <i id="toggle_password_eye" class="far fa-eye fa-eye-slash"></i>
          </div>
          <div class="login-underline-inactive"></div>
          <div class="login-underlines login-password-underline"></div>
        </div>


        <div class="logout-checkbox">
        <input type="checkbox">
        <span>LOG ME OUT AFTER</span>
      </div>
    </div>

      <div class="login-btn-div">
        <button class="login-btn" type="submit">LOG IN</button>
        <a href="#">FORGOT PASSWORD?</a>
      </div>
    </form>

  `
}

// Setter underline på anchors i navbar - høyre siden
function signInLines(){
  const signIn = document.getElementById("sign-in");
  const createAccount = document.getElementById("create-account");
  signIn.addEventListener("click", (e)=>{
    e.currentTarget.children[1].style.display="block"
    createAccount.children[1].style.display="none";
  });

  createAccount.addEventListener("click", (e)=>{
    e.currentTarget.children[1].style.display="block"
    signIn.children[1].style.display="none";
  });
}

// Tilater brukeren å logge inn med riktig passord og username
function login(){
  const loginBtn = document.querySelector(".login-btn");
  loginBtn.disabled = true;
  const form = document.getElementById("form");

  const usernameInput = document.querySelector(".login-input");
  const passwordInput = document.querySelector(".password-input");

  const userNameUnderlineActive = document.querySelector(".login-input-underline");
  const passwordUnderlineActive = document.querySelector(".login-password-underline");
  form.addEventListener("keyup", function(){
      let username = usernameInput.value;
      let password = passwordInput.value;
      if(username == "Rolando" && password == "Widard" || username == "Eivind" && password == "live long and prosper"){
          loginBtn.disabled = false;
          loginBtn.style.opacity = "1";
          userNameUnderlineActive.classList.add('login_green');
          passwordUnderlineActive.classList.add('login_green');
          saveUsername(username);
      }else {
          loginBtn.disabled = true;
          loginBtn.style.opacity = "0.2";
          userNameUnderlineActive.classList.remove('login_green');
          passwordUnderlineActive.classList.remove('login_green');
      }

  });
}

//Funksjon for å vise "brukernavnet" på venstre side av skjermen
function showUsername(){
  const usernameInput = document.querySelector(".login-input");
  const usernameHeader = document.getElementById("username-header");
  usernameInput.addEventListener("focusout", () => {
      if (usernameInput.value.length >= 3){
          usernameHeader.style.color = "#FFF";
          usernameHeader.textContent = usernameInput.value.toUpperCase();
      }
  }
  );
};

// Funksjon som lagrer username i localeStorage og kalles på når brukeren har tastet inn username og password
function saveUsername(username){
  localStorage.setItem("username",username);
};
//Toggle vising av passord.
function togglePasswordVisibility(){
  const passwordInput = document.querySelector(".password-input");
  const passwordEye = document.getElementById("toggle_password_eye");
  passwordEye.addEventListener("click", function(e){
      const type = passwordInput.getAttribute("type") === 'password' ? "text" : "password";
      passwordInput.setAttribute("type", type);
      passwordEye.classList.toggle("fa-eye-slash");
  });
}

// Fargelegger input linjer og flytter placeholder text
function inputLinesAnimatios(){
  const usernameInput = document.querySelector(".login-input");
  const passwordInput = document.querySelector(".password-input");

  const userNameUnderlineActive = document.querySelector(".login-input-underline");
  const passwordUnderlineActive = document.querySelector(".login-password-underline");

  const usernameLabel = document.querySelector(".login-username-label");
  const passwordLabel = document.querySelector(".login-password-label");

  usernameInput.addEventListener('focus', function (e) {
    userNameUnderlineActive.classList.add('login-underline-active-to');
    usernameLabel.style.visibility= "visible";
    usernameInput.setAttribute('placeholder', '');
  });

  usernameInput.addEventListener('focusout', function (e) {
    userNameUnderlineActive.classList.remove('login-underline-active-to');
    usernameLabel.style.visibility= "hidden";
    usernameInput.setAttribute('placeholder', 'USERNAME');
  });

  passwordInput.addEventListener('focus', function (e) {
      passwordUnderlineActive.classList.add('login-underline-active-to');
      passwordLabel.style.visibility= "visible";
      passwordInput.setAttribute('placeholder', '');
  } );

  passwordInput.addEventListener('focusout', function (e) {
    passwordUnderlineActive.classList.remove('login-underline-active-to');
    passwordLabel.style.visibility= "hidden";
    passwordInput.setAttribute('placeholder', 'PASSWORD');
  } );
}

// Printer main content for Create Account siden

function createAcountContent(){
mainContent.innerHTML = `

<form id="form" action="index.html" method="post">

  <div class="login-div">

    <div class="username-div">
      <label class="login-username-label">USERNAME</label>
      <input type="text" class="login-input login-input" placeholder="USERNAME" minlength="3" size="30" required>
      <div class="login-underline-inactive"></div>
      <div class="login-underlines login-input-underline"></div>
    </div>

    <div class="username-div">
      <label class="login-username-label">USERNAME</label>
      <input type="mail" class="login-input login-input" placeholder="Mail" minlength="3" size="30" required>
      <div class="login-underline-inactive"></div>
      <div class="login-underlines login-input-underline"></div>
    </div>


    <div class="password-div">
      <div>
        <label class="login-password-label">PASSWORD</label>
      </div>

      <div class="password-wrap">
        <input class="login-input password-input" type="password" placeholder="PASSWORD" minlength="2" size="30" required>
        <i id="toggle_password_eye" class="far fa-eye fa-eye-slash"></i>
      </div>
      <div class="login-underline-inactive"></div>
      <div class="login-underlines login-password-underline"></div>
    </div>

</div>



  <div class="login-btn-div">
    <button class="login-btn" type="submit">LOG IN</button>
    <a href="#">FORGOT PASSWORD?</a>
  </div>
</form>

`
}
