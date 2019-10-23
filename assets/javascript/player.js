i   
//display bands in town
// function displayBands

//Search box in nav bandinfo()

//API for Bandsintown.com
  function searchBandsInTown(){
    var q = $('#search').val();
    var queryURL="https://rest.bandsintown.com/artists/" + search + "?app_id=codingbootcamp";
// devons api key    
    $.ajax({
      url: queryURL,
      method: "GET"
  })
  .done(function(response){
    console.log(response)

  
  $('#section2Header').append(artistName)
  $("#music").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
});

}
function displayBands() {
var artistName = (response.name).innerHTML();

  var artistURL = $("<a>").attr("href", response[i].url).append(artistName);
  var artistImage = $("<img>").attr("src", response.thumb_url);
  var trackerCount = $("<h2>").text(response.tracker_count + "Artist Fans");
  var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " see events");
  var Artist = $("<a>").attr("href", response.url).text("See Tour Dates");

}

