<?php
require 'lib/facebook-php-sdk/src/facebook.php';
// require 'lib/database.php';
$facebook = new Facebook(array(
  'appId'  => '378919358825604',
  'secret' => '82259db82706f23f678d061f41304667',
));
$user = $facebook->getUser();
session_start();
$_SESSION['faceid'] = serialize($facebook);
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl();
} else {
  $loginUrl = $facebook->getLoginUrl();
  header("Location: ".$loginUrl);
}
?>
<!DOCTYPE HTML>
<html lang="ja-JP">
<head>
 <meta charset="UTF-8">
 <script type="text/javascript">
  <? 
  if ($user){
    echo "window.opener.ftStart();";
    echo "window.close();";
  } ?>
 </script>
</head>
<body>
</body>
</html> 


