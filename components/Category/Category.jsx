const Category = ({imageLink, categoryName}) =>{
    return (
        <div className="category_container text-center">
            <img className="block ml-auto mr-auto" src={imageLink} alt="category image" />
            <span>{categoryName}</span>       {/* category name holder */}   
            
        </div>
    );
}

Category.defaultProps = {
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaA3XvSJrcPIH1Jcd5inZpvvaSKziv-4aVVtVj5cpalIXEQpqHjlsevtLrZDi2xr61l5g&usqp=CAU"
}

export default Category;