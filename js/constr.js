function loadCont(){
	$("#maincontents").html("<div class='loadingimg'><img src='img/loadinfo.gif'/><div><div class='face'></div>");
	$("#maincontents").animate({
		opacity:"1"
	});
	XMLHttpRequestByPost("this");
}
function createXMLHttpRequest(){
    if(window.addEventListener){
        return new XMLHttpRequest();
    }else{
        return new ActiveXObject("Microsoft.XMLHTTP");
    }

}
function XMLHttpRequestByPost(postdata){

    var request = createXMLHttpRequest();

    /* ステータス( 読み込み中なのか完了したのか) が変更されたら、readyStateChangeHandler を実行 */
    request.open("POST", "sys/catch.php" , true);
    request.onreadystatechange = readyStateChangeHandler;
    request.setRequestHeader( "Content-Type" ,  "application/x-www-form-urlencoded");
    request.send("my=" + postdata);

    function readyStateChangeHandler(){
        switch(request.readyState){
            case 4:
            /* 完了の場合、サーバから送られたデータを表示 */
            if(request.status == 200){
                $("#maincontents").html("<div class='face'></div>");
                $('.face').html(request.responseText);
                $('.face').css("opacity","0");
            }
            break;
        }
    }

}
function proimg(){
    $('.face').animate({
        opacity:"1"
    },1000);
}