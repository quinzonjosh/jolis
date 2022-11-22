
export const cleanCategories = (rawData) => {
        const cleanCategory = rawData.map((categories) => {
                const {sys, fields} = categories
                const {id} = sys
                const {categoryName:name, categorySlug:slug, categoryPhoto} = fields
                const image = "https:" + categoryPhoto.fields.file.url
                const updatedCategories = {id, name, slug, image}
                return updatedCategories
        })
        return cleanCategory;
}

export const cleanProducts = (rawData) => {
        const cleanProduct = rawData.map((products) => {
                
                const {sys, fields} = products
                const {id} = sys
                const {name, category: categoryobject, pnoval_stock, espana_stock, featured, image: imageUrl} = fields
                //const {categoryName: category} = categoryobject.fields
                const category = categoryobject[0].fields.categoryName
                const image = "https:" + imageUrl.fields.file.url
                const updatedProducts = {id, name, category, pnoval_stock, espana_stock, featured, image}
                return updatedProducts
        })
        return cleanProduct;
}

export const filterProducts = (Data, category) => {
        const filteredProducts = Data.filter((products) => {
                return Data.category = category.name
        })
}