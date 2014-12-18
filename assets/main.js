//shows login stuff on mouse over of login icon
$('#login').mouseover(function(){
	//fades out todoapp
	$( '#todoapp' ).fadeOut( 500, function(){
		//then fades in the forms
		$( '#forms' ).fadeIn( 500, function(){
			//when your mouse leaves form page, it dispears
			$('#forms').mouseleave(function(){
				//the forms fade out
				$('#forms').fadeOut(500, function(){
					//and the todoapp fades back in
					$('#todoapp').fadeIn(500)
				});
			});
		});
	});
});
//same stuff as above, happens when mouse over signin icon
$('#signin').mouseover(function(){
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

$( '#signout').click(function(){
	$( '#signout' ).fadeOut( 400, function(){
		$( '#new-todo' ).attr('placeholder', 'What needs to be done?');
		$( '#login' ).fadeIn(400);
		$( '#signin' ).fadeIn(400);
	});
});

$( '#user-form' ).submit(function( event ){
	//prevent page from reloading
	event.preventDefault();
	var user = $('#userID').val();
	var pass = $('userPassword').val();
	//if user did not enter an email 
	if ( user === ''){
		return alert('Please enter a user name');
	}
	if ( pass !== undefined){
		alert('The password is not required and will not be saved because I am saving to local storage, which is not secure');
	}
	if (! localStorage.getItem('RainiersBackbone')){
		return alert('There are no users stored in local memory, please create an account');
	}
	//get the json string under name 'RainersBackbone' from local storage
	var id= localStorage.getItem('RainiersBackbone');
	//parse json string into an object
	var jstring = JSON.parse(id);
	//get index of email in array
	var namePoss = jstring.email.indexOf(user)
	//if index = -1 then there is no email in array
	if (namePoss === -1){
		return alert('No user with that email, please enter a valid email');
	}
	//if not -1, then get their name from that same possition in the array
	var name = jstring.name[namePoss];
	//reset the placehoder text in new-todo form with name
	$( '#new-todo' ).attr('placeholder', 'What needs to be done ' + name +'?');
	$( '#login' ).hide();
	$( '#signin' ).hide();
	$( '#forms' ).fadeOut(500);
	$( '#signout' ).show();
});
$( '#log-in' ).submit(function( event ){
	//prevent page from reloading
	event.preventDefault();
	var user = $('#userName').val();
	var email = $('#email').val();
	//if the user did not enter a name
	if (user === ''){
		//if the use did not also enter an email
		if (email === ''){
			return alert("please enter a name and email. I wont send you any email, this isn't even hooked up to a data base, its just for loggin in localy");
		}
		//if user only did not enter a name
		alert("please enter a name, this will not be sent to me, it's kept in local storage on your computer");
	}
	//if user only did not enter an email
	if (email === ''){
		return alert("Please enter an email. This is for login, I won't save your email, its all on your computures local storage, its just for logging in");
	}
	$( '#new-todo' ).attr('placeholder', 'What needs to be done ' + user +'?');
	//if there is no object 'RainiersBackbone' in local storage
	if (! localStorage.getItem('RainiersBackbone')){
		var id = {};
		id.name = [user];
		id.email = [email];
		//set the object into a json string in local memory as a json string
		return localStorage.setItem('RainiersBackbone', JSON.stringify(id));
	}
	//get the json object from local storage
	var id = localStorage.getItem('RainiersBackbone');
	//parse the json into an object
	var jstring = JSON.parse(id);
	//push new user on the 'name' array
	jstring['name'].push(user);
	//push new email on the 'email' array
	jstring['email'].push(email);
	//turn object back into a json string
	newID = JSON.stringify(jstring);
	//write json string into local storage under key 'id'
	return localStorage.setItem('RainiersBackbone', newID);
});

