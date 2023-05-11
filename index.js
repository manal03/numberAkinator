const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));

});
router.get('/style.css',function(req,res){
  res.sendFile(path.join(__dirname+'/style.css'));
});
router.get('/guessNumberFunc.js',function(req,res){
  res.sendFile(path.join(__dirname+'/guessNumberFunc.js'));
});
app.use('/', router);

app.listen(3104, () => {
  console.log('Server running on port 3104');
});