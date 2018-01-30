

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiBPOb6Wi-Uv-_mTo20At3giZjtHOzR_k",
  authDomain: "social-network-dbdb5.firebaseapp.com",
  databaseURL: "https://social-network-dbdb5.firebaseio.com",
  projectId: "social-network-dbdb5",
  storageBucket: "",
  messagingSenderId: "402201670261"
};

firebase.initializeApp(config);

$("#buttonGoogle").click(function() {
  authGoogle();
})

function authGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

function authentication(provider) {
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result);
    // ...
  })
  .catch(function(error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);
    // ...
  });
}
