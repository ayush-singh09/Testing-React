import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
  const {id} = useParams();

  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default UserDetails;