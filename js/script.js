window.onload = function() {		
	/*var email = document.getElementById("exampleInputEmail");
	
	var fields = document.querySelectorAll("#firstForm input[type='checkbox']");
	for(var i = 0; i < fields.length; i++) {
		console.log(fields[i].type);
	}*/
	
	
	
	//console.log(window.myForm);
	//console.log(document.firstForm);
	var option  = document.forms.firstForm.elements.option;
	
	/*for(var i = 0; i < option.length; i++) {
		if(option[i].defaultChecked) {
			alert(option[i].value);
		}
	}*/
	
	var options  = document.forms.firstForm.elements.myselect;
	/*for(var i = 0; i < options.length; i++) {
		if(options[i].selected) {
			options[i] = null;
		}
	}*/
	
	var newOption = new Option(
								"Option new",
								10,
								false,
								false
								);
	options[0] = newOption;
								
	
	///console.log(email.value);
	
	
}


	

	