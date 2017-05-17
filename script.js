//Author: Lucas Strycker
//CINS110 Final Project
function Register(){
  var user = document.getElementById("username").value;
  if(user.length > 20 || user.length <= 6 || user == user.toLowerCase){
    document.getElementById("isUserRight").innerHTML = "Invalid username. Username must be longer than 6 characters and less than or equal to 20 characters. Username must also contain one uppercase letter.";
    //alert("Invalid username. Username must be longer than 6 characters and less than or equal to 20 characters. Username must also contain one uppercase letter.");
  }
  var pass = document.getElementById("password").value;
  if(pass == "password123" || pass.length < 6){
    document.getElementById("isPassRight").innerHTML = "Invalid password. Password must be longer than 6 characters, and cannot be 'password 123.'";
  }
  if(user.length < 20 && user.length > 6 && user != user.toLowerCase){
    document.getElementById("isUserRight").innerHTML = "Username is set!";
    if(pass != "password123" && pass.length > 6){
      document.getElementById("isPassRight").innerHTML = "Password is set!";
      var aCheck = document.getElementById("clearance");
      var isAdmin = false;
      if(aCheck.checked == true){
        isAdmin = true;
      }

      var account = [user, pass, isAdmin];
      var acc = account.join('|');
      console.log(acc);
      setCookie("Account", acc, 3);
      document.getElementById("isRegistered").innerHTML = "Successfully registered!";

    }
  }
}
function logIn(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var account = getCookie("Account");
  var acc = account.split('|');

  var uName = acc[0];
  var uPass = acc[1];
  console.log(account);
  console.log(acc);
  console.log(uName);
  console.log(uPass);

  if(user == uName && pass == uPass){
    if(acc[2] == "true"){
      document.getElementById("adminPage").innerHTML = "Successfully logged in as administrator!";
      document.getElementById("isUserRight").innerHTML = "";

    }
    else{
      document.getElementById("userPage").innerHTML = "Successfully logged in as user!";
      document.getElementById("isUserRight").innerHTML = "";

    }
  }
  else{
    document.getElementById("adminPage").innerHTML = "";
    document.getElementById("userPage").innerHTML = "";
    document.getElementById("isUserRight").innerHTML = "Invalid username or password.";
  }
}

//Cookie functions are from w3 schools. https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
