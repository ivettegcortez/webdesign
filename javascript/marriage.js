// javascript 2020 version of marriage webite
let sideList = document.getElementById('side-bar');
let sidebar = document.getElementsByClassName('box');

let yes = document.querySelectorAll('button')[0];
let no = document.querySelectorAll('button')[1];


function colorChange(){
	if(event.target.className == "box"){
		for(let i = 0; i<sidebar.length;i++){
			// this is what happens when it is not on the object
			sidebar[i].style.opacity = "0.5";
		}
		event.target.style.backgroundColor = "#f5a9c9";
		event.target.style.opacity = "1.0";
		event.target.addEventListener('mouseout', colorReset, false);
	}
	event.stopPropagation();
}

function colorReset(){
	for(let i = 0;i<sidebar.length;i++){
		sidebar[i].style.backgroundColor = "#bae3ff";
		sidebar[i].style.opacity = "1.0";
	}	
}

sideList.addEventListener('mouseover', colorChange);

yes.onclick = function PosResponse(){
	alert("That's great to hear. Hope this website can help others as it has helped you.");
}
no.onclick = function NegResponse(){
	alert("That's too bad. Try to talk to a person close to you about some problems maybe that can ease your mind.");
}

