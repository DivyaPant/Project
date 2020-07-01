
document.getElementById("view").addEventListener("click", function (){ 
	abc();
});



function abc(){
	document.querySelector(".img .box").style.display="none";
   	document.querySelector(".flip").style.transform="rotateX(180deg)";
    document.querySelector(".header .right").style.opacity="0";
   	document.querySelector(".other").style.transform="rotateX(180deg)";

   	
 $(".html").animate({
   width:"85%"
   
    },2500);
 $(".css").animate({
   width:"80%"
    },2500);

 $(".js").animate({
   width:"60%"
    },2500);

 $(".jq").animate({
   width:"53%"
    },2500);
 $(".bs").animate({
   width:"45%"
    },2500);
 $(".dw").animate({
   width:"35%"
    },2500); 
 
}




document.querySelector(".flip").addEventListener("transitionend", function(){

   document.querySelector(".header .right").style.marginLeft="2%";
   document.querySelector(".header .right").style.opacity=1;
   document.querySelector(".work").style.display="block";
   document.querySelector(".footer").style.display="block";
   
});

$("#home").click(function(){
  document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
$("#top").click(function(){
  document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.getElementById("about").addEventListener("click", function(){
    var aboutMe= document.querySelector(".about");
    aboutMe.scrollIntoView({behavior:"smooth",block:"center"});

});
document.getElementById("project").addEventListener("click", function(){
    var work= document.querySelector(".work");
    work.scrollIntoView({behavior:"smooth",block:"center"});



});
document.getElementById("contact").addEventListener("click", function(){
    var contact= document.querySelector(".footer");
    contact.scrollIntoView({behavior:"smooth",block:"center"});

});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("header").style.backgroundColor = "#162447";
  } else{ document.getElementById("header").style.backgroundColor = "";}
      
}




