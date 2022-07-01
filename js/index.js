/* alert("본 사이트는 크롬에 최적화 되어있으며, 1920x1080 (100%) 해상도에 최적화 되어 있습니다.") */



 $(document).ready(function(){
	

/*//////////////////first page yellow ball */

function random(low, high) {
  return Math.random() * high + low ;
}

class Visual {
  constructor() {
    this.canvas = document.querySelector('#canvas');
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.particleLength = 400;
    this.particles = [];
    this.particleMaxRadius = 70;

    this.handleMouseMoveBind = this.handleMouseMove.bind(this);
    this.handleClickBind = this.handleClick.bind(this);
    this.handleResizeBind = this.handleResize.bind(this);

    this.initialize();
    this.render();
  }

  initialize() {
    this.resizeCanvas();
    for (let i = 0; i < this.particleLength; i++) {
      this.particles.push(this.createParticle(i));
    }
    this.bind();
  }

  bind() {
    document.body.addEventListener('mousemove', this.handleMouseMoveBind, false);
    document.body.addEventListener('click', this.handleClickBind, false);
    window.addEventListener('resize', this.handleResizeBind, false);
  }
  
  unbind() {
    document.body.removeEventListener('mousemove', this.handleMouseMoveBind, false);
    document.body.removeEventListener('click', this.handleClickBind, false);
    window.removeEventListener('resize', this.handleResizeBind, false);
  }

  handleMouseMove(e) {
    this.enlargeParticle(e.clientX, e.clientY);
  }

  handleClick(e) {
    this.burstParticle(e.clientX, e.clientY);
  }

  handleResize() {
    this.resizeCanvas();
  }

  resizeCanvas() {
    this.canvasWidth = document.body.offsetWidth;
    this.canvasHeight = document.body.offsetHeight;
    this.canvas.width = this.canvasWidth * window.devicePixelRatio;
    this.canvas.height = this.canvasHeight * window.devicePixelRatio;
    this.context = this.canvas.getContext('2d');
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  createParticle(id, isRecreate) {
    const radius = random(1, this.particleMaxRadius);
    const x = isRecreate ? -radius - random(0, this.canvasWidth) : random(0, this.canvasWidth);
    let y = random(this.canvasHeight / 2 - 150, this.canvasHeight / 1 + 150);
    y += random(-100, 100);
    const alpha = random(0.05, 1);

    return {
      id: id,
      x: x,
      y: y,
      startY: y,
      radius: radius,
      defaultRadius: radius,
      startAngle: 0,
      endAngle: Math.PI * 5,
      alpha: alpha,
      color: { r: 255 , g: 230, b: random(0, 100)},
      speed: alpha + 1,
      amplitude: random(50, 400),
      isBurst: false
    };
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.moveParticle(particle);

      // particle
      this.context.beginPath();
      this.context.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${particle.alpha})`;
      this.context.arc(particle.x, particle.y, particle.radius, particle.startAngle, particle.endAngle);
      this.context.fill();
    });
  }

  moveParticle(particle) {
    particle.x += particle.speed;
    particle.y = particle.startY + particle.amplitude * Math.sin(((particle.x / 5) * Math.PI) / 180);
  }

  enlargeParticle(clientX, clientY) {
    this.particles.forEach(particle => {
      if (particle.isBurst) return;

      const distance = Math.hypot(particle.x - clientX, particle.y - clientY);

      if (distance <= 40) {
        const scaling = (100 - distance) / 1.5;
        TweenMax.to(particle, 0.5, {
          radius: particle.defaultRadius + scaling,
          ease: Power2.easeOut
        });
      } else {
        TweenMax.to(particle, 0.5, {
          radius: particle.defaultRadius,
          ease: Power2.easeOut
        });
      }
    });
  }


  render() {
    // canvas
    this.context.clearRect(0, 0, this.canvasWidth + this.particleMaxRadius * 2, this.canvasHeight);

    // particle
    this.drawParticles();

    // particle
    this.particles.forEach(particle => {
      if (particle.x - particle.radius >= this.canvasWidth) {
        this.particles[particle.id] = this.createParticle(particle.id, true);
      }
    });

    requestAnimationFrame(this.render.bind(this));
  }
}

new Visual();


//nav menu right bottom
 $('nav ul li a').mouseenter(function () {
  $('nav ul li a').find("span").css('display','inline');
  $(this).find("span").css({'display':'inline','color':'rgb(140, 17, 156);'});
}),

$('nav ul li a').mouseleave(function () {
  $('nav ul li a').find("span").css('display','none');
  $(this).find("span").css({'display':'none','color':'gray'});
});  


/* skill bar */
$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});


/* tab menu */
 $(".tab>li").click(function(){
    
  tval=$(this).index();
  tnum=+295*tval; //가로폭 증가됨 295

  $(".tab-highlight").animate({left:tnum});
  $(".tab>li>a").css("color","#fff");//탭의 모든 글자색
  $(this).find(">a").css("color","#fffbc0"); //선택된 탭의 글자색

  $(".panel>ul").hide();//기존의 보여진 내용 숨기기
  $($(this).find(">a").attr("href")).fadeIn(); //새로 선택된 내용 href 연결된 내용 보여주기

});
///////////////////////////////////////////////////pop1

  $(".panel #tab1 li").click(function(){
    $("#popup .pop").css({display:"block"});
    $("#popup .m_btn").css({display:"block"});
    $(".m_btn .g_page").css({display:"block"});
/*     $(".m_btn .g_page2").css({display:"none"});
    $(".m_btn .g_page3").css({display:"none"}); */
    g_pop=$(this).index();

    $(".m_btn .g_page span:nth-child(1)").text(g_pop+1); //오른쪽 사단 페이지 넘버표시
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".pop li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
    $("#popup").stop(true,true).fadeIn(); //검정배경 
		$(".pop li").scrollTop(0);
        return false;

      });

  //오른쪽 상단 버튼-다음보기
  $(".m_btn>.right_btn").click(function(){
    if(g_pop<25){

      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
			g_pop++;

			$(".m_btn .g_page span:nth-child(1)").text(g_pop+1);
			$(".pop>li").eq(g_pop).stop().fadeIn();

    }

  });


  //오른쪽 상단 버튼-이전보기
  $(".m_btn .left_btn").click(function(){

    if(g_pop>0){
      $(".pop>li").eq(g_pop).stop().fadeOut(); //기존거 사라짐
      g_pop--;

      $(".m_btn .g_page>span:nth-child(1)").text(g_pop+1);
      $(".pop>li").eq(g_pop).stop().fadeIn();
    }



});
  
  ////////////////////////pop2/////////////

  
  $(".panel #tab2 li").click(function(){
    $("#popup .pop2").css({display:"block"});
    $("#popup .m_btn2").css({display:"block"});
    $(".m_btn2 .g_page2").css({display:"block"});


    k_pop=$(this).index();

    $(".m_btn2 .g_page2 span:nth-child(1)").text(k_pop+1); //오른쪽 사단 페이지 넘버표시
    $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
    $(".pop2>li").eq(k_pop).show(); //g_pop index에 해당하는 팝업보이기
    $("#popup").stop(true,true).fadeIn(); //검정배경 

    $(".pop2>li").scrollTop(0);
    return false;
    
  });

  //오른쪽 상단 버튼-다음보기
  $(".m_btn2 .right_btn").click(function(){

    if(k_pop<14){

      $(".pop2>li").eq(k_pop).stop().fadeOut(); //기존거 사라짐
      k_pop++;

      $(".m_btn2 .g_page2 span:nth-child(1)").text(k_pop+1);
      $(".pop2>li").eq(k_pop).stop().fadeIn();

    }
  });
   //오른쪽 상단 버튼-이전보기
  $(".m_btn2 .left_btn").click(function(){

    if(k_pop>0){
      $(".pop2>li").eq(k_pop).stop().fadeOut(); //기존거 사라짐
      k_pop--;

      $(".m_btn2 .g_page2 span:nth-child(1)").text(k_pop+1);
      $(".pop2>li").eq(k_pop).stop().fadeIn();
    }

  });



    //////////////////////////////////////////////////////pop3
  
    $(".panel #tab3 li").click(function(){
      $("#popup .pop3").css({display:"block"});
      $("#popup .m_btn3").css({display:"block"});
      $(".m_btn3 .g_page3").css({display:"block"});
      /*       $(".m_btn .g_page").css({display:"none"});
      $(".m_btn .g_page2").css({display:"none"}); */
  
      h_pop=$(this).index();
  
      $(".m_btn3 .g_page3 span:nth-child(1)").text(h_pop+1); //오른쪽 사단 페이지 넘버표시
      $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
      $(".pop3>li").eq(h_pop).show(); //g_pop index에 해당하는 팝업보이기
      $("#popup").stop(true,true).fadeIn(); //검정배경 

      $(".pop3>li").scrollTop(0);
      return false;
      
    });
  
    //오른쪽 상단 버튼-다음보기
    $(".m_btn3 .right_btn").click(function(){
  
      if(h_pop<10){
  
        $(".pop3>li").eq(h_pop).stop().fadeOut(); //기존거 사라짐
        h_pop++;
  
        $(".m_btn3 .g_page3 span:nth-child(1)").text(h_pop+1);
        $(".pop3>li").eq(h_pop).stop().fadeIn();
  
      }
    });
     //오른쪽 상단 버튼-이전보기
    $(".m_btn3 .left_btn").click(function(){
  
      if(h_pop>0){
        $(".pop3>li").eq(h_pop).stop().fadeOut(); //기존거 사라짐
        h_pop--;
  
        $(".m_btn3 .g_page3 span:nth-child(1)").text(h_pop+1);
        $(".pop3>li").eq(h_pop).stop().fadeIn();
      }

    });


    //오른쪽 상단 버튼-닫기
  $(".btn_close").click(function(){ 
    
    $("html").css({overflowY:"scroll"});
		$("#popup").stop(true,true).fadeOut();
		$(".pop>li").stop(true,true).hide();
    $(".pop2>li").stop(true,true).hide();
    $(".pop3>li").stop(true,true).hide();

    $(".m_btn").css({display:"none"});
    $(".m_btn2").css({display:"none"});
    $(".m_btn3").css({display:"none"}); 
    
    $("#popup ul").css({display:"none"});
    return false;
  });


/* //////?/?/??? */

/* webpage */
function guide1() {
  $(".w_slide_btn>i").toggleClass("active");
}
auto1 = setInterval(guide1, 500);
  //태블릿 화면(오버시 화면 올라가게)
  $(".w_tab_slide ul li:nth-child(n)").mouseenter(function () {
    $(this).css("background-position", "0 110.5%");
  });
  $(".w_tab_slide ul li:nth-child(n)").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });

//웹디자인 슬라이드_________________________________
$(".w_list li").click(function () {

  clearInterval(auto1); //화살표 깜빡거림 멈추게

  $(".w_list li").removeClass("btn_active"); //기존 숫자
  $(this).addClass("btn_active"); //클릭한 숫자

  val=$(this).index(); 

  $(".w_txt_slide ul").animate({"left":-340*val+"px"});  //왼쪽 설명텍스트 슬라이드
  $(".w_tab_slide ul").animate({"left":-659*val+"px"});  //오른쪽 태블릿이미지 슬라이드
});

/* resposival */

  $(".r_tab_slide").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".r_tab_slide").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });

  $(".b_tab_slide").mouseenter(function () {
    $(this).css("background-position", "0 100%");
  });
  $(".b_tab_slide").mouseleave(function () {
    $(this).css("background-position", "0 0");
  });
  $(".g_tab").mouseenter(function () {
    $(".g_tab_slide").css("background-position", "0 100%");
  });
  $(".g_tab").mouseleave(function () {
    $(".g_tab_slide").css("background-position", "0 0");
  });

/*  */
$(".rbtnp button").click(function(){//각 메뉴를 클릭했을때
  $(this).next().show(); //다음 형제인 .pop을 보이게함
  $("html").css({overflowY:"hidden"});//body스크롤없앰
  return false;
});



/*검정 배경 클릭시 닫기*/
$(".pop_e").click(function(){
  $("html").css({"overflow-y":"scroll"});
  $(".pop_e").hide();
  return false;
});

$(".pop_re").click(function(){
  $("html").css({"overflow-y":"scroll"});
  $(".pop_re").hide();
  return false;
});








////스크롤바어쩌구 삭제
    //스크롤바가 이동될때마다 스크롤 위치값 나타내기 
    $(window).scroll(function(){
      $("#txt1").text($(this).scrollTop());
    });

});

