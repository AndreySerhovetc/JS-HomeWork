document.addEventListener("DOMContentLoaded", function(){

    let tabContent = document.querySelectorAll(".content");
    let tabControl = document.querySelectorAll(".btn__item")
 
     tabControl.forEach(elem =>{
         elem.addEventListener("click", function(){
             showTabContent(elem.dataset.tabnumber);
             tabControl.forEach(elem => {
                 elem.classList.remove("btn__item--active");
             })
             this.classList.add("btn__item--active");
         })
         
     });
 
    function hideTabContent() {
        for (let i = 1; i < tabContent.length; i++) {
            tabContent[i].classList.add("content--hidden");
            tabContent[i].classList.remove("scrollright");
            
        }
    }
    hideTabContent();
 
    function showTabContent(tabnumber) {
     for (let i = 0; i < tabContent.length; i++) {
         tabContent[i].classList.add("content--hidden");
         
     }
     tabContent[tabnumber - 1].classList.remove("content--hidden");
     tabContent[tabnumber - 1].classList.add("scrollright");
    }

});