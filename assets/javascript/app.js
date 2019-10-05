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




//on click calling button #findBand//

//section 1 2 3 empy//
//empty carosol logo//

//section 1 summary hit wikipedia api//
//ajax call//

//how example//

//hit headers, phots, text for each section//
//see empty div code from trivia game//
$(document).on("click", ".topics", function () {

    $('#gifArea').empty();

    $('#addTopic').removeClass("active");

    $(this).addClass('active');



    var type = $(this).attr("data-type");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=gAqN16PRJ6aBi1cl5I5ZqVkcFB8zp3WG";

   console.log(queryURL);

   $.ajax ({

       url: queryURL,

       method: "GET"

   })



.then(function(response) {

    var results = response.data;

   console.log(results);

   for (var i = 0; i < results.length; i++) { 

       var animalDiv = $("<div class=\"animal-item\">");

   