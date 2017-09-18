$(document).ready(function() {
		
	(genClips = function() {
		
		$t = $('.clipped-box');
		
		var amount = 10;
		var width = $t.width() / amount;
		var height = $t.height() / amount;
		var totalSquares = Math.pow(amount, 2);

		var html = $t.find('.content').html();
		var y = 0;
		
		for(var z = 0; z <= (amount*width); z = z+width) { 
		
			$('<div class="clipped" style="clip: rect('+y+'px, '+(z+width)+'px, '+(y+height)+'px, '+z+'px)">'+html+'</div>').appendTo($t);
			
			if(z === (amount*width)-width) {
			
				y = y + height;
				z = -width;
			
			}
			
			if(y === (amount*height)) {
				z = 9999999;
			}
			
		}
		
	})();
	
	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;	
	}
	
	var first = false,
		clicked = false;
	
	$('.clipped-box div').on('click', function() {
		
		if(clicked === false) {
			
			clicked = true;
			
			$('.clipped-box .content').css({'display' : 'none'});	
	
			// Apply to each clipped-box div.
			$('.clipped-box div:not(.content)').each(function() {
				
				var v = rand(120, 90),
					angle = rand(80, 180), // The angle (the angle of projection) is a random number between 80 and 89 degrees.
					theta = (angle * Math.PI) / 180, // Theta is the angle in radians
					g = 0; // And gravity is -9.8. If you live on another planet feel free to change
					
				// $(this) as self
				var self = $(this);
				
				// time is initially zero, also set some random variables. It's higher than the total time for the projectile motion
				// because we want the squares to go off screen. 
				var t = 0,
					z, r, nx, ny,
					totalt =  15;
				
				// The direction can either be left (1), right (-1) or center (0). This is the horizontal direction.
				var negate = [1, -1, 0],
					direction = negate[ Math.floor(Math.random() * negate.length) ];
				
				// Some random numbers for altering the shapes position
				var randDeg = rand(-5, 10), 
					randScale = rand(0.9, 1.1),
					randDeg2 = rand(90, 5);
				
				var color = $(this).css('backgroundColor').split('rgb(')[1].split(')')[0].split(', '),
					colorR = rand(-20, 20),  // You might want to alter these manually if you change the color
					colorGB = rand(-20, 20),  // To get the right consistency.
					newColor = 'rgb('+(parseFloat(color[0])+colorR)+', '+(parseFloat(color[1])+colorGB)+', '+(parseFloat(color[2])+colorGB)+')';
				
				
				// And apply those
				$(this).css({
					'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)', 
					'background' : newColor
				});
				 
				// Set an interval
				z = setInterval(function() { 	
					
					// Horizontal speed is constant (no wind resistance on the internet)
					var ux = ( Math.cos(theta) * v ) * direction;
					
					// Vertical speed decreases as time increases before reaching 0 at its peak
					var uy = ( Math.sin(theta) * v ) - ( (-g) * t);
					
					// The horizontal position
					nx = (ux * t);
							
					// s = ut + 0.5at^2
					ny = (uy * t) + (0.5 * (g) * Math.pow(t, 2));
					
					// Apply the positions	
					$(self).css({'bottom' : (ny)+'px', 'left' : (nx)+'px'});
					
					// Increase the time by 0.10
					t = t + 0.10;
					
					if(t > totalt) {
						
						clicked = false;
						first = true;
						
						
						$('.clipped-box').css({'top' : '-1000px', 'transition' : 'none'});
						$(self).css({'left' : '0', 'bottom' : '0', 'opacity' : '1', 'transition' : 'none', 'transform' : 'none'});
					
						clearInterval(z);
					
					}
					
				}, 1);
		
			});
			
		}
	
	});
	
				
});
