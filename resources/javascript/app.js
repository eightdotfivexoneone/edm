

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
    
    // database.ref().set({
    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate,
        });



    $("#user-name").text(snapshot.val().name);
    $("#user-role").text(snapshot.val().role);
    $("#user-startdate").text(snapshot.val().startDate);
    $("#user-rate").text(snapshot.val().rate);

    $("#submit").on("click", function(event) {
        event.preventDefault();

        var userName = $("#user-name").val().trim();
        var userRole = $("#user-role").val().trim();
        var userStartDate = $("#user-startdate").val().trim();
        var userRate = $("#user-rate").val().trim();
        $("#user-name").text(userName);
        $("#user-role").text(userRole);
        $("#user-startdate").text(userStartDate);
        $("#user-rate").text(userRate);
    });
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });