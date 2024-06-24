import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";

async function getData(){
    const res = await fetch(`https://api.sampleapis.com/coffee/hot`)
if(!res.ok){
    throw new Error('Failed to fetch data')    
}return res.json()
}

export const metaData = {
    title : "MedCoding",
    description : "This is a short description of my professional website"
}



export default async function Blog({ limit }){
    const fetchBlog = async () => {
    const Blog = await getData()
    return Blog.slice(0, limit); // Limit products based on 'limit' prop
};

return (
    <div className={styles.container}>
<div>     <h1 ClassName={styles.titre}>This is our blog</h1>
</div>
<div className={styles.mainContainer}>


    { fetchBlog().then (Blog => 
        Blog.map(product =>(
        <Link href ={`/blog/${product.id}`}
        className ={styles.post}
        key = {product.id}>
        <div className={styles.imageContainer}>
            <Image 
            className={styles.image}
            src={product.image}
            fill={true}
            alt='post image'/> 
            </div>
            <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
           <p className={styles.text}>{product.description}</p>
           </div>
           </Link> )))}</div></div>)}

