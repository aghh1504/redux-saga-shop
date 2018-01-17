const express = require('express');
const app = express();
const PORT = 3001;
const assert = require('assert');
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const reqPath = path.join(__dirname, './data.json');
let savedItems = JSON.parse(fs.readFileSync(reqPath, 'utf8'));

const updateItems = res => {
  fs.writeFile(reqPath, JSON.stringify(savedItems), 'utf8', function(err) {
    if(err) {
      console.log(err);
    }
    res.send('ok')
  });
}

app.get('/online/takeaway/', function(req, res){
  res.send(savedItems)
})

app.post('/online/takeaway/addItem', function(req, res){
  //const newItem = req.body.data;
  res.send('item added')
})

app.post('/online/takeaway/checkoutItem', function(req, res){
  res.send('checkout successfull')
})

app.post('/online/takeaway/deleteItem', function(req, res){
  const deleteId = req.body.id
  savedItems = savedItems.filter(item => item.id !== deleteId)
  updateItems(res)
})


app.post('/checkItem', function(req, res){
  const checkedId = req.body.id
  const itemToCheck = savedItems.find(item => item.id === checkedId)
  if (itemToCheck) {
    itemToCheck.isChecked = !itemToCheck.isChecked;
  }
  updateItems(res)
})

app.listen(PORT, function () {
  console.log('Example app listening on port 3001!')
})
