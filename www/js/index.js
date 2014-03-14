
function init() {

 document.addEventListener("deviceready", deviceReady, true);
 delete init;
}

$("#loginBtn").click(function (e) {

        var u = $("#email").val();
        var p = $("#password").val();
        alert(u);
        alert(p);

        $.ajax({
        url: "http://localhost:3000/users/sign_in.json",
        type: "POST",
      
        data: JSON.stringify({user: {email: u, password: p}}),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            alert(data.error);

            $(':mobile-pagecontainer').pagecontainer('change', '#tasksPage', {
        transition: 'flip',
        changeHash: false,
        reverse: true,
        showLoadMsg: true
    });
             
        },
        
        error: function(error) {
            alert(error.responseText)
            alert("error alert");
        }
        
        });


$(document).on("pagecreate", "#tasksPage", function( event ) {
        $.ajax({
        url: "http://localhost:3000/users/1/assignments",
        type: "POST",
      
        data: JSON.stringify({user: {id: 1}}),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function(data){
            alert(data.error);

            $(':mobile-pagecontainer').pagecontainer('change', '#tasksPage', {
        transition: 'flip',
        changeHash: false,
        reverse: true,
        showLoadMsg: true
    });
             
        },
        
        error: function(error) {
            alert(error.responseText)
            alert("error alert");
        }
        
        });





});



});