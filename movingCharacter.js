const characterData = {
	arrImgs: ["santa00.png", "santa01.png", "santa02.png", "santa03.png", "santa04.png", "santa05.png"],
	poseNumber: 0,
	elem: document.querySelector("#drag"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 500,
	y: document.querySelector("#castle").scrollHeight - 680,
	timerId: null
};
const characterData2 = {
	arrImgs: ["ang00.png", "ang01.png",
		"ang02.png", "ang03.png", "ang04.png",
		"ang05.png", "ang06.png", "ang07.png",
		"ang08.png", "ang09.png", "ang10.png",
		"ang11.png", "ang12.png", "ang13.png",
		"ang14.png", "ang15.png"
	],
	poseNumber: 0,
	elem: document.querySelector("#angel"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 880,
	y: document.querySelector("#castle").scrollHeight - 1200,
	timerId: null
};
const characterData3 = {
	arrImgs: ["runninge0000.png", "runninge0001.png",
		"runninge0002.png", "runninge0003.png", "runninge0004.png",
		"runninge0005.png", "runninge0006.png", "runninge0007.png"
	],
	poseNumber: 0,
	elem: document.querySelector("#spid"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 0,
	y: document.querySelector("#castle").scrollHeight - 340,
	timerId: null
};
const characterData4 = {
	arrImgs: ["arkTree00.png", "arkTree01.png"],
	poseNumber: 0,
	elem: document.querySelector("#tree"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 1200,
	y: document.querySelector("#castle").scrollHeight - 780,
	timerId: null
};
const characterData5 = {
	arrImgs: ["campFire00.png", "campFire01.png", "campFire02.png", "campFire03.png", "campFire04.png"],
	poseNumber: 0,
	elem: document.querySelector("#camp"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 980,
	y: document.querySelector("#castle").scrollHeight - 570,
	timerId: null
};
const characterData6 = {
	arrImgs: ["snowflake00.png", "snowflake01.png",
		"snowflake02.png", "snowflake03.png", "snowflake04.png",
		"snowflake05.png", "snowflake06.png", "snowflake07.png",
		"snowflake08.png", "snowflake09.png", "snowflake010.png"
	],
	poseNumber: 0,
	elem: document.querySelector("#flake"),
	screenWidth: document.querySelector("#castle").clientWidth,
	screenHeight: document.querySelector("#castle").scrollHeight,
	x: 480,
	y: document.querySelector("#castle").scrollHeight - 950,
	timerId: null
};
//function move() {
characterData2.timerId = setInterval(frame, 100);
characterData.timerId = setInterval(frame2, 100);
characterData3.timerId = setInterval(frame3, 100);
characterData4.timerId = setInterval(frame4, 100);
characterData5.timerId = setInterval(frame5, 100);
characterData6.timerId = setInterval(frame6, 100);
//}
function frame() {
	if (characterData.y > characterData.screenWidth - 1000) {
		characterData.y = 10;
	} else {
		characterData.y -= 2;
		characterData.elem.style.top = characterData.y + "px";
		characterData.elem.style.left = characterData.x + "px";
		characterData.elem.src =
			"angHov\\" + characterData.arrImgs[characterData.poseNumber];
		console.log(characterData.elem.src);
		characterData.poseNumber = (characterData.poseNumber + 1) % 8; //speed of picture not speed over the screen
	}
}

function frame2() {
	if (characterData.x > characterData.screenWidth - 150) {
		characterData.x = 5;
	} else {
		characterData.x += 2;
		characterData.elem.style.top = characterData.y + "px";
		characterData.elem.style.left = characterData.x + "px";
		characterData.elem.src =
			"santaFly\\" + characterData.arrImgs[characterData.poseNumber];
		console.log(characterData.elem.src);
		characterData.poseNumber = (characterData.poseNumber + 1) % 4;
	}
}

function frame3() {
	if (characterData3.x > characterData3.screenWidth - 750) {
		characterData3.x = 5;
	} else {
		characterData3.x += 3;
		characterData3.elem.style.top = characterData3.y + "px";
		characterData3.elem.style.left = characterData3.x + "px";
		characterData3.elem.src =
			"boyAlt\\" + characterData3.arrImgs[characterData3.poseNumber];
		console.log(characterData3.elem.src);
		characterData3.poseNumber = (characterData3.poseNumber + 1) % 8;
	}
}

function frame4() {
	if (characterData4.x > characterData4.screenWidth - 150) {
		characterData4.x = 15;
	} else {
		characterData4.x += 0;
		characterData4.elem.style.top = characterData4.y + "px";
		characterData4.elem.style.left = characterData4.x + "px";
		characterData4.elem.src =
			"tree\\" + characterData4.arrImgs[characterData4.poseNumber];
		console.log(characterData4.elem.src);
		characterData4.poseNumber = (characterData4.poseNumber + 1) % 2;
	}
}

function frame5() {
	if (characterData5.x > characterData5.screenWidth - 150) {
		characterData5.x = 15;
	} else {
		characterData5.x += 0;
		characterData5.elem.style.top = characterData5.y + "px";
		characterData5.elem.style.left = characterData5.x + "px";
		characterData5.elem.src =
			"campFire\\" + characterData5.arrImgs[characterData5.poseNumber];
		console.log(characterData5.elem.src);
		characterData5.poseNumber = (characterData5.poseNumber + 1) % 2;
	}
}

function frame6() {
	if (characterData6.y > characterData6.screenWidth - 1050) {
		characterData6.y = 10;
	} else {
		characterData6.y += 2;
		characterData6.elem.style.top = characterData6.y + "px";
		characterData6.elem.style.left = characterData6.x + "px";
		characterData6.elem.src =
			"snowFlake\\" + characterData6.arrImgs[characterData6.poseNumber];
		console.log(characterData6.elem.src);
		characterData6.poseNumber = (characterData6.poseNumber + 1) % 10;
	}
}

/*function frame() {
    if (pos == 350) {
    clearInterval(id);
    } else {
    pos++;
    characterData.elem.style.top = pos + 'px';
    characterData.elem.style.left = pos + 'px';
    }
    }*/
/*function frame() {
    if (pos == 350) {
    clearInterval(id);
    } else {
    pos++;
    characterData.elem.style.right = pos + 'px';
    //elem.style.left = pos + 'px';
    }
    }*/