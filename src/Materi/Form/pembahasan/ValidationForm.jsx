import React from 'react'
import * as Validator from 'validatorjs'

const Input = ({ label, type, name, onChange, value }) => {
  return (
    <div style={{ margin: '5px 0', width: '100%' }}>
      <label>{label}</label>
      <br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: '100%' }}
      />
      <br />
    </div>
  )
}

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: 'red', listStyleType: 'none' }}>
      {errors.map((err, i) => (
        <li key={i}>{err}</li>
      ))}
    </ul>
  )
}

export default class ValidationForm extends React.Component {
  state = {
    email: '',
    password: '',
    errors: [],
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    let data = {
      email,
      password,
    }

    let rules = {
      email: [
        'required',
        'regex:/^([a-zd.-]+)@([a-zd-]+).([a-z]{2,12})(.[a-z]{2,12})?$/',
      ],
      password: 'min:8|required',
    }

    let validation = new Validator(data, rules)

    validation.passes()
    this.setState({
      errors: [
        ...validation.errors.get('email'),
        ...validation.errors.get('password'),
      ],
    })
    if (validation.errorCount === 0) {
      alert(`Email: ${this.state.email}`)
      this.setState({
        email: '',
        password: '',
        errors: [],
      })
    }
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <form
          style={{ padding: '2rem', border: '1px solid #000' }}
          onSubmit={this.handleSubmit}
        >
          <h4>Login Page</h4>
          {this.state.errors && <ShowErrors errors={this.state.errors} />}
          <Input
            label='Email'
            type='email'
            name='email'
            onChange={(value) => this.setState({ email: value })}
            value={this.state.email}
          />
          <Input
            label='Password'
            type='password'
            name='password'
            onChange={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
          <br />
          <button type='submit' style={{ width: '100%' }}>
            Login
          </button>
        </form>
      </div>
    )
  }
}
