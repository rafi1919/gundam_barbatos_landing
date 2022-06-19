$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 700) {
          
          $("nav").css("backdrop-filter" , "blur(6px)");
          $("nav").css("background" , "linear-gradient(0deg, rgba(33,25,21,0.7542367288712359) 100%, rgba(33,25,21,1) 100%)"); 
        }
  
        else{
            $("nav").css("background" , "none");  
            $("nav").css("backdrop-filter" , "none");
            	
        };
    });
  });

  