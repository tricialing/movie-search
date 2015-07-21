$(document).ready(function(){
  console.log("linked");

  var searchStart = function(title){

    $.ajax({
      type: "GET", 
      url: 'http://www.omdbapi.com/?t=' + title,
      dataType: "JSON",
      success: function(response){
        console.log(response);
      }
    });
  };

  $('#search-form').submit(function(){
    event.preventDefault();
    searchStart($('#search-box').val());
    // console.log($('#search-box').val());
  });

});


  // var successFunction = function(response){
  //   console.log("yes");
  // };

   // var keys = ['Title', 'Year'];
  // $('#search-form').submit(function(){
  //   event.preventDefault();
  // });



