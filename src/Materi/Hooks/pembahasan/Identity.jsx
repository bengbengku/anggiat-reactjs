import React, { useEffect, useState, useCallback } from 'react'

const Identity = () => {
  const [user, setUser] = useState([])
  const fetchUser = useCallback(() => {
    return ['Anggiat', 'Benget', 'Napitupulu']
  }, [])

  useEffect(() => {
    const data = fetchUser()
    setUser(data)
  }, [fetchUser])
  return (
    <div>
      <ul>
        {user.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  )
}

export default Identity
