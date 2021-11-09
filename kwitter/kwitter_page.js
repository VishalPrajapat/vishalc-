//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user_name");
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message=msg,
       like=0

      });    
      document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=messasge_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
function updateLike(message_id){
console.log("Clicked on Like Button-"+message_id);
button_id=message_id;
likes=document.getElementById("button_id");
updated_likes=Number(likes)+1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({like:updated_likes});
}