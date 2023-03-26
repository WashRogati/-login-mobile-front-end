function Error(){
    alert("NAO FUNCIONA AINDA!")
}

window.onload = function() {
    var div = document.querySelector(".mobile-ui");
    var btn = document.querySelector(".btn");
    var signup = document.querySelector(".sign-up")

    btn.onclick = function() {
         div.style.display = "none";
         signup.style.display = "flex";

    }
}
