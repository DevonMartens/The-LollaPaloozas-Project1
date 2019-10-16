console.log("JS loaded");

const API_URL_BASE = 'https://api.spotify.com/v1/search?q=';

$(document).ready(function() {
  const $searchForm = $('#seach-form');
  const $resultsLocation = $("#results-location");
  const $modal = $("#modal");
  const $resultTitle2 = ".result-title-2";
  const $viewAlbumsButton = ".view-albums button";

  // Funciton to get a specific artist's albums and info and print to modal
  var viewArtistAlbums = function(name) {
    $resultsLocation.on('click', name, function(event) {
      event.preventDefault();
      const artistSelected = $(event.currentTarget).data('artistName');
      $(".artist-clicked").html($(event.currentTarget).data(
        'artistName'));
      // Stop the main page from scrolling while modal is displayed (Stack overflow: http://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened)
      $("body").css("overflow", "hidden");

      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q='+ search + '&type=album`,
        })
        .then(function(artists) {
          console.log(artists);
          const compiledTemplate = Handlebars.templates.spotifyListartistalbums({
            artists
          });

          // print new content to the modal
          $("#modal-content").html(compiledTemplate);
          $modal.fadeIn();

        })
        .catch(e => console.error(e));
    });
  };
  viewArtistAlbums($resultTitle2);
  viewArtistAlbums($viewAlbumsButton);

  var viewTrackAlbum = function() {
    $resultsLocation.on('click', '.result-image', function(event) {
      event.preventDefault();
      const albumSelected = $(event.currentTarget).data('albumTitle');
      // Stop the main page from scrolling while modal is displayed (Stack overflow: http://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened)
      // prevent the form from submitting
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${albumSelected}&type=track`,
        })
        .then(function(artists) {
          console.log(artists);
          const compiledTemplate = Handlebars.templates.spotifyListsong({
            artists
          });

          // print new content to the page
          $resultsLocation.html(compiledTemplate);
        })
        .catch(e => console.error(e));
    });
  };



  $("header").on('submit', 'form', function(event) {
    // prevent the form from submitting
    event.preventDefault();
    // stop the event from porpagating
    event.stopPropagation();

    // Get entry data from the form for api URL
    const form = event.currentTarget;
    const inputs = form.elements;
    console.log(inputs);
    const formData = {
      category: inputs.searchCategory.value,
      query: inputs.searchParam.value,
    };
    console.log(formData);

    const runSearchArtist = function() {
      $.ajax({
          type: 'GET',
          url: `https://api.spotify.com/v1/search?q=${formData.query}&type=${formData.category}`,
        })
        .then(function(artists) {
          console.log(artists);
          var compiledTemplate;
          if (formData.category === "artist") {
            compiledTemplate = Handlebars.templates.spotifyListartist({
              artists
            });
          } else if (formData.category === "album") {
            compiledTemplate = Handlebars.templates.spotifyListalbum({
              artists
            });
          } else if (formData.category === "track") {
            compiledTemplate = Handlebars.templates.spotifyListsong({
              artists
            });
            viewTrackAlbum();
          }

          // swap out the destination placeholder with our new HTML
          $resultsLocation.html(compiledTemplate);

          form.reset();
        })
        // .then(printResults)
        .catch(e => console.error(e));
    };
    runSearchArtist();

    // text to display what user searched for after clicking submit
    $("#search-param").html(
      `<h2>You searched for <span class="searched-text">${formData.query}</span> in <span class="searched-text">${formData.category}s</span>.</h2>`
    );

  });
  // event listener to close the modal when the "close" button is clicked and reactive the scroll on the body
  $("#close-modal").on("click", function() {
    $modal.fadeOut();
    $('body').css('overflow', 'auto');
  });
  // event listener to change button text color when mouse hovers
  $("button").on("mouseenter", function() {
    $(this).css("color", "#000");
  });
  $("button").on("mouseleave", function() {
    $(this).css("color", "#FFF");
  });
  // Event listener on title of page to re-set page on click
  $("h1").on("click", function() {
    $resultsLocation.html("");
    $("#search-param").html(
      `<img src="spotify-logo-3.png" width="500px" height="492px" />`
    );
    $("#seach-form").reset();
  });
});