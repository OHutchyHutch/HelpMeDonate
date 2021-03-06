$(function() {
    $.getJSON('charities/charities.json', function(data) {
      //currentevents
      $.each(data.currentevents, function(key, val) {
        populateCharities(val, "#CurrentEventsCharities")
       })
       $.each(data.environmental, function(key, val) {
        populateCharities(val, "#EnviromentalCharities")
       })
       $.each(data.education, function(key, val) {
        populateCharities(val, "#EducationCharities")
       })

    });
});

function populateCharities(val, location){
  charityName = val.charityName; 
  charityNameSpaces = charityName.replaceAll("-"," ");
  $( location ).append('<a id="'+val.charityName+'LINK" href='+val.charityLink+' style="font-size:inherit;font-weight: normal;"></a>');
  $( '#'+val.charityName+'LINK' ).append( '<div id="'+val.charityName+'"style="width:40%; display:inline-flex; margin:4.5%;"></div>');
  $( '#'+val.charityName ).append( '<div class="card mb-3 my-2 cardoverall" style="max-width: 100%; max-height: 90%;" id="'+ val.charityName +'CARD"></div>');
  $( '#'+val.charityName+'CARD' ).append('<div class="row no-gutters" id="'+ val.charityName +'ROW"></div>');
  $( '#'+val.charityName+'ROW' ).append('<div class="col-md-4" id="'+ val.charityName +'IMAGEHOLD"></div>');
  $( '#'+val.charityName+'IMAGEHOLD' ).append('<img src="'+ val.charityImage +'" class="card-img" alt="IMAGE FAILED TO LOAD">');
  $( '#'+val.charityName+'ROW' ).append('<div class="col-md-8" id="'+val.charityName+'CARDCOL"></div>');
  $( '#'+val.charityName+'CARDCOL' ).append('<div class="card-body" id="'+val.charityName+'CARDBODY"></div>');
  $( '#'+val.charityName+'CARDBODY' ).append('<h5 class="cardTitle"">'+charityNameSpaces+'</h5>').append('<p class="cardText"  style="font-size: .85vw;">'+val.charityGoal+'</p>');
}