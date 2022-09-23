var firebaseConfig = {
    apiKey: "AIzaSyA98p7yzM4fPj-utTO6T3zdE9pc7S41uGM",
    authDomain: "classtest-d8391.firebaseapp.com",
    projectId: "classtest-d8391",
    storageBucket: "classtest-d8391.appspot.com",
    messagingSenderId: "163055066846",
    appId: "1:163055066846:web:37ac499e8cc79798f7ac4f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Wellcome" + user_name + "!";

function adduser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
});
}
function addRoom()
{
Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
purpose : "adding room name"  
});
localStorage.setItem("room_name", Room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/"+ room_name).on('value', function() {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     firebase_message_id = childKey;
mssage_data = childData;

    
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+ name + "<img class='user_tick' src-'tick'"
row = <div class="room_name" id="+Room_names+" onclick="redirectToRoomName"></div>
{

}
    
    });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
function sent() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
})
document.getElementById(msg).value = "";
}