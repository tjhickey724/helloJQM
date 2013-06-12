/* the page show event is called every time the page is loaded into DOM */
$(document).on("pageshow","#bmipage", function(event){
	/* alert("we just called pageshow");*/
	var page = $("#bmipage");
	$("#status",page).html("-----");
})

/* the pageinit event happens the first time the page is created */
$(document).on("pageinit","#bmipage", function(event){
	/* alert("we just called pageinit");*/
	var page = $("#bmipage");
	$("#submit").live("click", function(e){
		ht =$("#ht").val();
		wt =$("#wt").val();
	        alert("You typed in "+ht+" for ht and "+wt+" for wt");
		bmi = 703*wt/(ht*ht);
		$("#status",page).html("your BMI is "+bmi);
        })
})