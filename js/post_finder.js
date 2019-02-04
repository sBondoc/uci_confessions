/*
function getTitle(externalUrl){
  var proxyurl = "https://sBondoc.github.io/uci_confessions/php/get_external_content.php?url=" + externalUrl;
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
*/
function setText(txt) {
  document.getElementById("testText").textContent=txt;
}

function titleAlert() {
$.ajax({
    url: "<?php echo Yii::app()->createUrl('post/geturl', array('url' => 'http://bbc.co.uk)); ?>",
    success: function(data) {
        strang= String(data);
        openTag = strang.indexOf("<title>") +7 ;
        endTag = strang.indexOf("<\/title>");
        title = strang.substring(openTag,endTag)
        alert(title);
    }   
});
}
