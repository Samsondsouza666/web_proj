let num1=8;
let num2=9;
let numEl=document.getElementById("num1");
let numEl2=document.getElementById("num2");
let sumEl=document.getElementById("sum1");
numEl.innerText=num1;
numEl2.innerText=num2;
sumEl.innerText="";
function add()
{
sumEl.innerText="";

   let r=num1+num2;
   sumEl.innerText+=r;
}
function sub()
{
sumEl.innerText="";

   let r=num1-num2;
   sumEl.innerText+=r;
}
function mul()
{
sumEl.innerText="";

   let r=num1*num2;
   sumEl.innerText+=r;
}
function div()
{
sumEl.innerText="";

   let r=num1/num2;
   sumEl.innerText+=r;
}


