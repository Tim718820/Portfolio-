$(window).load(function() {	
    setTimeout(function(){
	   $(".anibg").fadeOut("slow")
    }, 500)
    setTimeout(function(){
        $("#all").css({"zIndex":"99"})
    }, 700)

	//index animal
    $("#timetable").animate({top:"0"},1000)
    if($('#timetable').attr('id') == "timetable"){
        $(window).scroll(function() {
             if($(window).scrollTop() >= $("#timetable").offset().top){
                $("#news").animate({"opacity":"1"},1000)
                $("#news .center").animate({"left":"0"},1300)
             } 
        })
    }
     //stationList
    $("#stationList input").animate({top:"0"},1000)
    $("#stationList button").animate({top:"0"},1000)
    $("#stationList .rwd-table").animate({top:"0"},1500)
    //serch-2
    $("#search-2 .rwd-table").animate({top:"0"},800)
    //refund-1
    $("#refund-1 input").animate({"right":"0"},1000)
    $("#refund-1 .input").animate({"left":"0"},1200)
    //refund-2
    $("#refund-2 .rwd-table").animate({"width":"100%"},800)
    //moreNews
    $("#morenews .center").animate({"left":"0"},1000)
    //innerNews
    $("#innernews").animate({"left":"0"},1200)
    //order-2
    $("#order-2 .rwd-table").animate({"width":"100%"},1200)
    //order-3
    $("#order-3 .overlay").animate({"top":"0"},1500)
    //station_train
    $("#station_train .topdata").animate({"top":"0"},1000)
    $("#station_train .destination").delay(100).animate({"top":"0"},1000)
    $("#station_train .rwd-table").delay(200).animate({"top":"0"},1000)
});