import React from 'react'
import CardsContainer from '../CardsContainer/CardsContainer'
import styles from './MainContainer.module.css'
function MainContainer() {
    return (
        <div className={styles.main_container}>
            <CardsContainer />
        </div>
    )
}

export default MainContainer
