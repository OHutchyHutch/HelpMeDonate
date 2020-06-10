$( "#CurrentEventsButton" ).click(function() {
    jQuery.get('charities/test.txt', function(data) {
        alert(data);
        //$('#text').text(data);
     });
  });