$( "#CurrentEventsButton" ).one('click', function () {
    $.getJSON('charities/charities.json', function(data) {
        $.each(data.currentevents, function(key, val) {
            charityName = val.charityName; 
            charityNameSpaces = charityName.replace('-', ' '); 
            $( "#CurrentEventsCharities" ).append( "<div id=\""+val.charityName+"\"style=\"width:40%; display:inline-block; margin:4.5%;\"></div>");
            $( "#"+val.charityName ).append( "<div class=\"card mb-3 my-5\" style=\"max-width: 40%;\" id=\""+ val.charityName +"CARD\"></div>");
            $( "#"+val.charityName+"CARD" ).append("<div class=\"row no-gutters\" id=\""+ val.charityName +"ROW\"></div>");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-4\" id=\""+ val.charityName +"IMAGEHOLD\"></div>");
            $( "#"+val.charityName+"IMAGEHOLD" ).append("<img src=\""+ val.charityImage +"\" class=\"card-img\" alt=\"IMAGE FAILED TO LOAD\">");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-8\" id=\""+val.charityName+"CARDCOL\"></div>")
            $( "#"+val.charityName+"CARDCOL" ).append("<div class=\"card-body\" id=\""+val.charityName+"CARDBODY\"></div>")
            $( "#"+val.charityName+"CARDBODY" ).append("<h5 class=\"card-title\">"+charityNameSpaces+"</h5>").append("<p class=\"card-text\">"+val.charityGoal+"</p>");
         })
    });
  });


  /*
  <div id="CHARITY TITLE" style="width:40%; display:inline-block; margin:4.5%;">
                <div class="card mb-3 my-5 " style="max-width: 100%;">
                            <div class="row">
                              <div class="col-4">
                                <img src="CHARITY IMAGE" class="card-img" alt="...">
                              </div>
                              <div class="col-8">
                                <div class="card-body">
                                  <p class="card-title">CHARITY TITLE</p>
                                  <p class="card-text">CHARITY DESCRIPTION</p>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
  */
