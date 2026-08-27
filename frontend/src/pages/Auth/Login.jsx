import { API_BASE_URL } from '../../api/config'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Lock, LogIn } from 'lucide-react'
import './Auth.css'

function Login() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/login/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.detail || 'Login failed'
        )
      }

      alert('Login successful!')

      console.log('Login response:', data)

    } catch (error) {
      console.error('Login error:', error)
      alert(error.message)
    }
  }

  return (
    <main className="auth-page">

      <div className="auth-card">

        {/* Header */}

        <div className="auth-header">

          <LogIn size={32} />

          <h1>
            Welcome Back
          </h1>

          <p>
            Login to continue to your account.
          </p>

        </div>


        {/* Form */}

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Username */}

          <div className="auth-input-group">

            <label>
              Username
            </label>

            <div className="auth-input-wrapper">

              <User size={18} />

              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Password */}

          <div className="auth-input-group">

            <label>
              Password
            </label>

            <div className="auth-input-wrapper">

              <Lock size={18} />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Login */}

          <button
            type="submit"
            className="auth-submit-btn"
          >
            Login
          </button>

        </form>


        {/* Footer */}

        <div className="auth-footer">

          <span>
            Don't have an account?
          </span>

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </div>

    </main>
  )
}

export default Login