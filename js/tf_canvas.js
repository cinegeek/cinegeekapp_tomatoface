 $(document).ready(function(){
   draw(41,13,25);
 });

function draw(radius,xx,yy) {
  var canvas = document.getElementById('canvas_mask');
  if ( ! canvas || ! canvas.getContext ) { alert("false"); }
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.fillStyle = 'rgb(255,255,255)'; 
  ctx.arc(radius+3,radius+3,radius, radius, 80 * Math.PI / 180, true);
  ctx.fill();
  ctx.clip();
  var target = new Image();
  target.src = "img/tomato_face.png";
  target.onload = function() {
  	ctx.drawImage(target, xx,yy);
  }
}

