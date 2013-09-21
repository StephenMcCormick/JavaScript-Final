	/*Stephen McCormick
	Final JavaScript*/


	var scrollObject = document.getElementById("agreeScroll");  // this variable will be used for the scroll checking 
	var radioAgree = document.getElementById("agree");  // this is a variable for the agree radio button
	var radioNotAgree = document.getElementById("notagree");  // this is a variable for the not agree radio button
	var radioBoth = document.getElementsByName("agreeForm");  // this is a variable for both radio buttons in the agree form -- gets them by NAME not by ID
	var radioButtonClick = false;
	var agreeLink1 = document.getElementById("agreeLink1");  // this is the first document the user must click on
	var agreeLink1Click = false; // this is default that the user has not clicked on document 1 yet
	var agreeLink2 = document.getElementById("agreeLink2");  // seconds document the user must click on
	var agreeLink2Click = false;  // default that the user has not clicked on the second document
	var submitAgreement = document.getElementById("submitAgreement");
	
	// scroll function
	// this is the function to test if the user has scrolled to the bottom of the agreement form
	$(scrollObject).scroll(function(){
		if ( scrollObject.scrollTop == (scrollObject.scrollHeight-scrollObject.offsetHeight) ) // this is an if for when the user gets to the bottom of the agreement form the following code will excecute
		{
			radioAgree.removeAttribute('disabled');  // this will remove the disabled attribute from the agree radio button 
			radioNotAgree.removeAttribute('disabled');  // this will remove the disabled attribute from the not agree radio button
		}
	});  // end of JQuery function for scroll checking
	
	
	// radio button change function
	// this is a function to test when the user selects a radio button option
	$(radioBoth).change(function(){ // this will run when the user makes a selection or changes their selection
		if (radioAgree.checked)  //this is an if for when the user selects the agree radio button
		{
			alert("You have agreed to terms, you may continue");  // this is the alert so they can move on
			radioButtonClick = true;
		}
		else if (radioNotAgree.checked)  // this is an if for when they select the do not agree radio button
		{
			alert("You have not agreed to terms, you may not continue"); // this is an alert that they have selected not to agree and cant move on
			radioButtonClick = false;
		}
	});  // end of JQuery function for radio button selection
	
	// function for what happens when the user clicks on the first document. they will get an alert and the agreeLink1Click will become true
	function agreeLink1function() {
		alert("Document 1 \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt libero sed mi egestas cursus. Mauris turpis odio, lacinia sed purus a, tincidunt tincidunt tortor. Ut molestie diam non lorem aliquet cursus. Suspendisse potenti. Phasellus in odio enim. Sed volutpat, purus ac laoreet pellentesque, sapien urna varius ipsum, eget volutpat nulla neque at felis. Curabitur blandit vitae nulla vitae consectetur. Pellentesque pellentesque orci leo, a pretium ante cursus vitae. Vestibulum venenatis vehicula aliquet. Pellentesque imperdiet aliquet odio quis viverra. Aliquam tincidunt aliquet euismod. In id ornare nunc, quis sodales nunc. Aliquam venenatis sed lacus eget tristique.");
		agreeLink1Click = true;	
	}  // end function for first document click
	
	// function for what happens when the user clicks on the second document. they will get an alert and the agreeLink2Click will become true
	function agreeLink2function() {
		alert("Document 2 \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt libero sed mi egestas cursus. Mauris turpis odio, lacinia sed purus a, tincidunt tincidunt tortor. Ut molestie diam non lorem aliquet cursus. Suspendisse potenti. Phasellus in odio enim. Sed volutpat, purus ac laoreet pellentesque, sapien urna varius ipsum, eget volutpat nulla neque at felis. Curabitur blandit vitae nulla vitae consectetur. Pellentesque pellentesque orci leo, a pretium ante cursus vitae. Vestibulum venenatis vehicula aliquet. Pellentesque imperdiet aliquet odio quis viverra. Aliquam tincidunt aliquet euismod. In id ornare nunc, quis sodales nunc. Aliquam venenatis sed lacus eget tristique.");
		agreeLink2Click = true;	
	}  // end function for second document
	
	// function for when the submit button is clicked
	function submitAgreementFunction(){		
		if( agreeLink1Click == true && agreeLink2Click == true  && radioButtonClick == true)  // if both documents have been read and the agree radio button was clicked
		{
			document.getElementById("section1").style.display = "none";  // hide section 1 from the user
			document.getElementById("section2").style.display = "none";  // hide section 2 from the user
			document.getElementById("pageTitle").innerHTML="Conformation Page";  // changes the aggrement title to conformation page
			document.getElementById("conformation").innerHTML = "<br/> <h3>You have agreed to all terms and may continue</h3>";	// lets the user know they can continue	
		} else if( agreeLink1Click == false) //error trap 
		{
			alert("you must read the first document to continue");
		} else if(agreeLink2Click == false) //error trap 
		{
			alert("you must read the second document to continue");		
		} else if( radioButtonClick == false) //error trap 
		{
			alert("you must read the user agreament to the bottem and click agree to continue");
		}
	}  // end function for submit button
	
	
	
	agreeLink1.addEventListener("click", agreeLink1function);  //  event listener for when the user clicks on the first document
	agreeLink2.addEventListener("click", agreeLink2function);  //  event listener for when the user clicks on the first document
	submitAgreement.addEventListener("click", submitAgreementFunction); // event listener for the submit button
	
	
	
	
	
	
	
	
	
	
	
	
