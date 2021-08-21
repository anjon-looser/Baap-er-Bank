document.getElementById('login-submit').addEventListener ('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
//   password
  const passwordField = document.getElementById('user-password');
  const userpassword = passwordField.value;

  if(userEmail == 'sontan@gmail.com' && userpassword== 'secret')
  {
   window.location.href = 'banking.html';
  }
   
})