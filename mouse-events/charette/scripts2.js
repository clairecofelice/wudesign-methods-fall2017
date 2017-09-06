$(".b1").click(function() {
	$(this).css("background-color", getRandomColor());
	});

	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  	return color;
}

function alertBox() {
	alert("This is an alert box!")
}

$(".b2").click(function() {
	$(this).css(alertBox());
});

function confirmBox() {
	var response;
	if (confirm("Press a button!") == true) {
		response = "You pressed OK!";
	} else {
		response = "You pressed Cancel!";
	}
	document.getElementById("confirmBox").innerHTML = response;
}


$(".b3").click(function() {
	$(this).css(confirmBox());
});

function promptBox() {
    var txt;
    var name = prompt("Please enter your name:", "Claire Cofelice");
    if (name == null || name == "") {
        txt = "Come back!";
    } else {
        txt = "Hello " + name + "! How are you today?";
    }
    document.getElementById("promptBox").innerHTML = txt;
}

$(".b4").click(function() {
	$(this).css(promptBox());
});

function openWindow() {
	window.open("http://methods.wudesign.me/");
}

$(".b5").click(function() {
	$(this).css(openWindow());
});

function openSmWindow() {
	window.open("http://methods.wudesign.me/", "_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400");
}

$(".b6").click(function() {
	$(this).css(openSmWindow());
});

function goBack() {
    window.history.back()
}

$(".b7").click(function() {
	$(this).css(goBack());
});

$(".b8").click(function() {
	document.getElementById("date").innerHTML = Date();
});

function countdown() {
    setTimeout(myTimeout1, 1000) 
    setTimeout(myTimeout2, 2000) 
    setTimeout(myTimeout3, 3000) 
    setTimeout(myTimeout4, 4000) 
    setTimeout(myTimeout5, 5000) 
}
function myTimeout1() {
    document.getElementById("countdown").innerHTML = "5";
}
function myTimeout2() {
    document.getElementById("countdown").innerHTML = "4";
}
function myTimeout3() {
    document.getElementById("countdown").innerHTML = "3";
}
function myTimeout4() {
    document.getElementById("countdown").innerHTML = "2";
}
function myTimeout5() {
    document.getElementById("countdown").innerHTML = "1";
}

$(".b9").click(function() {
	$(this).css(countdown());
});

$(".b10").click(function() {
	console.log(100 + 6);
});

function randNum() {
	document.getElementById("random").innerHTML = Math.random();
}

$(".b11").click(function() {
	$(this).css(randNum());
});

function roundNum() {
	document.getElementById("round").innerHTML = Math.round(4.7);
}

$(".b12").click(function() {
	$(this).css(roundNum());
});

function squareRoot() {
	document.getElementById("sqrt").innerHTML = Math.sqrt(121);
}

$(".b13").click(function() {
	$(this).css(squareRoot());
});

function getPi() {
	document.getElementById("pi").innerHTML = Math.PI;
}

$(".b14").click(function() {
	$(this).css(getPi());
});

function getMin() {
	document.getElementById("min").innerHTML = Math.min(-1, 0, 1, 2, 5);
}

$(".b15").click(function() {
	$(this).css(getMin());
});