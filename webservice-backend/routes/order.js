import express from 'express';
import { getorderstatus } from '../controllers/getorderstatus.js';


const router = express.Router()


router.post('/', async(req,res) => {
    const ordernumber = req.body?.ordernumber;
    console.log(ordernumber);
    if(ordernumber.length <10){
        res.status(400).send({error: "ordernumber must be 10 characters"});

    }
    try{
        const response = await getorderstatus(ordernumber);
        res.send(response.data);
    }
    catch(error){
        console.log(error);
        res.status(400).send({error: error});
    }
   


})

export default router;