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
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BlogCard
