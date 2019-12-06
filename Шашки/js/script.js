'use strict'
$(document).ready(function(){$('#inpChess').hide()})
function addBoard(){
	$('body').append('<div class="container"></div>');
	for (let i=0;i<8;i++){
		for (let j=0;j<8;j++){
			if((i-j)%2){
				$('.container').append('<div class="cell white"></div>');
			}
			else{
				$('.container').append('<div class="cell black"></div>');
			}
		}
	}
	$('.cell').wrapAll('<div class="border"></div>');
	$('#inpTable').hide();
	$('#inpChess').show();
}
let blackSteps=0;
let whiteSteps=0;
function addDraughts(){
	let dark='<img src="img/shashochka.gif" class="blackD"></img>';
	let light='<img src="img/shashochka2.gif" class="whiteD"></img>';
	$('div').filter('.black').slice(0, 12).append(light);
	$('div').filter('.black').slice(20, 32).append(dark);
	$('#inpChess').hide();
	$('.cell img').draggable()
	$('body').append('<div id="lot1" class="lotok">Black<hr></div><div id="lot2" class="lotok">White<hr></div>');
	$('.black').droppable({
		accept: 'img',
		hoverClass: 'hover',
		greedy: true,
		tolerance: 'pointer',
	});
	$('.lotok').droppable({
		accept: 'img',
		hoverClass: 'hover',
		greedy: true,
		tolerance: 'pointer',
		drop: function(){
			if($('.ui-draggable-dragging').hasClass('blackD')&&$(this).attr('id')=='lot1' || $('.ui-draggable-dragging').hasClass('whiteD')&&$(this).attr('id')=='lot2'){
				$('.ui-draggable-dragging').hasClass('blackD')?blackSteps++:whiteSteps++;
				$('.ui-draggable-dragging').css('pointer-events', 'none');
				console.log('Черные - ' + blackSteps + ',Белые - ' + whiteSteps);
			}
			else alert('Не тот лоток')
			if(blackSteps==12 || whiteSteps==12) blackSteps==12?alert('Победили белые'):alert('Победили черные');
		},
	})
}