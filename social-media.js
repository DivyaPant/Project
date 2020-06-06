

for(i=0;i<document.querySelectorAll(".fa-thumbs-up").length; i++)
{

document.querySelectorAll(".fa-thumbs-up")[i].addEventListener("click", function(){
  
  
  abc(this.id);

});
	
	
}

function abc(input) {
	var x= "#"+input;
	document.querySelector(x).classList.toggle("pressed");
}



$(".fa-align-justify").click(function(){

  $(".dropdown").slideDown(150);
   document.querySelector(".dropdown").style.opacity="0.7";
});

$("#close").click(function(){

  $(".dropdown").slideUp(150);
  
});

$(".fa-comment").click(function(){
  var capture= this.id;
  var syn='.'+ capture; 
  var x= syn;
  
  
  document.querySelector(x).classList.toggle("cmt");
});

$(".post").click(function(){

 var str = this.id; 
  var res = str.slice(3,4);
  for(i=1;i<4;i++){

    
   if(i==res){ 
   var d= ".c"+i+ " input";
   var w= "#"+"p"+i;
   var text= document.querySelector(d).value;
   document.querySelector(w).innerText= text;
   document.querySelector(d).value= "";
 }
 }
});
