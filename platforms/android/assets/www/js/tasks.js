
$(document).on("pagecreate", "#tasksPage", function( event ) {
	


	$.ajax({
    url: "http://localhost:3000/users/assignments",
    type: "POST",
    data: 1,
  	dataType: "json",
  	contentType: "application/json",
    success: function(data){
    	alert(data);
    	alert("Success"); 
         
    },
    
    error: function(error) {
  		alert(error.responseText)
  		alert("error");
	}
    
    });


});