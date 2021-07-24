import React from 'react'
import Navigation from '../Navbar/Navbar'
import styles from './Home.module.css'
import mission from '../../Assets/mission.png'
import leaves from '../../Assets/leaves.png'
import Hyphens from '../Hyphens/Hyphens'
function Home() {
    return (
        <div className={styles.layer}>
            <div className={styles.container}>
                <Navigation />
                <div className={styles.text_container}>
                    <div className={styles.text_header}>
                        <p>TECHNOLOGY PARTNERS IN HARDWARE AND SOFTWARE OFFERINGS</p>
                    </div>
                    <div className={styles.text_subheader}>
                        <p>Serving as a turnkey solutions provider for the past 20 years.</p>
                    </div>
                    <div className={styles.text}>
                        <p>We specialize in-</p>
                        <ul>
                            <li>Research & Development</li>
                            <li>Product Design</li>
                            <li>Manufacturing</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.cards_container}>
                    <div className={styles.card_1}>
                        <div className={styles.card_1_content}>
                            <p style={{fontWeight:'bold',letterSpacing:'0px',color:'red',font: 'normal normal normal 40px/39px Bebas Neue'}}>356</p>
                            <p style={{ width:'100%',height:'40px',fontWeight:'bold',letterSpacing:'0px',textTransform:'uppercase',color:'#003189',font: 'normal normal normal 14px/49px Bebas Neue'}}>staff strength</p>
                        </div>
                    </div>
                    <div className={styles.card_2}>
                        <div className={styles.card_2_content}>
                            <p style={{fontWeight:'bold',letterSpacing:'0px',color:'red',font: 'normal normal normal 40px/39px Bebas Neue'}}>100+</p>
                            <p style={{ height:'40px',fontWeight:'bold',letterSpacing:'0px',textTransform:'uppercase',color:'#003189',font: 'normal normal normal 18px/19px Bebas Neue'}}>Active Projects</p>
                        </div>
                    </div>
                    <div className={styles.card_3}>
                        <img src={mission}/>
                    </div>
                    <div className={styles.card_4}>
                        <div className={styles.card_4_content}>
                            <p style={{fontWeight:'bold',letterSpacing:'0px',color:'red',font: 'normal normal normal 40px/39px Bebas Neue',marginTop:'10px'}}>06</p>
                            <p style={{ width:'100%',height:'40px',fontWeight:'bold',letterSpacing:'0px',textTransform:'uppercase',color:'#003189',font: 'normal normal normal 8px/39px Bebas Neue'}}>Business Verticals</p>
                        </div>
                    </div>
                    <div className={styles.card_5}>
                        <img src={leaves} />
                    </div>
                    <div className={styles.hyphens}>
                        <Hyphens />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home
