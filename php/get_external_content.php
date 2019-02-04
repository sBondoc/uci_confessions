<?php
public function actionGetUrl($url)
{
    $str = file_get_contents($url);
    // index of the opening-tag + the length of needle
    $openTag = strpos($str,"<title>") +7;
    // index of the ending tag
    $endTag = strpos($str,"<\/title>");
    // extract the bit between
    $title = substr($str, $openTag, ($endTag - $openTag));
    
    return $title
}
?>
