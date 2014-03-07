function init() {

 document.addEventListener("deviceready", deviceReady, true);
 delete init;
}

$("#loginBtn").click(function (e) {
    // alert("Test that user has clicked login button")
    var u = $("#email").val();
    var p = $("#password").val();
    // alert("UserName = " + u);
    // alert("Password = " + p);
});