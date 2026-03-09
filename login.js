document.getElementById("signIn-btn").addEventListener("click", function(){
  const userNameInput=document.getElementById("input-userName")
  const userName=userNameInput.value;
  console.log(userName);
  const inputPassword=document.getElementById("input-password")
  const password=inputPassword.value;
  console.log(password);
  if(userName==("admin")&& password==("admin123")){
    alert("Sign In Success")
    window.location.assign("./home.html")
  }
  else{
    alert("Sign In Faield")
    return;
  }
});