
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

//export const cleanProducts = () =>