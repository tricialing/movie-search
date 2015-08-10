$(document).ready(function(){
  console.log("linked");

  // hit enter to search
  $('#search-form').submit(function(){
    event.preventDefault();

    var title = $('#search-box').val();
    searchStart(title);
    console.log("title: "+ title);
  });

  var searchStart = function(title){

    var successFunction = function(response){
        console.log(response);
    }

    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t=" + title,
      dataType: "JSON",
      success: successFunction
    });
  }; //end of searchStart




    //Get poster
    // var poster = function(response){
    //   $("img").attr("src", response.Poster);
    //   console.log("poster");
    // };

    //Get details
    // var keys = Object.keys(response);

});
