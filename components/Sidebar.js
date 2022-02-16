import Link from "next/link"
import Image from "next/image"
import styles from "../styles/sidebar.module.scss"
import { useRouter } from "next/router";



const Sidebar = (props) => {
    const router = useRouter();
    return (


        <div className={styles.sidebar}>

            <div className={styles.logo}>
                <Image 
                    src="/MET.jpg" 
                    alt="logo" 
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            
            <Link href="/" passHref>
                <button className={router.pathname == "/"? styles.active : styles.item}>Home</button>
            </Link>
            <Link href="/dashboard" passHref>
                <button className={router.pathname == "/dashboard"? styles.active : styles.item}>Dashboard</button>
            </Link>
            <Link href="/editor" passHref>
                <button className={router.pathname == "/editor" ? styles.active : styles.item}>Editor</button>
            </Link>
        </div>
        

    )
}

export default Sidebar


