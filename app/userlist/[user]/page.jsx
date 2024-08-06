'use client'
import React from 'react'

const UserProfile = ({params}) => {
    console.log(params) //{user: 'hello122'}
  return (
    <div>UserProfile {params.user}</div>
  )
}

export default UserProfile