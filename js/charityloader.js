$( "#CurrentEventsButton" ).one('click', function () {
    console.log("Getting json");
    $.getJSON('charities/charities.json', function(data) {
        console.log("Reading Json");
        $.each(data.currentevents, function(key, val) {
            charityName = val.charityName; 
            charityNameSpaces = charityName.replace('-', ' '); 
            $( "#CurrentEventsCharities" ).append( "<div id=\""+val.charityName+"\"style=\"width:40%; display:inline-block; margin:4.5%;\"></div>");
            $( "#"+val.charityName ).append( "<div class=\"card mb-3 my-5\" style=\"max-width: 100%; max-height: 100%;\" id=\""+ val.charityName +"CARD\"></div>");
            $( "#"+val.charityName+"CARD" ).append("<div class=\"row no-gutters\" id=\""+ val.charityName +"ROW\"></div>");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-4\" id=\""+ val.charityName +"IMAGEHOLD\"></div>");
            $( "#"+val.charityName+"IMAGEHOLD" ).append("<img src=\""+ val.charityImage +"\" class=\"card-img\" alt=\"IMAGE FAILED TO LOAD\">");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-8\" id=\""+val.charityName+"CARDCOL\"></div>")
            $( "#"+val.charityName+"CARDCOL" ).append("<div class=\"card-body\" id=\""+val.charityName+"CARDBODY\"></div>")
            $( "#"+val.charityName+"CARDBODY" ).append("<h5 class=\"card-title\">"+charityNameSpaces+"</h5>").append("<p class=\"card-text\">"+val.charityGoal+"</p>");
            console.log("Initialized " + val.charityName);
         })
         console.log("Everything should be done now!");
    });
    console.log("Goodbye!");
  });

  $( "#TestButton" ).one('click', function () {
    console.log("Getting json");
    $.getJSON('charities/charities.json', function(data) {
        console.log("Reading Json");
        $.each(data.currentevents, function(key, val) {
            charityName = val.charityName; 
            charityNameSpaces = charityName.replace('-', ' '); 
            $( "#TestButton" ).append( "<div id=\""+val.charityName+"\"style=\"width:40%; display:inline-block; margin:4.5%;\"></div>");
            $( "#"+val.charityName ).append( "<div class=\"card mb-3 my-5\" style=\"max-width: 100%; max-height: 100%;\" id=\""+ val.charityName +"CARD\"></div>");
            $( "#"+val.charityName+"CARD" ).append("<div class=\"row no-gutters\" id=\""+ val.charityName +"ROW\"></div>");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-4\" id=\""+ val.charityName +"IMAGEHOLD\"></div>");
            $( "#"+val.charityName+"IMAGEHOLD" ).append("<img src=\""+ val.charityImage +"\" class=\"card-img\" alt=\"IMAGE FAILED TO LOAD\">");
            $( "#"+val.charityName+"ROW" ).append("<div class=\"col-md-8\" id=\""+val.charityName+"CARDCOL\"></div>")
            $( "#"+val.charityName+"CARDCOL" ).append("<div class=\"card-body\" id=\""+val.charityName+"CARDBODY\"></div>")
            $( "#"+val.charityName+"CARDBODY" ).append("<h5 class=\"card-title\">"+charityNameSpaces+"</h5>").append("<p class=\"card-text\">"+val.charityGoal+"</p>");
            console.log("Initialized " + val.charityName);
         })
         console.log("Everything should be done now!");
    });
    console.log("Goodbye!");
  });

