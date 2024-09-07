
let income = [];
let expenses = [];
function addIncome(amount) {
    income.push({ amount: amount });
    updateIncomeList();
    updateBalance();
}

// Function to add expense
function addExpense(amount, category) {
    expenses.push({ amount: amount, category: category });
    updateExpenseList();
    updateBalance();
}

// Function to update income list
function updateIncomeList() {
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = '';
    income.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `$${item.amount}`;
        incomeList.appendChild(listItem);
    });
}

// Function to update expense list
function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';
    expenses.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.category}: $${item.amount}`;
        expenseList.appendChild(listItem);
    });
}

// Function to update balance
function updateBalance() {
    const balanceAmount = document.getElementById('balance-amount');
    let totalIncome = 0;
    let totalExpenses = 0;
    income.forEach(item => {
        totalIncome += item.amount;
    });
    expenses.forEach(item => {
        totalExpenses += item.amount;
    });
    const balance = totalIncome - totalExpenses;
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

/
