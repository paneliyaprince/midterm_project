import axios from "axios"
import dotenv from "dotenv"

dotenv.config();
const API_KEY = process.env.API_KEY;
const URL='https://api.trackingmore.com/v4/trackings/get?tracking_numbers=';


const headers= {
    'Tracking-Api-Key': API_KEY,
    'content-type': 'application'
}


export const getorderstatus = async(ordernumber) => {
    try{
        let response = await axios.get(URL+ordernumber, {headers:headers});
        return response.data;
    }
    catch(error){
        throw error;
        return  error
    };
}
