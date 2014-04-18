

test("Login",function(){


	$("#email").val("test_admin@example.com");
    $("#password").val("wisc_admin");
		    
	login();

    equal(localStorage.getItem('loggedin'),'true');

});


test("New Species",function(){
	$('#selectForestSpecies').val("Tree Type");
    $('#speciesPercentage').val("90");
    newSpecies()
    $('#selectForestSpecies').val("Not really a tree");
    $('#speciesPercentage').val("1");
    newSpecies()

    equal(idCounter,3);

});

test("Canopy Percentage",function(){
	canopyPercentage();
	equal(canopyPer,0);

	// Fix jquery method problem with qunit
	// $('#selectForestSpecies').val("Tree Type");
 	// $('#speciesPercentage').val("90");
 	// equal(canopyPer,90);


});

