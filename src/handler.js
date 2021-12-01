'use strict';

module.exports.hook = function (event, context, callback) {
    const hookData = JSON.parse(event.body); // Payload from Fotiq
    const headers = event.headers; // Headers from Fotiq

    // Your Code here
    console.log(hookData);
    console.log(headers);
    console.log(`Received hook: ${hookData.action} ${hookData.contentTypeName} (#${hookData.payload.id})`);

    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hook received!' }),
    };

    callback(null, response);
};
