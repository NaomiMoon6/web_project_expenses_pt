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
  if (expenseEntries != "") {return totalExpensesValue / expenseEntries.length;} 
  else {return 0;}
}

function calculateBalance() {
  balance = budgetValue - totalExpensesValue;
  return balance;
}

function updateBalanceColor() {
  if (balance <= 0) {balanceColor = "red"}
  else if (balance <= budgetValue * 0.25) {balanceColor = "orange"}
}

function calculateCategoryExpenses(category) {
  let categoryExpenses = 0;
  
  for(let entry of expenseEntries) {
    if (entry[0] === category) {categoryExpenses += entry[1]}
  }
  return categoryExpenses;
}

function calculateLargestCategory() {
  let categoriesTotals = [
    ["groceries", 0],
    ["restaurants", 0],
    ["transport", 0], 
    ["home", 0],
    ["subscriptions", 0] 
  ];
  let largestCategory = categoriesTotals[0];

  for (let category of categoriesTotals){
    category[1] = calculateCategoryExpenses(category[0]);
    if (category[1] > largestCategory[1]) {largestCategory = category}
  }

  console.log(largestCategory);
  return largestCategory[0];
}

function addExpenseEntry(expenseEntry){
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}