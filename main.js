const assets = ["jSquadFlag.webp","erika.mp3"  ];
  
const total = assets.length;
  let loaded = 0;

  function updateProgress() {
    loaded++;
    const percent = Math.floor((loaded / total) * 100);
    document.getElementById("loadingText").textContent = `Loading... ${percent}%`;

    if (loaded === total) {
      document.getElementById("preloader").style.display = "none";
      document.getElementById("mainContent").style.display="block"
      


    }
  }

  assets.forEach(src => {
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(src)) {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = src;
      
    } else if (/\.(mp3|wav|ogg)$/i.test(src)) {
      const audio = new Audio();
      audio.oncanplaythrough = updateProgress;
      audio.onerror = updateProgress;
      audio.src = src;
    }
  });
  
  
mainContent.addEventListener("click", function(){
  erika.play()
})





/*DARKMODE*/
function darkMode(){
  jSquadFlag.classList.toggle("colorEffect")
  document.querySelectorAll(".myInput").forEach(el => {
  el.classList.toggle("colorEffect2");
});

  console.log ("")
}


//DELAY SUBMIT BUTTON
document.getElementById("pay-button").addEventListener("click", function(e) {
  e.preventDefault(); // stop instant submit
  
  const form = this.closest("form");

  if (form.reportValidity()) {   // ✅ check HTML5 required fields
    console.log("Submit delayed...");
    setTimeout(() => {
      form.submit();             // only submit if valid
      window.location.href =" "
    }, 5000);
  }
});
