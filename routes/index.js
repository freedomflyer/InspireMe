function getClientIp(req) {

  var ipAddress;
  // Amazon EC2 / Heroku workaround to get real client IP
  var forwardedIpsStr = req.header('x-forwarded-for');
  if (forwardedIpsStr) {

    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // Ensure getting client IP address still works in
    // development environment
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};

/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.end('Hello World');
};

exports.quote = function(req, res) {
    res.send({
        "response": {
            "outputSpeech": {
            "type": "PlainText",
            "text": "Ok, What's the topic for this event?"
            },
            "shouldEndSession": false
        },
        "sessionAttributes": {
            "intentSequence": "createEvent;duration;yes",
            "forDate": "2015-06-04",
            "startTime": "14:00",
            "duration": "PT45M",
        }
    });
}
