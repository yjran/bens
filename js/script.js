$(document).ready(function(){


  //메인배너슬라이드
  var swiper = new Swiper(".mainbtn", {
    spaceBetween:0,
    slidesPerView:3,
    freeMode: true,
    watchSlidesProgress: true,
    
  });
  var swiper2 = new Swiper(".mainbn", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
  });



  // 모바일메뉴를 클릭하여 메뉴가 애니메이션되어 나타남
    $("#mobile>p").on("click",function(){
        $(".m-pop").animate({"left":"-20%"},800);
    });
    $(".m-pop").on("click",function(){
        $(this).animate({"left":"-100%"},800);
    });
    $(".m-pop").on("click",function(){
        $(".m-popx").animate({"left":"-100%"},800);
    });

  // 모바일메뉴 빈공간
    $("#mobile>p").on("click",function(){
        $(".m-popx").animate({"left":"0"},800);
    });
    $(".m-popx").on("click",function(){
        $(this).animate({"left":"-100%"},800);
        $(".m-pop").animate({"left":"-100%"},800);
    });


    // fiexd 왼쪽
    var mT = $("#section1").offset().top;
    var nextT = $("#section2").offset().top;
    
    $(window).scroll(function(){      
      var sT = $(this).scrollTop();
      if (sT > mT-100 && sT < nextT-600 ) {
          $(".s1-left").css("opacity",0);
          $(".s1-left-1").fadeIn();
      } else {
          $(".s1-left-1").fadeOut();
          $("s1-left").css("opacity",1);
      };
    });    


    // media 슬라이드
      var swiper = new Swiper(".m-s", {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: true,  //반복
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },  //자동실행
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }, //네비게이션
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }, //페이지
        breakpoints: {
            40: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            950: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          },
      });
});