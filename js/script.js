//-----------------------------------
//-           Accordions            -
//-----------------------------------
//var acc = document.getElementsByClassName("accordionButton");
//
//for (var i = 0; i < acc.length; i++) {
//  acc[i].addEventListener("click", function() {
//    var accordionContent = this.nextElementSibling;
//    if (accordionContent.style.display === "block") {
//      accordionContent.style.display = "none";
//    } else {
//      accordionContent.style.display = "block";
//    }
//  });
//}



//-----------------------------------
//-       Typing Animation          -
//-----------------------------------
var words = ["Innovazione...", "Tecnologia...", "Sviluppo...", "Crescita...", "Successo..."];
var i = 0;
var txtIndex = 0;

function typingEffect() {
  if (i < words[txtIndex].length) {
    document.getElementById("typingEffect").innerHTML += words[txtIndex].charAt(i);
    i++;
    setTimeout(typingEffect, 200);
  } else {
    i = 0;
    txtIndex++;
    if (txtIndex < words.length) {
      document.getElementById("typingEffect").innerHTML = "";
      setTimeout(typingEffect, 200);
    }
  }
  if (txtIndex == words.length) {
    txtIndex = 0;
    document.getElementById("typingEffect").innerHTML = "";
    setTimeout(typingEffect, 200);
  }
}

typingEffect();



//-----------------------------------
//-         Theme Switcher          -
//-----------------------------------
if(localStorage.getItem('theme') == null){
  if (window.matchMedia) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.getElementById('themeSelector').checked = true;
      localStorage.setItem('theme', "dark");
      document.querySelector('body').classList.add("dark");
    } else {
      document.getElementById('themeSelector').checked = false;
      localStorage.setItem('theme', "light");
    }
  }
} else if(localStorage.getItem('theme') != "light") {
  document.getElementById('themeSelector').checked = true;
  document.querySelector('body').classList.add("dark");
}

document.getElementById('themeSelector').addEventListener("change", (e)=>{
  if (document.getElementById('themeSelector').checked == true){
    localStorage.setItem('theme', "dark");
    document.querySelector('body').classList.add("dark");
  } else {
    localStorage.setItem('theme', "light");
    document.querySelector('body').classList.remove("dark");
  }
});