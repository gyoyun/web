$(document).ready(function(){
	var menutextEng;
	var menutextKor;
	var lname;
	var size;
	var _width = $('#container').width();
	var menucount = 0;
	var _this;
	var liurl;
	var action_bg = [$("#homepage p").css("background-color"),
						$("#my_introduction p").css("background-color"),
						$("#gold p").css("background-color")];
	var check_index;
	$('.listhomepage li').click(function(){
		var liindex=$(this).index()+1;
		$('#homemenu'+liindex).tabIndex = -1;

	});

	$('#menuzip').click(function(){
		if(menucount==0){
			$('#container').removeClass('on');
			$('#menuzip').addClass('on');
			menucount++;			
		}else{
			$('#container').addClass('on');
			$('#menuzip').removeClass('on');
			menucount=0;
		}
	});

	/*content 메뉴*/
	$(".menutit").mouseover(function(){
		menutextEng = $(this).attr('id');
		menutextKor = $(this).attr('value');
		$(this).addClass("on");
		$('#'+ menutextEng + ' p').html(menutextEng);
		
	}).mouseout(function(){
		$('#'+ menutextEng + ' p').html(menutextKor);
		$('#'+ menutextEng).removeClass("on");
		$(lname +' li').removeClass("on");
		$(lname).css({height:-100});
	});
	$('.menutit ul li').click(function(){
		$('header').css({'height':'130px'});
		check_index = $(".menutit").index($(this).closest('div'));
		$("body").css({"background":action_bg[check_index]});
		$('#container').addClass('nav');
		$('#container').addClass('on');
		$('#menuzip').removeClass('on');
		$('#wrap').addClass('on');
		menucount = 0;
		liurl =$(this).data("url");

		if(check_index==0){
			$('#menu1_section').css({'display': 'block' });
			$('#text').css({'display': 'none' });
		}else{
			$('#text').css({'display': 'block' });
			$('#menu1_section').css({'display': 'none' });
			$("#text").html();
			$( "#text" ).load(liurl, function( response, status, xhr ) {
				if ( status == "error" ) {
					var msg = "Sorry but there was an error: ";
					$( "#text" ).html( msg + xhr.status + " " + xhr.statusText );
				}
			});
			/*$.ajax({
				type : 'post', //HTTP 요청 방식
				url : liurl, //해당 url
				dataType : 'html', //data 타입
				success : function(data) { //HTTP 요청 성공 후 데이터 전송
					$("#text").html(data);
				}
			});*/
		}		
	});


});
