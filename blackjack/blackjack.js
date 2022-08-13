
let card=[];
let message=" ";
let isAlive=false;
let hasBlackJack=false;
let sum=0;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sumEl");
let cardEL=document.querySelector("#cards-El");
let player = {
    name: "sam",
    chips: 145
}
let playeree =document.getElementById("playerel");
playeree.textContent = player.name+": $"+player.chips;
console.log(player.name);
function getRandomCard()
{
    let randomNumber =Math.floor(Math.random()*13)+1;
    if(randomNumber===1)
       return 11;
       else if(randomNumber >10)
       return 10;
       else
    return randomNumber;
}
function startGame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    card=[firstCard,secondCard];
    renderGame();
}
function renderGame()
{
    for(let i=0;i<card.length;i++)
      sum+=card[i];
    cardEL.textContent ="cards : ";
    for(let i=0;i<card.length;i++)
    {
         cardEL.textContent +=card[i]+" ";
    }
   if(sum>21)
   {
    message="you're out of the game ";
    prevCard();
    lastSum();

    isAlive=false;   
    if(isAlive==false)
       startNewGame();
   }
   else if(sum<21)
   {
    message="do you want to draw another card";
        

   }
   else if(sum===21)
   {
    message="wow you have blackjack";

    hasBlackJack=true;
   }
   messageEl.textContent=message;
   console.log(message);
   sumEl.textContent ="sum:"+sum;
}

function newCard()
{
if(isAlive===true&&hasBlackJack==false)
{
     card.push(getRandomCard());
    renderGame();
}

}
function startNewGame()
{
    sum=0;
    cardEL.textContent="card :";
    for(let i=0;i<card.length;i++)
    {
        card[i]="";
         cardEL.textContent +=card[i]+" ";
    }
}
function  prevCard()
{
    let prevEl=document.getElementById("last");
    prevEl.textContent=" last cards were: "
    for(let i=0;i<card.length;i++)
    {
        prevEl.textContent +=card[i]+" ";
    }
}
function lastSum()
{
    let s=0;
    for(let i=0;i<card.length;i++)
    {
        s+=card[i];
    }
    let lastSumEl=document.getElementById("last-sum");
    lastSumEl.textContent=" last sum was :"+s;
}