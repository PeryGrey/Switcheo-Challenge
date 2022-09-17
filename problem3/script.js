// DataSource utility class to retrieve data from data endpoint: https://static.ngnrs.io/test/prices

class DataSourceUtil {

  constructor(price) {
    this.buy = price.buy;
    this.sell = price.sell;
    this.pair = price.pair;
  }

  mid() {
    return (this.buy + this.sell) / 200
  }

  quote() {
    return this.pair.slice(-3)
  }
}

const answer = function () {

  fetch('https://static.ngnrs.io/test/prices')

    // get data as json object from endpoint
    .then(response => {
      if (!response.ok)
        throw new Error(`${errorMsg} (${response.status})`)
      return response.json()
    })

    // return prices from json object
    .then(data => data.data.prices)

    // work on prices
    .then(prices => {

      let statement = [], i = 0;

      // slightly modified getPrices function
      prices.forEach(price => {

        // store relavant prices data into a DataSourceUtil object -> statement
        statement[i] = new DataSourceUtil(price)

        // printing required output for answer
        console.log(`Mid price for ${statement[i].pair} is ${statement[i].mid()} ${statement[i].quote()}.`);
        i++;
      })
    })
    .catch(error => {
      console.err(error);
    });
}

answer()