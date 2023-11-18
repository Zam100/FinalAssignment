let mongoose = require('mongoose');

// create a model class
let supercarModel = mongoose.Schema({
    Brand:String,
    Model:String,
    Power:String,
    Topspeed:String,
    Price: Number
},
{
    collection:"Bio_supercar"
});
module.exports = mongoose.model('Supercar',supercarModel);
