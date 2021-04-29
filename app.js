//get all th tabs
const tabs=document.querySelectorAll(".tab");

tabs.forEach((clickedTab)=>{
    //add onClick event listener on eack tab
    clickedTab.addEventListener("click", ()=>{
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        //add the active class on the click tab
        clickedTab.classList.add("active");
        const clickedTabBGColor=getComputedStyle(clickedTab).getPropertyValue("color");
        document.body.style.background=clickedTabBGColor;

    });
});
