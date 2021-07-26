import React from 'react'
import styles from './BlogCard.module.css'
import {Card} from 'react-bootstrap'
function BlogCard(props) {
    const {image}= props
    return (
        <div className={styles.blog_card_container}>
            <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className={styles.blog_title}>Card Title</Card.Title>
                    <Card.Title className={styles.blog_heading}>Heading</Card.Title>
                    <Card.Text className={styles.blog_text}>
                    Quis nostrud exercitation ullamco laboris nisi ut<br></br> aliquip ex ea commodo consequat.
                    </Card.Text>
                </Card.Body>
                <a className={styles.read_more_btn} href="#">READ MORE</a>
            </Card>
        </div>
    )
}

export default BlogCard
