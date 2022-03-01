import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
import { GlobalContext } from '../context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css'

function UserList() {
    const {users, removeUser} = useContext(GlobalContext)
    console.log(users)
  return (
    <ListGroup  style={{marginTop:'1.5rem'}}>
        {users.map(user =>(
            <ListGroupItem key={user.id} style={{display:'flex', justifyContent:'space-between'}}>
            <strong>{user.name}</strong>
            <div style={{marginLeft:'auto'}}>
                <Link to={`/edit/${user.id}`} className='btn btn-warning' style={{marginRight:'5px'}}>Edit</Link>
                <Button onClick={() => removeUser(user.id)} color='danger'>Delete</Button>
            </div>
        </ListGroupItem>
        ))}
    </ListGroup>
  )
}

export default UserList