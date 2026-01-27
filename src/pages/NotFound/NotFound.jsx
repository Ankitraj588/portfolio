import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="notfound">
      {/* Background decorative elements */}
      <div className="notfound-background" />
      <div className="notfound-shape shape-1" />
      <div className="notfound-shape shape-2" />
      <div className="notfound-shape shape-3" />

      {/* Main content */}
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        
        <h2 className="notfound-title">Page Not Found</h2>
        
        <div className="notfound-line" />
        
        <p className="notfound-message">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="notfound-actions">
          <Link 
            to="/" 
            className="notfound-btn"
            aria-label="Go to homepage"
          >
            Take Me Home
          </Link>
          <Link 
            to="/contact" 
            className="notfound-btn secondary"
            aria-label="Go to contact page"
          >
            Contact Me
          </Link>
        </div>

        {/* Optional: Debug information */}
        {process.env.NODE_ENV === 'development' && (
          <div className="notfound-details">
            <div>Current URL: {window.location.pathname}</div>
            <div>Error Code: 404 - Resource Not Found</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NotFound