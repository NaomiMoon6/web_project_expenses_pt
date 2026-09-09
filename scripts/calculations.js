let budgetValue = 0;
let totalExpensesValue = 0;
let balance = 0;
let balanceColor = "green";
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12]
]

for (let entry of expenseEntries) {
  totalExpensesValue += entry[1];
}

function calculateAverageExpense() {
  if ( expenseEntries.length != 0) {return totalExpensesValue / expenseEntries.length;} 
  else {return 0;}
}

function calculateBalance() {
  balance = budgetValue - totalExpensesValue;
  return balance;
}

function updateBalanceColor() {
  if (balance <= 0) {balanceColor = "red";}
  else if (balance <= budgetValue * 0.25) {balanceColor = "orange";}
  else {balanceColor = "green";}
}

function calculateCategoryExpenses(category) {
  let categoryExpenses = 0;
  
  for(let entry of expenseEntries) {
    if (entry[0] === category) {categoryExpenses += entry[1]}
  }
  return categoryExpenses;
}

function calculateLargestCategory() {
  let totals = {};
  let largestCategory = null;
  let maxAmount = -1;
  
  for (let entry of expenseEntries) {
    let category = entry[0];
    let amount = entry[1];
    totals[category] = (totals[category] || 0) + amount;
  }
  
  for (let category in totals) {
    if (totals[category] > maxAmount) {
      maxAmount = totals[category];
      largestCategory = category;
    }
  }
  
  return largestCategory;
}

function addExpenseEntry(expenseEntry){
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}