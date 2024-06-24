import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.png";
import Products from "./(dynamic)/products/page";
import Blog from "./(dynamic)/blog/page";
import Contact from "./(static)/contact/page";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home() {
  return (<div className={styles.container}>
    <div className={styles.container1}>
      <div className={styles.col}>
            <h1 className={styles.title}>Your best LAVAZZA coffe shop</h1>
            <p className={styles.description}>The company operates a number of retail coffee shops (Il Caffè di Roma and Espression). The shops offer
             traditional coffee drinks as well as whole bean and ground coffee 
             for home use.</p>
             <button className={styles.button}>Shop Now</button>
        </div>
        <div className={styles.col}>
            <Image className={styles.img} src={Hero} alt="LAVAZZA"/>
        </div>       
     </div>
 <Products limit={3}/>
 <Blog limit={3}/>
 <Contact/>
    </div>
  );
}
