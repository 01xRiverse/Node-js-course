const express = require('express');
const bodyParser = require('body-parser');



const PromoId=express.Router();

PromoId.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the Promotion to you');
})
.post((req, res, next) => {
    res.end('Post operation not supported');
})
.put((req, res, next) => {
    res.statusCode = 200;
    res.end('Will update the Promotion '+req.params['promoId']+'\n Updating the Promotion: '+req.body.name+' \nwith details:'+req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the Promotion');
});




const PromoRouter = express.Router();

PromoRouter.use(express.json());
PromoRouter.use('/',PromoId)
PromoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the Promotions to you!');
})
.post((req, res, next) => {
    res.end('Will add the Promotions: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Promotions');
})
.delete((req, res, next) => {
    res.end('Deleting all Promotions');
});

module.exports = PromoRouter;