var qualItems=document.getElementsByClassName("qual-items")
var tabContents=document.getElementsByClassName("tab-content")
 function qualToggle(tabid){
  
   
    for(qualItem of qualItems){
        qualItem.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabid).classList.add("active-content")
}
