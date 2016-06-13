
$(document).ready(function() {

	console.log('ready');

	var $video = document.querySelector("#bb-video");

	// right sidebar controller
	$('#right-close').click(function() {
		$('body').toggleClass('sidebar-right-hidden');
		// $(document).trigger('sidebar-close');
		$('#middle').toggleClass('wide');
		$('#court').toggleClass('wide');
		$('#score-bar').toggleClass('wide');
		$('#player-info').toggleClass('wide');
		$('#replay-bar').toggleClass('wide');

	});

	$('.settings-button').click(function() {
		$('#settings-menu').toggleClass('show-menu');
	});

	$('.settings-close-button').click(function() {
		$('#settings-menu').toggleClass('show-menu');
	});

	$('#player-info > .button').click(function() {
		$('#player-info').toggleClass('compare');
	});
	$('#replay-bar > .button').click(function() {
		$video.currentTime -= 15;
	})


	// video
	
	console.log($video);
	// $video.play();
	//$video.addEventListener("progress", function(event){
	//	console.log(event);
	//})



	// timeline set up
	var tl = new TimelineMax();
	tl.to({}, 30, {});
	// tl.to(".court", 3, {x: 300}, "2")
	// tl.to(".court", 1, {backgroundColor: "green"}, 10)


	var nova5tl = new TimelineMax();
	nova5tl.to("#nova5", 2, {left: "18%", top: "76%", ease: Power2.easeInOut})
		.to("#nova5", 7, {left: "88%", top: "94%", ease: Power1.easeInOut})
		.to("#nova5", 1.5, {left: "72%", top: "85%", ease: Power0.easeNone})
		.to("#nova5", 1.5, {left: "68%", top: "71%", ease: Power0.easeNone})
		.to("#nova5", .6, {left: "65%", top: "71%"})
		.to("#nova5", 0.2, {left: "65.4%", top: "71.4%"})
		.to("#nova5", 0.2, {left: "65%", top: "71%"})
		.to("#nova5", 1, {left: "68%", top: "50%", ease: Power2.easeIn})
		.to("#nova5", 1, {left: "80%", top: "31%", ease: Power0.easeNone})
		.to("#nova5", 0.4, {left: "86%", top: "32%", ease: Power0.easeNone})
		.to("#nova5", 1, {left: "98%", top: "42%", ease: Power1.easeOut})
		.to("#nova5", .5, {left: "102%", top: "40%", ease: Power1.easeIn})
		.to("#nova5", .5, {left: "100%", top: "25%", ease: Power0.easeNone})
		.to("#nova5", 1, {left: "87%", top: "22%", ease: Power0.easeNone})
		.to("#nova5", 4.4, {left: "27%", top: "26%", ease: Power1.easeInOut})
		.to("#nova5", 1, {left: "18%", top: "18%", ease: Power1.easeInOut})
		.to("#nova5", .2, {left: "17%", top: "18.5%", ease: Power1.easeInOut})
		.to("#nova5", .3, {left: "18%", top: "18%", ease: Power1.easeOut})
		.to("#nova5", .5, {left: "19%", top: "14%", ease: Power1.easeOut})
		.to("#nova5", .5, {left: "19%", top: "11.5%", ease: Power1.easeOut})
		.to("#nova5", 2, {left: "16%", top: "20%", ease: Power1.easeInOut}, '+=2')
		.to("#nova5", 2, {left: "18%", top: "14%", ease: Power1.easeInOut})
		.to("#nova5", 1.3, {left: "15%", top: "14%", ease: Power1.easeInOut})
		.to("#nova5", 3.7, {left: "46%", top: "14%", ease: Power1.easeIn});

	var nova1tl = new TimelineMax();
	nova1tl.to("#nova1", .5, {left: "17%", top: "20%", ease: Power2.easeOut})
		.to("#nova1", 1, {left: "23%", top: "15%", ease: Power2.easeOut})
		.to("#nova1", 1.5, {left: "20%", top: "50%", ease: Power1.easeIn})
		.to("#nova1", 1, {left: "25%", top: "58%", ease: Power1.easeIn})
		.to("#nova1", 1.2, {left: "33%", top: "56%", ease: Power0.easeNone})
		.to("#nova1", 1, {left: "40%", top: "56%", ease: Power2.easeIn})
		.to("#nova1", 1.5, {left: "65%", top: "68%", ease: Power2.easeOut})
		.to("#nova1", 1.3, {left: "63%", top: "66%", ease: Power2.easeInOut})
		.to("#nova1", 3.1, {left: "85%", top: "95%", ease: Power2.easeInOut})
		.to("#nova1", 1, {left: "85%", top: "97%", ease: Power2.easeOut})
		.to("#nova1", 2.5, {left: "92%", top: "95%", ease: Power1.easeInOut}, '+=0.5')
		.to("#nova1", 2.5, {left: "82%", top: "70%", ease: Power1.easeIn})
		.to("#nova1", 4.5, {left: "20%", top: "62%", ease: Sine.easeOut})
		.to("#nova1", 1, {left: "14%", top: "62%", ease: Power0.easeNone})
		.to("#nova1", .2, {left: "16%", top: "63%", ease: Power0.easeNone}, '+=1')
		.to("#nova1", 1, {left: "14%", top: "47%", ease: Power0.easeNone}, '+=1')
		.to("#nova1", 2, {left: "20%", top: "47%", ease: Power0.easeNone}, '+=2')
		.to("#nova1", 1, {left: "19%", top: "23%", ease: Power0.easeNone})
		.to("#nova1", 1, {left: "12%", top: "20%", ease: Power0.easeNone})
		.to("#nova1", 2, {left: "23%", top: "34%", ease: Power0.easeNone}, '+=1');

	var nova3tl = new TimelineMax();
	nova3tl.to("#nova3", 8.5, {left: "81%", top: "6%", ease: Sine.easeInOut})
		.to("#nova3", 1, {left: "82%", top: "5%", ease: Power0.easeNone}, '+=3')
		.to("#nova3", 1, {left: "80%", top: "4%", ease: Power0.easeNone}, '+=1')
		.to("#nova3", 0.4, {left: "79%", top: "4%", ease: Power0.easeNone}, '+=.1')
		.to("#nova3", 6.5, {left: "14%", top: "20%", ease: Sine.easeIn}, '+=1')
		.to("#nova3", 1.5, {left: "7%", top: "37%", ease: Power0.easeNone})
		.to("#nova3", 2.5, {left: "6%", top: "60%", ease: Sine.easeOut})
		.to("#nova3", 4, {left: "25%", top: "64%", ease: Power1.easeInOut})
		.to("#nova3", 6, {left: "70%", top: "85%", ease: Sine.easeIn});

	var nova2tl = new TimelineMax();
	nova2tl.to("#nova2", 4, {left: "40%", top: "13%", ease: Sine.easeIn})
		.to("#nova2", 3, {left: "75%", top: "13%", ease: Power0.easeNone})
		.to("#nova2", 3, {left: "93%", top: "30%", ease: Sine.easeOut})
		.to("#nova2", 1, {left: "86%", top: "40%", ease: Power0.easeNone}, '+=0.5')
		.to("#nova2", 1.5, {left: "88%", top: "57%", ease: Power0.easeNone})
		.to("#nova2", 1.5, {left: "70%", top: "70%", ease: Power0.easeNone})
		.to("#nova2", 3, {left: "55%", top: "50%", ease: Power0.easeNone}, "+=0.5")
		.to("#nova2", 5, {left: "17%", top: "50%", ease: Power0.easeNone})
		.to("#nova2", 1, {left: "17%", top: "40%", ease: Power0.easeNone})
		.to("#nova2", 1.5, {left: "25%", top: "33%", ease: Power0.easeNone})
		.to("#nova2", 3, {left: "0%", top: "36%", ease: Power0.easeNone}, '+=0.5')
		.to("#nova2", 2.5, {left: "30%", top: "50%", ease: Sine.easeIn}, '+=3')
		.to("#nova2", 2, {left: "51%", top: "40%", ease: Power0.easeNone});

	var nova45tl = new TimelineMax();
	nova45tl.to("#nova45", 4.5, {left: "65%", top: "47%", ease: Power0.easeNone})
		.to("#nova45", 1, {left: "53%", top: "50%", ease: Power0.easeNone})
		.to("#nova45", 2, {left: "72%", top: "48%", ease: Power0.easeNone}, '+=1.5')
		.to("#nova45", 2, {left: "82%", top: "62%", ease: Power0.easeNone})
		.to("#nova45", 1.5, {left: "69%", top: "62%", ease: Power0.easeNone}, '+=0.5')
		.to("#nova45", 1.5, {left: "84%", top: "62%", ease: Power0.easeNone}, '+=1')
		.to("#nova45", 1, {left: "92%", top: "45%", ease: Power0.easeNone})
		.to("#nova45", 4, {left: "35%", top: "45%", ease: Sine.easeInOut},'+=1.5')
		.to("#nova45", 0.8, {left: "30%", top: "50%", ease: Power0.easeNone})
		.to("#nova45", 2.3, {left: "9%", top: "50%", ease: Power0.easeNone}, '+=.2')
		.to("#nova45", 0.1, {left: "8%", top: "50%", ease: Power0.easeNone}, '+=0.9')
		.to("#nova45", 3, {left: "25%", top: "50%", ease: Power0.easeNone}, '+=1')
		.to("#nova45", 2, {left: "60%", top: "50%", ease: Power0.easeNone})
		.to("#nova45", 2.5, {left: "60%", top: "40%", ease: Power0.easeNone})
		.to("#nova45", 1.5, {left: "55%", top: "40%", ease: Power0.easeNone});

	var unc1tl = new TimelineMax();
	unc1tl.to("#unc1", 6, {left: "67%", top: "20%", ease: Power0.easeNone})
		.to("#unc1", 2, {left: "80%", top: "22%", ease: Power0.easeNone})
		.to("#unc1", 1.5, {left: "90%", top: "35%", ease: Power0.easeNone})
		.to("#unc1", 1.2, {left: "92%", top: "35%", ease: Power0.easeNone})
		.to("#unc1", 1, {left: "84%", top: "50%", ease: Power0.easeNone})
		.to("#unc1", 3, {left: "82%", top: "60%", ease: Power0.easeNone})
		.to("#unc1", 1, {left: "79%", top: "60%", ease: Power0.easeNone})
		.to("#unc1", 2, {left: "90%", top: "50%", ease: Power0.easeNone})
		.to("#unc1", 0.5, {left: "91%", top: "56%", ease: Power0.easeNone})
		.to("#unc1", 0.5, {left: "90%", top: "65%", ease: Power0.easeNone})
		.to("#unc1", 5, {left: "22%", top: "95%", ease: Power0.easeNone})
		.to("#unc1", 1.3, {left: "22%", top: "80%", ease: Power0.easeNone})
		.to("#unc1", 0.2, {left: "20%", top: "80%", ease: Sine.easeInOut})
		.to("#unc1", 0.5, {left: "20%", top: "65%", ease: Power0.easeNone})
		.to("#unc1", 1, {left: "18%", top: "50%", ease: Power0.easeNone})
		.to("#unc1", 1, {left: "20%", top: "40%", ease: Power0.easeNone})
		.to("#unc1", 2, {left: "10%", top: "39%", ease: Power0.easeNone}, '+=1')
		.to("#unc1", 1, {left: "20%", top: "40%", ease: Power0.easeNone})
		.to("#unc1", 2.5, {left: "30%", top: "45%", ease: Sine.easeIn})
		.to("#unc1", 2, {left: "55%", top: "45%", ease: Power0.easeNone});

	var unc2tl = new TimelineMax();
	unc2tl.to("#unc2", .5, {left: "27%", top: "39%", ease: Power0.easeNone})
		.to("#unc2", 2, {left: "37%", top: "30%", ease: Power0.easeNone})
		.to("#unc2", 1.5, {left: "38%", top: "52%", ease: Power0.easeNone})
		.to("#unc2", 2.3, {left: "51%", top: "52%", ease: Power0.easeNone})
		.to("#unc2", 1.5, {left: "74%", top: "66%", ease: Sine.easeOut})
		.to("#unc2", 1.5, {left: "70%", top: "66%", ease: Power0.easeNone})
		.to("#unc2", 0.2, {left: "70%", top: "65%", ease: Power0.easeNone})
		.to("#unc2", 2, {left: "87%", top: "77%", ease: Power1.easeInOut})
		.to("#unc2", 2, {left: "81%", top: "75%", ease: Power1.easeInOut}, "+=1")
		.to("#unc2", 1, {left: "90%", top: "70%", ease: Power0.easeNone})
		.to("#unc2", 0.8, {left: "92%", top: "50%", ease: Power0.easeNone})
		.to("#unc2", 1.2, {left: "94%", top: "49%", ease: Power0.easeNone})
		.to("#unc2", 1.5, {left: "97%", top: "50%", ease: Power0.easeNone})
		.to("#unc2", 5.5, {left: "32%", top: "25%", ease: Sine.easeInOut})
		.to("#unc2", 2, {left: "30%", top: "27%", ease: Sine.easeIn})
		.to("#unc2", 3, {left: "40%", top: "27%", ease: Power0.easeNone})
		.to("#unc2", 2, {left: "28%", top: "40%", ease: Power0.easeNone})
		.to("#unc2", 3, {left: "21%", top: "26%", ease: Power0.easeNone})
		.to("#unc2", 1.5, {left: "28%", top: "35%", ease: Power0.easeNone});

	var unc3tl = new TimelineMax();
	unc3tl.to("#unc3", 3, {left: "75%", top: "47%", ease: Power0.easeNone}, '+=1')
	.to("#unc3", 1.5, {left: "63%", top: "50%", ease: Power0.easeNone})
		.to("#unc3", 2, {left: "73%", top: "53%", ease: Power0.easeNone}, '+=0.5')
		.to("#unc3", 1.5, {left: "78%", top: "51%", ease: Power0.easeNone})
		.to("#unc3", 1.6, {left: "85%", top: "61%", ease: Power0.easeNone})
		.to("#unc3", 1.4, {left: "73%", top: "58%", ease: Power0.easeNone}, '+=0.5')
		.to("#unc3", 0.8, {left: "76%", top: "45%", ease: Power0.easeNone}, '+=0.5')
		.to("#unc3", 0.5, {left: "80%", top: "39%", ease: Power0.easeNone})
		.to("#unc3", 1.5, {left: "95%", top: "43%", ease: Power0.easeNone})
		.to("#unc3", 1, {left: "98%", top: "60%", ease: Power0.easeNone})
		.to("#unc3", 1, {left: "102%", top: "60%", ease: Power0.easeNone})
		.to("#unc3", 7, {left: "11%", top: "52%", ease: Sine.easeInOut}, '+=0.5')
		.to("#unc3", 4, {left: "50%", top: "52%", ease: Sine.easeIn}, '+=0.5')
		.to("#unc3", 3, {left: "80%", top: "42%", ease: Sine.easeOut})
		.to("#unc3", 3, {left: "65%", top: "42%", ease: Sine.easeOut});

	var unc5tl = new TimelineMax();
	unc5tl.to("#unc5", 3, {left: "40%", top: "70%", ease: Power0.easeNone})
		.to("#unc5", 6, {left: "86%", top: "83%", ease: Sine.easeOut})
		.to("#unc5", 2, {left: "75%", top: "75%", ease: Sine.easeOut},'+=0.5')
		.to("#unc5", 1, {left: "72%", top: "70%", ease: Power0.easeNone})
		.to("#unc5", .8, {left: "70%", top: "70%", ease: Power0.easeNone})
		.to("#unc5", .5, {left: "67%", top: "65%", ease: Power0.easeNone})
		.to("#unc5", .5, {left: "70%", top: "50%", ease: Power0.easeNone})
		.to("#unc5", 1, {left: "80%", top: "40%", ease: Power0.easeNone})
		.to("#unc5", 2, {left: "95%", top: "40%", ease: Sine.easeOut})
		.to("#unc5", 2, {left: "82%", top: "10%", ease: Sine.easeIn})
		.to("#unc5", 5, {left: "20%", top: "4%", ease: Sine.easeOut})
		.to("#unc5", 0.1, {left: "20.5%", top: "4.5%", ease: Sine.easeOut})
		.to("#unc5", 1, {left: "19%", top: "5%", ease: Sine.easeInOut})
		.to("#unc5", 4, {left: "50%", top: "15%", ease: Sine.easeInOut})
		.to("#unc5", 4, {left: "40%", top: "20%", ease: Sine.easeInOut})
		.to("#unc5", 4, {left: "60%", top: "20%", ease: Sine.easeInOut});

	var unc44tl = new TimelineMax();
	unc44tl.to("#unc44", 7, {left: "75%", top: "30%", ease: Sine.easeInOut})
		.to("#unc44", 2, {left: "80%", top: "30%", ease: Sine.easeOut})
		.to("#unc44", 2, {left: "83%", top: "25%", ease: Sine.easeOut})
		.to("#unc44", 2, {left: "80%", top: "25%", ease: Sine.easeOut})
		.to("#unc44", 1.5, {left: "83%", top: "25%", ease: Sine.easeOut})
		.to("#unc44", 1, {left: "80%", top: "18%", ease: Sine.easeOut})
		.to("#unc44", 1, {left: "82%", top: "18%", ease: Sine.easeOut})
		.to("#unc44", 6, {left: "7%", top: "10%", ease: Sine.easeIn})
		.to("#unc44", 2.5, {left: "4%", top: "62%", ease: Power0.easeNone})
		.to("#unc44", 6, {left: "40%", top: "62%", ease: Sine.easeInOut}, '+=0.5')
		.to("#unc44", 6, {left: "73%", top: "80%", ease: Sine.easeInOut});

	var whoHasTheBall = new TimelineMax();
		whoHasTheBall.set("#nova2", {className: "+=hasBall"});
		whoHasTheBall.set("#nova2", {className: "-=hasBall"}, 1);
		whoHasTheBall.set("#nova5", {className: "+=hasBall"}, 1);
		whoHasTheBall.set("#nova5", {className: "-=hasBall"}, 3);
		whoHasTheBall.set("#nova1", {className: "+=hasBall"}, 3);
		whoHasTheBall.set("#nova1", {className: "-=hasBall"}, 11);
		whoHasTheBall.set("#nova5", {className: "+=hasBall"}, 11);
		whoHasTheBall.set("#nova5", {className: "-=hasBall"}, 17);
		whoHasTheBall.set("#unc2", {className: "+=hasBall"}, 19);
		whoHasTheBall.set("#unc2", {className: "-=hasBall"}, 19.5);
		whoHasTheBall.set("#unc3", {className: "+=hasBall"}, 19.5);
		whoHasTheBall.set("#unc3", {className: "-=hasBall"}, 20);
		whoHasTheBall.set("#unc2", {className: "+=hasBall"}, 20);
		whoHasTheBall.set("#unc2", {className: "-=hasBall"}, 24);
		whoHasTheBall.set("#unc5", {className: "+=hasBall"}, 24);
		whoHasTheBall.set("#unc5", {className: "-=hasBall"}, 27);
		whoHasTheBall.set("#nova2", {className: "+=hasBall"}, 31);
		whoHasTheBall.set("#nova2", {className: "-=hasBall"}, 33);
		whoHasTheBall.set("#nova5", {className: "+=hasBall"}, 33);
		whoHasTheBall.set("#nova5", {className: "-=hasBall"}, 34);
		whoHasTheBall.set("#nova1", {className: "+=hasBall"}, 34);

		
		// whoHasTheBall.call(function() {$("#nova2").toggleClass("hasBall");}, null, null, 0);
		// whoHasTheBall.call(function() {$("#nova2").toggleClass("hasBall");}, null, null, 0);
		// whoHasTheBall.call(function() {$("#nova2").toggleClass("hasBall");}, null, null, 0);





	// var nova45tl = new TimelineMax();
	// nova45tl.to("#nova45", 8.5, {left: "81%", top: "6%", ease: Sine.easeInOut})
	
	tl.add(nova5tl, 1).add(nova1tl, 1).add(nova3tl, 1).add(nova2tl, 1).add(nova45tl,1);
	tl.add(unc1tl, 1).add(unc2tl, 1).add(unc3tl, 1).add(unc5tl, 1).add(unc44tl, 1);
	tl.add(whoHasTheBall, 0);


	setInterval(function() {
		// console.log($video.currentTime);
		tl.seek( $video.currentTime );
	}, 33);


})