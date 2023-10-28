const express = require('express')
const path = require("path");
const app = express()
const port = 8087

class Customer {
  constructor(name) {
    this.name =name;
  }



}

class Product {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
  }
}

class Basket {
  constructor(name) {
    this.name = name;
    this.items = [];
  }

  addProduct(product, count) {

    for (let i = 0; i < count; i++) {
      this.items.push(product);
    }

  }

  checkout() {

    let sum = 0;

    this.items.forEach((p) => {
      sum = sum + (p.price);
    });

    return sum;
  }
}

const basket = new Basket("Laura");

basket.addProduct(new Product("Ball", 100), 10);
basket.addProduct(new Product("Mac", 10000), 2);

console.log(basket, basket.checkout())

app.get('/', (req, res) => {
  // res.send('Hello World123!')
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/yvonne', (req, res) => {
  // res.send('Hello World123!')
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/yvonne/planlegging', (req, res) => {
  // res.send('Hello World123!')
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})