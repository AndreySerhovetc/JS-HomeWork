
document.addEventListener("DOMContentLoaded", function(){

  let rangeLT = document.querySelector(".rangeTopLeft"),
      rangeTR = document.querySelector(".rangeTopRight"),
      rangeBL = document.querySelector(".rangeBootomLeft"),
      rangeBR = document.querySelector(".rangeBootomRight"),
      box = document.querySelector(".box");

      
      rangeLT.addEventListener("input", function(){
        let outRangeLT =  document.querySelector('.rangeTopLeftOutput')
        box.style.borderTopLeftRadius = this.value + "px";
        outRangeLT.innerHTML = this.value + "px";
      })
      rangeTR.addEventListener("input", function(){
        let outRangeTR =  document.querySelector('.rangeTopRightOutput')
        box.style.borderTopRightRadius = this.value + "px";
        outRangeTR.innerHTML = this.value + "px";
      })
      rangeBL.addEventListener("input", function(){
        let outRangeBL =  document.querySelector('.rangeBootomLeftOutput')
        box.style.borderBottomLeftRadius = this.value + "px";
        outRangeBL.innerHTML = this.value + "px";
      })
      rangeBR.addEventListener("input", function(){
        let outRangeBR =  document.querySelector('.rangeBootomRightOutput')
        box.style.borderBottomRightRadius = this.value + "px";
        outRangeBR.innerHTML = this.value + "px";
      })
  
});
  
 
         




        
                    

      
        
        







