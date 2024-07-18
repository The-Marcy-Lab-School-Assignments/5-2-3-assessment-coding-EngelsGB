const { ToDoItem, ToDoList } = require('./0-has-many-belongs-to')

const {
  Phone,
  AppleIPhone,
} = require('./1-inheritance-polymorphism');

const { bankAccountFactory } = require('./2-factory-function');

const { getId } = require('./utils');


// Testing testing
const startingBalance = Math.floor(Math.random() * 1000);
const firstAmount = Math.floor(Math.random() * 1000);
const secondAmount = Math.floor(Math.random() * 1000);
const firstTotal = startingBalance + firstAmount;
const secondTotal = firstTotal + secondAmount;

const myAccount = bankAccountFactory(startingBalance);
myAccount.add(firstAmount);
console.log(myAccount.checkBalance());
console.log(firstTotal);
// expect(log).lastCalledWith(`$${firstAmount} added.`);

// myAccount.add(secondAmount);
// expect(myAccount.checkBalance()).toEqual(secondTotal);
// expect(log).lastCalledWith(`$${secondAmount} added.`);