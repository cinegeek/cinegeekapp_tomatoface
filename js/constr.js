var m_count = 0;
var m_count_max = 0;
var m_arr = new Array();
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
                m_count_max = Number($(".face .font3").text());
                }
            }else if(postdata == "facebookmovies"){
                if(request.status == 200){
                    $('.fukicont').html(request.responseText);
                    m_arr.push($('.fukicont .font2').text());
                    $(".fukicont").css({
                        marginTop:"500px"
                    });
                    //ロード中に
                    $(".fbmimg").load(function(){
                        $('.fukicont').animate({
                            marginTop:"350px",
                            opacity:"1"
                        },400,"easeOutBack",function(){
                            movieSort(m_count);
                        });
                    });
                }
            }
            break;
        }
    }

}
function XMLHttpCritics(searchstr){

    var request = createXMLHttpRequest();
    request.open("POST", "sys/critics.php" , true);
    request.onreadystatechange = readyStateChangeHandler;
    request.setRequestHeader( "Content-Type" ,  "application/x-www-form-urlencoded");
    request.send("str=" + searchstr);
    function readyStateChangeHandler(){
        switch(request.readyState){
            case 4:
            $('.fukicont').append("<p>" + m_arr[m_count]+"/"+request.responseText+ "</p>");

            $('.fukicont').animate({
                marginTop:400 - m_count*15 + "px",
                opacity:"1"
            },400,"easeOutBack");
            m_count ++;
            criticsStr();
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
        marginTop:"-150px",
        marginLeft:"150px",
    },800,"easeInOutCubic");
   $('.tomatomen img').animate({
        width:"400px"
    },800,"easeInOutCubic");
   $('.cont2').delay(3000).animate({
        opacity:"1"
    },1000,"easeOutSine");
}
function movieStart(){
    $('.fukicont').animate({
        marginTop:"100px",
        opacity:"0"
    },400,"easeInBack",function(){
        $(".fukicont").html("<div class='loadingimg'><img src='img/loadinfo.gif'/></div>");
        $('.fukicont').animate({
            marginTop:"600px",
            opacity:"1"
        },400,"easeOutBack",function(){
            movieSort(m_count);
        });
    });
}
function movieSort(num){
    if(m_count != m_count_max){
        XMLHttpRequestByPost("facebookmovies",num);
        m_count ++;
    }else{
        $(".fukicont").delay(4500).animate({
            opacity:"0"
        },500,"easeOutSine",movieEnd);
    }
}
function movieEnd(){
    $(".fukicont").css({
        marginTop:"500px",
        opacity:"0"
    });
    $('.fukicont').html("<p class='m_all'>あなたが好きな映画は以下の通りですね？</br></br></p>");
    for(var i = 0 ; i < m_arr.length ; i++){
        $('.fukicont .m_all').append("・<span class='font2'>" + m_arr[i] + "</span></br>");
        if(i == m_arr.length - 1){
            $('.fukicont .m_all').append("");
        }
    }
    $('.fukicont').animate({
        marginTop:400 - $('.fukicont').height()/2 + "px",
        opacity:"1"
    },400,"easeOutBack");
    $('.fukicont').delay(4500).animate({
        opacity:"0"
    },400,"easeOutSine",function(){
        $(".fukicont").html("");
        $(".fukicont").css({
            marginTop:"500px"
        });        
        m_count = 0;
        criticsStr();
    });
}
function criticsStr(){
    if(m_count != m_count_max){
        XMLHttpCritics(m_arr[m_count]);
    }
}

