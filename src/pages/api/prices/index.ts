import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@database';
import PricesModel from '@database/models/prices';

export default async function(req: NextApiRequest, res: NextApiResponse){

    await connectDB();

    if(req.method === "GET"){
        const data = await PricesModel.find().sort({timestamp: -1});

        return res
            .status(200)
            .json({  
                data
            });
    };

    if(req.method === "POST"){
        const data = await PricesModel.create(req.body);

        return res
            .status(200)
            .json({ 
                data
            });
    };

    if(req.method === "PATCH"){
        const data = await PricesModel.findByIdAndUpdate(req.body._id, req.body, {new: true});

        return res
            .status(200)
            .json({ 
                data
            });
    };

}