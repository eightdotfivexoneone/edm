

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBAWZRJYlwcpFnvY-0SvNX1-9b8SAvz50I",
    authDomain: "group-project-42118.firebaseapp.com",
    databaseURL: "https://group-project-42118.firebaseio.com",
    projectId: "group-project-42118",
    storageBucket: "group-project-42118.appspot.com",
    messagingSenderId: "305654392101"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  database.ref().on("value", function(snapshot) {
      console.log(snapshot.val());
  });git