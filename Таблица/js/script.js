'use strict'
function buttonClick(){
	let color_first = document.getElementsByClassName('color1')[0].value;
	let color_second = document.getElementsByClassName('color2')[0].value;
	if(Boolean(color_first)==0 & Boolean(color_second)==0){
		alert('Цвета не указаны');
		return;
	}
	if(Boolean(color_first)==0){
		alert('Цвет 1 не указан');
		return;
	}
	if(Boolean(color_second)==0){
		alert('Цвет 2 не указан');
		return;
	}
	let tableWidth = document.getElementsByClassName('width')[0];
	let tableHeight = document.getElementsByClassName('height')[0];
	let Table = document.createElement('table');
	let Tbody = document.createElement('tbody');
	let h = tableHeight.value;
	let w = tableWidth.value;
	if(h<=0 & w<=0){
		alert('Необходимо ввести натуральное количество строк и столбцов');
		return;
	}
	if (h<=0){
		alert('Необходимо ввести натуральное количество строк');
		return;
	};
	if(w<=0){
		alert('Необходимо ввести натуральное количество столбцов');
		return;
	};
	if(!Boolean(document.getElementsByTagName('table')[0])){
		let arrayValues = ['Сплошной', 'Шахматы', 'Через 2', 'Рамка', 'Диагональ', 'Крест', 'Змейка', 'Плюс'];
		let div_container=document.createElement('div');
		function addInput(i){
			i=+i;
			let div1 = document.createElement('div');
			div1.innerHTML = ('<input type="button" value="'+arrayValues[i]+'" onclick="color'+(i+1)+'()">');
			div_container.append(div1);
		}
		for(let i=0; i<8; i++) addInput(i);
		div_container.id='interactDiv';
		document.body.append(div_container);
		for(let i=0;i<h;i++){
			let tableRow = document.createElement('tr');
			for(let j=0;j<w;j++){
				let TableCell = document.createElement('td');
				TableCell.style.background = color_first;
				tableRow.append(TableCell);
			};
			Tbody.append(tableRow);
		};
		Table.append(Tbody);
		Table.id = 'table1';
		document.body.append(Table);
		function randColor(){
					let functions = [color1, color2, color3, color4, color5, color6, color7, color8];
					let randInt = Math.floor(Math.random() * (functions.length));
					functions[randInt]();
				}
		document.onkeydown=function(e){
			if(e.key=='r'){
				setInterval(randColor, 500);
			}
		}
	}
	else{
		document.getElementsByTagName('div')[0].remove();
		document.getElementsByTagName('table')[0].remove();
	};
};
function checkColor(){
	$('body').append('<a id="preobraz" style="background-color: '+$('.color1').val()+'"></a>');
	let color1_preobraz = $('#preobraz')[0].style.backgroundColor;
	$('#preobraz').remove();
	return color1_preobraz;
}
function color1(){
	if($('td')[0].style.backgroundColor==checkColor()){
		$('td').css('background', $('.color2').val())
	}
	else{
		$('td').css('background', $('.color1').val())
	};
};
function color2(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor!=checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i-j)%2==0 || (i+j)%2==0){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				};
			};
		};
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i-j)%2==1 | (i+j)%2==1){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				};
			};
		};
	};
};
function color3(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor==checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i+j)%3==1){
					color_ffirst(i, j);
				}
				else {
					color_fsecond(i, j);
				};
			};
		};
		return;
	};
	if($('td')[2].style.backgroundColor==checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i+j)%3==0){
					color_ffirst(i, j);
				}
				else {
					color_fsecond(i, j);
				};
			};
		};
		return;
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i+j)%3==2){
					color_ffirst(i, j);
				}
				else {
					color_fsecond(i, j);
				}
			}
		}
		return;
	}
}
function color4(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor!=checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i==0 | j==0 | i==h-1 | j==w-1){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				}
			}
		}
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i==0 | j==0 | i==h-1 | j==w-1){
					color_fsecond(i, j);
				}
				else{
					color_ffirst(i, j);
				}
			}
		}
	}
}
function color5(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor!=checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i+1>j){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				}
			}
		}
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i+1>j){
					color_fsecond(i, j);
				}
				else{
					color_ffirst(i, j);
				}
			}
		}
	}
}
function color6(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor!=checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i==j | i+j==w-1){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				}
			}
		}
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i==j | i+j==w-1){
					color_fsecond(i, j);
				}
				else{
					color_ffirst(i, j);
				}
			}
		}
	}
}
function color7(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor!=checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i%2==0 | (i%4==1 & j==w-1)| (i%2==1 & j==0 & i%4!=1) ){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				}
			}
		}
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if(i%2==0 | (i%4==1 & j==w-1)| (i%2==1 & j==0 & i%4!=1) ){
					color_fsecond(i, j);
				}
				else{
					color_ffirst(i, j);
				}
			}
		}
	}
}
function color8(){
	let h = $('tr').length;
	let w = $('tr').first().children().length;
	if($('td')[0].style.backgroundColor==checkColor()){
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i==(h/2) | i==((h-1)/2)) | (j==(w/2) | j==((w-1)/2))){
					color_ffirst(i, j);
				}
				else{
					color_fsecond(i, j);
				}
			}
		}
	}
	else{
		for(let i=0;i<h;i++){
			for(let j=0;j<w;j++){
				if((i==(h/2) | i==((h-1)/2)) | (j==(w/2) | j==((w-1)/2))){
					color_fsecond(i, j);
				}
				else{
					color_ffirst(i, j);
				}
			}
		}
	}
}
function color_ffirst(i, j){
	let tds = $('tr').first().children().length;
	let color_first = $('.color1').val();
	let arga=i*tds+j
	$('td')[arga].style.background = color_first;
}
function color_fsecond(i, j){
	let tds = $('tr').first().children().length;
	let color_second = $('.color2').val();
	let arga=i*tds+j
	$('td')[arga].style.background = color_second;
}
function changeStyle(){
	if($('#link').attr('href')=='css/style.css'){
		$('#link').attr('href', 'css/style1.css')
	}
	else{
		$('#link').attr('href', 'css/style.css')
	}
}