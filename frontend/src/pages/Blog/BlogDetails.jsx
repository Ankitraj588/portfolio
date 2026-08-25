import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'

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

import { blogs } from '../../data/blogs'
import './BlogDetails.css'


function BlogDetails() {

  const { id } = useParams()

  const blog = blogs.find(
    (blog) => blog.id === Number(id)
  )


  /* =========================================
     BLOG NOT FOUND
     ========================================= */

  if (!blog) {
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


  /* =========================================
     LIKE
     ========================================= */

  const [liked, setLiked] = useState(false)

  const [likeCount, setLikeCount] = useState(
    blog.likes
  )


  /* =========================================
     BOOKMARK
     ========================================= */

  const [bookmarked, setBookmarked] = useState(false)


  /* =========================================
     COMMENTS
     ========================================= */

  const [commentText, setCommentText] = useState('')

  const [commentList, setCommentList] = useState([
    {
      id: 1,
      username: 'Rahul',
      text: 'Great explanation!',
      time: '2 hours ago',
    },

    {
      id: 2,
      username: 'Priya',
      text: 'This made Dijkstra much easier to understand.',
      time: '5 hours ago',
    },
  ])


  /* =========================================
     POST COMMENT
     ========================================= */

  const handleComment = () => {

    if (!commentText.trim()) {
      return
    }

    const newComment = {
      id: Date.now(),
      username: 'Ankit Raj',
      text: commentText,
      time: 'Just now',
    }

    setCommentList([
      newComment,
      ...commentList
    ])

    setCommentText('')
  }


  /* =========================================
     RENDER
     ========================================= */

  return (

    <main className="blog-details-page">


      {/* Back */}

      <Link
        to="/blog"
        className="back-blog-btn"
      >

        <ArrowLeft size={18} />

        Back to Blogs

      </Link>


      {/* Article */}

      <article className="blog-article">


        {/* Category */}

        <div className="article-category">
          #{blog.category}
        </div>


        {/* Title */}

        <h1 className="article-title">
          {blog.title}
        </h1>


        {/* Meta */}

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


        {/* Stats */}

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


        {/* Content */}

        <div className="article-content">

          {blog.content
            .trim()
            .split('\n\n')
            .map((paragraph, index) => (

              <p key={index}>
                {paragraph.trim()}
              </p>

            ))}

        </div>


        {/* Actions */}

        <div className="article-actions">


          {/* Like */}

          <button
            className={`article-action-btn ${
              liked ? 'liked' : ''
            }`}
            onClick={() => {

              setLiked(!liked)

              setLikeCount(
                liked
                  ? likeCount - 1
                  : likeCount + 1
              )

            }}
          >

            <Heart
              size={19}
              fill={
                liked
                  ? 'currentColor'
                  : 'none'
              }
            />

            {liked ? 'Liked' : 'Like'} {likeCount}

          </button>


          {/* Bookmark */}

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

            {bookmarked
              ? 'Saved'
              : 'Bookmark'}

          </button>


        </div>


        {/* Comments */}

        <section className="comments-section">


          <h2>

            <MessageCircle size={22} />

            Comments ({commentList.length})

          </h2>


          {/* Comment Input */}

          <div className="comment-box">

            <textarea
              placeholder="Write a comment..."
              rows="4"
              value={commentText}
              onChange={(e) =>
                setCommentText(e.target.value)
              }
            />

            <button
              onClick={handleComment}
            >
              Post Comment
            </button>

          </div>


          {/* Comment List */}

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