import React from 'react'
import AuthUser from './AuthUser'

export default function Dashboard() {
  const {user} = AuthUser();
  return (
    <>
      <h2>Dashboard</h2>
      <h3>Name : {user.name}</h3>
      <h3>Email : {user.email}</h3>
    </>
  )
}
