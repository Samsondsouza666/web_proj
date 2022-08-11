let firstCard=10;
let secondCard=1;
let message=" ";
let isAlive=true;
let hasBlackJack=false;
let sum=firstCard+secondCard;
let messageEl=document.getElementById("message-el");







function startgame()
{
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


}