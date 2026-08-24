import { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Mail, Lock, UserPlus } from 'lucide-react'
import './Auth.css'

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    console.log('Registration data:', formData)
  }

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <UserPlus size={32} />

          <h1>Create Account</h1>

          <p>
            Join the blogging community.
          </p>
        </div>


        <form
          className="auth-form register-form"
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
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />

            </div>

          </div>


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
                placeholder="Enter email"
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
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          {/* Confirm Password */}
          <div className="auth-input-group">

            <label>
              Confirm Password
            </label>

            <div className="auth-input-wrapper">

              <Lock size={18} />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />

            </div>

          </div>


          <button
            type="submit"
            className="auth-submit-btn"
          >
            Create Account
          </button>

        </form>


        <div className="auth-footer">

          <span>
            Already have an account?
          </span>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </main>
  )
}

export default Register