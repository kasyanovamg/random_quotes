  $(document).ready(function() {
	getQuote()
    $("#generate").on("click", function(){
      	getQuote()
	});

});

function getQuote() {
	var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(json) {
        	if (json.quoteAuthor === "") {
        		json.quoteAuthor = "Unknown Author";
        	}
  			var html = "";

  			html += "<div class = 'quotes'>";	
    		html += "<strong>" + json.quoteAuthor + "</strong>: " + json.quoteText + "<br>";  	
  			html += "</div><br>";
			
			$(".quote").html(html);
    	
    	$("#tweet").on("click", function(){
      	$(this).attr("href", "https://twitter.com/intent/tweet?text=" + json.quoteText + " - " + json.quoteAuthor)
	});
	});
    var color = randomColor();
	$("body").css("background", color);
}


