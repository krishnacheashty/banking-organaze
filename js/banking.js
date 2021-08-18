 function inputField(inputValue){
    const inputField=document.getElementById(inputValue);
     const inputFieldValue=inputField.value;
     const inputFieldNumber=parseFloat(inputFieldValue); 
    /* for input box er man zero korar jonno */
    inputField.value="";
    return inputFieldNumber;
 }
function amountAddingField(userAmount,sendAmount){
    const reserveField=document.getElementById(userAmount);
    const previousAmount=reserveField.innerText;
    const previousAmountNumber=parseFloat(previousAmount);

    reserveField.innerText=previousAmountNumber+sendAmount;
}
function totalBalanceField(isAdd,userDepositAmount){
    const totalBalance=document.getElementById('balance-check');
    const totalBalanceText=totalBalance.innerText;
    const totalBalanceValue=parseFloat(totalBalanceText);
    if(isAdd==true){
        totalBalance.innerText=totalBalanceValue+userDepositAmount;
        
    }
    else{
        totalBalance.innerText=totalBalanceValue-userDepositAmount;   
    }
}
document.getElementById('deposit-button').addEventListener('click',function(){
    const userDepositAmount= inputField('diposite-amount');
    if(userDepositAmount>0 && userDepositAmount!=''){
    amountAddingField('diposite-secondary-amount',userDepositAmount);
    totalBalanceField(true,userDepositAmount);
    }
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const userWithdrawAmount=inputField('withdraw-amount');
    if(0< userWithdrawAmount &&  userWithdrawAmount!=''){
    amountAddingField('withdraw-input-field', userWithdrawAmount);
    totalBalanceField(false,userWithdrawAmount);
    }   
})


