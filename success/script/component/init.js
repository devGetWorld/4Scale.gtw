$(document).ready(function(){

    // init GTW for DEV

    $.getScript("/success/script/component/template.js",function(){
      $("body").append(templateGTW);
    });

    // thems init
    
    let them = $.cookie('them');
    if(them == "dark" ){
      $("body").addClass("dark");
      
      $(".bg_2_mob").attr("src" , $(".bg_2_mob").attr("data-dark-img"));
      $(".ui-thems-button[data-them='dark']").addClass("active");
  
      $(".swiper-wrapper > .swiper-slide").each(function(){
        let img_second = $(this).find("img").attr("data-them-img");
        if(img_second == undefined) return;
        
        $(this).find("img").attr("src" , img_second);
        
      });
  
      $(".them_temp").attr("src" , $(".them_temp").attr("data-dark-img"));
  
      $(".partners > .images > img").each(function(){
        let img_second = $(this).attr("data-them-img");
        if(img_second == undefined) return;
        
        $(this).attr("src" , img_second);
        
      });
  
    }else{
      $(".ui-thems-button[data-them='white']").addClass("active");
    }
    $(document).on("click",".open_calendry"  ,function(){
      $(".calendly-badge-content").trigger("click");
   });
  
   $('input[type=tel]').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9 , +\(),\- \t\v\r\n\f , ]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
  
  
    const swiper_products = new Swiper('.swiper-products', {
      slidesPerView: 6,
      spaceBetween: 13,
      loop:true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        1200: {
          slidesPerView: 4,
          spaceBetween:78
        },
        1600: {
          slidesPerView: 6,
        }
      }
  });
  
    $(".ui-thems-button").click(function(){
      if($(this).hasClass("active")) return;
  
      let them = $(this).attr("data-them");
      $.cookie('them' , them ,  { expires : 160 });
  
      location.reload();
    });
  
    let globalSlides = 0;
      const swiper_service = new Swiper('.swiper-service', {
          slidesPerView: 4,
          spaceBetween: 13,
          navigation: {
              nextEl: '.swiper-service-button-right',
              prevEl: '.swiper-service-button-left',
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 35
            },
            1200: {
              slidesPerView: 3,
              spaceBetween:78
            },
            1600: {
              slidesPerView: 4,
            }
          }
      });
      init_slideses();
      init_active();
  
      function init_slideses(){
        let slides = swiper_service.slides.length;
        $(".section__service .controll").find(".all").text("0" + slides);
      }
      function init_active(){
        let width = $(window).width();
        if( width >= 1600){
          globalSlides = 4;
        }else if( width >= 1200){
          globalSlides = 3;
        }else if( width >= 640){
          globalSlides = 2;
        }else if( width >= 320){
          globalSlides = 1;
        }
  
        $(".section__service .controll .active").text("0" + globalSlides);
      }
  
      swiper_service.on('resize', function () {
        setTimeout(function(){
          init_active();
        },100);
      });
      
      swiper_service.on('slideChange', function () {
        let controll = $(".section__service .controll");
        setTimeout(function(){
          let realIndex = swiper_service.activeIndex;
          $(".section__service .controll").find(".active").text("0" + (parseInt(globalSlides + realIndex)) );
        });
      });
  
      const swiper_blog = new Swiper('.swiper-blog', {
          slidesPerView: 2,
          spaceBetween: 50,
          navigation: {
              nextEl: '.button-right-blog',
              prevEl: '.button-left-blog',
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            625: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200:{
              spaceBetween: 50
            }
          }
      });
  
  
      $("#close-service-popup").click(function(){
          $(".service-popup").fadeOut(300);
      });
  
      $("a[data-popup]").click(function(){
          let block = $(this).attr("data-popup");
          $(".service-popup > .wrapper").children(".block").fadeOut();
          $(".service-popup > .wrapper").children(block).fadeIn();
          setTimeout(function(){
            $(".service-popup").fadeIn(300);
          },300);
      });
  
      $(".close_burger").click(function(){
        $(".burger_menu").css({right:"-400px"});
        $(".burger_menu").fadeOut(300);
      });
  
      $(".open_burger").click(function(){
        $(".burger_menu").css({right:"-0px"});
        $(".burger_menu").fadeIn(300);
      });
  
      $(".close-more").click(function(){
        $(".popup-more").fadeOut(300);
      });
      
      $("button[data-popup-section]").click(function(){
        let data_section = $(this).attr("data-popup-section");
        $(".popup-more > .wrapper > div").fadeOut();
        setTimeout(function(){
          $(".popup-more").fadeIn(300);
  
          if(data_section == "left"){
            $(".popup-more").find(".section_left").fadeIn();
          }else{
            $(".popup-more").find(".section_right").fadeIn();
          }
        },300);
      });
  
      $(".send_mail").click(function(){
        const reg_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let val = $(".mail_regx_52").val();
        if(reg_mail.test(val)){
          $(".mail_regx_52").removeClass("error");
        }else{
          $(".mail_regx_52").addClass("error");
          return;
        }
  
        alert("Doesn't work for viewing.");
      });
      $(".open-quent").click(function(){
        let elem = $(this).parent().parent();
        
        if($(elem).find(".minus_tromb").is(":hidden")){
          $(elem).find(".main").hide(300);
          $(this).find(".minus_tromb").fadeIn(600);
          $(this).css("transform","rotate(0deg)");
        }else{
          $(elem).find(".main").show(300);
          $(this).find(".minus_tromb").fadeOut(600);
          $(this).css("transform","rotate(360deg)");
        }
      });
      $("#close_popup_15122").click(function(){
        $(".popup-question").fadeOut(300);
      });
      $("#close_popup_15123").click(function(){
        $(".popup-requerst").fadeOut(300);
      });
      $(".open-quetion").click(function(){
        $(".popup-question  ").fadeIn(300);
      });
      $(".open-requerst").click(function(){
        $(".popup").fadeOut(300);
        setTimeout(function(){
          $(".popup-requerst").fadeIn(300);
        },300);
      });
  
      // init cases_rotate
  
      if($(window).width() <= 500){
        let direction_l = false;
        let interval_images = setInterval(function(){
          direction_l = !direction_l;
          if(direction_l == true){ 
            rotateImage($(".image_rotate") , "left"); 
          }else{
           rotateImage($(".image_rotate") , "right");
          }
        },5000);
  
        $(".image_rotate").parent().on("touchstart" , function(){
            clearInterval(interval_images);
            $(".image_rotate").parent().stop();
      });
  
      
      function rotateImage(elem , direction){
        let width = $(elem).width();
        if(direction == "left") elem.parent().animate({scrollLeft:width } , 5000);
        if(direction == "right") elem.parent().animate({scrollLeft:0 } , 5000);
      }
  
      }
  
      $(".btn-send-server").click(function(){
        let arrAttr = {"status":$(this).closest(".form").attr("data-type") , "name":"Name is undefind"};
        let form = $(this).closest(".form");
        form.find("input").each(function(){
          if($(this).attr("name") == "name"){
            arrAttr.name = $(this).val();
          }else if($(this).attr("name") == "phone"){
            
            let parent_jnit = $(this).attr("id");
            if (parent_jnit == "phone-init_1")
            {
              arrAttr.phone = init_phone_1.getNumber();
            }else if(parent_jnit == "phone-init_2"){
              arrAttr.phone = init_phone_2.getNumber();
            }
          }
        }); 
        
        $(".popup").find(".perload").fadeIn(300);
        
        alert("Doesn't work for viewing.");
      });
  
      $(".input-server").keydown(function(){
        let disabled_button = true;
        $(this).closest(".form").children("input").each(function(){
          if($(this).val().length < 3){
            disabled_button = false;
          }
        });
        if(disabled_button) {
          $(this).closest(".form").children(".btn-send-server").prop("disabled" , false);
        }else{
          $(this).closest(".form").children(".btn-send-server").prop("disabled" , true);
        }
      });
      
  });
  
  function select_init(){
    const $el = $(".select_link_init");
  
    $el.on("click" , function(){
      let list = $(this).children(".list");
      if(list.is(":hidden")){
        list.show(300);
      }else{
        list.hide(300);
      }
    });
  
    $(document).on('click', function(e) {
      if (!$(e.target).closest($el).find(".list").length) {
        $el.find(".list").hide(300);
      }
      e.stopPropagation();
    });
  
  }
  
  function scroll_func_init(){
    const elem = $(".button_to_top");
    let interval = null;
  
    $(window).scroll(function(){
      if($("body , html").scrollTop() > 800){
        elem.fadeIn(300);
        clearTimeout(interval);
        timerStart_delay();
      }
    });
  
  
    function timerStart_delay(){
      interval = setTimeout(function(){
        elem.fadeOut(300);
      },1000);
    }
  }
  
  $("header .burger_menu>.list>li").click(function(){
      $(".close_burger").trigger("click");
  });
  
  $(document).mouseup( function(e){ 
    var div = $( ".popup > .wrapper" ); 
    if ( !div.is(e.target) 
      && div.has(e.target).length === 0) {  
        if(e.target.className.indexOf("iti__country") == -1 &&
           e.target.className.indexOf("iti__dial-code") == -1 &&
           e.target.className.indexOf("iti__flag") == -1){
  
           div.parent().fadeOut(300);
        }
    }
  });
  
  $("div[data-link]").click(function(){
    let link = $(this).attr("data-link");
    window.open(link , "_parent" );
  });