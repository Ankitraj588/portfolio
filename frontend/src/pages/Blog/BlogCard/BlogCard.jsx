import { Link } from 'react-router-dom'
import {
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  User,
  Clock
} from 'lucide-react'

import './BlogCard.css'

function BlogCard({ blog }) {
  return (
    <article className="blog-card">

      <div className="blog-card-content">

        {/* Category */}
        <span className="blog-category">
          {blog.category}
        </span>

        {/* Title */}
        <h3 className="blog-card-title">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="blog-card-description">
          {blog.description}
        </p>

        {/* Author + Reading Time */}
        <div className="blog-card-author">

          <span className="blog-info">
            <User size={15} />
            {blog.username}
          </span>

          <span className="blog-info">
            <Clock size={15} />
            {blog.readTime} min read
          </span>

        </div>

        {/* Bottom */}
        <div className="blog-card-bottom">

          <div className="blog-card-stats">

            <span className="blog-stat">
              <Eye size={16} />
              {blog.views}
            </span>

            <span className="blog-stat">
              <Heart size={16} />
              {blog.likes}
            </span>

            <span className="blog-stat">
              <MessageCircle size={16} />
              {blog.comments}
            </span>

          </div>

          <div className="blog-card-actions">

            <button
              className="bookmark-btn"
              aria-label="Bookmark blog"
            >
              <Bookmark size={18} />
            </button>

            <Link
              to={`/blog/${blog.id}`}
              className="read-more-btn"
            >
              Read More →
            </Link>

          </div>

        </div>

      </div>

    </article>
  )
}

export default BlogCard