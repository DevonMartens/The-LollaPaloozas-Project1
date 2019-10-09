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

//wikipedia api work in progress
 //input class is search
$(document).ready(function(){
   
    $("#findBand").on("click", function() {
        //empty all text segments on click
        $('#summary').empty();
        $('#summaryHeader').empty();

        //variables for search
        var search = $("#search").val();
        var searchPlain = $("#search").val().trim();
      var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + search + ';"
      
      $.ajax({
            url: queryURL,
            method: "GET"
        })

     .then(function(response) {

         var results = response.data;
       
    function displayWikiData(result)
    {
        $("#summary").append(result.html);
    }
    