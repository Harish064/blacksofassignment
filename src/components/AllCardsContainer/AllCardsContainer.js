import React from 'react'
import styles from './AllCardsContainer.module.css'
import BlogCard from './BlogCard/BlogCard'
import img1 from '../../Assets/thisisengineering-raeng-sbVu5zitZt0-unsplash.png'
import img2 from '../../Assets/nasa-Q1p7bh3SHj8-unsplash.png'
import img3 from '../../Assets/thisisengineering-raeng-Kzx7m3JwkcQ-unsplash.png'
import img4 from '../../Assets/nasa-Q1p7bh3SHj8-unsplash.png'

function AllCardsContainer() {
    return (
        <div className={styles.cards_outer_container}>
            <div className={styles.all_container}>
                <div className={styles.text_container}>
                    <p className={styles.card_text_1}>
                        Get acquainted with industry <br/> trends in real-time
                    </p>
                    <div className={styles.hr_container}>
                        <div className={styles.card_line_1}></div>
                        <div className={styles.card_line_2}></div>
                    </div>                    
                    <p className={styles.card_text_2}>
                        Our newsroom is designed to keep you updated about every <br/> major or minor breakthrough in the related industries.
                    </p>
                </div>
                <div className={styles.cards_container}>
                    <div className={styles.nav_container}>
                        <ul className={styles.nav_bar}>
                            <li className={styles.nav_item,styles.nav_active}>ALL</li>
                            <li className={styles.nav_item}>NEWS & EVENTS</li>
                            <li className={styles.nav_item}>CSR</li>
                            <li className={styles.nav_item}>BLOGS</li>
                            <li className={styles.nav_item}>CASE STUDIES</li>
                        </ul>
                    </div>
                    <div className={styles.contain_cards}>
                        <BlogCard image={img1}/>
                        <BlogCard image={img2}/>
                        <BlogCard image={img3}/>
                        <BlogCard image={img4}/>
                    </div>
                </div>
                <div className={styles.btn_container}>
                    <div className={styles.previous}>
                        <div className={styles.btn_previous}>
                        </div>
                    </div>
                    <div className={styles.next}>
                        <div className={styles.btn_next}>
                        </div>
                    </div>
                </div>
                <div className={styles.partner_outer_container}>
                    <div className={styles.partner_container}>
                        <div className={styles.text_container}>
                            <p className={styles.card_text_1}>
                                PARTNERSHIP & ASSOCIATIONS
                            </p>
                            <div className={styles.hr_container}>
                                <div className={styles.card_line_1}></div>
                                <div className={styles.card_line_2}></div>
                            </div>                    
                            <p className={styles.card_text_2}>
                            Using our robust in-house expertise to develop pioneering <br/>solutions catering to various business domains.
                            </p>
                        </div>
                        <div className={styles.partner_logo_container}>
                            <div className={styles.logo_1}></div>
                            <div className={styles.logo_2}></div>
                            <div className={styles.logo_3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllCardsContainer
