$( "#CurrentEventsButton" ).click(function() {
    $.getJSON('charities/charities.json', function(data) {
        $.each(data.currentevents, function(key, val) {
            $( "#CurrentEventsCharities" ).append( "<div id=\""+val.charityName+"\"></div>");
            alert("TEST:"+val.charityName);
            $( "#"+val.charityName ).append( "<div class=\"card mb-3 my-5\" style=\"max-width: 540px;\" id=\""+ val.charityName +"CARD\"></div>");
            alert("TEST:"+val.charityName);
            $( "#"+val.charityName+"CARD" ).append("<div class=\"row no-gutters\" id=\""+ val.CharityName +"ROW\"></div>");
            alert("TEST:"+val.charityName);
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-4\" id=\""+ val.CharityName +"IMAGEHOLD\"></div>");
            alert("TEST:"+val.charityName);
            $( "#"+val.charityName+"IMAGEHOLD" ).append("<img src=\""+ val.charityImage +"\" class=\"card-img\"");
         })
    });
  });


  /*
  <div id="CHARITY TITLE">
    <div class="card mb-3 my-5" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="CHARITY IMAGE" class="card-img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">CHARITY TITLE</h5>
                      <p class="card-text">CHARITY DESCRIPTION</p>
                    </div>
                  </div>
                </div>
        </div>
    </div>
  */
