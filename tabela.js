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
      
      //firebase.storage().ref("users/" + uid + "/profile.jpg").getDownloadURL()
      //.then((img)=>{ imgUrl.src = img;
      //})
  
      }
      else 
      {window.location ="index.html"};

      var dil = document.createElement('div');
      dil.innerHTML = `<div id="main2"><div id="person">
          <div id="jpeg">
            
              <img class="Person2"  src="https://via.placeholder.com/150" id="imgUrl" > 

          </div>
             <div id="who">
                <br> <h2 id="who2"></h2>
                          <span id="job"></span><br>
                          <span id="comp"> </span>

             </div>
      </div>
   <div class="aboutcontact">
      <div class="cat">
          <span class="naglowek">O mnie</span><br><br>
          <div id="about">Brak informacji   </div>
      </div>
      <div class="cat">
          <span class="naglowek">Kontakt</span><br><br>
          
          <div id="contact"> Nie podano danych kontaktowych</div>

      </div>
  </div>
</div>`;
      document.body.appendChild(dil);

       // better to use CSS though - just set class
      var bos 
      var jobNew 
      var compNew 
      var aboutNew 
      var contactNew 
       
      var ref = firebase.database().ref("users/"+ uid);
      ref.once("value")

      .then(function(snapshot){
        bos = snapshot.child("surname").val();
        jobNew = snapshot.child("job").val();
        compNew = snapshot.child("company").val();
        aboutNew = snapshot.child("about").val();
        contactNew = snapshot.child("city").val();
        var userId = firebase.auth().currentUser.uid;
        console.log(userId);
        //console.log(kokon);
    
        firebase.database().ref("active/" + userId).update({
          czlow: bos +", " +compNew +", "+jobNew+", "+aboutNew+", "+contactNew
          
          })
          firebase.database().ref('/active/').once('value').then((snapshot) =>{
           var folek = snapshot.child(userId).val();
          document.getElementById("pompka").innerHTML = folek.czlow;

            console.log(folek);
           
          });
       var men = [
        bos ,
        jobNew ,
        compNew ,
        aboutNew ,
       contactNew 
       ]
       var x = people.push(men);   //  the value of x is 5
       console.log(juhas);
       var juhas = firebase.database().ref('active/').limitToLast(100);
       console.log(juhas);
       document.getElementById("pompka").innerHTML = juhas;
var y=x-1
console.log(y)

       console.log(men)
       console.log(people[y][1])
       console.log(people)

       who2.innerHTML = people[y][0];
       job.innerHTML = people[y][1];
       comp.innerHTML = people[y][2];
       about.innerHTML = people[y][3];
       contact.innerHTML = people[y][4];
       console.log(people)
     

      
      })
      
    }
    
    
  
  );
  function logout(){
  firebase.auth().signOut().then(function() {
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
  