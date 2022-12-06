// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "../../api/contentful";
import { cleanProducts } from "../../utils/cleanData";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const type = req.body.type
        const query = req.body.query
        const limit = req.body.limit
        const data = await Client.getEntries({ 'content_type': type, query: query, limit: limit });
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
         const total = data.total; //Get total number of items for pagination
        switch (type) {
            case "products":
                const products = cleanProducts(data.items);
                res.status(200).json({ products, total })
                break;
            case "category":
                const categoryList = cleanCategories(data.items);
                res.status(200).json({ categoryList, total })
                break;
        }
        
    }
}



