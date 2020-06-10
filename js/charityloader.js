$( "#CurrentEventsButton" ).one('click', function () {
    $.getJSON('charities/charities.json', function(data) {
        $.each(data.currentevents, function(key, val) {
            alert("Now doing : " + val.charityName);
            $( "#CurrentEventsCharities" ).append( "<div id=\""+val.charityName+"\"></div>");
            $( "#"+val.charityName ).append( "<div class=\"card mb-3 my-5\" style=\"max-width: 540px;\" id=\""+ val.charityName +"CARD\"></div>");
            $( "#"+val.charityName+"CARD" ).append("<div class=\"row no-gutters\" id=\""+ val.charityName +"ROW\"></div>");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-4\" id=\""+ val.charityName +"IMAGEHOLD\"></div>");
            $( "#"+val.charityName+"IMAGEHOLD" ).append("<img src=\""+ val.charityImage +"\" class=\"card-img\" alt=\"IMAGE FAILED TO LOAD\">");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-8\" id=\""+val.charityName+"CARDCOL\"></div>")
            $( "#"+val.charityName+"CARDCOL" ).append("<div class=\"card-body\" id=\""+val.charityName+"CARDBODY\"></div>")
            $( "#"+val.charityName+"CARDBODY" ).append("<h5 class=\"card-title\">"+val.charityName+"</h5>").append("<p class=\"card-text\">"+val.charityGoal+"</p>");
            alert("Done Doing : " + val.charityName);
         })
    });
    console.log("Done loading!");
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
