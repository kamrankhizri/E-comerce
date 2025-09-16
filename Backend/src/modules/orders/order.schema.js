import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    product: {
        type: [mongoose.Types.ObjectId],
        ref: 'Product'
    },
    status: {
        type: String,
        default: 'Pending'
    }, 
});

const model = mongoose.model('Order', orderSchema);

export default model;