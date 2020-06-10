function goToHome() {
    window.location.replace("index.html");
}
function goToCharities() {
    window.location.replace("charities.html");
}
function goToAbout() {
    window.location.replace("about.html");
}

$(function(){
    alert("Test");
    $("#includedContent").load("header.html"); 
  });