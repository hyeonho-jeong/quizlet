import React from 'react';
import Header from "./Header/Header"
import styles from "./Layout.module.css"

const Layout = () =>{
    return(
        <div className = {styles.layout}>
            <Header />

            <main>
                <div className = {styles.container}>
                    <div className = {styles.library}>Library</div>
                    <div className = {styles.study}>Today's Study</div>
                    <div className = {styles.reminder}>Reminders</div>
                </div>
            </main>

        </div>
    )
}

export default Layout