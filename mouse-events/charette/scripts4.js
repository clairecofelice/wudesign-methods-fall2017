$( ".b1" ).click(function() {
 	$(this).toggleClass("ab1");
});

$( ".b2" ).click(function() {
 	$(this).toggleClass("ab2");
});

$( ".b3" ).click(function() {
 	$(this).toggleClass("ab3");
});

$( ".b4" ).click(function() {
 	$(this).toggleClass("ab4");
});

$( ".b5" ).click(function() {
 	$(this).toggleClass("ab5");
});

$(".b6").click(function() {
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

$( ".b6" ).click(function() {
 	$(this).toggleClass("ab6");
});

$( ".b7" ).click(function() {
 	$(this).toggleClass("ab7");
});

$( ".b8" ).click(function() {
 	$(this).toggleClass("ab8");
});

$( ".b9" ).click(function() {
 	$(this).toggleClass("ab9");
});

$( ".b10" ).click(function() {
 	$(this).toggleClass("ab10");
});

$( ".b11" ).click(function() {
 	$(this).toggleClass("ab11");
});

$( ".b12" ).click(function() {
 	$(this).toggleClass("ab12");
});

$( ".b13" ).click(function() {
 	$(this).toggleClass("ab13");
});

$( ".b14" ).click(function() {
 	$(this).toggleClass("catbug");
});

$( ".b16" ).click(function() {
 	$(this).toggleClass("catbugSpin");
});

$( ".b17" ).click(function() {
 	$(this).toggleClass("catbugStrobe");
});

$( ".b18" ).click(function() {
 	$(this).toggleClass("catbugThrob");
});

function wipePage() {
	document.body.innerHTML = ""
}

$( ".b19" ).click(function() {
	$(this).css(wipePage());

});


function closeBrowser(){
    window.close();
  }

$( ".b20" ).click(function() {
	$(this).css(closeBrowser());

});
