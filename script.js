images = [
	'https://s1.1zoom.ru/big3/170/406013-svetik.jpg',
	'https://www.1zoom.ru/big2/330/255067-Sepik.jpg',
	'https://www.1zoom.ru/big/59/46370-975.jpg',
	'https://avatars.mds.yandex.net/get-pdb/989257/69642b17-24f5-4c71-877a-9d6a40939328/s1200?webp=false'
];
$(document).ready(function () {
	$('.container .bigImageContain').html(`<div class="descripePhoto">Фото №1</div>`)
	$('.container li').each(function (index) { 
	 $(this).css('background-image', `url(${images[index]})`)
	});

	$('.container li').on('click', function () {
	var numImg = $(this).index();
	$('.container .bigImageContain').css('background-image', `url(${images[numImg]})`);
	$('.container .bigImageContain').stop(true).animate({'opacity':'0'},0,function(){
		$('.container .bigImageContain').html("")
	})
	$('.container .bigImageContain').animate({'opacity':'1'},2200,function(){
		$('.container .bigImageContain').html(`<div class="descripePhoto">Фото №${numImg+1}</div>`);
	})
	});



});