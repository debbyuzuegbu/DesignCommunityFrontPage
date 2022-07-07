function verifypassword() {
  var pw = document.getElementById("password").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("").innerHTML = "**Fill the password please!";
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("validate1").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("validate1").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  } else {
    alert("Password is correct");
  }
}

function accountCreated() {
  alert("account created");
}
