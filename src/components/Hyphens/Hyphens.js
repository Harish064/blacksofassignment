import React from 'react'
import styles from './Hyphens.module.css'
function Hyphens(props) {
    const {height,width,flexDirection,container,item,active}= props
    const divcontainer = styles[container]
    const divitem = styles[item]
    const divactive = styles[active]

    return (
        // <div style={{flexDirection:{flexDirection}}} className={styles.container}>
        //     <div style={{height:{height},width:{width}}} className={styles.item ,styles.active}>
        //     </div>
        //     <div style={{height:{height},width:{width}}} className={styles.item}>
        //     </div>
        //     <div style={{height:{height},width:{width}}} className={ styles.item}>
        //     </div>
        //     <div style={{height:{height},width:{width}}} className={ styles.item}>
        //     </div>
        // </div>
        <div
         style={{flexDirection:{flexDirection}}}
         className={divcontainer}>
            <div style={{height:{height},width:{width}}} className={divitem,divactive}>
            </div>
            <div style={{height:{height},width:{width}}} className={divitem}>
            </div>
            <div style={{height:{height},width:{width}}} className={ divitem}>
            </div>
            <div style={{height:{height},width:{width}}} className={ divitem}>
            </div>
        </div>
    )
}

export default Hyphens
