import { response } from "express";
import mongoose from "mongoose";
const defaultStatus = ["Aprobada", "Rechazada", "Revizada"]

const statusSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    }
});
const Status = mongoose.model("status", statusSchema);

const initStatus = async () => {
    const statusDB = defaultStatus.map(status => Status.findOne({description: status}))
    Promise.all(statusDB).then(response=>{
        defaultStatus.forEach((status, index)=>{
            !response[index] && new Status({description: status}).save();
        })  
    })
}

initStatus();

export {Status}   