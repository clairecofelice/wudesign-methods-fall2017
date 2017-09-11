 $(document).ready(function () {
   	
   	$(".generation").click(function() {
        $(".box-container").append( $('<div>', {class: 'box'}));    
	});

	$(".manipulation").click(function() {
        $(".box").addClass("circle");    
	});

	$(".randomization").click(function() {
        $(".box").css("background-color", getRandomColor());
	});

	function getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  	return color;
	}

	$(".randomization").click(function() {
        $(".box").css("background-color", getRandomColor());
	});

	 function increaseWidth() {
    	
    	var newWidth = 50;
		
		for (i=0; i<100; i++) {
			newWidth+= 50;
		}
	}
	
	$(".iteration").click(function() {
        $(".box").css("width", increaseWidth());
	});

 });

