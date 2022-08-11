let count =0;
let countEl=document.getElementById("count-people");
let prevEl=document.getElementById("save-el");
function increment()
{
    count=count+1;
    countEl.innerText=count;
}
function save(){
    console.log(count);
    prevEl.textContent+=" "+count+" - " ;
    countEl.textContent=0;
    count=0;

}

