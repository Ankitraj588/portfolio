import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, LogIn } from 'lucide-react'
import './Auth.css'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Login data:', formData)
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

          {/* Email */}

          <div className="auth-input-group">

            <label>
              Email
            </label>

            <div className="auth-input-wrapper">

              <Mail size={18} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
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