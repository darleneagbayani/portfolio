// JavaScript Document

///////////////////////////////////
/* computer/tablet/mobile */
///////////////////////////////////
/* background */
function transition() {
  $('.ui.fluid.image')
    .transition({
      animation: 'fade in',
      duration: '5s'
    });
}
/*experience*/
function accordion() {
	$('.ui.accordion').accordion({
		exclusive: false
	});
	$('ui.buttons .button').on('click', function() {
		$(this).addClass('positive')
		.siblings()
		.removeClass('positive');
	});
}
jQuery(function(){
         jQuery('#showall').click(function(){
               jQuery('.targetDiv').show();
        });
        jQuery('.showSingle').click(function(){
              jQuery('.targetDiv').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});
jQuery(function(){
         jQuery('#showallmobile').click(function(){
               jQuery('.targetDivMobile').show();
        });
        jQuery('.showSingleMobile').click(function(){
              jQuery('.targetDivMobile').hide();
              jQuery('#div'+$(this).attr('targetMobile')).show();
        });
});
$(function(){
	$("#experience1").click(function(){
		$(".experience1").modal('show');
	});
	$(".experience1").modal({
		closable: true
	});
});
$(function(){
	$("#experience2").click(function(){
		$(".experience2").modal('show');
	});
	$(".experience2").modal({
		closable: true
	});
});
$(function(){
	$("#experience3").click(function(){
		$(".experience3").modal('show');
	});
	$(".experience3").modal({
		closable: true
	});
});
$(function(){
	$("#experience4").click(function(){
		$(".experience4").modal('show');
	});
	$(".experience4").modal({
		closable: true
	});
});
$(function(){
	$("#experience5").click(function(){
		$(".experience5").modal('show');
	});
	$(".experience5").modal({
		closable: true
	});
});
$(function(){
	$("#experience6").click(function(){
		$(".experience6").modal('show');
	});
	$(".experience6").modal({
		closable: true
	});
});
$(function(){
	$("#experience7").click(function(){
		$(".experience7").modal('show');
	});
	$(".experience7").modal({
		closable: true
	});
});
$(function(){
	$("#experience8").click(function(){
		$(".experience8").modal('show');
	});
	$(".experience8").modal({
		closable: true
	});
});
$(function(){
	$("#experience9").click(function(){
		$(".experience9").modal('show');
	});
	$(".experience9").modal({
		closable: true
	});
});
$(function(){
	$("#experience10").click(function(){
		$(".experience10").modal('show');
	});
	$(".experience10").modal({
		closable: true
	});
});
$(function(){
	$("#experience11").click(function(){
		$(".experience11").modal('show');
	});
	$(".experience11").modal({
		closable: true
	});
});
$(function(){
	$("#experience12").click(function(){
		$(".experience12").modal('show');
	});
	$(".experience12").modal({
		closable: true
	});
});
$(function(){
	$("#experience1m").click(function(){
		$(".experience1m").modal('show');
	});
	$(".experience1m").modal({
		closable: true
	});
});
$(function(){
	$("#experience2m").click(function(){
		$(".experience2m").modal('show');
	});
	$(".experience2m").modal({
		closable: true
	});
});
$(function(){
	$("#experience3m").click(function(){
		$(".experience3m").modal('show');
	});
	$(".experience3m").modal({
		closable: true
	});
});
$(function(){
	$("#experience4m").click(function(){
		$(".experience4m").modal('show');
	});
	$(".experience4m").modal({
		closable: true
	});
});
$(function(){
	$("#experience5m").click(function(){
		$(".experience5m").modal('show');
	});
	$(".experience5m").modal({
		closable: true
	});
});
$(function(){
	$("#experience6m").click(function(){
		$(".experience6m").modal('show');
	});
	$(".experience6m").modal({
		closable: true
	});
});
$(function(){
	$("#experience7m").click(function(){
		$(".experience7m").modal('show');
	});
	$(".experience7m").modal({
		closable: true
	});
});
$(function(){
	$("#experience8m").click(function(){
		$(".experience8m").modal('show');
	});
	$(".experience8m").modal({
		closable: true
	});
});
$(function(){
	$("#experience9m").click(function(){
		$(".experience9m").modal('show');
	});
	$(".experience9m").modal({
		closable: true
	});
});
$(function(){
	$("#experience10m").click(function(){
		$(".experience10m").modal('show');
	});
	$(".experience10m").modal({
		closable: true
	});
});

$(function(){
	$("#experience11m").click(function(){
		$(".experience11m").modal('show');
	});
	$(".experience11m").modal({
		closable: true
	});
});
$(function(){
	$("#experience12m").click(function(){
		$(".experience12m").modal('show');
	});
	$(".experience12m").modal({
		closable: true
	});
});
function dimmer() {
$('.ui.dimmer')
  .dimmer({
    on: 'hover'
  })
;
}

function tab() {
$('.ui.menu.top .item').tab();
}

$(function(){
	$("#website1").click(function(){
		$(".website1").modal('show');
	});
	$(".website1").modal({
		closable: true
	});
});
$(function(){
	$("#website2").click(function(){
		$(".website2").modal('show');
	});
	$(".website2").modal({
		closable: true
	});
});
$(function(){
	$("#website3").click(function(){
		$(".website3").modal('show');
	});
	$(".website3").modal({
		closable: true
	});
});
$(function(){
	$("#website4").click(function(){
		$(".website4").modal('show');
	});
	$(".website4").modal({
		closable: true
	});
});
$(function(){
	$("#website5").click(function(){
		$(".website5").modal('show');
	});
	$(".website5").modal({
		closable: true
	});
});
$(function(){
	$("#website6").click(function(){
		$(".website6").modal('show');
	});
	$(".website6").modal({
		closable: true
	});
});
$(function(){
	$("#website1m").click(function(){
		$(".website1m").modal('show');
	});
	$(".website1m").modal({
		closable: true
	});
});
$(function(){
	$("#website2m").click(function(){
		$(".website2m").modal('show');
	});
	$(".website2m").modal({
		closable: true
	});
});
$(function(){
	$("#website3m").click(function(){
		$(".website3m").modal('show');
	});
	$(".website3m").modal({
		closable: true
	});
});
$(function(){
	$("#website4m").click(function(){
		$(".website4m").modal('show');
	});
	$(".website4m").modal({
		closable: true
	});
});
$(function(){
	$("#website5m").click(function(){
		$(".website5m").modal('show');
	});
	$(".website5m").modal({
		closable: true
	});
});
$(function(){
	$("#website6m").click(function(){
		$(".website6m").modal('show');
	});
	$(".website6m").modal({
		closable: true
	});
});
$(function(){
	$("#design1").click(function(){
		$(".design1").modal('show');
	});
	$(".design1").modal({
		closable: true
	});
});
$(function(){
	$("#design2").click(function(){
		$(".design2").modal('show');
	});
	$(".design2").modal({
		closable: true
	});
});
$(function(){
	$("#design3").click(function(){
		$(".design3").modal('show');
	});
	$(".design3").modal({
		closable: true
	});
});
$(function(){
	$("#design4").click(function(){
		$(".design4").modal('show');
	});
	$(".design4").modal({
		closable: true
	});
});
$(function(){
	$("#design5").click(function(){
		$(".design5").modal('show');
	});
	$(".design5").modal({
		closable: true
	});
});
$(function(){
	$("#design6").click(function(){
		$(".design6").modal('show');
	});
	$(".design6").modal({
		closable: true
	});
});
$(function(){
	$("#design7").click(function(){
		$(".design7").modal('show');
	});
	$(".design7").modal({
		closable: true
	});
});
$(function(){
	$("#design8").click(function(){
		$(".design8").modal('show');
	});
	$(".design8").modal({
		closable: true
	});
});
$(function(){
	$("#design9").click(function(){
		$(".design9").modal('show');
	});
	$(".design9").modal({
		closable: true
	});
});
$(function(){
	$("#design10").click(function(){
		$(".design10").modal('show');
	});
	$(".design10").modal({
		closable: true
	});
});
$(function(){
	$("#design11").click(function(){
		$(".design11").modal('show');
	});
	$(".design11").modal({
		closable: true
	});
});
$(function(){
	$("#design12").click(function(){
		$(".design12").modal('show');
	});
	$(".design12").modal({
		closable: true
	});
});
$(function(){
	$("#design13").click(function(){
		$(".design13").modal('show');
	});
	$(".design13").modal({
		closable: true
	});
});
$(function(){
	$("#design14").click(function(){
		$(".design14").modal('show');
	});
	$(".design14").modal({
		closable: true
	});
});
$(function(){
	$("#design15").click(function(){
		$(".design15").modal('show');
	});
	$(".design15").modal({
		closable: true
	});
});
$(function(){
	$("#design16").click(function(){
		$(".design16").modal('show');
	});
	$(".design16").modal({
		closable: true
	});
});
$(function(){
	$("#design17").click(function(){
		$(".design17").modal('show');
	});
	$(".design17").modal({
		closable: true
	});
});
$(function(){
	$("#design18").click(function(){
		$(".design18").modal('show');
	});
	$(".design18").modal({
		closable: true
	});
});
$(function(){
	$("#design1m").click(function(){
		$(".design1m").modal('show');
	});
	$(".design1m").modal({
		closable: true
	});
});
$(function(){
	$("#design2m").click(function(){
		$(".design2m").modal('show');
	});
	$(".design2m").modal({
		closable: true
	});
});
$(function(){
	$("#design3m").click(function(){
		$(".design3m").modal('show');
	});
	$(".design3m").modal({
		closable: true
	});
});
$(function(){
	$("#design4m").click(function(){
		$(".design4m").modal('show');
	});
	$(".design4m").modal({
		closable: true
	});
});
$(function(){
	$("#design5m").click(function(){
		$(".design5m").modal('show');
	});
	$(".design5m").modal({
		closable: true
	});
});
$(function(){
	$("#design6m").click(function(){
		$(".design6m").modal('show');
	});
	$(".design6m").modal({
		closable: true
	});
});
$(function(){
	$("#design7m").click(function(){
		$(".design7m").modal('show');
	});
	$(".design7").modal({
		closable: true
	});
});
$(function(){
	$("#design8m").click(function(){
		$(".design8m").modal('show');
	});
	$(".design8m").modal({
		closable: true
	});
});
$(function(){
	$("#design9m").click(function(){
		$(".design9m").modal('show');
	});
	$(".design9m").modal({
		closable: true
	});
});
$(function(){
	$("#design10m").click(function(){
		$(".design10m").modal('show');
	});
	$(".design10m").modal({
		closable: true
	});
});
$(function(){
	$("#design11m").click(function(){
		$(".design11m").modal('show');
	});
	$(".design11m").modal({
		closable: true
	});
});
$(function(){
	$("#design12m").click(function(){
		$(".design12m").modal('show');
	});
	$(".design12m").modal({
		closable: true
	});
});
$(function(){
	$("#design13m").click(function(){
		$(".design13m").modal('show');
	});
	$(".design13m").modal({
		closable: true
	});
});
$(function(){
	$("#design14m").click(function(){
		$(".design14m").modal('show');
	});
	$(".design14m").modal({
		closable: true
	});
});
$(function(){
	$("#design15m").click(function(){
		$(".design15m").modal('show');
	});
	$(".design15m").modal({
		closable: true
	});
});
$(function(){
	$("#design16m").click(function(){
		$(".design16m").modal('show');
	});
	$(".design16m").modal({
		closable: true
	});
});
$(function(){
	$("#design17m").click(function(){
		$(".design17m").modal('show');
	});
	$(".design17m").modal({
		closable: true
	});
});
$(function(){
	$("#design18m").click(function(){
		$(".design18m").modal('show');
	});
	$(".design18m").modal({
		closable: true
	});
});
$(function(){
	$("#latestwork1").click(function(){
		$(".latestwork1").modal('show');
	});
	$(".latestwork1").modal({
		closable: true
	});
});
$(function(){
	$("#latestwork2").click(function(){
		$(".latestwork2").modal('show');
	});
	$(".latestwork2").modal({
		closable: true
	});
});
$(function(){
	$("#latestwork1m").click(function(){
		$(".latestwork1m").modal('show');
	});
	$(".latestwork1m").modal({
		closable: true
	});
});
$(function(){
	$("#latestwork2m").click(function(){
		$(".latestwork2m").modal('show');
	});
	$(".latestwork2m").modal({
		closable: true
	});
});
///////////////////////////////////
/* computer tablet only */
///////////////////////////////////


///////////////////////////////////
/* mobile only */
///////////////////////////////////
function dropdown() {
  $('.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'fade in'
    });
}
