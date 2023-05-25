const firebaseConfig = {
  apiKey: "AIzaSyCfAF1lUPpZFjI1UiuUtmwYigQg2vcWunU",
  authDomain: "kuunicorntweeterch.firebaseapp.com",
  databaseURL: "https://kuunicorntweeterch-default-rtdb.firebaseio.com",
  projectId: "kuunicorntweeterch",
  storageBucket: "kuunicorntweeterch.appspot.com",
  messagingSenderId: "615557894339",
  appId: "1:615557894339:web:06155a84de79cf789c5276"
};
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");




 document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";






 function addRoom() {
      room_name = document.getElementById("room_name").value;
   
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
   
      localStorage.setItem("room_name", room_name);


      window.location.replace("page.html");
   
    }






function getRoom() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;


   


      console.log("Room Name - " + Room_names);
row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;




      });});}


  //Cambiar Get Data por Get Room


getRoom();








function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "page.html";
}


//agregar funcion Logout
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}


