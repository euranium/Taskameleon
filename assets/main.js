//shows login stuff on mouse over of pictures
$('#login-pic').mouseover(function(){
	$( '#todoapp' ).fadeOut( 500, function(){
		$( '#forms' ).fadeIn( 500, function(){
			$('#forms').mouseleave(function(){
				$('#forms').fadeOut(500, function(){
					$('#todoapp').fadeIn(500)
				});
			});
		});
	});
});

$('#signin-pic').mouseover(function(){
	$( '#todoapp' ).fadeOut( 500, function(){
		$( '#forms' ).fadeIn( 500, function(){
			$('#forms').mouseleave(function(){
				$('#forms').fadeOut(500, function(){
					$('#todoapp').fadeIn(500)
				});
			});
		});
	});
});
