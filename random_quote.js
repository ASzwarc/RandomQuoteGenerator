$(document).ready(function() {
  $(clickMeButton).click(function() {
    $.ajax({
      url : "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",
      dataType : "jsonp",
      success : function(json) {
        $("#quote").html(json.quoteText);
        $("#quoteAuthor").html(json.quoteAuthor);
      },
      error : function(xhr, status) {
        alert("Request failed!");
      }
    });
  });
});
