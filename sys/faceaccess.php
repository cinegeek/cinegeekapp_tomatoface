<?php
require 'lib/facebook-php-sdk/src/facebook.php';
// require 'lib/database.php';
$facebook = new Facebook(array(
  'appId'  => '482924718390278',
  'secret' => 'ee7ea8fc2c483cd0e5431720fef74415',
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


