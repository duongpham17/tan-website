import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@database';
import NewsModel from '@database/models/news';
import middleware from 'pages/middleware';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    await connectDB();

    if(req.method === "DELETE"){
        const data = await NewsModel.findByIdAndDelete(req.query.id);

        return res
            .status(200)
            .json({  
                data
            });
    };

}

export default middleware(handler)