import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@database';
import AboutModel from '@database/models/about';

export default async function(req: NextApiRequest, res: NextApiResponse){

    await connectDB();

    if(req.method === "DELETE"){
        const data = await AboutModel.findByIdAndDelete(req.query.id);

        return res
            .status(200)
            .json({  
                data: data
            });
    };

}