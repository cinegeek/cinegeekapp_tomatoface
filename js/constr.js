var m_count = 0;
var m_count_max = 0;
var point_ave = 0;
var m_arr = new Array();
var p_arr = new Array();
var poster_arr = new Array();
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
                var perstr = "";
                if(request.responseText != "<img src='img/tomato_green.jpg'/><span class='point font7'>%</span>"){
                    $('.fukicont .font_critics:eq('+m_count+')').html(" "+request.responseText);
                    var data = $('.fukicont .font_critics:eq('+m_count+') .point').text();
                    var sub_data = data.replace(/[%]/,'');
                    p_arr.push(sub_data);
                }else{
                    $('.fukicont .font_critics:eq('+m_count+') .font6').remove();
                    $('.fukicont .font_critics:eq('+m_count+')').append(" 対象外です");
                    $('.fukicont .font_critics:eq('+m_count+')').css("color","#ddd");
                }
                
                m_count++;
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
        $(".fukicont").delay(3000).animate({
            opacity:"0"
        },500,"easeOutSine",movieEnd);
    }
}
function movieEnd(){
    $(".fukicont").css({
        marginTop:"500px",
        opacity:"0"
    });
    $('.fukicont').html("<div class='critics_box'><p class='m_all'>さてそれでは『Rotten Tomato』で評価してもらいます！</br></p><p><img src='img/loading_critics.gif'/></p>");
    for(var i = 0 ; i < m_arr.length ; i++){
        $('.fukicont').append("<p class='font_critics'>" + m_arr[i] + "<span class='font6'> 評価中...<span></p>");
        if(i == m_arr.length - 1){
            $('.fukicont .m_all').append("</div>");
        }
    }
    $('.fukicont').animate({
        marginTop:300 - $('.critics_box').height()/2 +"px",
        opacity:"1"
    },400,"easeOutBack",function(){
        m_count = 0;
        criticsStr();
    });
}
function criticsStr(){
    if(m_count != m_count_max){
        XMLHttpCritics(m_arr[m_count]);
    }else{
        criticsEnd();
    }
}
function criticsEnd(){
    $('.fukicont').delay(1000).animate({
        opacity:"0"
    },500,"easeOutSine",function(){
        $('.fukicont').html("");
        for(var i = 0 ; i < p_arr.length ; i++){
            point_ave += Number(p_arr[i]);
        }
        point_ave = Math.floor(point_ave / p_arr.length);
        $('.fukicont').html("あなたの平均点は...</br>")
        $('.fukicont').css({
            marginTop:"200px"
        })
        $('.fukicont').animate({
            opacity:"1"
        },500,"easeOutSine",criticsEndEnd);
    })
}
function criticsEndEnd(){
    if(point_ave > 50){
        $('.fukicont').append("<img src='img/tomato_red_big.png'/> <span class='font8'>" + point_ave + "%</span>");
    }else{
        $('.fukicont').append("<img src='img/tomato_green_big.png'/> <span class='font8'>" + point_ave + "%</span>");
    }
}