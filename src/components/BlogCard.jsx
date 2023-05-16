import React from 'react';
import {Link} from 'gatsby';
import * as styles from '../styles/blog-page.module.css';


export default function BlogCard({blogData}) {
    return (
        <div className={styles.blogCardContainer}>
            <div className={styles.blogCard}>
                <div className={styles.blogCardThumbnailContainer}>
                    <img className={styles.blogCardThumbnail}
                         src={`https://res.cloudinary.com/dg8awj55m/image/upload/c_fill,h_500,w_800,f_auto/v1682719065/website-lending/electricien-nimes/images/${blogData.hero_image_url}`}
                         alt={blogData.title}/>
                </div>
                <div className={styles.blogCardTextContainer}>
                    <div className={styles.blogCardText}>
                        <p className={styles.blogCardDate}>{`${blogData.date} - ${blogData.reading_time} minutes de lecture`}</p>
                        <Link to={`/blog/${blogData.url}`} className={styles.blogCardReadMore}>
                            <h3 className={styles.blogCardTitle}>{blogData.title}</h3>
                        </Link>
                        <p className={styles.blogCardDescription}>{blogData.meta_description}</p>
                    </div>
                    {/*<Link to={`/blog/${blogData.url}`} className={styles.blogCardReadMore}>Lire la suite</Link>*/}
                </div>
            </div>
        </div>
    );
}
