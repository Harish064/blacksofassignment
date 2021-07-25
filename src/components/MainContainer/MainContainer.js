import React from 'react'
import AllCardsContainer from '../AllCardsContainer/AllCardsContainer'
import CardsContainer from '../CardsContainer/CardsContainer'
import styles from './MainContainer.module.css'
function MainContainer() {
    return (
        <div className={styles.main_container}>
            <CardsContainer />
            <p className={styles.offer_text}>
                EXPANDING THE CORE <br></br> OF OUR PRIMARY OFFERINGS
            </p>
            <div className={styles.offer_outer_layer}>
                <div className={styles.offer_container}>
                    <div className={styles.offer_text_container}>
                        <ul className={styles.ul_container}>
                            <li className={styles.li_item}>ASIC/FPGA/SoC Design Services</li>
                            <li className={styles.li_item}>High Speed PCB Design Services</li>
                            <li className={styles.li_item,styles.li_active}>Software Development</li>
                            <li className={styles.li_item}>Electronics Manufacturing</li>
                            <li className={styles.li_item}>Testing and Calibration</li>
                            <li className={styles.li_item}>ML & AI</li>
                        </ul>
                    </div>
                    <div className={styles.offer_img_container}>
                    </div>
                    <div className={styles.img_indicator}>
                    </div>
                    <div className={styles.hr_container}>
                        <div className={styles.research_line_1}></div>
                        <div className={styles.research_line_2}></div>
                    </div>
                    <div className={styles.img_text}>
                        <p className={styles.img_text_1}>
                        Forming the core of our technical expertise, our ready-<br/>to-integrate, rich turnkey offerings cover a vast range<br/> of target platforms.
                        </p>
                    </div>
                </div>
            </div>
            <AllCardsContainer />
        </div>
    )
}

export default MainContainer
