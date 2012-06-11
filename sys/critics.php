<?php
require_once("lib/rotten/rotten_func.php");
require_once("lib/yuhhh/Translate.php");
$m = TranslateToEn($_POST['str']);
echo $m.get_point($m);