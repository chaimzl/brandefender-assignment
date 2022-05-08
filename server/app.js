const expresss = require('express');
const cors = require('cors');
const app = expresss();

app.use(cors());

const port = process.env.port || 8080;
app.listen(port, () => {
})


const https = require('https');

app.get('/', (req1, res1) => {
  console.log('health');
  res1.send('health');
})

app.get('/api/getDayRates/:day', (req1, res1) => {
  console.log(req1.params.day)

  const req = https.get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=ILS&apikey=I2ISAIOMZ5GDBG1X', res => {
    var str = "";

    res.on("data", function (chunk) {
      str += chunk;
    });

    res.on("end", function () {
      var jsonData = JSON.parse(str);
      var dayData = jsonData["Time Series (Digital Currency Daily)"][req1.params.day];
      if (dayData == null) {
        res1.send({ rates: [] });
      }
      var rates = Object.keys(dayData).map(function (key) {
        return { state: key.split(' ')[1], currency: key.split(' ')[2]?.replace('(', '').replace(')', ''), value: Number(dayData[key]) }
      });
      var ret = { rates: rates }
      res1.send(ret);
    });



  })

})
