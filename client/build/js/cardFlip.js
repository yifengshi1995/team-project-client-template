$(document).on("dblclick",".card-container",function(){
	if(!$(this).hasClass("card-active")){
		$(this).addClass("card-active");
	}else{
		$(this).removeClass("card-active");			
	}
});
$(document).on("click","create-card",function(){
	alert("Time to make a card");
});