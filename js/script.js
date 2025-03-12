var acc = document.getElementsByClassName("accordionButton");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accordionContent = this.nextElementSibling;
    if (accordionContent.style.display === "block") {
      accordionContent.style.display = "none";
    } else {
      accordionContent.style.display = "block";
    }
  });
}


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
