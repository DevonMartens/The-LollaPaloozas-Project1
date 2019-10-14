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
      emptyDiv(); 
      getSummaryCard();
       
       
      function emptyDiv() //empty all text segments on click
        $('#summary').empty();
        $('#summaryHeader').empty();
        $("section2Header").empty();
        $("section2").empty();
        $("section3").empty();
        $("section3Header").empty();
       )

//function for wiki api

function getSummaryCard(search, page_id, func)
        //variables for search
        var searchPlain = ("$search").val();        
        //takes text from search bar turns it into a variable called search
        var search = $("#search").val().trim();
      var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=' + search;
      $.ajax({
            url: queryURL,
            method: "GET"
       
        data: {
            action:'parse',
            prop:"text",
            page: tittle,
            page: extract,
            format:'json'
          },
          dataType:'jsonp',
          success: function(data) {
            var tittle = data.query.pages[page_id].tittle
            var summary = data.query.pages[page_id].extract
          }
        })


     //    var results = response.data;
        

       function displayWikiData(result)
    $("#summaryHeader").innerHTML(tittle));
   $("#summary").innerHTML(summary);
        }

        });
    }
    