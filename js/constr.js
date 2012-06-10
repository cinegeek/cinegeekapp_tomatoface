var m_count = 0;
var m_count_max = 0;
function loadCont(){
	$("#maincontents").html("<div class='loadingimg'><img src='img/loadinfo.gif'/></div><div id='contents'><div class='face'></div><div class='tomatomen'></div></div>");
    $(".tomatomen").html("<img src='img/tomatomen.png'/>");
	$("#maincontents").animate({
		opacity:"1"
	});
    $('.face').css("opacity","0");
	XMLHttpRequestByPost("name",0);
}
function createXMLHttpRequest(){
    if(window.addEventListener){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject("Microsoft.XMLHTTP");
    }

}
function XMLHttpRequestByPost(postdata,num){

    var request = createXMLHttpRequest();

    /* ステータス( 読み込み中なのか完了したのか) が変更されたら、readyStateChangeHandler を実行 */
    request.open("POST", "sys/catch.php" , true);
    request.onreadystatechange = readyStateChangeHandler;
    request.setRequestHeader( "Content-Type" ,  "application/x-www-form-urlencoded");
    request.send("value=" + postdata + "&fm_num=" + num);
    function readyStateChangeHandler(){
        switch(request.readyState){
            case 4:
            if(postdata == "name"){
                /* 完了の場合、サーバから送られたデータを表示 */
                if(request.status == 200){
                $(".loadingimg").remove();
                $('.face').html(request.responseText);
                }
            }else if(postdata == "facebookmovies"){
                if(request.status == 200){
                    $('.fukicont').html(request.responseText);
                    $(".fbmimg").load(function(){
                        movieSort(m_count);
                    });
                }
            }
            break;
        }
    }

}
function proimg(){
    
    $('.tomatomen').animate({
        opacity:"1",
        marginTop:"-300px",
        marginLeft:"-200px"
    },800,"easeOutElastic",function(){
        fukidashiout();
    });
}
function fukidashiout(){
    $('.face').delay(1500).animate({
        opacity:"1"
    },1000);
    
   $('.tomatomen').animate({
        marginTop:"-180px",
        marginLeft:"110px"
    },800,"easeInOutCubic");
   $('.cont2').delay(3000).animate({
        opacity:"1"
    },1000,"easeOutSine",movieSort(m_count));
}
function movieSort(num){
    XMLHttpRequestByPost("facebookmovies",num);
    m_count ++;
}


