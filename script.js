  $(document).ready(function() {

    $("#generate").on("click", function(){
      // Only change code below this line.
      $.getJSON("quotes.json", function(json) {
  $(".quote").html(JSON.stringify(json));
});
      
      
      // Only change code above this line.
    });

  });

