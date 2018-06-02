<<<<<<< HEAD
"use strict";

class User {
    constructor(email, ) {
        this.maxguesses = 10;
        this.numWins = 0;
        this.numLosses = 0;
        this.lettersAvail = 0;
        this.cpuGuess = '';
        this.guesses = [];
        this.boardStr = '';
        this.boardArray = [];
        this.gameArray = [];
        this.selectedGame = gameType;
    }

=======
"use strict";

class User {
    constructor(username, userID) {
        this.username = username;
        this.userID = userID;
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

>>>>>>> master
module.exports = User;