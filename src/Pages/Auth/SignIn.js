import { useState } from 'react'
import { SignInUser } from '../../Services/Auth'
import { useNavigate, Link } from 'react-router-dom'

const SignIn = ({ setUser, toggleAuthenticated }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <h2>Sign In</h2>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
          <br />
          <Link to="/register">Need to register?</Link>
        </form>
      </div>
    </div>
  )
}

export default SignIn
