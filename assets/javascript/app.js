
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

      //if not correct
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

function emptyDiv(){//empty all text segments on click
        $('#summary').empty();
    $('#summaryHeader').empty();
     $("section2Header").empty();
     $("section3Header").empty();
    }

  //  function displayWikiData(result){
  //    $("#summaryHeader").innerHTML(title);
      $("#summary").innerHTML(summary);
 //   }
//API for Bandsintown.com
function bandinfo(search){
  var queryURL="https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp";

  $.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
  console.log(response)
})
}

//Search box in nav bandinfo()
$("#findBand").on("click", function(){
  event.preventDefault();
var search=$("#search").val();
spotify(search)
$('#wiki').append("<div id='resultdiv'><a target='_blank' href="queryURL"></div>");
})


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
              //var tittle = data.query.pages[page_id].title
              //var summary = data.query.pages[page_id].extract
            //}
          //})
  
  //results for wiki vairable
   //var results = response.data;
         
  //function added to button click to generate data from wiki api
     
      //API for spotify.com
     // function spotify(search){
    //    var queryURL="https://api.spotify.com/v1/search/" + search + "";
  
   //     $.ajax({
   //       url: queryURL,
    //      method: "GET"
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