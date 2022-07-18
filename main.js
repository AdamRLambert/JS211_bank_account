'use strict'


class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = []
    }
}
balance (){
    let sum = 0;
    for(let i=0; i<this.transactions.length; i++){
        sum += this.transactions[i].amount;
    }
    return sum;
}

charge(payee,amt){
    let chargeTransaction = new Transaction(-amt, payee)
    this.transactions.push(chargeTransaction);

}

deposit(amt){
    if(amt>0)
    let depositTransaction = new Transaction(amt, "deposit");
    this.transactions.push(depositTransaction)
}




// if (typeof describe === 'function') {
//     const assert = require('assert');

//     describe("testing account creation", function(){
//         it("it should create a new account correctly",function(){
//             let acct1 = new BankAccount("xx4432", "James Doe");
//             assert.equal(acct1.owner, "James Doe");
//             assert.equal(acct1.accountNumber, "xx4432");
//             assert.equal(acct1.transactions.length, 0);
//         });
//     });
// }

