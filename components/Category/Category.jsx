import Image from 'next/image'

const Category = ({imageLink, categoryName}) =>{
    return (
        <div className="category_container text-center flex flex-col items-center">
            <div className='relative w-64 h-64'>
                <Image layout='fill'  src={imageLink} alt="category image" />
            </div>
            <p>{categoryName}</p>       {/* category name holder */}   
            
        </div>
    );
}

Category.defaultProps = {
    imageLink: "/images/default.jpg"
}

export default Category;