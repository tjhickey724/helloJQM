$("#loginpage").on("pageshow", function(event){
	alert("we just called pageshow");
	var page = $("#index");
	$("#status",page).html("hello there");
})

$("#loginpage").on("pageinit", function(){
	alert("we just called pageinit");
	var page = $("#index");
	$("#status",page).html("we are running!");
})