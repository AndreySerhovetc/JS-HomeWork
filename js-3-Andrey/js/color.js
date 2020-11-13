document.addEventListener("DOMContentLoaded", function(){
    
    const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
addEventListener('keydown', function(evt) {
    if (evt.code == 'Space') {
        setBg();
      }
  });
})
 // generate random color
 