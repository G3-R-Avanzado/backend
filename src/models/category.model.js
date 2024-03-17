import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  subcategories: {
    type: Array,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Category", categorySchema);