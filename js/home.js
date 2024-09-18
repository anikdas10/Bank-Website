// add money button
document.getElementById('Add-money').addEventListener('click',function(){
    const addMoney = document.getElementById('add-money-card');
    const cashOut = document.getElementById('cash-out-card');
    addMoney.classList.remove('hidden');
    cashOut.classList.add('hidden');
    document.getElementById('Add-money').style.backgroundColor = 'blue';
    document.getElementById('Add-money').style.color = 'white';
     document.getElementById('cash-out').style.color = 'black';
     document.getElementById('cash-out').style.backgroundColor = 'white';
})

// cashout btn
document.getElementById('cash-out').addEventListener('click',function(){
    const addMoney = document.getElementById('add-money-card');
    const cashOut = document.getElementById('cash-out-card');
    cashOut.classList.remove('hidden');
    addMoney.classList.add('hidden');
    document.getElementById('cash-out').style.backgroundColor = 'blue';
    document.getElementById('cash-out').style.color = 'white';
    document.getElementById('Add-money').style.color = 'black';
    document.getElementById('Add-money').style.backgroundColor = 'white';
})




document.getElementById('out-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('Cash-out-pin').value;
    const money = document.getElementById('Cash-ammount').value;
    const ballance = document.getElementById('account-ballance').innerText;

       const addBalance = parseFloat(money);
    const  accountBallance = parseFloat(ballance);
    // creating element
     const parentDiv= document.getElementById('parent-div2');
    const p = document.createElement('p');

    if(pin === '1234'){
      if(accountBallance<addBalance){
        p.innerText = 'Insufficient Balance';
    parentDiv.appendChild(p).style.color = 'red' 
        document.getElementById('Cash-out-pin').value = "";
        document.getElementById('Cash-ammount').value = "";

      }
      else{
        const newBallance = accountBallance - addBalance;
   document.getElementById('account-ballance').innerText = newBallance;
    p.innerText = 'Cash Out Successful';
    parentDiv.appendChild(p).style.color = 'green'
   document.getElementById('Cash-out-pin').value = "";
        document.getElementById('Cash-ammount').value = "";
      }
    }
    else{
          p.innerText = 'Wrong Password';
    parentDiv.appendChild(p).style.color = 'Red'
         document.getElementById('Cash-out-pin').value = "";
        document.getElementById('Cash-ammount').value = "";
    }
});


// cash out part
document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    const money = document.getElementById('ammount').value;

    // creating element
    const parentDiv= document.getElementById('parent-div1');
    const p = document.createElement('p');

    if(pin === '1234'){
       const ballance = document.getElementById('account-ballance').innerText;

       const addBalance = parseFloat(money);
    const  accountBallance = parseFloat(ballance);
    
   const newBallance = addBalance + accountBallance;
   document.getElementById('account-ballance').innerText = newBallance;
    document.getElementById('pin').value = "";
    document.getElementById('ammount').value ="";
    p.innerText = 'Money Added';
    parentDiv.appendChild(p).style.color = 'green' 

    }
    else{
        
        p.innerText = 'Wrong Password';
    parentDiv.appendChild(p).style.color = 'red' 
        
        document.getElementById('pin').value = "";
    document.getElementById('ammount').value =""; 
         
    }

});