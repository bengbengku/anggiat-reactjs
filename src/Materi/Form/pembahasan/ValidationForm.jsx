import React from 'react'
import * as Validator from 'validatorjs'
import FormInput from './FormInput'
import ShowAlert from './ShowAlert'
import ShowError from './ShowError'

export default class ValidationForm extends React.Component {
  state = {
    namaDepan: '',
    namaBelakang: '',
    email: '',
    password: '',
    errors: [],
    showAlert: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, namaDepan, namaBelakang } = this.state
    let data = {
      email,
      password,
      namaDepan,
      namaBelakang,
    }

    let rules = {
      namaDepan: 'min:3|required',
      namaBelakang: 'min:3|required',
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
        ...validation.errors.get('namaDepan'),
        ...validation.errors.get('namaBelakang'),
        ...validation.errors.get('email'),
        ...validation.errors.get('password'),
      ],
    })
    if (validation.errorCount === 0) {
      this.setState({
        showAlert: true,
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
        {this.state.showAlert && (
          <ShowAlert
            namaDepan={this.state.namaDepan}
            namaBelakang={this.state.namaBelakang}
            email={this.state.email}
            password={this.state.password}
          />
        )}
        <form
          style={{ padding: '2rem', border: '1px solid #000' }}
          onSubmit={this.handleSubmit}
        >
          <h4>Form Register</h4>
          {this.state.errors && <ShowError errors={this.state.errors} />}
          <FormInput
            label='Nama Depan'
            type='text'
            name='nama_depan'
            onChange={(value) => this.setState({ namaDepan: value })}
            value={this.state.namaDepan}
          />
          <FormInput
            label='Nama Belakang'
            type='text'
            name='nama_belakang'
            onChange={(value) => this.setState({ namaBelakang: value })}
            value={this.state.namaBelakang}
          />
          <FormInput
            label='Email'
            type='email'
            name='email'
            onChange={(value) => this.setState({ email: value })}
            value={this.state.email}
          />
          <FormInput
            label='Password'
            type='password'
            name='password'
            onChange={(value) => this.setState({ password: value })}
            value={this.state.password}
          />
          <br />
          <button type='submit' style={{ width: '100%' }}>
            Register
          </button>
        </form>
      </div>
    )
  }
}
