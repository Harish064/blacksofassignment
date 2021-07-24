import React from 'react'
import Navigation from '../Navbar/Navbar'
import styles from './Home.module.css'
function Home() {
    return (
        <div className={styles.layer}>
            <div className={styles.container}>
                <Navigation />
            </div>
        </div>
    )
}

export default Home
