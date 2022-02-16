
import styles from "../styles/navbar.module.scss"




const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            <h1>{props.title}</h1>
            {props.children && <div className={styles.divider}/>}
            {props.children}
        </div>
        
    )
}

export default Navbar



