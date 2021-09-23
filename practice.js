
// ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyANjvd31dsE9uIvEr7uVBlEK8YLE3cWWMs",
  authDomain: "kwitter-app-301ef.firebaseapp.com",
  databaseURL: "https://kwitter-app-301ef-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-301ef",
  storageBucket: "kwitter-app-301ef.appspot.com",
  messagingSenderId: "981113015681",
  appId: "1:981113015681:web:709fbb976293f0ebe96c80"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


