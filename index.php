<?php
?>
<!DOCTYPE HTML>
<html lang="ja-JP">
<head>
 <meta charset="UTF-8">
 <link rel="stylesheet" href="css/style.css">
 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
 <script type="text/javascript" src="js/tf_canvas.js"></script>
 <script type="text/javascript" src="js/title.js"></script>
 <script type="text/javascript">
 	$(document).ready(function(){
	 titleSet();
	  canvas = document.getElementById('canvas_mask');
	  if ( ! canvas || ! canvas.getContext ) { alert("false"); }
	  ctx = canvas.getContext('2d');
	  target = new Image();
	  target.src = "img/tomato_face.png";
	 draw(41,13,85);
	 setTimeout("moveObj()",10);
	});
	$(window).load(function(){
		titleStart();
	});
	function ftStart(){
		$("#top_title").css({
			opacity:"0"
		},2000);
	}
 </script>
 <title></title>
</head>
<body>
<div id="frame_left"></div>
<div id="frame_right"></div>
<div id="frame_bottom"></div>
<div id="frame_top"></div>
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
	<p class="font1 title_des">あなたの映画センスを映画評論サイト『Rotten Tomatoe』に評価してもらいましょう！
		Facebookでできるだけ多くの映画にいいねして挑戦してみてください！！<p>
	<a href="javascript:window.open('sys/faceaccess.php','windowname','width=900,height=450');"><img class="login_btn" src="img/login_btn.jpg" onmouseover="this.src='img/login_btn_on.jpg'" onmouseout="this.src='img/login_btn.jpg'" alt="login"/></a>
</div>
</body>
</html> 
