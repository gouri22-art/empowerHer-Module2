// Create a function createBankAccount that simulates a simple bank account using closures. The function should:

// Allow deposits to be made to the account.
// Allow withdrawals from the account, but only if there is sufficient balance.
// Allow checking the current balance.
// Prevent direct access to the balance variable from outside the function.
function createBankAccount() {
    // Private variable to store the balance
    let balance = 0;

    // Return an object with methods to interact with the account
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`Deposited: ${amount}`);
            } else {
                console.log("Deposit amount must be positive.");
            }
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient balance");
            } else if (amount > 0) {
                balance -= amount;
                console.log(`Withdrawn: ${amount}`);
            } else {
                console.log("Withdrawal amount must be positive.");
            }
        },
        checkBalance: function () {
            console.log(`Current balance: ${balance}`);
        }
    };
}

// Example Usage
const account = createBankAccount()
account.deposit(500)
account.withdraw(200)
account.withdraw(400)
account.checkBalance()
console.log(account.balance)
