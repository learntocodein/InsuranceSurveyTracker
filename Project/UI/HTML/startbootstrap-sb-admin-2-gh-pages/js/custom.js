function tabSwitch(obj, value) {
    switch (value) {
        case "iC":
            document.getElementById("IC").className = "show";
            document.getElementById("IOffice").className = "hide";
            document.getElementById("VM").className = "hide";
            document.getElementById("VA").className = "hide";
            break;
        case "iOffice":
            document.getElementById("IOffice").className = "show";
            document.getElementById("IC").className = "hide";
            document.getElementById("VM").className = "hide";
            document.getElementById("VA").className = "hide";
            break;
        case "vM":
              document.getElementById("VM").className = "show";
              document.getElementById("IC").className = "hide";
              document.getElementById("IOffice").className = "hide";
              document.getElementById("VA").className = "hide";
              break;    
        case "vA":
              document.getElementById("VA").className = "show";
              document.getElementById("VM").className = "hide";
              document.getElementById("IC").className = "hide";
              document.getElementById("IOffice").className = "hide";
                break;
            
    }
    $( "li.nav-item" ).find( "a" ).removeClass("active");
    $(obj).addClass("active");
}

anychart.onDocumentReady(function () {

    // JSON data
    var json = {
      // chart settings
      "chart": {
        // chart type
        "type": "column",
        // set chart title
        "title": "Planning vs Actual Overview",
        // series settings
        "series": [{
  // first series data
  "data": [
    {"x": "WFO", "value": "75"},
    {"x": "WFH", "value": "10"},
    {"x": "Planned", "value": "5"},
    {"x": "Unplanned", "value": "10"},
    {"x": "Total", "value": "100"}
  ]
        },{
  // second series data
  "data": [
    {"x": "WFO", "value": "70"},
    {"x": "WFH", "value": "15"},
    {"x": "Planned", "value": "10"},
    {"x": "Unplanned", "value": "5"},
    {"x": "Total", "value": "100"}
  ]
        }],
        // chart container
        "container": "container"
      }
    };
  
    // get JSON data
    var chart = anychart.fromJson(json);
  
    // draw chart
    chart.draw();
  });

  $(document).ready(function() {    

    $('#ddlFacility').multiselect({
        includeSelectAllOption: true,
    });


    $('#radioBtn a').on('click', function(){
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#'+tog).prop('value', sel);
        
        $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
    });

    

});


      


