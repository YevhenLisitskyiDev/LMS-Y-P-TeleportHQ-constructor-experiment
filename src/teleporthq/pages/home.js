import React from 'react'
import ToEditorButton from '../../widgets/admin/ToEditorButton'

import { Helmet } from 'react-helmet'

import BlogPostCard from '../components/blog-post-card'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>LMS-V2</title>
        <meta property="og:title" content="LMS-V2" />
      </Helmet>
      <div className={styles['hero']}>
        <h1 className={styles['text']}>Let&apos;s keep things organized</h1>
        <span className={styles['text01']}>
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <br></br>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className={styles['btn-group']}>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Get Started
          </button>
          <button
            className={` ${styles['button1']} ${projectStyles['button']} `}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className={styles['features']}>
        <h1 className={styles['text08']}>
          <span>Discover our unique courses</span>
        </h1>
        <div className={styles['blog']}>
          <div className={styles['container1']}>
            <BlogPostCard
              time=" "
              description="  "
              rootClassName="rootClassName3"
            ></BlogPostCard>
          </div>
          <div className={styles['container2']}>
            <BlogPostCard
              rootClassName="rootClassName2"
              image_url="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
            ></BlogPostCard>
          </div>
          <div className={styles['container3']}>
            <BlogPostCard
              rootClassName="rootClassName1"
              image_url="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            ></BlogPostCard>
          </div>
        </div>
      </div>
      <div className={styles['banner']}>
        <span className={styles['text10']}>
          <span className={styles['text11']}>Lorem ipsum dolor sit amet</span>
        </span>
        <h1 className={styles['text12']}>Learn to keep it simple</h1>
        <span className={styles['text13']}>
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className={styles['container4']}>
          <input
            type="text"
            placeholder="Email here..."
            className={` ${styles['textinput']} ${projectStyles['input']} `}
          />
          <button
            className={` ${styles['button2']} ${projectStyles['button']} `}
          >
            Subscribe
          </button>
        </div>
      </div>
      <ToEditorButton></ToEditorButton>
    </div>
  )
}

export default Home
