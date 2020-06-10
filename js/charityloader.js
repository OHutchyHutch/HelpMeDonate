$( "#CurrentEventsButton" ).click(function() {
    alert("JSON TEST 1");
    $.getJSON('charities/testData.json', function(data) {
        alert("JSON TEST 2");
        $.each(data.currentevents, function(key, val) {
            alert("JSON TEST 3");
            alert(val.charityName);
            alert(val.charityGoal);
            alert(val.charityImage);
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
