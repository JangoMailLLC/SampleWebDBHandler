var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/customhandler', function (req, res) {

    var requestData = req.body;

    // Get action
    var action = req.body.action;

    switch (action) {
        case "massmail":
            respond(res, requestData, "EmailAddress,FirstName,LastName___ASDF---BREAKjdoe@browniekitchen.comWG0COLWG0JohnWG0COLWG0DoeWG0ROWWG0jane@browniekitchen.comWG0COLWG0JaneWG0COLWG0RichardsonWG0ROWWG0alice@browniekitchen.comWG0COLWG0AliceWG0COLWG0SmithWG0ROWWG0bob@browniekitchen.comWG0COLWG0BobWG0COLWG0ThompsonWG0ROWWG0WANGO-ENDOFDATASTREAM");
            break;
        case "test":
            respond(res, requestData, "test-success");
            break;
        case "unsubscribe":
            respond(res, requestData, action + "-sync-success");
            break;
        case "bounce":
            respond(res, requestData, action + "-sync-success");
            break;
        case "change":
            respond(res, requestData, action + "-sync-success");
            break;
        case "view":
            respond(res, requestData, action + "-sync-success");
            break;
        case "click":
            respond(res, requestData, action + "-sync-success");
            break;
        case "sent":
            respond(res, requestData, action + "-sync-success");
            break;
        case "job":
            respond(res, requestData, action + "-sync-success");
            break;
        case "action":
            respond(res, requestData, action + "-sync-success");
            break;
        case "forward":
            respond(res, requestData, action + "-sync-success");
            break;
        default:
            respond(res, requestData, "UNKKNOWN");
            break;
    }
});

function respond(res, requestData, responseData) {

    var transaction = {
        "Request": requestData,
        "Response": responseData
    };

    console.log(JSON.stringify(transaction));
    
    res.send(responseData);
}

app.listen(PORT, function () {
    console.log('Sample JangoMail Web DB Profile Handler listening on port ' + PORT);
});