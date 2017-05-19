var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1515989980',
  channelSecret: '1ff72c88fea24867756428becaa71770',
  channelAccessToken: 'Zo1ykKjIvTmDj8BUw3h4pNKeuoou8mcxsTbHyQXcUv/01vx7jXR1WgM1MdSWWx2/yOxhwIhWJqm6wiSUcbrefkEdV3t/Tra+4x2Wxlxowaiq/4DH9xxDtW7KaiNs59nz1RHntuAt5cxKagSNVgEqCAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});