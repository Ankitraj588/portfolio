import { useEffect, useState } from 'react'
import BlogCard from './BlogCard/BlogCard'
import { API_BASE_URL } from '../../api/config'
import './Blog.css'

function Blog() {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const categories = ['All', 'DSA', 'React', 'Django', 'Career']

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true)
        setError('')

        const response = await fetch(`${API_BASE_URL}/api/posts/`)

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`)
        }

        const data = await response.json()

        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
        setError('Unable to load blogs.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title?.toLowerCase().includes(search.toLowerCase()) ||
      blog.description?.toLowerCase().includes(search.toLowerCase()) ||
      blog.username?.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' ||
      blog.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const trendingBlogs = [...blogs]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 3)

  return (
    <main className="blog-section">

      {/* Blog Header */}
      <section className="blog-top">

        <div className="blog-heading">
          <h1 className="blog-main-title">Blog</h1>

          <span className="blog-subtitle">
            Share. Learn. Build.
          </span>
        </div>

        <div className="blog-controls">

          {/* Search */}
          <div className="blog-search">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                #{category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Loading */}
      {loading && (
        <div className="no-blogs">
          <p>Loading blogs...</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="no-blogs">
          <p>{error}</p>
        </div>
      )}

      {/* Content */}
      {!loading && !error && (
        <>
          {/* Trending */}
          <section className="trending-section">

            <h2>
              🔥 Trending Blogs
            </h2>

            <div className="blog-grid">
              {trendingBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </div>

          </section>

          {/* Latest */}
          <section className="latest-section">

            <h2>
              Latest Blogs
            </h2>

            {filteredBlogs.length > 0 ? (
              <div className="blog-grid">
                {filteredBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                  />
                ))}
              </div>
            ) : (
              <div className="no-blogs">
                <p>No blogs found.</p>
              </div>
            )}

          </section>
        </>
      )}

    </main>
  )
}

export default Blog