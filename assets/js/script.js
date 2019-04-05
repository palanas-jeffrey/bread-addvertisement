var images,
	loadedImage = 0;

function preload(){
	images = new Array(
		"assets/images/frame1_1.png",
		"assets/images/frame1_2.png",
		"assets/images/frame1_4.png",
		"assets/images/frame2_1.png",
		"assets/images/frame2_2.png",
		"assets/images/frame2_3.png",
		"assets/images/frame2_4.png",
		"assets/images/frame3_1.png",
		"assets/images/dots.png",
		"assets/images/header.png",
		"assets/images/refreshBtn.png",
		"assets/images/button.png"
		);
	for( var i= 0; i < images.length; i++){
		var imageObj = new Image();
		imageObj.src = images[i];
		imageObj.addEventListener('load', imageLoad, false)
	}
}

preload();

function imageLoad(){
	loadedImage++;
	if (images.length == loadedImage){
		 document.getElementById('frame1').style.background = 'url('+images[0]+')';
		 document.getElementById('frame1_2').style.background = 'url('+images[1]+')';
		 document.getElementById('frame1_4').style.background = 'url('+images[2]+')';
		 document.getElementById('frame2_1').style.background = 'url('+images[3]+')';
		 document.getElementById('frame2_2').style.background = 'url('+images[4]+')';
		 document.getElementById('frame2_3').style.background = 'url('+images[5]+')';
		 document.getElementById('frame2_4').style.background = 'url('+images[6]+')';
		 document.getElementById('dots').style.background = 'url('+images[8]+')';
		 document.getElementById('header').style.background = 'url('+images[9]+')';


		
		 fadeInF1_2();
		 setTimeout(fadeInF1_4, 1000);
		 setTimeout(fadeOutF1, 4000);
		 setTimeout(fadeInF2_1,5000);
		 setTimeout(slideUpF2_2,5000);
		 setTimeout(fadeInF2_3,7000);
		 setTimeout(fadeInF2_4,9000);
		 setTimeout(slideDownF23, 11000);
		 setTimeout(slideDownF2_3, 11000);
		 setTimeout(fadeInDotsSlideDownHeader, 12000);
		 setTimeout(fadeInShopBtn, 13000);
		 setTimeout(fadeInRefresh, 13500)
	}
}
document.onreadystatechange = function(){
	if(document.readyState === "complete"){
		document.getElementById('frame1').style.visibility = "visible";
	}
}



function fadeInF1_2(){
	document.getElementById("frame1_2").classList.add('fadeIn');
}
function fadeInF1_4(){
	document.getElementById("frame1_4").classList.add('fadeIn');
}
function fadeOutF1(){
	document.getElementById("frame1").classList.add('fadeOut');
}
function fadeInF2_1(){
	document.getElementById("frame2_1").classList.add('fadeIn');
}
function slideUpF2_2(){
	document.getElementById("frame2_2").classList.add('slideUp');
}
function fadeInF2_3(){
	document.getElementById("frame2_3").classList.add('fadeIn');
}
function fadeInF2_4(){
	document.getElementById("frame2_2").style.visibility="hidden";
	document.getElementById("frame2_1").style.visibility="hidden";
	document.getElementById("frame2_4").classList.add('fadeIn');
	document.getElementById("frame2_3").classList.add('z9');
}
function slideDownF23(){
	document.getElementById("frame2").classList.add('slideDownF23');
}
function slideDownF2_3(){
	document.getElementById("frame2_3").classList.add('slideDownF2_3');
}
function fadeInDotsSlideDownHeader(){
	document.getElementById("dots").classList.add('fadeIn');
	document.getElementById("dots").style.visibility="visible";
	document.getElementById("header").style.visibility="visible";
	document.getElementById("header").classList.add('slideDownHeader');
}
function fadeInShopBtn(){
	document.getElementById("shopBtn").classList.add('fadeIn');
}	
function fadeInRefresh(){
	document.getElementById("rBtn").classList.add('fadeIn');
}

document.getElementById("rBtn").onclick= function(){
	location.reload();
}