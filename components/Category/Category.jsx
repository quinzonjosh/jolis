import Image from 'next/image'
import Link from 'next/link';

const Category = ({imageLink, categoryName}) =>{
    return (
        <Link href={{
            pathname: "/productListing",
            query: {categoryName}
        }}>
            <div className="category_container text-center flex flex-col items-center hover:font-bold hover:text-blue-400">
                <div className='relative w-64 h-64'>
                    <Image layout='fill' priority={true} src={imageLink} alt="category image" />
                </div>
                <p>{categoryName}</p>       {/* category name holder */}                   
            </div>
        </Link>
    );
}

Category.defaultProps = {
    imageLink: "/images/default.jpg"
}

export default Category;