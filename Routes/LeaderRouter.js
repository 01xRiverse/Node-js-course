const express = require('express');
const bodyParser = require('body-parser');



const LeaderId=express.Router();
LeaderId.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the Leader to you');
})
.post((req, res, next) => {
    res.end('Post operation not supported');
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.end('Will update the Leader '+req.params['leaderId']+'\n Updating the Leader'+req.body.name+':with details:'+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the Leader');
});




const LeaderRouter = express.Router();

LeaderRouter.use(express.json());
LeaderRouter.use('/',LeaderId)
LeaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the Leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all Leaders');
});

module.exports = LeaderRouter;