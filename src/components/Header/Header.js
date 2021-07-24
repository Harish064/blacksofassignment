import React from 'react'
import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.image}>
                <div className={styles.layer}>
                </div>
            </div>
            <p className={styles.text}>All-IN-ONE SOLUTION PROVIDER FOR YOUR TECHNOLOGICAL NEEDS SYSTEM LEVEL SOLUTIONS</p>
            <hr className={styles.line}></hr>
            <p className={styles.sub_text}>Industry leaders in providing solutions catering to the domains of intellectual property, hardware design & prototyping, software design, and manufacturing.</p>
        </div>
    )
}

export default Header
