const express = require('express')
const app = express()
app.use(express.urlencoded({ 
  extended: true
})); 
app.use(express.json());



let MetaApi = require('metaapi.cloud-sdk').default;


app.get('/get-all-symbols', async function(req, res){

  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc2MTg0Nzk0fQ.AHJNAPD8H7ungxVq_IYB7TZB5IJzeTTgyK1qsujZt5rsQd69xeeIgBQib-87WE2q837h197MM1o1p0d7pYmxYq2x3hQ44RfSHtAdwkhDemW95nGVXz4pCee_6edX-ozPpHkx1YZaiDJll6O22hBaw7VhbPhBsx0SPR9QL5fOpBiAzzYLj-XEZplYedrMBGbbUfJPEJ9ekcf0989tt5xy3vEGshqlyjYr_LbhfkeJOeFZRmPlmUwPPmh8lq43whs4cm2zE12Yf3zDs2groQgDXSjr9TkeEK_4yiuhbwytKIcv5coxMXu8HdfZ3j_tBxTCO6dYzC1pqm9eYXmAamg6tF3Pv8ur8tHTxGTDFCVy9RlD8tgYWtsOefoh2_2vAgVPAiKfWntF8nPQHbEKfzkSjbJtBE9Phc0S0DGpOHaIYG4ZdmErYUDa4S967EbIEHBrw2QKPUxM5f5C_jHWygoz69I9uy7U5EZuvcbV3nUfd9X-qrwXKJsIrOOXuw1BKH0x5MAmg3ptB3_PQ4k0Qf6bUdtw1rs9Q77DmjC6woMBGIPMOYSGem2jcTJPuZKttbUaYeuYLk0TiDI6x-3A-LKV0HjFvfvxXFdK0Tcnd27eMbtVcXAWRllRIvsJE404RNLqxtMoSR3tos6DEu3luiM9SH4_ElNu0hKhrkJRJB72EYw';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('99aa1270-d837-434c-8076-1b6c92615ec1');
  console.log(await account.deploy());
  const connection = await account.getRPCConnection();
  await connection.connect();

  var symbols = await connection.getSymbols();
  res.send(symbols);
});








app.get('/open-test-trade',async function (req, res) {
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc2MTg0Nzk0fQ.AHJNAPD8H7ungxVq_IYB7TZB5IJzeTTgyK1qsujZt5rsQd69xeeIgBQib-87WE2q837h197MM1o1p0d7pYmxYq2x3hQ44RfSHtAdwkhDemW95nGVXz4pCee_6edX-ozPpHkx1YZaiDJll6O22hBaw7VhbPhBsx0SPR9QL5fOpBiAzzYLj-XEZplYedrMBGbbUfJPEJ9ekcf0989tt5xy3vEGshqlyjYr_LbhfkeJOeFZRmPlmUwPPmh8lq43whs4cm2zE12Yf3zDs2groQgDXSjr9TkeEK_4yiuhbwytKIcv5coxMXu8HdfZ3j_tBxTCO6dYzC1pqm9eYXmAamg6tF3Pv8ur8tHTxGTDFCVy9RlD8tgYWtsOefoh2_2vAgVPAiKfWntF8nPQHbEKfzkSjbJtBE9Phc0S0DGpOHaIYG4ZdmErYUDa4S967EbIEHBrw2QKPUxM5f5C_jHWygoz69I9uy7U5EZuvcbV3nUfd9X-qrwXKJsIrOOXuw1BKH0x5MAmg3ptB3_PQ4k0Qf6bUdtw1rs9Q77DmjC6woMBGIPMOYSGem2jcTJPuZKttbUaYeuYLk0TiDI6x-3A-LKV0HjFvfvxXFdK0Tcnd27eMbtVcXAWRllRIvsJE404RNLqxtMoSR3tos6DEu3luiM9SH4_ElNu0hKhrkJRJB72EYw';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('99aa1270-d837-434c-8076-1b6c92615ec1');
  console.log(await account.deploy());
  //let accountAccessToken = account.accessToken;
  //console.log(accountAccessToken);
  const connection = await account.getRPCConnection();
  
  await connection.connect();
  
  var symbol=req.query.symbol;
  var action=req.query.action;
  var sl=parseFloat(req.query.sl);
  var tp1=parseFloat(req.query.tp1);
  var open_price=parseFloat(req.query.open_price);

  var responseToSend = [];

  console.log(symbol);
  console.log(action);
  console.log(sl);
  console.log(tp1);
  console.log(open_price);


  if(action=='Buy'){
    
    try {
      var response = await connection.createMarketBuyOrder(symbol, 0.01, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
  }else{
    
    try {
      var response = await connection.createMarketSellOrder(symbol, 0.01, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
  }

  
  console.log(await account.undeploy());
     res.send(responseToSend);
});











app.get('/open-trade',async function (req, res) {
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc2MTg0Nzk0fQ.AHJNAPD8H7ungxVq_IYB7TZB5IJzeTTgyK1qsujZt5rsQd69xeeIgBQib-87WE2q837h197MM1o1p0d7pYmxYq2x3hQ44RfSHtAdwkhDemW95nGVXz4pCee_6edX-ozPpHkx1YZaiDJll6O22hBaw7VhbPhBsx0SPR9QL5fOpBiAzzYLj-XEZplYedrMBGbbUfJPEJ9ekcf0989tt5xy3vEGshqlyjYr_LbhfkeJOeFZRmPlmUwPPmh8lq43whs4cm2zE12Yf3zDs2groQgDXSjr9TkeEK_4yiuhbwytKIcv5coxMXu8HdfZ3j_tBxTCO6dYzC1pqm9eYXmAamg6tF3Pv8ur8tHTxGTDFCVy9RlD8tgYWtsOefoh2_2vAgVPAiKfWntF8nPQHbEKfzkSjbJtBE9Phc0S0DGpOHaIYG4ZdmErYUDa4S967EbIEHBrw2QKPUxM5f5C_jHWygoz69I9uy7U5EZuvcbV3nUfd9X-qrwXKJsIrOOXuw1BKH0x5MAmg3ptB3_PQ4k0Qf6bUdtw1rs9Q77DmjC6woMBGIPMOYSGem2jcTJPuZKttbUaYeuYLk0TiDI6x-3A-LKV0HjFvfvxXFdK0Tcnd27eMbtVcXAWRllRIvsJE404RNLqxtMoSR3tos6DEu3luiM9SH4_ElNu0hKhrkJRJB72EYw';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('99aa1270-d837-434c-8076-1b6c92615ec1');
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
      var response = await connection.createMarketBuyOrder(symbol, 0.01, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createMarketBuyOrder(symbol, 0.01, sl, tp2, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createMarketBuyOrder(symbol, 0.01, sl, tp3, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
  }else{
    try {
      var response = await connection.createMarketSellOrder(symbol, 0.01, sl, tp1, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createMarketSellOrder(symbol, 0.01, sl, tp2, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
      responseToSend.push(response); 
    } catch (error) {
      var erro={"error":error};
      responseToSend.push(erro);
    }
    
    try {
      var response = await connection.createMarketSellOrder(symbol, 0.01, sl, tp3, {comment: 'comment', clientId: 'TE_GBPUSD_7hyINWqAl'});
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
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc2MTg0Nzk0fQ.AHJNAPD8H7ungxVq_IYB7TZB5IJzeTTgyK1qsujZt5rsQd69xeeIgBQib-87WE2q837h197MM1o1p0d7pYmxYq2x3hQ44RfSHtAdwkhDemW95nGVXz4pCee_6edX-ozPpHkx1YZaiDJll6O22hBaw7VhbPhBsx0SPR9QL5fOpBiAzzYLj-XEZplYedrMBGbbUfJPEJ9ekcf0989tt5xy3vEGshqlyjYr_LbhfkeJOeFZRmPlmUwPPmh8lq43whs4cm2zE12Yf3zDs2groQgDXSjr9TkeEK_4yiuhbwytKIcv5coxMXu8HdfZ3j_tBxTCO6dYzC1pqm9eYXmAamg6tF3Pv8ur8tHTxGTDFCVy9RlD8tgYWtsOefoh2_2vAgVPAiKfWntF8nPQHbEKfzkSjbJtBE9Phc0S0DGpOHaIYG4ZdmErYUDa4S967EbIEHBrw2QKPUxM5f5C_jHWygoz69I9uy7U5EZuvcbV3nUfd9X-qrwXKJsIrOOXuw1BKH0x5MAmg3ptB3_PQ4k0Qf6bUdtw1rs9Q77DmjC6woMBGIPMOYSGem2jcTJPuZKttbUaYeuYLk0TiDI6x-3A-LKV0HjFvfvxXFdK0Tcnd27eMbtVcXAWRllRIvsJE404RNLqxtMoSR3tos6DEu3luiM9SH4_ElNu0hKhrkJRJB72EYw';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('99aa1270-d837-434c-8076-1b6c92615ec1');
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
  const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI3MWMyNWVkZmJiYjQ0ZTllNjdjODk0MzY3MWFkYjQ4ZSIsInBlcm1pc3Npb25zIjpbXSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjcxYzI1ZWRmYmJiNDRlOWU2N2M4OTQzNjcxYWRiNDhlIiwiaWF0IjoxNjc2MTg0Nzk0fQ.AHJNAPD8H7ungxVq_IYB7TZB5IJzeTTgyK1qsujZt5rsQd69xeeIgBQib-87WE2q837h197MM1o1p0d7pYmxYq2x3hQ44RfSHtAdwkhDemW95nGVXz4pCee_6edX-ozPpHkx1YZaiDJll6O22hBaw7VhbPhBsx0SPR9QL5fOpBiAzzYLj-XEZplYedrMBGbbUfJPEJ9ekcf0989tt5xy3vEGshqlyjYr_LbhfkeJOeFZRmPlmUwPPmh8lq43whs4cm2zE12Yf3zDs2groQgDXSjr9TkeEK_4yiuhbwytKIcv5coxMXu8HdfZ3j_tBxTCO6dYzC1pqm9eYXmAamg6tF3Pv8ur8tHTxGTDFCVy9RlD8tgYWtsOefoh2_2vAgVPAiKfWntF8nPQHbEKfzkSjbJtBE9Phc0S0DGpOHaIYG4ZdmErYUDa4S967EbIEHBrw2QKPUxM5f5C_jHWygoz69I9uy7U5EZuvcbV3nUfd9X-qrwXKJsIrOOXuw1BKH0x5MAmg3ptB3_PQ4k0Qf6bUdtw1rs9Q77DmjC6woMBGIPMOYSGem2jcTJPuZKttbUaYeuYLk0TiDI6x-3A-LKV0HjFvfvxXFdK0Tcnd27eMbtVcXAWRllRIvsJE404RNLqxtMoSR3tos6DEu3luiM9SH4_ElNu0hKhrkJRJB72EYw';
  const api = new MetaApi(token);
  const account = await api.metatraderAccountApi.getAccount('99aa1270-d837-434c-8076-1b6c92615ec1');
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
  console.log('Express server listening on port 3000');
});

const timeout = 120*1000;
server.setTimeout(timeout);
