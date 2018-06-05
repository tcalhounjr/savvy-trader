"use strict";

class User {
    constructor(username, userID) {
        this.username = username;
        this.userID   = userID;
    }

    buyLong(ticker, quantity, price, acctBalance, portfolio) {
        
        let position = price * quantity;
        if (position > acctBalance) {
            //flash some message 
        }
        portfolio.push(ticker);
        return portfolio;
    }

}

module.exports = User;