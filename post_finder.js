function getTitle(urlText) {
      title = ""
      
      jQuery.ajax({
            url: urlText,
            complete: function(data) {
                  title = data.responseText;
            }
      });
      
      return title
}
