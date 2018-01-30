let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

	event.Records.forEach(r => {
		ddb.put({
			TableName: 'Invoice',
			Item: {}
		}, function (err, data) {
			if (err) {
		r.kinesis.data
			} else {
				//your logic goes here
			}
		});

	});

	callback(null, 'Successfully executed');
}