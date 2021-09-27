// handle deposit button event 
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(newDepositAmount);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotalAmount = previousDepositAmount + newDepositAmount;
    depositTotal.innerText =  newDepositTotalAmount;
    
    // update total account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceAmount);
    const newTotalBalance = previousBalanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newTotalBalance;
    // clear deposit input field
    depositInput.value = '';
    
})

// handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function(){
    // console.log('withdraw button clicked');
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputAmount = withdrawInput.value;
    // console.log(newWithdrawInputAmount);
    const newWithdrawTotalAmount = parseFloat(newWithdrawInputAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawAmount);
    const withdrawTotalAmount = previousWithdrawTotalAmount + newWithdrawTotalAmount;
    withdrawTotal.innerText = withdrawTotalAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousAmount = balanceTotal.innerText;
    const previousAmountTotal = parseFloat(previousAmount);
    const newTotalBalanceAmount = previousAmountTotal - newWithdrawTotalAmount;
    balanceTotal.innerText = newTotalBalanceAmount;
    
    // clear withdraw input field
     withdrawInput.value = '';
})