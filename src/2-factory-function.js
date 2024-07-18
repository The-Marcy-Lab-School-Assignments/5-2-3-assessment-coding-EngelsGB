const bankAccountFactory = (initBal = 0) => {
  return {
    checkBalance() {
      return initBal;
    },
    add(amount) {
      initBal += amount;
      console.log(`$${amount} added.`);
    },
    subtract(amount) {
      initBal -= amount;
      console.log(`$${amount} subtracted.`);
    }
  }
};

module.exports = {
  bankAccountFactory,
};
