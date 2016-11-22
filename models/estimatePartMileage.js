var mongoose = require('mongoose')
  , Schema = mongoose.Schema
    , EntryMileage = require('./entryMileage.js')

var EstimatePartMileageSchema = new Schema({
    dollarsPerMile: { type: Number, required: true, default: 0.54 },
    entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryMileage },
    }],
    subtotal:  { type: Number, required: true, default: 0 }
})

var estimatePartMileage = mongoose.model('EstimatePartMileage', EstimatePartMileageSchema)
<<<<<<< HEAD
module.exports = estimatePartMileage
=======
module.exports = estimatePartMileage
>>>>>>> 4d854f7b679ec52f1e5f3e0bab914072771e8dbc
