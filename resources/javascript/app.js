$( document ).ready(function() {

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

    var name = "";
    var role = "";
    var startDate = "";
    var rate = 0;


database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());


    name = snapshot.val().name;
    role = snapshot.val().role;
    startDate = snapshot.val().startDate;
    rate = snapshot.val().rate;

    $("#user-name").append(snapshot.val().name);
    $("#user-role").append(snapshot.val().role);
    $("#user-startdate").append(snapshot.val().startDate);
    $("#user-rate").append(snapshot.val().rate);

    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
});

$("#submit").on("click", function(event) {
    event.preventDefault();

    var userName = $("#user-name").val().trim();
    var userRole = $("#user-role").val().trim();
    var userStartDate = $("#user-startdate").val().trim();
    var userRate = $("#user-rate").val().trim();
    $("#new-name").append(userName);
    $("#new-role").append(userRole);
    $("#new-startdate").append(userStartDate);
    $("#new-monthlyrate").append(userRate);
    console.log(userName);
    console.log(userRole);
    console.log(userStartDate);
    console.log(userRate);
// database.ref().set({
    database.ref().push({
        name: userName,
        role: userRole,
        startDate: userStartDate,
        rate: userRate,
        });
            
    });
});