var m_count = 0;
var m_count_max = 0;
var point_ave = 0;
var m_arr = new Array();
var p_arr = new Array();
var poster_arr = new Array();
var face = "";
var name = "";
function loadCont(){

	$("#maincontents").html("<div class='loadingimg'><img src='img/loadinfo.gif'/></div><div id='contents'><div class='face'></div><div class='tomatomen'></div></div>");
    $("#maincontents").append("<div class='logo'><a href='http://cinegeek.net/tomatoface/'><img src='img/title_logo_small.png'/></a></div>")
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
                face = $('.fukicont img').attr("src");
                name = $('.font1').text();
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
function XMLHttpPOST(str){
    var request = createXMLHttpRequest();
    request.open("POST", "sys/post.php" , true);
    request.onreadystatechange = readyStateChangeHandler;
    request.setRequestHeader( "Content-Type" ,  "application/x-www-form-urlencoded");
    request.send("text=" + str);
    function readyStateChangeHandler(){
        switch(request.readyState){
            case 4:
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
    $('.fukicont').delay(2000).animate({
        opacity:"0"
    },1000,"easeOutSine",function(){
        $('.fukicont').html("");
        for(var i = 0 ; i < p_arr.length ; i++){
            point_ave += Number(p_arr[i]);
        }
        point_ave = Math.floor(point_ave / p_arr.length);
        $('.fukicont').html("<p><img class='radirect' width='150' src='" + face + "'/></p><p><span class='font1'>" + name + "</span>さんの平均点は...</p>");
        $('.fukicont').css({
            marginTop:"200px"
        })
        criticsEndEnd();
    })
}
function criticsEndEnd(){
    $(".tomatomen img").attr("src","img/tomatomen2.png")
    if(point_ave > 50){
        $('.fukicont').append("<div class='box'><p><img src='img/tomato_red_big.png'/> <span class='font8'>" + point_ave + "%</span>　です。</p></div>");
    }else{
        $('.fukicont').append("<div class='box'><p><img src='img/tomato_green_big.png'/> <span class='font8'>" + point_ave + "%</span>　です。</p></div>");
    }
    var str = "";
    var ftext ="";
    if(10 > point_ave && point_ave >= 0 ){
        str = "<p>あまり映画はお好きではない？</br>もしくはFacebookで好きな映画を</br>登録していないのでしょうか。。。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。あまり映画はお好きではない？もしくはFacebookで好きな映画を</br>登録していないのでしょうか。。。";
    }else if(20 > point_ave && point_ave >= 10){
        str = "<p>これほど低い点数も珍しい。<br>個性的な映画センスをお持ちのようです。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。これほど低い点数も珍しい。個性的な映画センスをお持ちのようです。";
    }else if(30 > point_ave && point_ave >= 20){
        str = "<p>『Rotten Tomato』がすべてじゃない！</br>あなたのマニアックな映画趣味を貫いてください！</p>"
        ftext = name + "さんの映画センスは" + point_ave +"%です。『Rotten Tomato』がすべてじゃない！あなたのマニアックな映画趣味を貫いてください！"
    }else if(50 > point_ave && point_ave >= 30){
        str = "<p>うーん。賛否両論の映画がお好みなのでしょうか。</br>あまり評論家うけは良くないようです。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。うーん。賛否両論の映画がお好みなのでしょうか。あまり評論家うけは良くないようです。";
    }else if(60 > point_ave && point_ave >= 50){
        str = "<p>あなたの映画センスはまずまずのようです。</br>無難な点数ですね。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。あなたの映画センスはまずまずのようです。</br>無難な点数ですね。</p>";
    }else if(70 > point_ave && point_ave >= 60){
        str = "<p>このラインの点数の人はセンスが良い人が多いです。</br>あなたの映画趣味は気取っていませんね。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。このラインの点数の人はセンスが良い人が多いです。あなたの映画趣味は気取っていませんね。";
    }else if(80 > point_ave && point_ave >= 70){
        str = "<p>かなりの映画センスをお持ちのようで。。</br>素晴らしい。。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。かなりの映画センスをお持ちのようで。。素晴らしい。。";
    }else if(90 > point_ave && point_ave >= 80){
        str = "<p>映画関係者の方ですか？？</br>あなたはコアな映画好きのようです。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。映画関係者の方ですか？？あなたはコアな映画好きのようです。";
    }else if(100 > point_ave && point_ave >= 90){
        str = "<p>うわでた100点。</br>満点なんてそうそう出るものではありません。</br>脱帽です。</p>";
        ftext = name + "さんの映画センスは" + point_ave +"%です。うわでた100点。満点なんてそうそう出るものではありません。脱帽です。";
    }
    var text = encodeURIComponent("【映画のモノサシ】" + name + "さんの映画スコアは" + point_ave + "%です! http://cinegeek.net/movie #tomatoface");
    XMLHttpPOST(encodeURIComponent(ftext));
    $('.fukicont').append(str);
    $('.fukicont').append('<p class="last_btn"><a href="http://twitter.com/intent/tweet?text=' + text + '" target="_blank" ><img class="twitterbtn" src="img/last_twitterbtn.gif" onmouseover="this.src='+ "'img/last_twitterbtn_on.gif'" + '" onmouseout="this.src=' + "'img/last_twitterbtn.gif'" + '" alt="last_twitter"/></a></p>');
    $('.fukicont').append('<p class="last_btn2"><a href="http://cinegeek.net/tomatoface/" ><img src="img/last_totopbtn.gif" onmouseover="this.src='+ "'img/last_totopbtn_on.gif'" + '" onmouseout="this.src=' + "'img/last_totopbtn.gif'" + '" alt="last_twitter"/></a></p>');
    $('.fukicont').delay(1000).animate({
        opacity:"1"
    },1000,"easeOutSine");
}





