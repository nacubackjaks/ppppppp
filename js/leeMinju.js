/* -- 웹 디자인 -- */

	/* 그래픽 디자인, UI/UX 디자인 (버튼)
	and GRAPHIC 타이포, UIUX DESIGN 타이포 */
	$(".m2_title_btn1 a, .m2_cont_title1").on('click',function(){
		// graphic
		$(".m2_title_btn1").toggleClass('m2_jq_title_btn1');
		$(".m2_cont_title1").toggleClass('m2_jq_cont_title1');
		$(".m2_cont_title2").toggleClass('m2_jq_cont_title1_r');
		$(".m2_graphic").toggleClass('m2_jq_graphic');
		$(".m2_uiuxdesign").toggleClass('m2_jq_graphic2');

		// uiux design
		$(".m2_title_btn3").removeClass('m2_jq_title_btn3');
		$(".m2_cont_title2").removeClass('m2_jq_cont_title2');
		$(".m2_cont_title1").removeClass('m2_jq_cont_title2_r');
		$(".m2_uiuxdesign").removeClass('m2_jq_uiuxdesign');
		$(".m2_graphic").removeClass('m2_jq_uiuxdesign2');

	});
	$(".m2_title_btn3 a, .m2_cont_title2").on('click',function(){
		// uiux design
		$(".m2_title_btn3").toggleClass('m2_jq_title_btn3');
		$(".m2_cont_title2").toggleClass('m2_jq_cont_title2');
		$(".m2_cont_title1").toggleClass('m2_jq_cont_title2_r');
		$(".m2_uiuxdesign").toggleClass('m2_jq_uiuxdesign');
		$(".m2_graphic").toggleClass('m2_jq_uiuxdesign2');

		// graphic
		$(".m2_title_btn1").removeClass('m2_jq_title_btn1');
		$(".m2_cont_title1").removeClass('m2_jq_cont_title1');
		$(".m2_cont_title2").removeClass('m2_jq_cont_title1_r');
		$(".m2_graphic").removeClass('m2_jq_graphic');
		$(".m2_uiuxdesign").removeClass('m2_jq_graphic2');

	});

	// graphic-list ul li a 버튼 클릭시__________________________________

	$(".m2_graphic-list ul li a").click(function(){

		w_pop=$(this).parent('li').index();	//Detail 버튼의 부모의 index	
		$("#m2_graphic_modal .w_btn .w_page span:nth-child(1)").text(w_pop+1); //오른쪽 상단 페이지 넘버
		// $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$("#m2_graphic_modal .m2_modal>li").eq(w_pop).show(); //g_pop index에 해당하는 팜업보이기
		$("#m2_graphic_modal").stop(true,true).fadeIn(); //검정배경        

		$(".m2_modal>li").scrollTop(0);
        return false;

	});	

	/*오른쪽 상단 버튼-다음보기*/

	$("#m2_graphic_modal .w_btn .right_btn").click(function(){
		$("#m2_graphic_modal").stop(true,true).scrollTop(0); /*스크롤 상단으로 올리기*/		

		if(w_pop<9){
			$("#m2_graphic_modal .m2_modal>li").eq(w_pop).stop(true,true).fadeOut(); 
			w_pop++;	

			$("#m2_graphic_modal .w_page span:nth-child(1)").text(w_pop+1); /*페이지 번호*/
			$("#m2_graphic_modal .m2_modal>li").eq(w_pop).stop(true,true).fadeIn().scrollTop(0);			
		}
        return false;
	});	

	/*오른쪽 상단 버튼-이전보기*/

	$("#m2_graphic_modal .w_btn .left_btn").click(function(){
		$("#m2_graphic_modal").stop(true,true).scrollTop(0); /*스크롤 상단으로 올리기*/

		if(w_pop>0){
			$("#m2_graphic_modal .m2_modal>li").eq(w_pop).stop(true,true).fadeOut();
			w_pop--;			

			$("#m2_graphic_modal .w_page span:nth-child(1)").text(w_pop+1); /*페이지번호*/
			$("#m2_graphic_modal .m2_modal>li").eq(w_pop).stop(true,true).fadeIn().scrollTop(0);
		}
        return false;
	});
			
	/*오른쪽 상단 버튼-닫기*/

	$("#m2_graphic_modal .w_btn_close, #m2_graphic_modal .modal_background").click(function(){
		// $("html").css({overflowY:"scroll"});
		$("#m2_graphic_modal").stop(true,true).fadeOut();
		$("#m2_graphic_modal .m2_modal>li").stop(true,true).hide();
		return false;
	}); 

	// // graphic-list ul li a 버튼 클릭시__________________________________
	
	// uiuxdesign-list ul li a 버튼 클릭시__________________________________

	$(".m2_uiuxdesign-list ul li a").click(function(){

		ud_pop=$(this).parent('li').index();	//Detail 버튼의 부모의 index	
		$("#m2_uiux-design_modal .w_page span:nth-child(1)").text(ud_pop+1); //오른쪽 상단 페이지 넘버
		// $("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$("#m2_uiux-design_modal .m2_modal>li").eq(ud_pop).show(); //g_pop index에 해당하는 팜업보이기
		$("#m2_uiux-design_modal").stop(true,true).fadeIn(); //검정배경        

		$(".m2_modal>li").scrollTop(0);
        return false;

	});	

	/*오른쪽 상단 버튼-다음보기*/

	$("#m2_uiux-design_modal .w_btn .right_btn").click(function(){
		$("#m2_uiux-design_modal").stop(true,true).scrollTop(0); /*스크롤 상단으로 올리기*/		

		if(ud_pop<7){
			$("#m2_uiux-design_modal .m2_modal>li").eq(ud_pop).stop(true,true).fadeOut(); 
			ud_pop++;	

			$("#m2_uiux-design_modal .w_page span:nth-child(1)").text(ud_pop+1); /*페이지 번호*/
			$("#m2_uiux-design_modal .m2_modal>li").eq(ud_pop).stop(true,true).fadeIn().scrollTop(0);			
		}
        return false;
	});	

	/*오른쪽 상단 버튼-이전보기*/

	$("#m2_uiux-design_modal .w_btn .left_btn").click(function(){
		$("#m2_uiux-design_modal").stop(true,true).scrollTop(0); /*스크롤 상단으로 올리기*/

		if(ud_pop>0){
			$("#m2_uiux-design_modal .m2_modal>li").eq(ud_pop).stop(true,true).fadeOut();
			ud_pop--;			

			$("#m2_uiux-design_modal .w_page span:nth-child(1)").text(ud_pop+1); /*페이지번호*/
			$("#m2_uiux-design_modal .m2_modal>li").eq(ud_pop).stop(true,true).fadeIn().scrollTop(0);
		}
        return false;
	});
			
	/*오른쪽 상단 버튼-닫기*/

	$("#m2_uiux-design_modal .w_btn_close, #m2_uiux-design_modal .modal_background").click(function(){
		// $("html").css({overflowY:"scroll"});
		$("#m2_uiux-design_modal").stop(true,true).fadeOut();
		$("#m2_uiux-design_modal .m2_modal>li").stop(true,true).hide();
		return false;
	}); 