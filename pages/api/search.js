// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "../../api/contentful";
import { cleanProducts } from "../../utils/cleanData";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const query = req.body.query
        const data = await Client.getEntries({ 'content_type': 'products', query: query, limit: 9 });
        console.log(data);
        /** 
         * {
         *  sys: {type: 'Array'},
         *  total: <number of items in a query>
         *  limit: <number of items when fetching data>,
         *  items: [array of products]
         *  
         * }
         * 
         * */        
        const products = cleanProducts(data.items);
        res.status(200).json({ products })
    }
}



