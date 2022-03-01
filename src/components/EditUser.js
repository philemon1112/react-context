import React from 'react'
import {Form, FormGroup,Label,Input, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

function EditUser() {
  return (
    <Form>
        <FormGroup>
            <Label>Edit Name</Label>
            <Input type='text' placeholder='Enter Name'></Input>
        </FormGroup>
        <Button type='submit'>Edit</Button>
        <Link to={"/"} className="btn btn-danger m-2">Cancel</Link>
    </Form>
  )
}

export default EditUser