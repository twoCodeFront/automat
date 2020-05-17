const bodyGame = document.querySelector('.bodyElement');
const startbtn = document.querySelector('.play');
const gameCounter= document.querySelector('.games');
const valuePerOneGame = document.querySelector('#valuePerGame');
const walletHtml = document.querySelector('#priceUser');

class Play {
    constructor(wallet)
    {
    this.wallet = wallet;
    this.money = 0;
    this.value = 0;
    this.lose = 0;
    this.win = 0;
    this.cost =0;
    }
    rulesColor(){
       const lO = Math.floor(Math.random() * 5);
       const lT =Math.floor(Math.random()* 5);
       const lTR = Math.floor(Math.random() * 5);
       console.log(lO,lT,lTR);
       const one = document.querySelector('#one');
       const two = document.querySelector('#two');
       const three = document.querySelector('#three');
       one.textContent = "";
       two.textContent = "";
       three.textContent = "";
       setTimeout(()=>{
           one.textContent = lO;
        setTimeout(()=>{
            two.textContent = lT;
            setTimeout(()=>{
                three.textContent = lTR;
            },300);
        },300);
       },300); 
       if(lO == lT && lO == lTR && lT == lTR){
           let value ;
           if((lO+lT+lTR) == 0){
               value = 100;
           }else{
               value = (lO+lT+lTR)
           }
           setTimeout(()=>{
               alert(`Gratulacje wygrałeś ${value} zł`);
           },300)
           this.wallet += value;
           walletHtml.textContent = this.wallet;
           this.win += value;
           document.querySelector('.win').textContent = this.win;
       }
       
    }
}
const start = new Play();
const AddPrice =(valueWallet)=>{
 start.wallet = valueWallet;
 walletHtml.textContent = start.wallet;
}
AddPrice(1000);
const startGame = ()=>{
    
    if(start.wallet > 0){
        if(valuePerOneGame.value){
            if(valuePerOneGame.value != 0){
        start.money = Number(valuePerOneGame.value);
        start.value +=1;
        gameCounter.textContent = start.value;
        start.wallet -= start.money;
        walletHtml.textContent = start.wallet;
        start.rulesColor();
            }
        }else{
            alert('nie podano kwoty');
        }
    }else{
        alert('brak środków');
    }
}
startbtn.addEventListener('click',startGame)