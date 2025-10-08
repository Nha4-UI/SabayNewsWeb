const btnbar = document.getElementById("toggle-bar")
const toggle = document.getElementById("toggle")
const btnclose = document.getElementById("close")
let i = 0;
btnbar.addEventListener("click", () => {
    if(i==0){
        toggle.style="display:block";
        i = 1;
    }else {
        toggle.style="display:none";
        i = 0;
    }
})