// Bitfinex related functions to trade

function BfxTrade() {
    this.initAmount = 100
}

BfxTrade.prototype.tesTrade = function(pair, price, amount, type, callback) {
    switch(type) {
        case 'buy':     
            this.initAmount -= 1.002 *price * amount
            return callback()
        case 'sell':    
            this.initAmount += 0.998 * price * amount
            return callback()
    }
}

module.exports = BfxTrade