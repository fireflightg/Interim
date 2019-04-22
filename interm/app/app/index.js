firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.


    var user = firebase.auth().currentUser;
    window.location = "index.html"
    if(user != null){
      firebase.auth().signOut();
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      

    }

  } else {
    
    // No user is signed in.


    

  }
});

function login(){

  var userEmail = document.getElementById('username').value;
  var userPass = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

   ons.notification.alert('Incorrect username or password.');

    // ...
  });

}

function logout(){

  firebase.auth().signOut();
  window.location = "login.html"

}

