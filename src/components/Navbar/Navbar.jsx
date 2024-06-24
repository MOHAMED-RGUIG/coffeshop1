import Link from "next/link";
import styles from './Navbar.module.css';
import {links} from './data.js';
import Logo from "@/elements/logo/logo";
import Button from "@/elements/Button/Button";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar(){
return(
    <div className={styles.container}>
        <Logo />

        <div className={styles.links}>
            <DarkModeToggle />
            {links.map(link=> 
            <Link
             key={link.id}
             href={link.url}
             className={styles.link}>
                {link.title}
             </Link>
             ) }
       
        <Button />
         </div>
    </div>
)
}