require('newrelic');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
//const helmet = require('helmet'); 
const routes = require('./routes');

const CERT = "MIIDpjCCAo6gAwIBAgIGAUtBdD6iMA0GCSqGSIb3DQEBBQUAMIGTMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEUMBIGA1UECwwLU1NPUHJvdmlkZXIxFDASBgNVBAMMC3JlZHZlbnR1cmVzMRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMB4XDTE1MDEzMTE5MjQxMloXDTQ1MDEzMTE5MjUxMlowgZMxCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRYwFAYDVQQHDA1TYW4gRnJhbmNpc2NvMQ0wCwYDVQQKDARPa3RhMRQwEgYDVQQLDAtTU09Qcm92aWRlcjEUMBIGA1UEAwwLcmVkdmVudHVyZXMxHDAaBgkqhkiG9w0BCQEWDWluZm9Ab2t0YS5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCCbj8dU3P8ilM2v8cTh9IWuagt3ZTmpYuCxvEtBJbQyN9iekS+0yd4ol7nrVt6QXEkA6NJ6Q6cXAcq7YdFmX5jwn2Mh9gILFo8FL7d4rv+RKBZ9H/1jcSKmvaR9ppKx+BaT6o5tfq2IhwXyvOkI1ftK+/Z+WvyrD/5fohsFhlYzEcbN47iCFwGs/QM7aPQAc1aNV9XW8cnuEiR1Zny6CwvEPNfm2k1Jypm69kcWc3rom6++ssCG+EhXF6RWvxcpDE5fyYXNxdCLudIapA0w2V524vyh7VuAxoQYNoKO0Sovk8NxTCL9LBhiKATz3pS2+6AhbuSY1QJjioOpLGgvPF7AgMBAAEwDQYJKoZIhvcNAQEFBQADggEBABHd0DUB3Iutx2Hef67IKbKZLAAaqy8d9Y1UNdONELQ37WdW40uMkM3iNTwYUitnmHNP/+RWRJ5k/riEkACajRTKu7cBtwlADjFZ03u+zn2oVCmKq102ZUBvJaLPrxGN7BBu5D8abLe2CLlPpgL6hXgoJPqdWaz2aRSgNs/PuQFQpJ8cQH/mo+XSVjRw/mveifW/j6iXoguAzYE5gDGxHuJotwG3Cc0bkTJNGruYrFOlsRaQea3tiwZnTgIP8LYLZEQOoqTDrqUmOnR+55YGU8S50GvinNjB4/FZVTqdoIGpRd1jR3G7IZauLPSx66dtfzh1fQA3QqbmBIqRiMAgqjY="

var app = express();

// handles our security headers
//app.use(helmet());
const authN = (req, res, next) => {
  req.user = {};
  if (req && req.headers && req.headers.authorization) {
    var bearerToken = req.headers.authorization;
    var tokenParts = bearerToken.split(",")
    
    try {
      var decodedToken = jwt.decode(tokenParts[1]);
      req.user.email = decodedToken.emailAddress;
      req.user.firstName = decodedToken.firstName;
      req.user.lastName = decodedToken.lastName;
      
    } catch (err) {
      // demo time baby
      //return res.status(401).send();
      req.user.email = 'alake@redventures.com';
      req.user.firstName = 'Andrew';
      req.user.lastName = 'Lake';
    }
  } else {
    // not actually failing for right now
    req.user.email = 'alake@redventures.com';
    req.user.firstName = 'Andrew';
    req.user.lastName = 'Lake';
    // demo time baby
    //return res.status(401).send();
  }
  next();
}
app.use(authN);

// Enable cors
var whitelist = ['http://localhost:9000', 'http://localhost:3000'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}
app.use(cors());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  //res.locals.message = err.message;
  //res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3000;
app.listen(port, function run() {
  console.log(`OrderUp listening on port ${port}!`);
});

