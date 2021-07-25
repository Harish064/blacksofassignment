import React from 'react'
import styles from './Header.module.css'
function Header(props) {
    const header=styles[props.header]
    const image=styles[props.image]
    const layer = styles[props.layer]
    const {height} = props
    return (
        <div style={{height:{height}}} className={header}>
            <div style={{height:{height}}} className={image}>
                <div style={{height:{height}}} className={layer}>
                </div>
            </div>
            {props.children}
        </div>
    )
}
 
export default Header
