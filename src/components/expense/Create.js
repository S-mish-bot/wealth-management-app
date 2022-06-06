import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

	// Making usestate for setting and
	// fetching a value in jsx
	const [date, setdate] = useState('');
	const [description, setdescription] = useState('');
    const [location, setlocation] = useState('');
	const [category, setcategory] = useState('');


	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) =>{
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0,8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = date, b=description, c= location, d= category 
		array.push({id:uni,date:a,description:b,location:c,category:d})


	// Redirecting to home page after creation done
	history('/')
		
	}

return (
	<div >
		<Form className="d-grid gap-2" style={{margin:'15rem'}}>

{/* Fetching a value from input textfirld
in a setname using usestate*/}
<Form.Group className="mb-3" controlId="formBasicDate">
	<Form.Control onChange={e => setdate(e.target.value)}
				type="text"
				placeholder="Enter Date" required/>
</Form.Group>


	{/* Fetching a value from input textfirld in
	a setage using usestate*/}
<Form.Group className="mb-3" controlId="formBasicDescription">
	<Form.Control onChange={e => setdescription(e.target.value)}
				type="text"
				placeholder="Description" required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicLocation">
	<Form.Control onChange={e => setlocation(e.target.value)}
				type="text"
				placeholder="Location" required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicCategory">
	<Form.Control onChange={e => setcategory(e.target.value)}
				type="text"
				placeholder="Category" required/>
</Form.Group>

	{/* handing a onclick event in button for
	firing a function */}

<Link to={`/expense`}><Button
onClick={e => handelSubmit(e)}
	variant="primary" type="submit">
	Submit
</Button></Link>


<Link className="d-grid gap-2" to='/expense'>
	<Button variant="info" size="lg">
	Expense
	</Button>
</Link>

</Form>
	</div>
)
}

export default Create
