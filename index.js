// Blade Runner Trading Bot v.1.0 - Bernat Ferragut 2019 - bernatferragut.com

console.log('> Blade-Runner starting...')

// Bitfinex Candles Info
let request = require('request')
let url = 'https://api-pub.bitfinex.com/v2'

request.get(
    `${url}/candles/trade:1m:tBTCUSD/last`,
    (error, response, body) => console.log(`1m timeframe BTC History: ${body}`)
  )
  
//   request.get(
//     `${url}/candles/trade:1m:tBTCUSD/hist`,
//     (error, response, body) => console.log(body)
//   )