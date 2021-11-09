//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDUJ63g36WSO-PsABdX31vWAKynV40m_mo",
      authDomain: "kwitter11-7aca0.firebaseapp.com",
      databaseURL: "https://kwitter11-7aca0-default-rtdb.firebaseio.com",
      projectId: "kwitter11-7aca0",
      storageBucket: "kwitter11-7aca0.appspot.com",
      messagingSenderId: "339470314901",
      appId: "1:339470314901:web:e94973e3cec820055f9a9c"
    };
    
   
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name +"!";
function add_room(){
Room_names=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose:"AddingRoomName"});
localStorage.setItem("Room_name",room_name);
window.location=(kwitter_page.html);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names +" onclick='redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;

      //End code 
      });});}
 getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_Name",name);
      window.location="kwitter_page.html"; 
}
// Finish over here//
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location.="index.html";
      }
      