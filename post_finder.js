function setText(text) {
      document.getElementById("testText").innerHTML = text;
}

function getTitle(urlText) {
      var title = "nope";
      
      jQuery.ajax({
            url: "https://www.facebook.com/Confessions.UCI/posts/296931287675788",
            complete: function(data) {
                  console.log(data.responseText);
            }
      });
      
      return title;
}
