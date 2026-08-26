import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import {
  ArrowLeft,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  User,
  Clock,
  Calendar
} from 'lucide-react'

import { API_BASE_URL } from '../../api/config'
import './BlogDetails.css'

function BlogDetails() {
  const { id } = useParams()

  const [blog, setBlog] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const [commentText, setCommentText] = useState('')
  const [commentList, setCommentList] = useState([])

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(
          `${API_BASE_URL}/api/posts/${id}/`
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch blog: ${response.status}`)
        }

        const data = await response.json()

        setBlog(data)
        setLikeCount(data.likes || 0)
        setCommentList(data.comments || [])
      } catch (error) {
        console.error('Error fetching blog:', error)
        setError('Unable to load this blog.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id])

  if (loading) {
    return (
      <main className="blog-details-page">
        <h1>Loading...</h1>
      </main>
    )
  }

  if (error || !blog) {
    return (
      <main className="blog-details-page">
        <h1>Blog Not Found</h1>

        <Link
          to="/blog"
          className="back-blog-btn"
        >
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </main>
    )
  }

  const handleLike = () => {
    setLiked(!liked)

    setLikeCount(
      liked ? likeCount - 1 : likeCount + 1
    )
  }

  const handleComment = () => {
    if (!commentText.trim()) return

    const newComment = {
      id: Date.now(),
      username: 'You',
      text: commentText,
      time: 'Just now'
    }

    setCommentList([
      newComment,
      ...commentList
    ])

    setCommentText('')
  }

  return (
    <main className="blog-details-page">

      <Link
        to="/blog"
        className="back-blog-btn"
      >
        <ArrowLeft size={18} />
        Back to Blogs
      </Link>

      <article className="blog-article">

        <div className="article-category">
          #{blog.category}
        </div>

        <h1 className="article-title">
          {blog.title}
        </h1>

        <div className="article-meta">

          <span>
            <User size={16} />
            {blog.username}
          </span>

          <span>
            <Calendar size={16} />
            {blog.date}
          </span>

          <span>
            <Clock size={16} />
            {blog.readTime} min read
          </span>

        </div>

        <div className="article-stats">

          <span>
            <Eye size={17} />
            {blog.views}
          </span>

          <span>
            <Heart size={17} />
            {likeCount}
          </span>

          <span>
            <MessageCircle size={17} />
            {commentList.length}
          </span>

        </div>

        <div className="article-content">

          {blog.content
            ?.trim()
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index}>
                {paragraph.trim()}
              </p>
            ))}

        </div>

        <div className="article-actions">

          <button
            className={`article-action-btn ${
              liked ? 'liked' : ''
            }`}
            onClick={handleLike}
          >
            <Heart
              size={19}
              fill={liked ? 'currentColor' : 'none'}
            />

            {liked ? 'Liked' : 'Like'} {likeCount}
          </button>

          <button
            className={`article-action-btn ${
              bookmarked ? 'bookmarked' : ''
            }`}
            onClick={() =>
              setBookmarked(!bookmarked)
            }
          >
            <Bookmark
              size={19}
              fill={
                bookmarked
                  ? 'currentColor'
                  : 'none'
              }
            />

            {bookmarked ? 'Saved' : 'Bookmark'}
          </button>

        </div>

        <section className="comments-section">

          <h2>
            <MessageCircle size={22} />
            Comments ({commentList.length})
          </h2>

          <div className="comment-box">

            <textarea
              placeholder="Write a comment..."
              rows="4"
              value={commentText}
              onChange={(e) =>
                setCommentText(e.target.value)
              }
            />

            <button onClick={handleComment}>
              Post Comment
            </button>

          </div>

          <div className="comment-list">

            {commentList.map((comment) => (
              <div
                className="comment"
                key={comment.id}
              >

                <div className="comment-header">

                  <span className="comment-user">
                    <User size={16} />
                    {comment.username}
                  </span>

                  <span className="comment-time">
                    {comment.time}
                  </span>

                </div>

                <p className="comment-text">
                  {comment.text}
                </p>

              </div>
            ))}

          </div>

        </section>

      </article>

    </main>
  )
}

export default BlogDetails