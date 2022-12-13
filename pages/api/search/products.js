// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from "../../../api/contentful";
import { cleanProducts } from "../../../utils/cleanData";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { type, query, category, page, limit, brand, handler } = req.query;
    const data = await Client.getEntries({ content_type: type, query: query, "fields.brand[match]": brand });
    const firstProduct = limit * (page - 1);
    const lastProduct = limit * page;

    const products = handler === "global" ? cleanProducts(data.items) : cleanProducts(data.items).filter((item) => {
      return [...item.categories.map((category) => category.slug)].includes(
        category
      );
    });
    res.status(200).json({
      products: products.slice(firstProduct, lastProduct),
      numPages: Math.ceil(products.length / limit),
    });
  }
}
