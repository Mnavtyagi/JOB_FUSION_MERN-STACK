import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.mongo_URI,{
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(() => {
        console.log("Successfully Connected to Database! ");
    })
    .catch((err) => {
        console.log(`Some error occured while Conecting to DataBase: ${err}`);
    });
};