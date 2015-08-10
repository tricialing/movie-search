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
        $("img").attr("src", response.Poster);
        $(".details").html('<h2>' + response.Title + '</h2><h3>Released Date: </h3> <p>' + response.Released + '</p> <h3>Actors: </h3> <p>'+ response.Actors + '</p> <h3>Plot: </h3> <p>' + response.Plot + '</p> <h3>Runtime: </h3> <p>' + response.Runtime + '</p>');
        // Get poster
        // var poster = function(response){
        //   $("img").attr("src", response.Poster);
        //   console.log("poster");
        // };
    }


    $.ajax({
      type: "GET",
      url: "http://www.omdbapi.com/?t=" + title,
      dataType: "JSON",
      success: successFunction
    });
  }; //end of searchStart






    //Get details
    // var keys = Object.keys(response);

});
