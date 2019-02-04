function getTitle(externalUrl){
  var proxyurl = "http/localhost/get_external_content.php?url=" + externalUrl;
  $.ajax({
    url: proxyurl,
    async: true,
    success: function(response) {
      alert(response);
    },   
    error: function(e) {
      alert("error! " + e);
    }
  });
}

function setText(txt) {
  document.getElementById("testText").textContent=txt;
}
