if(!window.log) {window.log = function() {log.history = log.history || [];log.history.push(arguments);if(this.console) {console.log(Array.prototype.slice.call(arguments));}};}

$(document).ready(function(){
	$(".windowGradeCompleto, .maskGradeCompleto").hide();

	$(".openGradeCompleto").click(function(){
		$(".windowGradeCompleto, .maskGradeCompleto").fadeIn(1000);
	});

	$(".closeGradeCompleto").click(function(){
		$(".windowGradeCompleto, .maskGradeCompleto").fadeOut(1000);
	});
});