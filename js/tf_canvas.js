var canvas;
var ctx;
var target;
var num = 0.1;
var x = 13;
var y = 85;
var rad = 42;
var bup = true;
var rmv = false;
var leftflg = false;

$(document).ready(function(){
  canvas = document.getElementById('canvas_mask');
  if ( ! canvas || ! canvas.getContext ) { alert("false"); }
  ctx = canvas.getContext('2d');
  target = new Image();
  target.src = "img/tomato_face.png";
 draw(41,13,85);
 setTimeout(moveObj(1),10);
});

function draw(radius,xx,yy) {
  ctx.clearRect(0, 0,500,500);
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = 'rgb(255,255,255)'; 
  ctx.arc(radius+3,radius+3,radius, radius, 80 * Math.PI / 180, true);
  ctx.fill();
  ctx.clip();
  ctx.drawImage(target, xx,yy);
  if(bup == true && rmv == false){
    setTimeout(moveObj(1),10);
    return;
  }else if(bup == true && rmv == true){
    setTimeout(moveObj(2),3000);
    return;
  }else if(bup == false && rmv == true){
    setTimeout(moveObj(2),10);
    return;
  }else if(bup == false && rmv == false){
    if(leftflg == false){
      setTimeout(moveObj(3),3000);
      return;
    }else if(leftflg == true){
      setTimeout(moveObj(4),10);
      return;
    }
  }
}
function moveObj(num){
  switch(num){
    case 1:
    if(y > 46){
      y += (45 -y)*0.02;
    }else if(y < 46){
      y += (25 -y)*0.06;
    }
    if(y < 27){
      rmv = true;
    }
    draw(rad,x,y);
    break;

    case 2:
    bup = false;
    if(y < 86){
      y += (86 -y)*0.06;
    }
    if(y > 85){
      rmv = false;
    }
    draw(rad,x,y);
    break;

    case 3:
    leftflg = true;
    x = 85;
    y = 15;
    draw(rad,x,y);
    break;

    case 4:
    if(x > 45){
      x += (45 - x)*0.06;
    }
    draw(rad,x,y);
    break;
  }
}


