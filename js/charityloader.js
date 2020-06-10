
 $( "#CurrentEventsButton" ).click(function() {
     alert("click");
    jQuery.get('charities/test.txt', function(data) {
        alert(data);
        //$('#text').text(data);
     });
  });