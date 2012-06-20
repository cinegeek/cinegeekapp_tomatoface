function browsCheck(){
	var brows = navigator.appVersion.toLowerCase();
	this.oldverResult = function(){
		brows = (brows.indexOf('msie')>-1)?parseInt(brows.replace(/.*msie[ ]/,'').match(/^[0-9]+/)):0;
		return (brows > 8 || brows == 0 )? false : true;
	}
}
$(document).ready(function(){
	var c = new browsCheck();
	if(c.oldverResult())//function
});