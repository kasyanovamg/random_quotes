  $(document).ready(function() {
	getQuote()
    $("#generate").on("click", function(){
      	getQuote()
	});

});

function getQuote() {
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(json) {
        	if (json.quoteAuthor === "") {
        		json.quoteAuthor = "Unknown Author";
        	}
  			var html = "";

  			html += "<div class = 'cat'>";	
    		html += "<strong>" + json.quoteAuthor + "</strong>: " + json.quoteText + "<br>";  	
  			html += "</div><br>";
			
			$(".quote").html(html);
    	
    	$("#tweet").on("click", function(){
      	$(this).attr("href", "https://twitter.com/intent/tweet?text=" + json.quoteText + " - " + json.quoteAuthor)
	});
	});
}
