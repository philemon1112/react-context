import React,{useContext} from 'react'
import {Form, FormGroup,Label,Input, Button} from 'reactstrap'
import { Link , useNavigate} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'


import 'bootstrap/dist/css/bootstrap.min.css'

function AddUser() {
  const {addUser} = useContext(GlobalContext)
  const history = useNavigate()

  const onSubmit = () => {
    const newUser = {
      id: 4,
      name: 'User 4'
    }
    addUser(newUser)
    history("/")
  }
  return (
    <Form>
        <FormGroup onSubmit={onSubmit}>
            <Label>Name</Label>
            <Input type='text' placeholder='Enter Name'></Input>
        </FormGroup>
        <Button type='submit'>Submit</Button>
        <Link to={"/"} className="btn btn-danger m-2">Cancel</Link>
    </Form>
  )
}

export default AddUser