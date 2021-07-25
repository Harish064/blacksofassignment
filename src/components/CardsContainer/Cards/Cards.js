import React from 'react'
import styles from './Cards.module.css'
function Cards(props) {
    const {image,text} = props;
    return (
        <div className={styles.card}>
            <img src={image} alt="card_img"/>
            <p className={styles.text_card}>{text}</p>
        </div>
    )
}

export default Cards
