document.addEventListener("DOMContentLoaded", function(){
    const cont1 = document.getElementById('content1')
    const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    cont1.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
addEventListener('keyup', function(evt) {
    if (evt.code == 'Space') {
        setBg();
      }
  });
})
 // generate random color
 