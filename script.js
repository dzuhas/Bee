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
people = new Array();

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
firebase.auth().onAuthStateChanged(function(user) {
  if (user){
    img = document.getElementById("imgUrl");
    uid = user.uid;
    console.log("kilo");
    
    firebase.storage().ref("users/" + uid + "/profile.jpg").getDownloadURL()
    .then((img)=>{ imgUrl.src = img;
    })

    }
    else 
    {window.location ="index.html"};

    var bos = document.getElementById("who2");
    var jobNew = document.getElementById("job");
    var compNew = document.getElementById("comp");
    var aboutNew = document.getElementById("about");
    var contactNew = document.getElementById("contact");

    var ref = firebase.database().ref("users/"+ uid);
    ref.once("value")
    .then(function(snapshot){
      bos = snapshot.child("surname").val();
      who2.innerHTML = bos;
      jobNew = snapshot.child("job").val();
      job.innerHTML = jobNew;
      compNew = snapshot.child("company").val();
      comp.innerHTML = compNew;
      aboutNew = snapshot.child("about").val();
      about.innerHTML = aboutNew;
      contactNew = snapshot.child("city").val();
      contact.innerHTML = contactNew;
      
    })
    
  }
  
  

);
function logout(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
})};
function toggle() {
  // Declare variable menu
  let menu = document.getElementById("side-menu");

  // toggle code
  if (menu.style.display === "block") {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
people = new Array();
