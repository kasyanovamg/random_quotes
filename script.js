  $(document).ready(function() {

    $("#generate").on("click", function(){
      console.log("click");
      var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
      $.getJSON(url, function(json) {
      	console.log("Get Json");
  $(".quote").html(JSON.stringify(json));
});
      
      
      // Only change code above this line.
    });

  });

