const mongoose=require('mongoose');

const cropSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },
  season:{
    type:String,
    required:true
  },
  growthDuration: {
    type: String,
    required: true
  },
  irrigation:{
    type:String,
    required:true
  },
  soilType: {
    type: String,
    required: true
  },
  idealTemperature: {
    type: String,
    required:true
  },
  sowing:{
    type:[String],
    required:true
  },
  harvesting:{
    type:[String],
    required:true
  },
  organic:{
    type:[String],
    required:true
  },
  inorganic:{
    type:[String],
    required:true
  },
  phValue:{
    type:String,
    required:true
  },
  diseases:{
    type:[String],
    required:true
  }

});

const CropDetails = mongoose.model('Crop', cropSchema);

module.exports=CropDetails;
