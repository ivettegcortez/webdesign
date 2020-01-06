// this is the javascript for the professional website
// goals:
// have a toggle kind of button where if clicked the section of each heading is shown and scrolled down
// then if clicked on more info then all the info's text for each art piece will appear

// $(function() {
//   // when user clicks info element
//   	$('#info').click(function() {
//     // hide and show the info for the art
//     $('.artinfo').display(none);
//   });

// });


var date = new Date();
var day = date.getDay();

var music = document.querySelector("audio");
var header_color = document.querySelector("header");
var h2 = document.querySelectorAll("h2");
var h3 = document.querySelectorAll("h3");
var i;

function mtw(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#eda02d";
	// pink
	header_color = document.querySelector("header").style.backgroundColor = "#eda02d";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}

}
function thf(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#63d4e2";
	// light blue
	header_color = document.querySelector("header").style.backgroundColor = "#63d4e2";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}
}
function weekend(){
	console.log("Day: " + day);
	header_color.style.backgroundColor = "#73c172";
	// green
	header_color = document.querySelector("header").style.backgroundColor = "#73c172";
	for (i = 0; i<h2.length; i++){
		h2[i].style.color = header_color;
	}
	for(i = 0; i<h3.length; i++){
		h3[i].style.color = header_color;
	}
}
	if (day == 1 || day == 2 || day == 3){
		mtw();
		if(day == 1){
			alert("Moody Monday...");
			music.src = "audio/muffin-song.mp3";
			
		}
		else if(day == 2){
			alert("Troubling Tuesday---");
			music.src = "audio/black-m_sur-ma-route.mp3";
			
		}
		else{
			alert("Wacky Wednesdays~");
			music.src = "audio/danny-ocean_epa-wei.mp3";
		}
	} else if (day == 4 || day == 5){
		thf();
		if(day == 4){
			alert("Tricky Thursday?");
			music.src = "audio/pentagon-naughty-boy.mp3";
		}
		else{
			alert("Finally Friday!");
			music.src = "audio/cheetah-girls_strut.mp3";
		}
	} else if (day == 6){
		weekend();
		alert("Silly Saturday?! :0")
		music.src = "audio/florida-maluma_hola.mp3";
		
	} else {
		weekend();
		alert("Study Sunday??:(");
		music.src = "audio/noel_your-voice.mp3";
	}

