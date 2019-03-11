$(document).ready(function(){
  $("a").click(function(){ goToByScroll($(this).attr("href")); return false; });
});

function goToByScroll(id){
  $("html,body").animate({scrollTop: $(id).offset().top - 55}, 1500);
}
