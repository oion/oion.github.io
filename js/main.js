$(function() {
  
	$( document ).ready(function() {
		
		greeting();
		typingAnimation();
		
    function greeting() {
				var today = new Date()
				var curHr = today.getHours()
				var greeting = "Hello.";

				if (curHr < 12) {
					greeting = 'Good Morning.';
				} else if (curHr < 18) {
					greeting = 'Good Afternoon.';
				} else {
					greeting = 'Good Evening.';
				}
				$('.greeting').html(greeting);
		}
		
		function typingAnimation() {
			var typed = new Typed(".lines", {
				stringsElement: '.text-lines',
				typeSpeed: 20,
				backSpeed: 20,
				startDelay: 1000,
				loop: false,
				loopCount: Infinity,
				onComplete: function(self) { 
					console.log(self.el);
					$('.bot').addClass('typed-complete')
				},

			});
		}
		
		function prettyLog(str) {
  		console.log('%c ' + str, 'color: green; font-weight: bold;');
		}
		
	});
	
});