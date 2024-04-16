import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'category'
  },
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'status'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
});


export default mongoose.model("publication", publicationSchema);