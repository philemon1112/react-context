import React from 'react'
import { Heading } from './Heading'
import UserList from './UserList'

import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <div>
        <Heading />
        <UserList />
    </div>
  )
}

export default Home