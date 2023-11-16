var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async function (event) {
    var params = {
        Destination: {
            ToAddresses: ["vishal1579v@gmail.com"],
        },
        Message: {
            Body: {
                Text: { Data: "Test" },
            },
            Subject: { Data: "Test Email" },
        },
        Source: "mail@vishalvijayanand.com",
    };

    return ses.sendEmail(params).promise();
};

