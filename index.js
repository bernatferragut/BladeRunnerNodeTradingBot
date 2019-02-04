// Bitfinex-WebsocketsV2 - Bernat Ferragut 2019 - bernatferragut.com

console.log('> websockets bitfinex connection...')

// Prepare Candles Info: OHCL (1w) USDBTC, EOSBTC, IOTBTC

let pairs = ['tBTCUSD','tEOSBTC', 'tIOTBTC']
let timeFrame= ['7D','1D','1h']
let candles;

// WS
const webSocket = require('ws')
const w = new webSocket('wss://api.bitfinex.com/ws/2')

w.on('message', (msg) => {
  candles = msg
  console.log('Candles data: ', candles)
})

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'candles', 
  key: `trade:${timeFrame[0]}:${pairs[0]}`
})

w.on('open', () => w.send(msg))

// Once Candles data is gathered 
// setTimeout( ()=> {
//   console.log('Candles data: ', candles)
//   console.log('#############')
//   console.log('tf:', candles    [1][0][0])
//   console.log('open:', candles  [1][0][1])
//   console.log('close:', candles [1][0][2])
//   console.log('high:', candles  [1][0][3])
//   console.log('low:', candles   [1][0][4])
// }, 3000) 
