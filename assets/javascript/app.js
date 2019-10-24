$(document).ready(function(event) {
$("#section2").hide();
$("#section3").hide();
})


$('#findBand').click(function(event){
  event.preventDefault();
  $("#section2").show();
$("#section3").show();
  emptyDiv();
  $('#wiki').html(" ");
  callWikipedia();
  youtube();
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
// });
//empy things
function emptyDiv(){//empty all text segments on click
      $('#summary').empty();
  $('#summaryHeader').empty();
   
   $("section3Header").empty();
  
  }


     
//function added to button click to generate data from wiki api
//     function displayWikiData(result){
//        $("#summaryHeader").innerHTML(title);
//        $("#summary").innerHTML(summary);
//      }

function youtube(){
var apikey = "AIzaSyAdeXedrQHvc3vYhOPV9r-XVrGTQ9RvYdw"
var yapiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="
var ysearch = " "
var typevideo = "&type=video"
var ysearch =$("#search").val().trim()
var yTURL = yapiURL + ysearch + typevideo + "&key=" + apikey
  $.ajax({
      url:yTURL,
      method:"GET"

  }).then(function (response) {
  
      var videoToPlay = (response.items["0"].id.videoId)
      const videoURL = "https://www.youtube.com/embed/" + videoToPlay

      $("#music").html(`
      <iframe class="border solid 4px border-light" width="560" height="315" src="${videoURL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`) 
});

}