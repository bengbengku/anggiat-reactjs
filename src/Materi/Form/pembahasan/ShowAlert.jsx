import React from 'react'

const ShowAlert = ({ namaDepan, namaBelakang, email, password }) => {
  return (
    <script>
      function MyFunc()
      {alert(`
            Nama Depan: ${namaDepan}
            Nama Belakang: ${namaBelakang}
            Email: ${email}
            Password: ${password}
        `)}
    </script>
  )
}

export default ShowAlert
