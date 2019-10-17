/*carosol is band pictures*/
/*section 1 id is band summary*/
/*"section1" id is for card*/
/*"section1" id is for card*/
/* section 1 one headline id is id="summary">
/*section 2 id is top hits*/
/*section 2 id="section2"*/
/*header id is topHits*/
/*Section 2 image id topHitsImage*/
/*section 3  is tour cities tour dates*/
/*section 3 id="section3" */
/*section 3 id="tourDatesImage" */
/*section 3 header id="tourDates" */



 // $("#select-artist").on("click", function(event) {
    
 //   event.preventDefault();

  //  var artist = $("#artist-input").val().trim();
   
 //   searchBandsInTown(artist);
   

   
    
  
      //API for spotify.com
  
      // $.ajax(
      //   {
      //     method: "POST",
      //     url: "https://accounts.spotify.com/api/token",
      //     data: {
      //       "grant_type":    "authorization_code",
      //       // "code":          code,
      //       // "redirect_uri":  myurl,
      //       "client_secret": "2ad0f64ad33147c89db3e7f70611d76f",
      //       "client_id":     "0e3ec55812a8435c82f8b0fa2b6d47fd"
      //     },
      //     success: function(result) {
      //       // handle result...
      //     },
      //   }
      // );

    
     // function spotify(search){
    //    var queryURL="https://api.spotify.com/v1/search/" + search + "";
  
   //     $.ajax({
   //       url: queryURL,
          // method: "GET"
   //   })
   //   .then(function(response){
    //    console.log(response)
    //  })
     // }
  
  //Search box in nav spotify()
    //  $("#findBand").on("click", function(){
   //     event.preventDefault();
   //   var search=$("#search").val();
   //   spotify(search)
    //  })
   // })

   //   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=celine%20dion",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//         "x-rapidapi-key": "32114085fbmsh66c0ac35c05497bp1ecb5fjsnda6fe0344e00"
//     }
// }
// $.ajax(settings).done(function (response) {
//     console.log(response);


//on click calling button #findBand//

//section 1 2 3 empy//
//empty carosol logo//

//section 1 summary hit wikipedia api//
//ajax call//

//how example//

//hit headers, phots, text for each section//
//see empty div code from trivia game//

//wikipedia api work in progress
 //input class is search
 //$(document).ready(function(){
  //button is #finBand for searching
      //$("#findBand").on("click", function() {
       // emptyDiv();
        //getSummaryCard();
        //displayWikiData();
  //});
    // empty all divs

  
  //function for wiki api
  

  $(document).ready(function() {
    /* when form is submitted */
   // $('.form').submit(function(){
   //   $('#wiki').html(" "); // set innerHtml of res div as blank
  //    callWikipedia();
  //    return false;
  //  });
    /* when search button is clicked */
    $('#findBand').click(function(){
      $('#wiki').html(" ");
      callWikipedia();
      emptyDiv();
    });
    function callWikipedia(){
      var q = $('#search').val();
      var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+q+"&callback=?";
      $.ajax({
        url:url,
        type: 'POST',
        dataType: 'jsonp',
        success: function(result){
          var data = result.query.pages;
          render(data);
        },
        error: function(err){
          console.log(err);
          alert('Oops something went wrong! Please try again.');
        }
      });
    }
    /* render function to append the search result pages */
    function render(data){
      var pageurl="http://en.wikipedia.org/?curid=";
      for(var i in data){
        $('#wiki').append("<div id='resultdiv'><a target='_blank' href='"+pageurl+data[i].pageid+"'><h3>"+data[i].title+"</h3><p>"+data[i].extract+"</p></a></div>");
      }
    }
  });
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://deezerdevs-deezer.p.rapidapi.com/search?q=celine%20dion",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
//         "x-rapidapi-key": "32114085fbmsh66c0ac35c05497bp1ecb5fjsnda6fe0344e00"
//     }
// }
// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
  function emptyDiv(){//empty all text segments on click
          $('#summary').empty();
      $('#summaryHeader').empty();
       $("#section2Header").empty();
       $("section3Header").empty();
      }
   
  //function getSummaryCard(search, page_id, func)
          //variables for search
          //var searchPlain = ("#search").val().trim();      
          //takes text from search bar turns it into a variable called search
          //every api needs search variable added to the end of thier link
          //var search = $("#search").val();
        //var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + search;
        //$.ajax({
              //url: queryURL,
              //method: "GET",
        //please look at
          //data: {
              //action:'parse',
              //prop:"text",
              //page: title,
              //page: extract,
              //format:'json'
            //},
            //dataType:'jsonp',
            //success: function(data){
              //var title = data.query.pages[page_id].title
              //var summary = data.query.pages[page_id].extract
            //}
          //})
  
  //results for wiki vairable
   //var results = response.data;
         
  //function added to button click to generate data from wiki api
         function displayWikiData(result){
            $("#summaryHeader").innerHTML(title);
            $("#summary").innerHTML(summary);
          }
 
  
  //Search box in nav bandinfo()
      $("#findBand").click("click", function(){
        event.preventDefault();
      var search=$("#search").val();
      bandinfo(search)
      })
  //API for Bandsintown.com
       function bandinfo(search){
        var queryURL="https://rest.bandsintown.com/artists/" + search + "/events?app_id=1ec373d0-aa4c-4ebb-a8aa-dfb1bf024661";
  
        $.ajax({
          url: queryURL,
          method: "GET"
      })
      .done(function(response){
        console.log(response)
     
      var artistName = (response.name).innerHTML();
    
      var artistURL = $("<a>").attr("href", response.url).append(artistName);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var trackerCount = $("<h2>").text(response.tracker_count + "Artist Fans");
      var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " see events");
      var Artist = $("<a>").attr("href", response.url).text("See Tour Dates");
     
      $('#section2Header').append(artistName)
      $("#music").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
    });
    // Using jQuery, append the following to the #artist-div :
    // The artist's name
    // The artists thumbnail image
    // The number of fans tracking this artist
    // The number of upcoming events for this artist
    // A link to the bandsintown url for this artist
    // Note: Append actual HTML elements, not just text
  }
