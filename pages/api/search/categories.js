// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "../../../api/contentful";
import { cleanCategories } from "../../../utils/cleanData";


export default async function handler(req, res) {
  if (req.method === "GET") {    
    const { type, limit, pageNumber, query} = req.query;
    const data = await Client.getEntries({ content_type: type, query: query})
    
    const firstCategory = limit * (pageNumber - 1);
    const lastCategory = limit * pageNumber;
    const categories = cleanCategories(data.items); 
    console.log(categories);

    res.status(200).json({
      categories: categories.slice(firstCategory, lastCategory),
      numPages: Math.ceil(categories.length / limit),
    });
  }
}
