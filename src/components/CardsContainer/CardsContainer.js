import React from 'react'
import Cards from './Cards/Cards'
import styles from './CardsContainer.module.css'
import  BlueIcons2001 from '../../Assets/BlueIcons2001.png'
import  BlueIcons2002 from '../../Assets/BlueIcons2002.png'
import  BlueIcons2003 from '../../Assets/BlueIcons2003.png'
import  BlueIcons2004 from '../../Assets/BlueIcons2004.png'
import  BlueIcons2006 from '../../Assets/BlueIcons2006.png'
import  BlueIcons2008 from '../../Assets/BlueIcons2008.png'
import  BlueIcons2010 from '../../Assets/BlueIcons2010.png'
import  BlueIcons2013 from '../../Assets/BlueIcons2013.png'
import  BlueIcons2014 from '../../Assets/BlueIcons2013.png'
import  BlueIcons2015 from '../../Assets/BlueIcons2015.png'
import  BlueIcons2016 from '../../Assets/BlueIcons2016.png'
function CardsContainer() {
    return (
        <div className={styles.outer_container}>
            <div className={styles.text_container}>
                <p className={styles.card_text_1}>
                    Our rich portfolio <br></br> covers multiple segments
                </p>
                <div className={styles.hr_container}>
                    <div className={styles.card_line_1}></div>
                    <div className={styles.card_line_2}></div>
                </div>
                            
                <p className={styles.card_text_2}>
                    Catering to multiple industrial use cases, System Level <br/> Solutions provides a wide array of products and services.
                </p>
            </div>
            <div className={styles.contain_cards}>
                <Cards image={BlueIcons2001} text="IoT Platform" />
                <Cards image={BlueIcons2002} text="Cloud Solutions" />
                <Cards image={BlueIcons2003} text="E-Mobility" />
                <Cards image={BlueIcons2004} text="Solar & Wind" />
                <Cards image={BlueIcons2006} text="Smart Metering" />
                <Cards image={BlueIcons2010} text="Smart Grid" />
                <Cards image={BlueIcons2008} text="Home Automation" />
                <Cards image={BlueIcons2014} text="Smart Street Lights" />
                <Cards image={BlueIcons2016} text="Railways" />
                <Cards image={BlueIcons2015} text="Gaming" />
                <Cards image={BlueIcons2013} text="Traffic Solutions" />
                <Cards image={BlueIcons2002} text="Digital Singage" />
            </div>
            <button className={styles.button}>Know More</button>
        </div>
    )
}

export default CardsContainer
