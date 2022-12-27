const client = {
    name: 'Carl',
    age: 32,
    email: 'carl@email.com',
    phone: ['51 989883736', '51 967762553'],
    balance: 1000,
    makePayment: function (value) {
        if (value > this.balance) {
            console.log(`Insufficient funds. Your balance is ${this.balance}`)
            return;
        } else {
            this.balance -= value;
            console.log(`Payment of R$ ${value} made successfully!`);
            console.log(`Your balance currently is R$ ${this.balance}`);
        }
    },
};

client.makePayment(345);