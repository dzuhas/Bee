var file;
function login() {

  var userEmail = document.getElementById("emailField").value;
  var userPass = document.getElementById("hasloField").value;
  

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);

    

  })
  .then(function(){
    window.location ="home.html"
  })
 
};

var firebaseConfig = {
  apiKey: "AIzaSyCSv9tYL-AYq8gw0jsIajt8rVfMFJejc-g",
  authDomain: "penetrator-1d87a.firebaseapp.com",
  databaseURL: "https://penetrator-1d87a.firebaseio.com",
  projectId: "penetrator-1d87a",
  storageBucket: "penetrator-1d87a.appspot.com",
  messagingSenderId: "369212872839",
  appId: "1:369212872839:web:c5a6f3d763cb1adf0fc022",
  measurementId: "G-MSRZX7FTG3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

function beck(){
  window.location ="index.html";

}


function foo(){
  var userSurname = document.getElementById("surname").value;
  var userCompany = document.getElementById("company").value;
  var userJob = document.getElementById("job").value;
  
  
  var userId 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('users/' + userId).update({
      surname: userSurname,
      company : userCompany,
      job : userJob
  } ) .then(function(){window.location ="home.html"})}   

  else {
    console.log("kokon")   
   }
})
}
   
console.log(userId);


  
   
    
    
  
  
  




function writeUserDataOne(userId,email) {
  firebase
  .database()
  .ref('users/' + userId)
  .set({
     //number: uid,
    //username: name,
     email: email
     //profile_picture : imageUrl
   })
   .then(function(){window.location ="register.html"})
   ;
}



function register() {
  var userEmail = document.getElementById("emailField").value;
  var userPass = document.getElementById("hasloField").value;
firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(cred =>{
  
  var user = firebase.auth().currentUser;
  var uid,email;
  
  if (user != null) {
    email = user.email;
    uid = user.uid;  
    console.log(uid);

    writeUserDataOne(uid,email)
 
  }
})
};

 

function logout(){
  firebase.auth().signOut().then(function() {
    window.location ="index.html"
  }).catch(function(error) {
    // An error happened.
  })
}
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}