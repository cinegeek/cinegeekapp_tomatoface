<?php
?>
<!DOCTYPE HTML>
<html lang="ja-JP">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/base.css">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script type="text/javascript" src="js/tf_canvas.js"></script>
	<script type="text/javascript" src="js/title.js"></script>
	<script type="text/javascript" src="js/constr.js"></script>
	<script type="text/javascript" src="js/lib/yuhhh.js"></script>
	<script type="text/javascript">
	 	$(document).ready(function(){
	 		var c = new browsCheck();
			if(c.oldverResult()){
				$("body").html("<p class='iesorry'>お使いのブラウザには対応しておりません。</br>お手数ですがアップデートもしくは他のブラウザでお試しください。")
				return;
			}
			titleSet();
			canvas = document.getElementById('canvas_mask');
			if ( ! canvas || ! canvas.getContext ) {  }
			ctx = canvas.getContext('2d');
			target = new Image();
			target.src = "img/tomato_face.png";
			draw(41,13,85);
			setTimeout("moveObj()",10);
			titleStart();
		});
		function ftStart(){
			opening_flg = true;
			$("#maincontents").animate({
				opacity:"0"
			},1000,"easeOutSine",function(){
				loadCont();
			});
		}
	</script>
	<meta property="og:title" content="映画のモノサシ">
    <meta property="og:description" content="映画評論サイト『Rotten Tomato』であなたの映画センスを評価してもらいましょう。FaceBookで好きな映画を登録して挑戦してみてください。">
    <meta property="og:url" content="http://cinegeek.net/tomatoface/">
    <meta property="og:image" content="http://cinegeek.net/tomatoface/img/socialimg.gif">
    <meta property="og:site_name" content="映画のモノサシ">
	<title>映画のモノサシ</title>
	<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32751939-1']);
  _gaq.push(['_setDomainName', 'cinegeek.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div id="frame_left"></div>
<div id="frame_right"></div>
<div id="frame_bottom"></div>
<div id="frame_top"></div>
<div id="maincontents">
	<div id="top_title">
	  <canvas id="canvas_mask"></canvas>
	  	<img class="circle" src="img/circle.png" alt="circle"/>
	  	<img class="rt_f_title" src="img/title_1.png" alt="Rotten Tomatoes x Facebook"/>
	  	<div id="titobj">
		    <img class="tit t1" src="img/title_2_1.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t2" src="img/title_2_2.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t3" src="img/title_2_3.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t4" src="img/title_2_4.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t5" src="img/title_2_5.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t6" src="img/title_2_6.png" alt="Rotten Tomatoes x Facebook"/>
		  	<img class="tit t7" src="img/title_2_7.png" alt="Rotten Tomatoes x Facebook"/>
		</div>
		<div id="titobj2">
			<p class="font0 title_des">あなたの映画センスを映画評論サイト『Rotten Tomatoe』に評価してもらいましょう！
				Facebookでできるだけ多くの映画にいいねして挑戦してみてください！！<p>
			<a href="javascript:window.open('sys/faceaccess.php','windowname','width=900,height=450');void(0);"><img class="login_btn" src="img/login_btn.jpg" onmouseover="this.src='img/login_btn_on.jpg'" onmouseout="this.src='img/login_btn.jpg'" alt="login"/></a>
		</div>
</div>
<div class="social">
<div class="facebook fb-like" data-href="http://cinegeek.net/tomatoface/" data-send="false" data-layout="button_count" data-width="120" data-show-faces="true"></div>
<div class="twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://cinegeek.net/tomatoface/" data-lang="ja" data-hashtags="tomatoface">ツイート</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div>
<div class="google"><g:plusone size="medium"></g:plusone></div>
<script type="text/javascript">
window.___gcfg = {lang: 'ja'};

(function() {
var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
po.src = 'https://apis.google.com/js/plusone.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
</script>
</div>
</body>
</html> 
