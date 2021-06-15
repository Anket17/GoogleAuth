var sendNotification = function(data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8"
    };
    
    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };
    
    var https = require('https');
    var req = https.request(options, function(res) {  
      res.on('data', function(data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    
    req.on('error', function(e) {
      console.log("ERROR:");
      console.log(e);
    });
    
    req.write(JSON.stringify(data));
    req.end();
  };
  
  var message = { 
    "app_id": "424dbeeb-6fd1-46c6-8532-349724028bca",
     "contents": {"en": "Hello JSON Test"},
     "include_player_ids": ["6657e49f-81d2-4910-977e-1eb61c04fc08","a246b6d7-bb2f-47a2-bc62-6b4975c19b70"]
 };
  
  sendNotification(message);