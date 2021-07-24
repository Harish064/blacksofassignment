import React from 'react'
import styles from './Header.module.css'
function Header(props) {
    const {height} = props
    return (
        <div style={{height:{height}}} className={styles.header}>
            <div style={{height:{height}}} className={styles.image}>
                <div style={{height:{height}}} className={styles.layer}>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default Header
