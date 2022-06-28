import React from 'react'
import CoursesList from '../../widgets/courses/CoursesList'
import ToEditorButton from '../../widgets/admin/ToEditorButton'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>LMS-V2</title>
        <meta property="og:title" content="LMS-V2" />
      </Helmet>
      <div className="home-hero">
        <h1 className="home-text">Let&apos;s keep things organized</h1>
        <span className="home-text01">
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
        <div className="home-btn-group">
          <button className="home-button button">Get Started</button>
          <button className="home-button1 button">Learn More</button>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text08">
          <span>Discover our unique courses</span>
        </h1>
        <CoursesList></CoursesList>
      </div>
      <div className="home-banner">
        <span className="home-text10">
          <span className="home-text11">Lorem ipsum dolor sit amet</span>
        </span>
        <h1 className="home-text12">Learn to keep it simple</h1>
        <span className="home-text13">
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
        <div className="home-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="home-textinput input"
          />
          <button className="home-button2 button">Subscribe</button>
        </div>
      </div>
      <ToEditorButton></ToEditorButton>
      <div className="home-blog">
        <div className="home-container2"></div>
        <div className="home-container3"></div>
        <div className="home-container4"></div>
      </div>
    </div>
  )
}

export default Home
