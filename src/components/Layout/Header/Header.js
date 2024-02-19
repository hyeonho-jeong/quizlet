import UserImg from "./user.png"
import styles from './Header.module.css'

const Header = () =>{
    return(
        <header className = {styles.header}>
            <div className = {styles.contents}>
                <div>Flipplt</div>
            
                <nav className = {styles.navigation}>
                    <ul>
                        <li>Create</li>
                        <li>Study</li>
                        <li>Stats</li>
                    </ul>
                </nav>
            
                <img src = {UserImg} style = {{width: 50}}></img>
            </div>
        </header>
    )
}

export default Header