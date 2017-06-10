


$(document).ready(function() {
  $(clickMeButton).click(function() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(response) {
      console.log(JSON.stringify(response));
    });
    });
  });
