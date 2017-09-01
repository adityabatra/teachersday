$(document).ready(function(){
	$(".button").click(function(){
		$("#overlay").animate({"height":"80%","width":"80%","top":"10%","left":"10%", "border-radius":"5px"},1000);
		$("#overlay").animate({"left":"-100%"},1000);
		$("#overlay1").delay(1000).animate({"left":"10%"},1000);
		$("#overlay1").animate({"top":"0","left":"0", "height":"100%","width":"100%"},1000);
		$(".hide").fadeOut();
		$('.hide1').delay(2600).fadeIn();
	});
	$(".button-1").click(function(){
		$("#overlay1").animate({"height":"80%","width":"80%","top":"10%","left":"10%", "border-radius":"5px"},1000);
		$("#overlay1").animate({"left":"100%"},1000);
		$("#overlay").delay(1000).animate({"left":"10%"},1000);
		$("#overlay").animate({"top":"0","left":"0", "height":"100%","width":"100%"},1000);
		$('.hide1').fadeOut();
		$(".hide").delay(2600).fadeIn();

	});
});