import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@database';
import TeamModel from '@database/models/teams';

export default async function(req: NextApiRequest, res: NextApiResponse){

    await connectDB();

    if(req.method === "GET"){
        const data = await TeamModel.find().sort({timestamp: -1});

        return res
            .status(200)
            .json({  
                data
            });
    };

    if(req.method === "POST"){
        const data = await TeamModel.create(req.body);

        return res
            .status(200)
            .json({ 
                data
            });
    };

    if(req.method === "PATCH"){
        const data = await TeamModel.findByIdAndUpdate(req.body._id, req.body, {new: true});

        return res
            .status(200)
            .json({ 
                data
            });
    };

}