$(document).ready(function() {
  getQuote();
  var english = true;
  $("#russian").on("click", function() {
    english = false;
    getQuoteRU();
  });
  $("#english").on("click", function() {
    english = true;
    getQuote();
  });


$("#generate").on("click", function(){
  if (english) {
      	getQuote();
  } else {
        getQuoteRU();
       }
	});

});

function getQuote() {
    $(".header").html("Generate and tweet random quotes every day!");
    $("#generate").html("Generate another quote");
    $("#shareTwit").html(" Tweet ");

	  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
        $.getJSON(url, function(json) {
        	if (json.quoteAuthor === "") {
        		json.quoteAuthor = "Unknown";
        	}
  			var html = "";

  			html += "<div class = 'text'>";
  			html += '<i class="fa fa-quote-left" aria-hidden="true"></i>' + ' ';
  			html += json.quoteText;
  			html += "</div><br>"
  			html += "<div class = 'author'>";
  			html += '<i class="fa fa-quote-right" aria-hidden="true"></i>' + ' ';
  			html += json.quoteAuthor;
  			html += "</div><br>"
 			
			$(".quote").html(html);
    	
    	$("#tweet").on("click", function(){
      		$(this).attr("href", "https://twitter.com/intent/tweet?text=" + json.quoteText + " - " + json.quoteAuthor);
		  });

	    });
    var color = randomColor();
	  $("body").css("background", color);
}


function getQuoteRU() {
  $(".header").html("Генерируйте и делитесь в твиттере новыми цитатами каждый день!");
  $("#generate").html("Следующая цитата");
  $("#shareTwit").html(" Поделиться в твиттере ");

  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?";
        $.getJSON(url, function(json) {
          if (json.quoteAuthor === "") {
            json.quoteAuthor = "Автор неизвестен";
          }
        var html = "";

        html += "<div class = 'text'>";
        html += '<i class="fa fa-quote-left" aria-hidden="true"></i>' + ' ';
        html += json.quoteText;
        html += "</div><br>"
        html += "<div class = 'author'>";
        html += '<i class="fa fa-quote-right" aria-hidden="true"></i>' + ' ';
        html += json.quoteAuthor;
        html += "</div><br>"
      
      $(".quote").html(html);
      
      $("#tweet").on("click", function(){
          $(this).attr("href", "https://twitter.com/intent/tweet?text=" + json.quoteText + " - " + json.quoteAuthor);
    });

  });
  var color = randomColor();
  $("body").css("background", color);
}

