import { useState } from 'react'
import BlogCard from './BlogCard/BlogCard'
import { blogs } from '../../data/blogs'
import './Blog.css'

// const blogs = [
//   {
//     id: 1,
//     username: 'Ankit Raj',
//     title: "Understanding Dijkstra's Algorithm",
//     description:
//       'A practical guide to understanding Dijkstra’s algorithm, its working, and implementation.',
//     category: 'DSA',
//     readTime: 5,
//     views: '1.2K',
//     likes: 128,
//     comments: 24,
//   },
//   {
//     id: 2,
//     username: 'Ankit Raj',
//     title: 'Understanding React Hooks',
//     description:
//       'A beginner-friendly explanation of useState, useEffect, and other important React hooks.',
//     category: 'React',
//     readTime: 4,
//     views: '850',
//     likes: 92,
//     comments: 15,
//   },
//   {
//     id: 3,
//     username: 'Ankit Raj',
//     title: 'Getting Started with Django',
//     description:
//       'Understanding Django architecture and how it can be used to build powerful backend applications.',
//     category: 'Django',
//     readTime: 6,
//     views: '720',
//     likes: 76,
//     comments: 12,
//   },
//   {
//     id: 4,
//     username: 'Ankit Raj',
//     title: 'My Journey into Competitive Programming',
//     description:
//       'Lessons learned while solving DSA problems and preparing for coding interviews.',
//     category: 'Career',
//     readTime: 7,
//     views: '1.5K',
//     likes: 145,
//     comments: 31,
//   },
//   {
//     id: 5,
//     username: 'Ankit Raj',
//     title: 'BFS vs DFS',
//     description:
//       'A simple comparison between Breadth First Search and Depth First Search with practical examples.',
//     category: 'DSA',
//     readTime: 5,
//     views: '630',
//     likes: 61,
//     comments: 9,
//   },
// ]

function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'DSA', 'React', 'Django', 'Career']

  // Filter blogs by search and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase()) ||
      blog.username.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      activeCategory === 'All' ||
      blog.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Trending blogs
  const trendingBlogs = [...blogs]
    .sort((a, b) => b.likes - a.likes)
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
            <p>
              No blogs found.
            </p>
          </div>
        )}

      </section>

    </main>
  )
}

export default Blog