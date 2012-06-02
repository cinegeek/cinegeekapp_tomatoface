function loading(){
	jQuery("#loading").css({opacity:"0"});
}
function loading_appear(){
	jQuery("#loading").animate({opacity:"1",marginTop:"-40px"},1000,"easeOutQuint");
}