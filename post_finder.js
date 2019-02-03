function setText(text) {
      document.getElementById("testText").innerHTML = text
}

function getTitle(urlText) {
      var title = "nope"
      
      jQuery.ajax({
            url: urlText,
            complete: function(data) {
                  title = data.responseText;
            }
      });
      
      return title
}
