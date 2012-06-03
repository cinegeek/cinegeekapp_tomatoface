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
var rightflg = false;

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
    setTimeout(moveObj,10);
    return;
  }else if(bup == true && rmv == true){
    setTimeout(moveObj2,3000);
  }else if(bup == false && rmv == true){
    setTimeout(moveObj2,10);
  }else if(bup == false && rmv == false){
    if(leftflg == false && rightflg == false){
      setTimeout(moveObj3,1000);
    }else if(leftflg == true && rightflg == false){
      setTimeout(moveObj4,10);
    }else if(leftflg == false && rightflg == true){
      setTimeout(moveObj5,3000);
    }else if(leftflg == true && rightflg == true){
      setTimeout(moveObj6,10);
    }
  }
}
function moveObj(){
  if(y > 46){
    y += (45 -y)*0.02;
  }else if(y < 46){
    y += (25 -y)*0.06;
  }
  if(y < 27){
    rmv = true;
  }
  draw(rad,x,y);
}
function moveObj2(){
  bup = false;
  if(y < 86){
    y += (86 -y)*0.06;
  }
  if(y > 85){
    rmv = false;
  }
  draw(rad,x,y);
}
function moveObj3(){
  leftflg = true;
  x = 85;
  y = 15;
  draw(rad,x,y);
}
function moveObj4(){
  if(x > 45){
    x += (45 - x)*0.06;
  }
  if(x < 46){
    rightflg = true;
    leftflg = false;
  }
  draw(rad,x,y);
}
function moveObj5(){
  rightflg = true;
  leftflg = true;
  draw(rad,x,y);
}
function moveObj6(){
  x += (85 - x) * 0.06;
  if(x > 84){
    x = 13;
    y = 85;
    bup = true;
    rmv = false;
    rightflg = false;
    leftflg = false;
  }
  draw(rad,x,y);
}


