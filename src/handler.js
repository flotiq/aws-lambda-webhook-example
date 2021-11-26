'use strict';

module.exports.hook = function (event, context, callback) {
    const payload = JSON.parse(event.body); // Payload from Fotiq
    const headers = event.headers; // Headers from Fotiq

    // Your Code here
    console.log(payload);
    console.log(headers);

    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hook received!' }),
    };

    callback(null, response);
};
