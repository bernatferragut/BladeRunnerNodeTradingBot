// Blade Runner Trading Bot v.1.0 - Bernat Ferragut 2019 - bernatferragut.com

console.log('> Blade-Runner starting...')

// Prepare OHCL (1m, 5m, 30m) USDBTC, EOSBTC, IOTBTC

let startDate = '1483315001' //* 1000 // Nan 01 2017
let pairs = ['tBTCUSD','tEOSBTC', 'tIOTBTC']
let timeFrame_1 = '1m', timeFrame_5 = '5m', timeFrame_30 = '30m'

let finalData = [], tempData = []

// Bitfinex Candles Info
let request = require('request')

// query
let query = `?sort=1&limit=1000&start=${startDate}`

// we loop 100 to obtain more than 1000 candles
// let url = `https://api-pub.bitfinex.com/v2/candles/trade:${timeFrame_1}:${pairBTC}/hist${query}`   

// request.get( url,(error, response, body) => {
//   finalData = body
//   console.log(finalData)
// })


// function getCandles(i) {
//   let url = `https://api-pub.bitfinex.com/v2/candles/trade:${timeFrame_1}:${pairBTC}/hist${query}`   

//   request.get( url,(error, response, body) => {
//     tempData = body
//     finalData += tempData
//     startDate = tempData[-1][0]

//     console.log(startDate)
//     // console.log(`>FinalData:${finalData}`)
//   })
// }

// for (let i = 0; i < 100; i++) {
//   getCandles(i);
// }

// console.log(finalData)


// WS
const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')

w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'candles', 
  key: 'trade:1m:tBTCUSD' 
})

w.on('open', () => w.send(msg))

