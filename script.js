let profile=document.getElementById('profile-img');
function showSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'visible';
  submenu.style.transition="20s";
}

function hideSubmenu() {
  var submenu = document.getElementById('submenu');
  submenu.style.visibility = 'hidden';
  submenu.style.transition="20s";
}
profile.addEventListener('onmouseover',showSubmenu());
profile.addEventListener('onmouseout',hideSubmenu());


//login button
let btn=document.getElementById('btn');
function login() {
  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  function reset(){
    username.value = '';
    password.value = '';
  }

  // Simple validation (you may want to implement more robust validation)
  if (username === 'akshayrajput2616@gmail.com' && password === 'Cbum@1234') {
      alert('Login successful!');
      window.location.href = 'home.html';
      // Redirect to another page or perform additional actions on successful login
  } else {
      alert('Invalid username or password. Please try again.');
      document.getElementById('loginForm').reset();
  }
}
