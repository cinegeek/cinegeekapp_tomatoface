<?php
require_once("lib/movie/rottentomato.php");
require_once("lib/yuhhh/translate.php");
$trans = new Translator();
$rapi = new RottenAPI();
$m = $trans->TranslateToEn($_POST['str']);
echo "<p>".$m."</p>";
echo "<p><img class='rtimg' src='".$rapi->get_poster($m)."'/></p>";
echo "<p class='point'>".$rapi->get_point($m)."</p>";