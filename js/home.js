document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmountInput = document.getElementById('add-amount-input').value;
    const addPinInput = document.getElementById('add-pin-input').value;

    if (addPinInput === '1234') {

        const totalMoney = document.getElementById('total-money').innerText;

        const addAmount = parseFloat(addAmountInput);
        const newTotalMoney = parseFloat(totalMoney);
        
        const balance = addAmount + newTotalMoney;
        
        document.getElementById('total-money').innerText =balance;
    }
    else {
        alert('Failed To Add Money')
    }
})
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashOutInputPin = document.getElementById('cash-out-pin-input').value;

    if(cashOutInputPin === '1234'){
        const totalMoney =document.getElementById('total-money').innerText;
         
        const newCashOutInput =parseFloat(cashOutInput);
        const newTotalMoney =parseFloat(totalMoney);

        const remainingBalance = newTotalMoney -newCashOutInput;
        document.getElementById('total-money').innerText = remainingBalance; 
    }
    else{
        alert('Failed To Cash Out.')
    }

})