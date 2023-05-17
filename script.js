'use strict';
// input
const inputBillVal = document.getElementById('input-bill-val');
const inputTipVal = document.getElementById('input-tip-val');

// button
const btnIncrement = document.querySelector('.increment');
const btnDecrement = document.querySelector('.decrement');
const btnReset = document.getElementById('btn-reset');
// text-content

const numPeopleVal = document.getElementById('num-people-val');
const totalPerPersonVal = document.querySelector('.total-person-val');

let tipValue,billValue;
let numPeopleValue = Number(numPeopleVal.innerHTML);


const tipVal = () =>{
    tipValue = parseFloat(inputTipVal.value / 100);
    calculateTotal();
}

const billVal = () =>{
    billValue = parseFloat(inputBillVal.value);
    calculateTotal();
}

const incrementVal = () =>{
      numPeopleValue++;
      numPeopleVal.innerHTML = numPeopleValue;
    calculateTotal();

};
const decrementVal = () =>{
  if(numPeopleValue < 1){
    return 0;
  }else{
      numPeopleValue--;
      numPeopleVal.textContent = numPeopleValue;
      calculateTotal();
  }
};


const calculateTotal = () =>{
  if(numPeopleValue >= 1){
    if(!tipValue || !billValue){
      return 0;
    }
    let totalPerTip = billValue * tipValue;
    let totalPerSon = (totalPerTip +  billValue)/ numPeopleValue;
    totalPerPersonVal.textContent = '$' + totalPerSon.toFixed(2);

  }

};

const resetBtn = () =>{
  if(!billValue || !tipValue){
    return 0;
  }else{
    tipValue = 0;
    billValue = 0;
    numPeopleValue = 1;
    numPeopleVal.innerHTML = 1;
    inputBillVal.value = '';
    inputTipVal.value = '';
    totalPerPersonVal.textContent = '0.00';
  }
};

inputBillVal.addEventListener('input',billVal);
inputTipVal.addEventListener('input',tipVal);
btnIncrement.addEventListener('click',incrementVal);
btnDecrement.addEventListener('click',decrementVal);
btnReset.addEventListener('click',resetBtn);
