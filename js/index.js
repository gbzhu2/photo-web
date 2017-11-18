$(document).ready(function(){
    var inter;
    var setIn = function(){
        inter = setInterval(function(){
            var index = parseInt($("ul.soul>li.on").attr("index"));
            if(index<3){
                $("ul.soul>li:eq("+(index+1)+")").trigger("click");
            }else{
                $("ul.soul>li:eq("+0+")").trigger("click");
            }
        },3600);
    };
 
    setIn();
    $("ul.soul>li").click(function(){
        clearInterval(inter);
        setIn();
        var index = parseInt($(this).attr("index"));
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $("a.a_bigImg:eq("+index+")").fadeIn("slow");
        $("a.a_bigImg:not(:eq("+index+"))").fadeOut("slow")
    });
});