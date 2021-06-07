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
