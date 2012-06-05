function titleSet(){
	$("#top_title").css("opacity","0");
	$(".title_obj").css("margin-top","105px");
	for(var i = 0 ; i < $(".tit").length ; i++){
		if(i != 0){
			$(".t"+String(i+1)).css("margin-left","4px");
			
		}
		$(".t"+String(i+1)).css({
			marginTop:"118px",
			opacity:"0"
		});
	}
}
function titleStart(){
	$("#top_title").animate({
		opacity:"1"
	},1000);
	for(var i = 0 ; i < $(".tit").length ; i++){
		$(".t"+String(i+1)).animate({
			marginTop:"105px",
			opacity:"1"
		},200*i,"easeOutSine");
	}
}