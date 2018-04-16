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
				$('#greeting').html(greeting);
				console.log($('#greeting').html());	
		}
		
		function typingAnimation() {
			$("#bot").typed({
				stringsElement: $('#lines'),
				typeSpeed: 0,
				loop: true,
				backDelay: 1000,
			});
		}
		
	});
	
});