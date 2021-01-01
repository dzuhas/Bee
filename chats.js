document.addEventListener("DOMContentLoaded", function(event) { 
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
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user){
      var uid = user.uid;
    
      var ref = firebase.database().ref("users/"+ uid);
    ref.once("value")
    .then(function(snapshot){
     var bos = snapshot.child("surname").val() ;
        console.log(bos);
        const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
        const msgForm = document.getElementById("messageForm"); //the input form
        const msgInput = document.getElementById("msg-input"); //the input element to write messages
        const msgBtn = document.getElementById("msg-btn"); //the Send button
  

  const db = firebase.database();
  const msgRef = db.ref("/msgs"); 
  const id = uuid();
  let name = bos + " " + bos;
  console.log(uuid);
  console.log(id);
  console.log(bos);


  
  
  
  
  msgForm.addEventListener("submit", event => {
  
  event.preventDefault();
    text =    msgInput.value;
    //jesli nie ma zadnej wiadomosci w polu wpisywanym to nic nie robi
    if(!text.trim()) return;

  const msgr={
  id,
  name,
  text,
  };
  msgRef.push(msgr);
  console.log(bos);
  console.log(msgr);
  console.log(name);

  msgInput.value="";
  
  });
  
  const updateMsges = data =>{
    const { id: UserID , name, text} = data.val();
    const msg = `<li class="msg ${id==UserID && "my"}"><span>${name}:${text} </span></li>`;

      
                               
  msgScreen.innerHTML +=msg;
  }
  msgRef.on("child_added", updateMsges);
        
  })}});
  //console.log(bos);

  
});

function logout(){
  firebase.auth().signOut().then(function() {
    window.location ="index.html"
  }).catch(function(error) {
    // An error happened.
  })
}
