function Error(){
    alert("NAO FUNCIONA AINDA!")
}

btns = function() {
    
    var div = document.querySelector(".mobile-ui");
    var btn_signup = document.querySelector("#btnsignup");
    var btn_signin = document.querySelector("#btnsignin")
    var btn_signupi = document.querySelector("#btnsignupi");
    var btn_signini = document.querySelector("#btnsignini")
    var signup = document.querySelector(".sign-up");
    var signin = document.querySelector(".sign-in");

    
    btn_signup.onclick = function register() {
         div.style.display = "none";
         signup.style.display = "flex";
         signin.style.display = "none";
    }

    btn_signin.onclick = function login() {
        div.style.display = "none";
        signin.style.display = "flex";
        signup.style.display = "none";
   }
    btn_signupi.onclick = function register() {
         div.style.display = "none";
         signup.style.display = "flex";
         signin.style.display = "none";
    }

    btn_signini.onclick = function login() {
        div.style.display = "none";
        signin.style.display = "flex";
        signup.style.display = "none";
   }
}
