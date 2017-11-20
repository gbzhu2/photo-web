$(document).ready(function(){
   $("ul.showcase_index li").hover(function(){
        $(this).find("[name='hide']").show();
   },function(){
        $(this).find("[name='hide']").hide();
   });
});