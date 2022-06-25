import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card.module.css'

const BlogPostCard = (props) => {
  return (
    <div
      className={` ${styles['blog-post-card']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_url}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span className={styles['text']}>{props.label}</span>
        <span className={styles['text1']}>{props.name}</span>
        <span className={styles['text2']}>{props.description}</span>
        <div className={styles['container1']}>
          <div className={styles['profile']}>
            <img
              alt={props.profile_alt}
              src={props.author_photo_url}
              image_src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className={styles['image1']}
            />
            <span className={styles['text3']}>{props.author_name}</span>
          </div>
          <span className={styles['text4']}>5 min read</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard.defaultProps = {
  image_alt: 'image',
  image_url:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  name: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  label: 'ENTERPRISE',
  profile_alt: 'profile',
  author_photo_url:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTYyNjQzMTMwMw&ixlib=rb-1.2.1&h=1200',
  author_name: 'Jon Doe',
  rootClassName: '',
}

BlogPostCard.propTypes = {
  image_alt: PropTypes.string,
  image_url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  profile_alt: PropTypes.string,
  author_photo_url: PropTypes.string,
  author_name: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard
