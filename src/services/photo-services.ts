import { db } from "../db/db";
import { Photo } from "../models/photo";


interface PhotoServices {
    // updateLikes(id:string, inc:number): Promise<Photo>;
    createPhoto(photo:Photo): Promise<string>;
    // createComment(id:string, comment:string): Promise<Photo>;
    getAllPhotos():Promise<Photo[]>
}

const photoCollection = db.collection<Photo>("photos")

export const getAllPhotos = async(): Promise<Photo[]> =>{
    const photos = await photoCollection.find().toArray()

    return photos
};

export const createPhoto = async (photo: Photo): Promise<string> => {
    try{
        const res = await photoCollection.insertOne(photo);
        return res.insertedId.toString();
    }   catch(error) {
        return "something went wrong"
    }
}


// export const updateLikes = async (): Promise<Photo> => {
//     id: string, 
//     inc: number = 1
    
// }

// export const createComment = async(id: string, comment: string): Promise<Photo> =>{
//     return null
// }

export const photoServices: PhotoServices = {getAllPhotos, createPhoto, }