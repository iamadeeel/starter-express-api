const express = require('express')
const app = express()
app.use(express.urlencoded({ 
  extended: true
})); 
app.use(express.json());



let MetaApi = require('metaapi.cloud-sdk').default;


app.get('/get-all-symbols', async function(req, res){

  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc0MDI1NjIzfQ.GOMOBCWFw_8QNor2RbYmeouV54g1wrIAJ38ROetUQLY0cJAgZ1diEKB7fYq_MupxQDOHGPc3IwTpC9sfcdVUtazC55cqCrWNHMQhf0hyP6-m9ib7B0CANUbWkxt1Z5lBgRmUeK_SwaZzqQejtUin8X6cC4NCVGgbIAubpsem4F6mgKSDOxfqToXBUmaYmA1xoYmEbZSEHVjuyyvSbsPnKjL_jePIm6tGxGmETEEwFLufv4QgtPvV9XaiNH7fKlD0R8JtuFSQcxxvnvIlOR01pq1XqGpIr7C0jVuQjB5UtlFdNLvzzVjetheUGP9tKtpZ94bw3BCz-N8ek2MKZRKQv3FVkxrDnpqtjaaNYSEH87Up1aTnZ14bvAnNsvxkXTwbTA0gnr9mkXH7rP5QuuLKlB2XZQNo7WT25qHzBfvHO2fDSD-Z5Ox2fE95IAkrW6O5pJrvOCooq68xCER3Mdv3lwnOVq5x5YdxbikAWrcVCfdXVvmbADlF33vWDq3s9dPmok21QIgls_a1ltXyUdkip3QhVFQREMgQzoPtE6bZ4rLvSXwvwKmgjsaqMP-pfu9v9JILvqPxQH2eUN1y25x5znMR1RA7AD5sJP_F19nsqtkN4v0s_rL2AESZ_shL79LSgECO5lw-rPhJtmrENik8qgIvaKC4TmVN1-R_alXgB3A';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('c8d89fdf-afc3-4a86-9162-b4eb1142e31d');
  console.log(await account.deploy());
  const connection = await account.getRPCConnection();
  await connection.connect();

  var symbols = await connection.getSymbols();
  res.send(symbols);
});



app.get('/open-trade',async function (req, res) {
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc0MDI1NjIzfQ.GOMOBCWFw_8QNor2RbYmeouV54g1wrIAJ38ROetUQLY0cJAgZ1diEKB7fYq_MupxQDOHGPc3IwTpC9sfcdVUtazC55cqCrWNHMQhf0hyP6-m9ib7B0CANUbWkxt1Z5lBgRmUeK_SwaZzqQejtUin8X6cC4NCVGgbIAubpsem4F6mgKSDOxfqToXBUmaYmA1xoYmEbZSEHVjuyyvSbsPnKjL_jePIm6tGxGmETEEwFLufv4QgtPvV9XaiNH7fKlD0R8JtuFSQcxxvnvIlOR01pq1XqGpIr7C0jVuQjB5UtlFdNLvzzVjetheUGP9tKtpZ94bw3BCz-N8ek2MKZRKQv3FVkxrDnpqtjaaNYSEH87Up1aTnZ14bvAnNsvxkXTwbTA0gnr9mkXH7rP5QuuLKlB2XZQNo7WT25qHzBfvHO2fDSD-Z5Ox2fE95IAkrW6O5pJrvOCooq68xCER3Mdv3lwnOVq5x5YdxbikAWrcVCfdXVvmbADlF33vWDq3s9dPmok21QIgls_a1ltXyUdkip3QhVFQREMgQzoPtE6bZ4rLvSXwvwKmgjsaqMP-pfu9v9JILvqPxQH2eUN1y25x5znMR1RA7AD5sJP_F19nsqtkN4v0s_rL2AESZ_shL79LSgECO5lw-rPhJtmrENik8qgIvaKC4TmVN1-R_alXgB3A';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('c8d89fdf-afc3-4a86-9162-b4eb1142e31d');
  console.log(await account.deploy());
  //let accountAccessToken = account.accessToken;
  //console.log(accountAccessToken);
  const connection = await account.getRPCConnection();
  
  await connection.connect();
  
  var symbol=req.query.symbol;
  var action=req.query.action;
  var sl=parseFloat(req.query.sl);
  var tp1=parseFloat(req.query.tp1);
  var tp2=parseFloat(req.query.tp2);
  var tp3=parseFloat(req.query.tp3);
  var open_price=parseFloat(req.query.open_price);

  var responseToSend = [];

  console.log(symbol);
  console.log(action);
  console.log(sl);
  console.log(tp1);
  console.log(tp2);
  console.log(tp3);
  console.log(open_price);


  if(action=='Buy'){
    try {
      var response = await connection.createLimitBuyOrder(symbol, 0.1, open_price, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createLimitBuyOrder(symbol, 0.05, open_price, sl, tp2, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createLimitBuyOrder(symbol, 0.01, open_price, sl, tp3, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
  }else{
    try {
      var response = await connection.createLimitSellOrder(symbol, 0.1, open_price, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createLimitSellOrder(symbol, 0.05, open_price, sl, tp2, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createLimitSellOrder(symbol, 0.01, open_price, sl, tp3, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
  }

  
  console.log(await account.undeploy());
     res.send(responseToSend);
});












app.get('/modify-trade',async function (req, res) {
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc0MDI1NjIzfQ.GOMOBCWFw_8QNor2RbYmeouV54g1wrIAJ38ROetUQLY0cJAgZ1diEKB7fYq_MupxQDOHGPc3IwTpC9sfcdVUtazC55cqCrWNHMQhf0hyP6-m9ib7B0CANUbWkxt1Z5lBgRmUeK_SwaZzqQejtUin8X6cC4NCVGgbIAubpsem4F6mgKSDOxfqToXBUmaYmA1xoYmEbZSEHVjuyyvSbsPnKjL_jePIm6tGxGmETEEwFLufv4QgtPvV9XaiNH7fKlD0R8JtuFSQcxxvnvIlOR01pq1XqGpIr7C0jVuQjB5UtlFdNLvzzVjetheUGP9tKtpZ94bw3BCz-N8ek2MKZRKQv3FVkxrDnpqtjaaNYSEH87Up1aTnZ14bvAnNsvxkXTwbTA0gnr9mkXH7rP5QuuLKlB2XZQNo7WT25qHzBfvHO2fDSD-Z5Ox2fE95IAkrW6O5pJrvOCooq68xCER3Mdv3lwnOVq5x5YdxbikAWrcVCfdXVvmbADlF33vWDq3s9dPmok21QIgls_a1ltXyUdkip3QhVFQREMgQzoPtE6bZ4rLvSXwvwKmgjsaqMP-pfu9v9JILvqPxQH2eUN1y25x5znMR1RA7AD5sJP_F19nsqtkN4v0s_rL2AESZ_shL79LSgECO5lw-rPhJtmrENik8qgIvaKC4TmVN1-R_alXgB3A';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('c8d89fdf-afc3-4a86-9162-b4eb1142e31d');
  console.log(await account.deploy());
  //let accountAccessToken = account.accessToken;
  //console.log(accountAccessToken);
  const connection = await account.getRPCConnection();
  
  await connection.connect();
  
  var symbol=req.query.symbol;
  var action=req.query.action;
  var sl=parseFloat(req.query.sl);
  var tp1=parseFloat(req.query.tp1);
  var tp2=parseFloat(req.query.tp2);
  var tp3=parseFloat(req.query.tp3);
  var open_price=parseFloat(req.query.open_price);
  var orderIdsString = req.query.oid;
  var orderIds = orderIdsString.split(',');

  var responseToSend = [];

  try {
    var response = await connection.modifyPosition(orderIds[0]+"", sl, tp1);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }


  try {
    var response = await connection.modifyPosition(orderIds[1]+"", sl, tp2);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }


  try {
    var response = await connection.modifyPosition(orderIds[2]+"", sl, tp3);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }


  
  console.log(await account.undeploy());

     res.send(responseToSend);
});



app.get('/close-trade',async function (req, res) {
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc0MDI1NjIzfQ.GOMOBCWFw_8QNor2RbYmeouV54g1wrIAJ38ROetUQLY0cJAgZ1diEKB7fYq_MupxQDOHGPc3IwTpC9sfcdVUtazC55cqCrWNHMQhf0hyP6-m9ib7B0CANUbWkxt1Z5lBgRmUeK_SwaZzqQejtUin8X6cC4NCVGgbIAubpsem4F6mgKSDOxfqToXBUmaYmA1xoYmEbZSEHVjuyyvSbsPnKjL_jePIm6tGxGmETEEwFLufv4QgtPvV9XaiNH7fKlD0R8JtuFSQcxxvnvIlOR01pq1XqGpIr7C0jVuQjB5UtlFdNLvzzVjetheUGP9tKtpZ94bw3BCz-N8ek2MKZRKQv3FVkxrDnpqtjaaNYSEH87Up1aTnZ14bvAnNsvxkXTwbTA0gnr9mkXH7rP5QuuLKlB2XZQNo7WT25qHzBfvHO2fDSD-Z5Ox2fE95IAkrW6O5pJrvOCooq68xCER3Mdv3lwnOVq5x5YdxbikAWrcVCfdXVvmbADlF33vWDq3s9dPmok21QIgls_a1ltXyUdkip3QhVFQREMgQzoPtE6bZ4rLvSXwvwKmgjsaqMP-pfu9v9JILvqPxQH2eUN1y25x5znMR1RA7AD5sJP_F19nsqtkN4v0s_rL2AESZ_shL79LSgECO5lw-rPhJtmrENik8qgIvaKC4TmVN1-R_alXgB3A';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('c8d89fdf-afc3-4a86-9162-b4eb1142e31d');
  console.log(await account.deploy());
  //let accountAccessToken = account.accessToken;
  //console.log(accountAccessToken);
  const connection = await account.getRPCConnection();
  
  await connection.connect();

  var orderIdsString = req.query.oid;
  var orderIds = orderIdsString.split(',');

  var responseToSend = [];

  try {
    var response = await connection.closePosition(orderIds[0]);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }


  try {
    var response = await connection.closePosition(orderIds[1]);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }


  try {
    var response = await connection.closePosition(orderIds[2]);
    responseToSend.push(response); 
  } catch (error) {
    var erro={"error":error};
    responseToSend.push(erro);
  }

  
  console.log(await account.undeploy());
     res.send(responseToSend);
});

var server = app.listen(3000, function() {
  console.log('Express server listening on port ' + port);
});

const timeout = 120*1000;
server.setTimeout(timeout);
