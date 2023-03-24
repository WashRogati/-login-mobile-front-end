function Error(){
    alert("NAO FUNCIONA AINDA!")
}

window.onload = function() {
    var div = document.querySelector(".mobile-ui");
    var input = document.querySelector(".btn");

    input.onclick = function() {
         div.style.display = "none";
    }
}
