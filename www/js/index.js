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
        url: "http://localhost:3000/users/sign_in",
        type: "POST",
      
        data: JSON.stringify({user: {email: u, password: p}}),
        dataType: "json",
        contentType: "application/json; charset=utf-8",
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