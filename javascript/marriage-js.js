var date = new Date();
var day = date.getDay();
// var month = date.getMonth();
// var year = date.getFullYear();
// var h = date.getHours();
// var m = date.getMinutes();
var footer = document.getElementById("footer");
// document.write(month + day + year + h + m);
var page_color = document.getElementById("list");

function firstSet(){
	console.log("Day: " + day);
	page_color.style.backgroundColor = "#67bf68";
	//green
	page_color = document.getElementById("list").style.backgroundColor = "#67bf68";
	footer.style.backgroundColor = page_color;
}
function secondSet(){
	console.log("Day: " + day);
	page_color.style.backgroundColor = "#63d4e2";
	//light blue
	page_color = document.getElementById("list").style.backgroundColor = "#63d4e2";
	footer.style.backgroundColor = page_color;
}
function thirdSet(){
	console.log("Day: " + day);
	page_color.style.backgroundColor = "#d686d1";
	//pink
	page_color = document.getElementById("list").style.backgroundColor = "#d686d1";
	footer.style.backgroundColor = page_color;
}
function fourthSet(){
	console.log("Day: " + day);
	page_color.style.backgroundColor = "#e8a053";
	//orange
	page_color = document.getElementById("list").style.backgroundColor = "#e8a053";
	footer.style.backgroundColor = page_color;

}
var subtitle = document.getElementById("title");
function weekend(){
	subtitle.textContent = "Weekend Wonders";
}
function firstHalf(){
	subtitle.textContent = "Food for Thought";
}
function secondHalf(){
	subtitle.textContent = "Did You Know?";
}
	if (day == 0 || day == 1){
		firstSet();
		if(day == 0){
			weekend();
			alert("Omg it's Sunday! Get HW done!");
		}
		else{
			firstHalf();
			alert("Is it really Monday!? Ew!");
		}
	} else if (day == 2 || day == 3){
		secondSet();
		firstHalf();
		if(day == 2){
			alert("Tuesdays are always so long :(");
		}
		else{
			alert("Come one it's Wednesday! Half way through the week!");
		}
	} else if (day == 4 || day == 5){
		thirdSet();
		secondHalf();
		if(day == 4){
			alert("Thursday? One day away from Friday...");
		}
		else{
			alert("FRIDAY YASSS");
		}
	} else {
		fourthSet();
		weekend();
		alert("SATURDAY! TIME TO RELAX!!!");
	}

function responsePos(){
	alert("Thank you! Your feedback is greatly appreciated!")
}
function responseNeg(){
	alert("Sorry to hear that, if there is anything you would like us to fix please contact 1-800-GET-HELP");
}
all_buttons = document.querySelectorAll('button');
console.log(all_buttons);

all_buttons[0].addEventListener('click', responsePos);
all_buttons[1].addEventListener('click', responseNeg);
all_buttons[2].addEventListener('click', responseNeg);




all_boxes = document.getElementsByClassName("box");
console.log(all_boxes);

function changeSideColor(){
	for (var i = 0, j = all_boxes.length; i<j;i++){
		all_boxes[i].style.backgroundColor = page_color;
	}
}
all_boxes[0].addEventListener('mouseover', changeSideColor);
all_boxes[0].addEventListener('touchstart', changeSideColor);

all_boxes[1].addEventListener('mouseover', changeSideColor);
all_boxes[1].addEventListener('touchstart', changeSideColor);


all_boxes[2].addEventListener('mouseover', changeSideColor);
all_boxes[2].addEventListener('touchstart', changeSideColor);

