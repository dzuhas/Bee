
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
       var bos = snapshot.child("surname").val();
       var compMes = snapshot.child("company").val();
       var jobMes = snapshot.child("job").val();

          console.log(bos);
          const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
          const msgForm = document.getElementById("messageForm"); //the input form
          const msgInput = document.getElementById("msg-input"); //the input element to write messages
          const msgBtn = document.getElementById("msg-btn"); //the Send button
    

    const db = firebase.database();
    const msgRef = db.ref("/msgs"); 
    const id = uuid();
    let name = bos;
    let persona = compMes+", "+jobMes;
    console.log(uuid);
    console.log(persona);

    console.log(id);
    console.log(bos);
    console.log(msgRef);

    
    
    
    
    msgForm.addEventListener("submit", event => {
     

    event.preventDefault();
      text =    msgInput.value;
      //jesli nie ma zadnej wiadomosci w polu wpisywanym to nic nie robi
      if(!text.trim()) return;

    const msgr={
    id,
    name,
    persona,
    text,
    };
    msgRef.push(msgr);
    console.log(bos);
    console.log(msgr);
    console.log(name);

    msgInput.value="";
    
    });
    
    const updateMsges = data =>{
      const { id: UserID , name,persona, text} = data.val();
      const msg = `<li class="msg ${name==bos && "my"}"><span>${name}, ${persona}:</span><span style=" background-color:white; font-size=large; color:black"> ${text}</span> </li>`;

        
                                 
    msgScreen.innerHTML +=msg;
    pageScroll();
    matches = document.querySelectorAll("li");
    last = matches[matches.length-1];
    last.scrollIntoView();
   
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
  };
  function pageScroll() {
    window.scrollTo(0,document.body.scrollHeight);

}  ;
 
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}        
