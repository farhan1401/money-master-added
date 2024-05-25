function getInputFieldValueById(inputFieldId) {
  const incomeField = document.getElementById(inputFieldId);
  const incomeFieldString = incomeField.value;
  const incomeFieldValue = parseInt(incomeFieldString);
  incomeField.value = "";
  return incomeFieldValue;
}

function updateTotalElementValue() {
  // income value
  const incomeValue = getInputFieldValueById("income");
  // expense value
  const foodValue = getInputFieldValueById("food");
  const rentValue = getInputFieldValueById("rent");
  const clothesValue = getInputFieldValueById("clothes");
  // total expense
  const totalExpense = foodValue + rentValue + clothesValue;
  const totalExpenseElement = document.getElementById("total-expense");
  if (isNaN(totalExpense)) {
    alert("please selected full form");
    return;
  }
  totalExpenseElement.innerText = totalExpense;
  // total balance
  const balanceElement = document.getElementById("balance");
  const totalBalance = incomeValue - totalExpense;
  if (isNaN(totalBalance)) {
    alert("please selected full form");
    return;
  }
  balanceElement.innerText = totalBalance;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  updateTotalElementValue();
});

document.getElementById("save-btn").addEventListener("click", function () {
  const incomeValue = getInputFieldValueById("income");
  const save = getInputFieldValueById("save");
  const savingPercent = save / 100;
  const savingAmount = document.getElementById("saving-amount");
  const calculateAmount = incomeValue * savingPercent;
  if (isNaN(calculateAmount)) {
    alert("please selected full form");
    return;
  }
  savingAmount.innerText = calculateAmount;

  const balanceElement = document.getElementById("balance");
  const balanceElementString = balanceElement.innerText;
  const balanceElementAmunt = parseFloat(balanceElementString);
  balanceElement.innerText = balanceElementAmunt;

  const remainingBalanceElement = document.getElementById("remaining-balance");
  const remainingBalance = balanceElementAmunt - calculateAmount;
  remainingBalanceElement.innerText = remainingBalance;
});
