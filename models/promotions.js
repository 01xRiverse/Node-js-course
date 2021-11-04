const mongoose= require('mongoose');
const Schema=mongoose.Schema

var promoSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    lable:  {
        type: String,
        required: true
    },
    price:  {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    featured:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

var Promos = mongoose.model('Promo', promoSchema);

module.exports = Promos;