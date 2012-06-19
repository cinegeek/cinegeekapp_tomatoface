function titleSet(){
	$("#top_title").css("opacity","0");
	$(".title_obj").css("margin-top","105px");
	$(".social").css("opacity","0");
	for(var i = 0 ; i < $(".tit").length ; i++){
		if(i != 0){
			$(".t"+String(i+1)).css("margin-left","5px");
			
		}
		$(".t"+String(i+1)).css({
			marginTop:"118px",
			opacity:"0"
		});
	}
	$('#maincontents').css("opacity","1");
}
function titleStart(){
	$("#top_title").animate({
		opacity:"1"
	},1000,"easeInSine",function(){
		socialStart();
	});
	for(var i = 0 ; i < $(".tit").length ; i++){
		$(".t"+String(i+1)).animate({
			marginTop:"105px",
			opacity:"1"
		},200*i);
	}
}
function socialStart(){
	$(".social").delay(1000).animate({
		opacity:"1"
	},1000);
}