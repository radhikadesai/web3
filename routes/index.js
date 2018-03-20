var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var path = require('path');

var views= path.join(__dirname, '..','views');

/* GET home page. */
router.get('/', function(req,res){
	res.sendFile(views+'/index.html');

});

router.post('/checkBalance',function(req,res){
	checkCoinBalance(req,res)})
module.exports = router;
