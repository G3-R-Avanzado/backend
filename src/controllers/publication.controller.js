import Publication from "../models/publication.model.js";  
import Category from "../models/category.model.js";
import mongoose from "mongoose";

import { Status } from "../models/status.model.js";
import User from "../models/user.model.js";


//#region Publicaciones

export const createPublication = async (req, res) => {
    try {
        const body = req.body;

        const newPublication = new Publication({
            titulo: body.titulo,
            description: body.description,
            image: body.image,
            price: body.price,
        })

        const categoryDB = await Category.findById(body.category)
        if(!categoryDB) return res.status(404).json("Categoria no encontrada")
        newPublication.category = categoryDB

        const statusDB = await Status.findOne({description: body.status})
        if(!statusDB) return res.status(404).json("Estado no encontrado");
        newPublication.status = statusDB._id
        
        const userDB = await User.findById(body.user)
        if(!userDB) return res.status(404).json("Usuario no encontrado");
        newPublication.user = userDB

        newPublication.save();
        res.status(200).json(newPublication);
    } catch (error) {
        res.status(404).json("error al cargar los datos de la publicacion")
    }
}

export const updatePublication = async (req, res) => {
    try {
        const publicationUpdate = req.body;
        const publicationDB = await Publication.findById(publicationUpdate._id)

        if(publicationDB) {

            const categoryDB = await Category.findById(publicationUpdate.category)
            if(!categoryDB) return res.status(404).json("Categoria no encontrada")
            publicationDB.category = categoryDB

            let statusId;
            try {
              statusId = mongoose.Types.ObjectId(publicationUpdate.status);
            } catch (error) {}
            
            const statusDB = await Status.findOne({
              $or: [
                { description: publicationUpdate.status }, 
                { _id: statusId }
              ]
            });

            if(!statusDB) return res.status(404).json("Estado no encontrado");
            publicationDB.status = statusDB._id
        
            const userDB = await User.findById(publicationUpdate.user)
            if(!userDB) return res.status(404).json("Usuario no encontrado");
            publicationDB.user = userDB

            publicationDB.titulo = publicationUpdate.titulo
            publicationDB.description = publicationUpdate.description
            publicationDB.image = publicationUpdate.image
            publicationDB.price = publicationUpdate.price
            publicationDB.creationDate = Date.now()


            publicationDB.save()
            res.status(200).json(publicationDB)
        }else{
            res.status(404).json("publicacion no encontrada")
        }
    } catch (error) {
        console.log(error, "error");
        res.status(404).json("Error al actualizar la publicacion");
    }
}

export const getAllPublication = async (req, res) => {
    try {
        //const publications = await Publication.find({}).populate({path:'status', select:'description'});
        const publications = await Publication.find({});
        res.status(200).json(publications)
    } catch (error) {
        res.status(404).json("Error al obtener las publicaciones");
    }
}

export const getPublicationByStatus = async (req, res)=>{
    try {
        const {_id} = req.params
        console.log(_id)

        const statusDB = await Status.findById(_id)
        if(!statusDB) return res.status(404).json("Estado no encontrado");
        
        const pubication = await Publication.find({status: _id})

        res.status(200).json(pubication)
    } catch (error) {
        res.status(404).json("Error al obtener las publicaciones por estado");
    }
}

export const getPublicationByUser = async (req, res)=>{
    try {
        const {_id} = req.params

        const userDB = await User.findById(_id)
        if(!userDB) return res.status(404).json("Usuario no encontrado");
        
        const pubication = await Publication.find({user: _id})

        res.status(200).json(pubication)
    } catch (error) {
        res.status(404).json("Error al obtener las publicaciones por estado");
    }
}

export const getPublicationFilter = async (req, res) =>{
    try {
        const {descriptionParam, pageParam, limitPageParam} = req.params;

        const description = descriptionParam || "";
        const page = pageParam || 0;
        const limitPage = limitPageParam || 0;

        const publications = await Publication.find({description: {$regex: description, $options: 'i'}})
                                                .skip(page)
                                                .limit(limitPage);
        res.status(200).json(publications)
    } catch (error) {
        
    }
}

export const updateStatus = async (req, res) => {
    const {status, id} = req.params;
    console.log({status, id});
    try {
        const publicationDB = await Publication.findById(id)
        if(!publicationDB) return res.status(404).json("Publicacion no encontrada");

        const statusDB = await Status.find({description: status})
        if(!status) return res.status(404).json("Estado no encontrado");

        publicationDB.status = statusDB._id;
        publicationDB.save()

        return res.status(200).json(publicationDB)
    } catch (error) {
        res.status(404).json("Error al actualizar el estado");
    }
} 

//#endregion

//#region Estados 

export const getStatus = async (req, res) => {
    try {
        const status = await Status.find({})
        res.status(200).json(status);
    } catch (error) {
        res.status(404).json("Error al obtener los estados")
    }
}

//#endregion