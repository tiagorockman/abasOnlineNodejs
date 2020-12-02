import mongoose from 'mongoose';


let salesSchema = new mongoose.Schema({
  saleDate: {
    type: Date,
    default: Date.now
  },
  saleValue: {
    type: Number,
    required: true,
    min: 1,
  },
  sellerID: {
    type: Number,
    required: true,
  }
});

const Sales = mongoose.model('sales', salesSchema);

export default Sales;