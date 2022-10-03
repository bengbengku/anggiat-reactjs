import React from 'react'

export default class FormElement extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES' : 'NO'}
    `)
    this.setState({
      nama: '',
      jurusan: '',
      gender: '',
      alamat: '',
      member: false,
    })
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
          <label>
            Nama:{' '}
            <input
              type='text'
              name='nama'
              value={this.state.nama}
              onChange={(e) => this.setState({ nama: e.target.value })}
            />
          </label>
          <br />
          <label>
            Jurusan:{' '}
            <select
              name='jurusan'
              value={this.state.jurusan}
              onChange={(e) => this.setState({ jurusan: e.target.value })}
            >
              <option value=''>Pilih Jurusan</option>
              <option value='Teknik Informatika'>Teknik Informatika</option>
              <option value='Sistem Informasi'>Sistem Informasi</option>
            </select>
          </label>
          <br />
          <label>
            Jenkel:
            <input
              type='radio'
              value='Pria'
              name='gender'
              onChange={(e) => this.setState({ gender: e.target.value })}
            />{' '}
            Pria
            <input
              type='radio'
              value='Wanita'
              name='gender'
              onChange={(e) => this.setState({ gender: e.target.value })}
            />{' '}
            Wanita
          </label>
          <br />
          <label>
            Alamat:
            <textarea
              cols='30'
              rows='10'
              name='alamat'
              onChange={(e) => this.setState({ alamat: e.target.value })}
              value={this.state.alamat}
            />
          </label>
          <br />
          <label>
            Member:{' '}
            <input
              type='checkbox'
              checked={this.state.member}
              name='member'
              onChange={(e) => this.setState({ member: e.target.checked })}
            />
          </label>
          <br />
          <br />
          <button type='submit'>Kirim</button>
        </form>
      </div>
    )
  }
}
