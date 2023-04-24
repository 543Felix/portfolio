function validateForm() {
  // Get the values of the input fields
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var msg1 = document.getElementById("msg1")
 
  // Check if the name is not empty
  if (name == "") {
    msg1.innerHTML = "Name must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  //Check if the name contain any number
  if (/\d/.test(name)){
    msg1.innerHTML = "Name must be character"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false
  }
  // Check if the email is valid
  var emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    msg1.innerHTML = "Email must be a valid email address"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  // check if the phonenumber is empty
  if (phonenumber == "") {
    msg1.innerHTML = "phonenumber must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
        }
  // check if the phonenumber is not a number
        if (isNaN (phonenumber)) {
          msg1.innerHTML = "phone number must be numbers"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
              }
  // check if the phonenumber has 10 digits
  if (phonenumber.length<10) {
    msg1.innerHTML = "phone number must contain 10 digits"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
        }
   // check if the phonenumber has 10 digits
        if (phonenumber.length>10) {
          msg1.innerHTML = "phone number must contain 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
              }
  // check if the phonenumber starts with 9,8 or 7
  if( (phonenumber.charAt(0)!=9) && (phonenumber.charAt(0)!=8) && (phonenumber.charAt(0)!=7)) {
    msg1.innerHTML = "phone number must starts with 9,8 or 7"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
        }
  // Check if the Subject is not empty 
  if (subject == "") {
    msg1.innerHTML = "Subject must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }

  // Check if the Message is not empty 
  if (message == "") {
    msg1.innerHTML = "Message must be filled out"
    setTimeout(function(){
            msg1.innerHTML = ""
          },5000)
    return false;
  }
  // If all validations pass, return true to submit the form
  return true;
}