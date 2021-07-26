import React from 'react'
import styles from './Footer.module.css'
import logo from '../../Assets/Group243.svg'
function Footer() {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_logo_container}>
                <img src={logo}></img>
                <p className={styles.footer_logo_text}>
                    Over the years, we have added numerous products to our portfolio<br/>and have served as important technology partners for various<br/>verticals.
                </p>
            </div>
            <div className={styles.footer_links_container}>
                <div className={styles.footer_links}>
                    <h4>ABOUT SLS</h4>
                    <ul>
                        <li>IN A SNAPSHOT</li>
                        <li>CSR INITIATIVES</li>
                        <li>CERTIFICATIONS AND TIE-UPS</li>
                    </ul>
                </div>
                <div className={styles.footer_links}>
                    <h4>INDUSTRIES</h4>
                    <ul>
                        <li>IOT PLATFORM</li>
                        <li>CLOUD SOLUTIONS</li>
                        <li>E-MOBILITY</li>
                        <li>SOLAR & WIND</li>
                        <li>SMART METERING</li>
                        <li>SMART GRID</li>
                        <li>HOME AUTOMATION</li>
                        <li>SMART STREET LIGHTS</li>
                        <li> RAILWAYS GAMING</li>
                        <li>TRAFFIC SOLUTIONS</li>  
                    </ul>
                </div>
                <div className={styles.footer_links}>
                    <h4>SERVICES</h4>
                    <ul>
                        <li>ASIC/FPGA/SOC DESIGN SERVICES</li>
                        <li>HIGH SPEED PCB DESIGN SERVICES</li>
                        <li>SOFTWARE DEVELOPMENT</li>
                        <li>ELECTRONICS MANUFACTURING</li>
                        <li>TESTING AND CALIBRATION</li>
                        <li>ML & AI</li>
                    </ul>
                </div>
                <div className={styles.footer_links}>
                    <h4>Contact US</h4>
                    <ul>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footer_hr}></div>
            <div className={styles.footer_text}>
                <p>
                System Level Solutions Inc. Copyright © 2021.
                </p>
                <p>
                Facebook | Instagram | Twitter | LinkedIn
                </p>
            </div>
        </div>
    )
}

export default Footer
