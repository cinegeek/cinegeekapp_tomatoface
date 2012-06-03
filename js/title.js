function titleSet(){
	$("#top_title").css("opacity","0");
	$(".tit").css("margin-top","105px");
	for(var i = 0 ; i < $(".tit").length ; i++){
		if(i != 0){
			$(".t"+String(i+1)).css("margin-left","4px");
			
		}
	}
}
function titleStart(){
	$("#top_title").animate({
		opacity:"1"
	},1000);
}