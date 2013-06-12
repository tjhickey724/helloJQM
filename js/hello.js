$("#bmipage").live("pageshow", function(event){
	/* alert("we just called pageshow");*/
	var page = $("#bmipage");
	$("#status",page).html("-----");
})

$("#bmipage").live("pageinit", function(){
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