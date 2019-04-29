var centereye = document.getElementById("centereye");

var topleft = document.getElementById("topleft");
var TLcontent = document.getElementById("TLcontent");
var topright = document.getElementById("topright");
var TRcontent = document.getElementById("TRcontent");


var bottomleft = document.getElementById("bottomleft");
var BLcontent = document.getElementById("BLcontent");

var bottomright = document.getElementById("bottomright");
var BRcontent = document.getElementById("BRcontent");


var TLhidden = true;
var TRhidden = true;
var BLhidden = true;
var BRhidden = true;

var expandable = false;

function centereyeFunc(){
	centereye.classList.add("hidden");
	backhome.classList.remove("hidden");
	expandable = true;
}



topleft.addEventListener("click", smallTL);
topright.addEventListener("click", smallTR);
bottomleft.addEventListener("click", smallBL);
bottomright.addEventListener("click", smallBR);

function resetAll() {
	topright.style.width = "50%";
	topright.style.height = "50%";


	topleft.style.width = "50%";
	topleft.style.height = "50%";


	bottomright.style.width = "50%";
	bottomright.style.height = "50%";

	
	bottomleft.style.width = "50%";
	bottomleft.style.height = "50%";
}

function smallTL() {
	resetAll();
	if(expandable) {
		topright.style.width = "10%";
		topright.style.height = "90%";
		TRcontent.classList.add("hidden");

		bottomleft.style.width = "90%";
		bottomleft.style.height = "10%";
		BLcontent.classList.add("hidden");
	
		bottomright.style.width = "10%";
		bottomright.style.height = "10%";
		BRcontent.classList.add("hidden");

		topleft.style.width = "90%";
		topleft.style.height = "90%";
		TLcontent.classList.remove("hidden");
	} else {
	
	}
}

function smallTR() {
	if(expandable) {
		resetAll();
		topleft.style.width = "10%";
		topleft.style.height = "90%";
		TLcontent.classList.add("hidden");

		bottomright.style.width = "90%";
		bottomright.style.height = "10%";
		BRcontent.classList.add("hidden");


		bottomleft.style.width = "10%";
		bottomleft.style.height = "10%";
		BLcontent.classList.add("hidden");


		topright.style.width = "90%";
		topright.style.height = "90%";
		TRcontent.classList.remove("hidden");
	} else {
		
	}
}

function smallBL() {
	if(expandable) {
		resetAll();
		topleft.style.width = "90%";
		topleft.style.height = "10%";
		TLcontent.classList.add("hidden");

		bottomright.style.width = "10%";
		bottomright.style.height = "90%";
		BRcontent.classList.add("hidden");


		topright.style.width = "10%";
		topright.style.height = "10%";
		TRcontent.classList.add("hidden");


		bottomleft.style.width = "90%";
		bottomleft.style.height = "90%";
		BLcontent.classList.remove("hidden");
	} else {
		
	}
}

function smallBR() {
	if(expandable) {
		resetAll();
		topleft.style.width = "10%";
		topleft.style.height = "10%";
		TLcontent.classList.add("hidden");

		topright.style.width = "90%";
		topright.style.height = "10%";
		TRcontent.classList.add("hidden");


		bottomleft.style.width = "10%";
		bottomleft.style.height = "90%";
		BLcontent.classList.add("hidden");


		bottomright.style.width = "90%";
		bottomright.style.height = "90%";
		BRcontent.classList.remove("hidden");
	} else {
		
	}
}

//BACK HOME

var backhome = document.getElementById("backhome");

backhome.addEventListener("click", function(){
	resetAll();
	TLcontent.classList.add("hidden");
	TRcontent.classList.add("hidden");
	BLcontent.classList.add("hidden");
	BRcontent.classList.add("hidden");
	centereye.classList.remove("hidden");
	centereye.style.left = "40%";
	centereye.style.top = "40%";
	atmosphere.classList.remove("hidden");
	backhome.classList.add("hidden");
	expandable = false;
	
});


//select everything
var atmosphere = document.querySelector(".atmosphere");

var closeButton = document.getElementById("lightbox-close");
//make a function to make random top & left values
var newTop = 0;
var newLeft = 0;

function topAndLeft() {
	newLeft = Math.floor(Math.random() * (screen.width - 500)) + "px";
	newTop = Math.floor(Math.random() * (screen.height - 400)) + "px";
	centereye.style.left = newLeft;
	centereye.style.top = newTop;
}

//add an event listener so when cursor mouseover .lightbox-content or preferably .lightbox-content margin that it would run the function and move the box

centereye.addEventListener("mouseover", topAndLeft);

//move far way from mouse

closeButton.addEventListener("click", function(){
	atmosphere.classList.add("hidden");
	centereyeFunc();
})