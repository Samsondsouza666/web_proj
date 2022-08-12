let firstCard=getRandomCard();
let secondCard=getRandomCard();
let count=0;
let card=[firstCard,secondCard];
let message=" ";
let isAlive=true;
let hasBlackJack=false;
let sum=firstCard+secondCard;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sumEl");
let cardEL=document.querySelector("#cards-El");
function getRandomCard()
{
    return 5;
}
function startGame()
{
    renderGame();
}
function renderGame()
{
    cardEL.textContent ="cards : ";
    for(let i=0;i<card.length;i++)
    {
         cardEL.textContent +=card[i]+" ";
    }
   if(sum>21)
   {
    message="you're out of the game";
    isAlive=false;   
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
    if(count==0)
    {
     card[2] =getRandomCard();
    sum+=card[2];
    renderGame();
    count++;
}
}