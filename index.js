let countEL=document.getElementById("count-el");
let saveEl=document.getElementById("save-el")
;let count=0;
function inc(){
    count+=1;
    countEL.textContent=count;
}
function save(){
    let pre=count+" - ";
    saveEl.textContent+=pre;
    countEL.textContent=0
    count=0
}